#!/usr/bin/env node
/*
Fetch chains from https://backend.gas.zip/v2/chains and output
ready-to-paste entries for chainconfig/chains.mjs `chainConfig`.

Usage:
  node scripts/fetch_gaszip_chains.mjs --help
  node scripts/fetch_gaszip_chains.mjs --include-testnets
  node scripts/fetch_gaszip_chains.mjs --output chains-gaszip.mjs
*/

import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import fs from 'node:fs/promises';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHAINS_FILE = path.resolve(__dirname, '../chainconfig/chains.mjs');
const GASZIP_URL = 'https://backend.gas.zip/v2/chains';

/**
 * Validates and completes a chain object with all required schema fields
 */
function validateAndCompleteChain(chain) {
    const zeroAddr = '0x0000000000000000000000000000000000000000';
    
    return {
        key: chain.key || 'unknown',
        display: chain.display || chain.name || 'Unknown',
        currency: chain.currency || chain.symbol || 'ETH',
        vmType: chain.vmType || 'EVM',
        chainId: chain.chainId,
        lzSrcId: chain.lzSrcId || 0,
        cgPlatformId: chain.cgPlatformId || null,
        cgGasAssetId: chain.cgGasAssetId || null,
        openOceanSupported: chain.openOceanSupported || false,
        openOceanChainCode: chain.openOceanChainCode || '',
        openOceanNativeAddress: chain.openOceanNativeAddress || zeroAddr,
        explorerUrls: Array.isArray(chain.explorerUrls) && chain.explorerUrls.length > 0
            ? chain.explorerUrls
            : (chain.explorerUrl ? [chain.explorerUrl] : ['']),
        defaultExplorerUrlIndex: chain.defaultExplorerUrlIndex || 0,
        rpcUrls: Array.isArray(chain.rpcUrls) && chain.rpcUrls.length > 0
            ? chain.rpcUrls
            : [],
        defaultRpcUrlIndex: chain.defaultRpcUrlIndex || 0,
        addresses: {
            gasToken: chain.addresses?.gasToken || zeroAddr,
            wrappedGasToken: chain.addresses?.wrappedGasToken || zeroAddr,
            usdc: chain.addresses?.usdc || zeroAddr,
            usdt: chain.addresses?.usdt || zeroAddr,
            permit2: chain.addresses?.permit2 || zeroAddr,
            entryPoint: chain.addresses?.entryPoint || zeroAddr,
            trustedForwarder: chain.addresses?.trustedForwarder || zeroAddr,
            relayRouter: chain.addresses?.relayRouter || zeroAddr,
            messageTransmitter: chain.addresses?.messageTransmitter || zeroAddr,
            tokenMessenger: chain.addresses?.tokenMessenger || zeroAddr,
            create5: chain.addresses?.create5 || zeroAddr,
            multicall3: chain.addresses?.multicall3 || zeroAddr,
            ...(chain.addresses || {}),
        },
    };
}

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

function formatChainEntry(chain) {
    const indent = '    ';
    const lines = [
        `${indent}${chain.key}: {`,
        `${indent}    key: "${chain.key}",`,
        `${indent}    display: "${chain.display}",`,
        `${indent}    currency: "${chain.currency}",`,
        `${indent}    vmType: "${chain.vmType}",`,
        `${indent}    chainId: ${chain.chainId},`,
        `${indent}    lzSrcId: ${chain.lzSrcId},`,
        `${indent}    cgPlatformId: ${chain.cgPlatformId === null ? 'null' : `"${chain.cgPlatformId}"`},`,
        `${indent}    cgGasAssetId: ${chain.cgGasAssetId === null ? 'null' : `"${chain.cgGasAssetId}"`},`,
        `${indent}    openOceanSupported: ${chain.openOceanSupported},`,
        `${indent}    openOceanChainCode: "${chain.openOceanChainCode}",`,
        `${indent}    openOceanNativeAddress: "${chain.openOceanNativeAddress}",`,
        `${indent}    explorerUrls: [`,
    ];
    
    for (const url of chain.explorerUrls) {
        lines.push(`${indent}        "${url}",`);
    }
    
    lines.push(`${indent}    ],`);
    lines.push(`${indent}    defaultExplorerUrlIndex: ${chain.defaultExplorerUrlIndex},`);
    lines.push(`${indent}    rpcUrls: [`);
    
    for (const url of chain.rpcUrls) {
        lines.push(`${indent}        "${url}",`);
    }
    
    lines.push(`${indent}    ],`);
    lines.push(`${indent}    defaultRpcUrlIndex: ${chain.defaultRpcUrlIndex},`);
    lines.push(`${indent}    addresses: {`);
    
    // Standard address fields in order
    const standardFields = [
        'gasToken', 'wrappedGasToken', 'usdc', 'usdt',
        'permit2', 'entryPoint', 'trustedForwarder', 'relayRouter',
        'messageTransmitter', 'tokenMessenger', 'create5', 'multicall3'
    ];
    
    for (const field of standardFields) {
        if (chain.addresses[field]) {
            lines.push(`${indent}        ${field}: "${chain.addresses[field]}",`);
        }
    }
    
    // Add any custom address fields
    for (const [key, value] of Object.entries(chain.addresses)) {
        if (!standardFields.includes(key)) {
            lines.push(`${indent}        ${key}: "${value}",`);
        }
    }
    
    lines.push(`${indent}    },`);
    lines.push(`${indent}},`);
    
    return lines.join('\n');
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
    const argv = yargs(hideBin(process.argv))
        .option('include-testnets', {
            alias: 't',
            type: 'boolean',
            description: 'Include testnet chains',
            default: false,
        })
        .option('output', {
            alias: 'o',
            type: 'string',
            description: 'Output filename (default: print to console)',
        })
        .option('merge', {
            alias: 'm',
            type: 'boolean',
            description: 'Merge with existing chains and save to output file',
            default: false,
        })
        .help()
        .alias('help', 'h')
        .argv;

    try {
        console.log('='.repeat(80));
        console.log('GAS.ZIP CHAIN FETCHER');
        console.log('='.repeat(80));
        console.log('');

        const [{ keys: existingKeys, chainIds: existingChainIds }, apiChains] = await Promise.all([
            loadExistingChains(),
            fetchGasZipChains(),
        ]);

        console.log(`Loaded ${existingKeys.size} existing chains`);
        console.log(`Fetched ${apiChains.length} chains from gas.zip\n`);

        const filtered = apiChains
            .filter(c => argv.includeTestnets ? true : !!c.mainnet)
            .map(c => {
                const key0 = slugifyNameToKey(c.name);
                const key = ensureUniqueKey(key0, existingKeys);
                
                // Build chain object from gas.zip data
                const chainData = {
                    key,
                    display: c.name,
                    name: c.name,
                    currency: c.symbol,
                    symbol: c.symbol,
                    chainId: c.chain,
                    explorerUrl: normalizeExplorer(c.explorer),
                    explorerUrls: c.explorer ? [normalizeExplorer(c.explorer)] : [],
                    rpcUrls: Array.isArray(c.rpcs) ? c.rpcs : [],
                    mainnet: !!c.mainnet,
                };
                
                // Validate and complete with full schema
                return validateAndCompleteChain(chainData);
            })
            // skip obviously incomplete records
            .filter(c => c.display && c.chainId && c.rpcUrls.length > 0)
            // skip ones already present by key or chainId
            .filter(c => !(existingKeys.has(c.key) || existingChainIds.has(c.chainId)));

        if (filtered.length === 0) {
            console.log('✓ No new chains to add.\n');
            return;
        }

        // Sort by name for stable output
        filtered.sort((a, b) => a.display.localeCompare(b.display));

        console.log(`Found ${filtered.length} new chains:\n`);
        filtered.forEach(c => console.log(`  - ${c.display} (chainId: ${c.chainId})`));
        console.log('');

        const outputLines = [
            '// Auto-generated chain entries from gas.zip',
            `// Generated on ${new Date().toISOString()}`,
            '// Paste the following entries inside export const chainConfig = { ... }',
            '',
            '// --- BEGIN GENERATED ENTRIES FROM gas.zip ---',
            '',
            ...filtered.map(formatChainEntry),
            '',
            '// --- END GENERATED ENTRIES FROM gas.zip ---',
        ];

        if (argv.output) {
            const outputPath = path.resolve(process.cwd(), argv.output);
            await fs.writeFile(outputPath, outputLines.join('\n'), 'utf-8');
            console.log(`✓ Output saved to: ${outputPath}\n`);
        } else {
            console.log(outputLines.join('\n'));
        }

        console.log('='.repeat(80));
        console.log('✓ Complete!');
        console.log('='.repeat(80));

    } catch (err) {
        console.error('\n✗ Error:', err.message || err);
        console.error(err.stack);
        process.exitCode = 1;
    }
})();
