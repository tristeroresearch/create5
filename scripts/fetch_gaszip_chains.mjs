#!/usr/bin/env node
/*
Fetch chains from https://backend.gas.zip/v2/chains and output
ready-to-paste entries for scripts/chains.mjs `chainConfig`.

Usage:
  node scripts/fetch_gaszip_chains.mjs            # prints new entries
  CHAINS_INCLUDE_TESTNETS=1 node scripts/fetch_gaszip_chains.mjs # include testnets

Notes:
- By default only mainnet chains are included (mainnet === true)
- Existing chains in scripts/chains.mjs are skipped (matching by key or chainId)
*/

import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import fs from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHAINS_FILE = path.resolve(__dirname, './chains.mjs');
const GASZIP_URL = 'https://backend.gas.zip/v2/chains';

function slugifyNameToKey(name) {
    if (!name) return null;
    // convert to lower_snake_case: keep letters, numbers, replace spaces and hyphens with underscore, collapse repeats
    return String(name)
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '')
        .replace(/_{2,}/g, '_');
}

function zeroAddr() {
    return '0x0000000000000000000000000000000000000000';
}

function formatChainEntry({ key, name, symbol, chainId, explorerUrl, rpcUrls }) {
    const entry = `    ${key}: {
        key: '${key}',
        display: '${name}',
        currency: '${symbol || 'ETH'}',
        chainId: ${chainId},
        lzSrcId: undefined,
        explorerUrl: '${explorerUrl || ''}',
        rpcUrls: [
${(rpcUrls || []).map(u => `            '${u}'`).join(',\n')}
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '${zeroAddr()}',
            messageTransmitter: '${zeroAddr()}',
            usdc: '${zeroAddr()}',
            permit2: '${zeroAddr()}',
            entryPoint: '${zeroAddr()}', // 0x4337 not deployed (verify before using)
            trustedForwarder: '${zeroAddr()}',
            multicall: '${zeroAddr()}',
        },
    },`;
    return entry;
}

async function loadExistingChains() {
    try {
        // Attempt to import the chains file to read current config
        const mod = await import(pathToFileURL(CHAINS_FILE).href);
        const chainConfig = mod.chainConfig || {};
        const keys = new Set(Object.keys(chainConfig));
        const chainIds = new Set(Object.values(chainConfig).map(c => c?.chainId).filter(Boolean));
        return { keys, chainIds };
    } catch (e) {
        // Fall back to parsing file text if import fails
        try {
            const raw = await fs.readFile(CHAINS_FILE, 'utf8');
            const keyMatches = [...raw.matchAll(/\n\s{4}([a-z0-9_]+):\s*\{/gi)].map(m => m[1]);
            const idMatches = [...raw.matchAll(/\n\s*chainId:\s*(\d+)/g)].map(m => Number(m[1]));
            return { keys: new Set(keyMatches), chainIds: new Set(idMatches) };
        } catch (e2) {
            return { keys: new Set(), chainIds: new Set() };
        }
    }
}

async function fetchGasZipChains() {
    const res = await fetch(GASZIP_URL);
    if (!res.ok) throw new Error(`Failed to fetch ${GASZIP_URL}: ${res.status} ${res.statusText}`);
    const json = await res.json();
    if (!json || !Array.isArray(json.chains)) throw new Error('Unexpected response format from gas.zip');
    return json.chains;
}

function normalizeExplorer(url) {
    if (!url) return '';
    return String(url).replace(/\/$/, ''); // remove trailing slash for consistency
}

function ensureUniqueKey(desiredKey, existingKeys) {
    if (!desiredKey) desiredKey = 'chain';
    let k = desiredKey;
    let i = 2;
    while (existingKeys.has(k)) {
        k = `${desiredKey}_${i++}`;
    }
    return k;
}

(async function main() {
    try {
        const includeTestnets = !!process.env.CHAINS_INCLUDE_TESTNETS;
        const [{ keys: existingKeys, chainIds: existingChainIds }, apiChains] = await Promise.all([
            loadExistingChains(),
            fetchGasZipChains(),
        ]);

        const filtered = apiChains
            .filter(c => includeTestnets ? true : !!c.mainnet)
            .map(c => {
                const key0 = slugifyNameToKey(c.name);
                const key = ensureUniqueKey(key0, existingKeys);
                return {
                    key,
                    name: c.name,
                    symbol: c.symbol,
                    chainId: c.chain,
                    explorerUrl: normalizeExplorer(c.explorer),
                    rpcUrls: Array.isArray(c.rpcs) ? c.rpcs : [],
                    mainnet: !!c.mainnet,
                };
            })
            // skip obviously incomplete records
            .filter(c => c.name && c.chainId && c.rpcUrls.length > 0)
            // skip ones already present by key or chainId
            .filter(c => !(existingKeys.has(c.key) || existingChainIds.has(c.chainId)));

        if (filtered.length === 0) {
            console.log('No new chains to add.');
            return;
        }

        // Sort by name for stable output
        filtered.sort((a, b) => a.name.localeCompare(b.name));

        console.log('// Paste the following entries inside export const chainConfig = { ... }');
        console.log('// --- BEGIN GENERATED ENTRIES FROM gas.zip ---');
        console.log(filtered.map(formatChainEntry).join('\n\n'));
        console.log('// --- END GENERATED ENTRIES FROM gas.zip ---');

    } catch (err) {
        console.error('Error:', err.message || err);
        process.exitCode = 1;
    }
})();
