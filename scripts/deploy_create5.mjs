#!/usr/bin/env node
import 'dotenv/config';
import fs from 'fs';
import https from 'https';
import hardhat from 'hardhat';
import { Wallet, ethers, utils } from 'ethers';
import { decrypt_mnemonic } from './wallet_manager.mjs';
import { configuredChains, getRpcUrl, getExplorerUrl, getChainsByKeys, chainConfig } from '../chainconfig/chains.mjs';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
// HyperEVM L1 action signing deps
import { signL1Action } from '@nktkas/hyperliquid/signing';
import { privateKeyToAccount } from 'viem/accounts';

// ---------- Constants ----------
const CONTRACT_NAME = 'Create5';
const TEST_BYTECODE = '0x600080f3'; // minimal runtime: return 0 bytes from mem[0]
const DIRECT_FORWARDER = '0x391E7C679d29bD940d63be94AD22A25d25b5A604'; // gas.zip forwarder
const GASZIP_CHAINS_URL = 'https://backend.gas.zip/v2/chains';

const DEPLOYMENTS_MD = 'deployments.md';
const DEPLOYMENTS_LOG = 'deployments.log';
const CACHE_JSON = 'deployments.cache.json';

// Dynamic gas price estimation cache to avoid re-fetching for each deployment
const DYNAMIC_GAS_CACHE = new Map();

// Chain-specific gas overrides (initialized after argv is parsed)
let CHAIN_GAS_OVERRIDES = new Map();

// Parse chain-specific gas overrides from CLI (called after argv is available)
function parseGasOverrides(argv) {
    const overrides = new Map();
    const args = argv['gas-override'];
    
    if (!args) return overrides;
    
    const argArray = Array.isArray(args) ? args : [args];
    
    for (const arg of argArray) {
        // Format: chain:param:value
        // Examples: core:priority-fee:60, gravity:max-fee:2000, avalanche:gas-price:100
        const parts = arg.split(':');
        if (parts.length !== 3) {
            console.warn(`Invalid gas override format: ${arg}. Expected format: chain:param:value`);
            continue;
        }
        
        const [chain, param, value] = parts;
        
        if (!overrides.has(chain)) {
            overrides.set(chain, {});
        }
        
        const chainOverride = overrides.get(chain);
        
        switch (param) {
            case 'gas-price':
                chainOverride.gasPrice = ethers.utils.parseUnits(value, 'gwei');
                break;
            case 'max-fee':
                chainOverride.maxFeePerGas = ethers.utils.parseUnits(value, 'gwei');
                break;
            case 'priority-fee':
                chainOverride.maxPriorityFeePerGas = ethers.utils.parseUnits(value, 'gwei');
                break;
            default:
                console.warn(`Unknown gas parameter: ${param}. Use: gas-price, max-fee, or priority-fee`);
        }
    }
    
    return overrides;
}

/**
 * Estimate gas prices dynamically from recent transactions
 * @param {ethers.providers.Provider} provider - The RPC provider
 * @param {string} chainKey - The chain key for logging
 * @returns {Promise<Object|null>} Gas price overrides or null if estimation fails
 */
async function estimateDynamicGasPrice(provider, chainKey) {
    // Check for chain-specific CLI overrides first
    if (CHAIN_GAS_OVERRIDES.has(chainKey)) {
        const override = CHAIN_GAS_OVERRIDES.get(chainKey);
        
        // If only partial EIP-1559 params provided, fetch the missing ones
        if ((override.maxFeePerGas || override.maxPriorityFeePerGas) && 
            (!override.maxFeePerGas || !override.maxPriorityFeePerGas)) {
            try {
                const feeData = await provider.getFeeData();
                if (!override.maxFeePerGas && feeData.maxFeePerGas) {
                    override.maxFeePerGas = feeData.maxFeePerGas;
                }
                if (!override.maxPriorityFeePerGas && feeData.maxPriorityFeePerGas) {
                    override.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
                }
            } catch (e) {
                // Ignore - use what we have
            }
        }
        
        const logData = {
            level: 'info',
            chain: chainKey,
            msg: 'Using chain-specific CLI gas override',
        };
        
        if (override.gasPrice) {
            logData.gasPriceGwei = ethers.utils.formatUnits(override.gasPrice, 'gwei');
        }
        if (override.maxFeePerGas) {
            logData.maxFeeGwei = ethers.utils.formatUnits(override.maxFeePerGas, 'gwei');
        }
        if (override.maxPriorityFeePerGas) {
            logData.priorityFeeGwei = ethers.utils.formatUnits(override.maxPriorityFeePerGas, 'gwei');
        }
        
        logLine(logData);
        
        DYNAMIC_GAS_CACHE.set(chainKey, override);
        return override;
    }
    
    // Check for global CLI overrides
    const overrideForSet = parseListToSet(argv['override-gas-for']);
    const shouldOverride = !overrideForSet || overrideForSet.size === 0 || overrideForSet.has(chainKey);
    
    if (shouldOverride && (argv['gas-price'] || argv['max-fee'] || argv['priority-fee'])) {
        const override = {};
        
        if (argv['gas-price']) {
            // Legacy transaction override
            override.gasPrice = ethers.utils.parseUnits(argv['gas-price'], 'gwei');
            
            // Get current gas price for comparison
            let currentGasPriceGwei = 'N/A';
            try {
                const currentGasPrice = await provider.getGasPrice();
                if (currentGasPrice) {
                    currentGasPriceGwei = ethers.utils.formatUnits(currentGasPrice, 'gwei');
                }
            } catch (e) {
                // Current gas price not available
            }
            
            logLine({
                level: 'info',
                chain: chainKey,
                msg: 'Using global CLI gas price override (Legacy)',
                currentGasPriceGwei,
                overrideGasPriceGwei: argv['gas-price'],
            });
        } else if (argv['max-fee'] || argv['priority-fee']) {
            // EIP-1559 transaction override
            if (argv['max-fee']) {
                override.maxFeePerGas = ethers.utils.parseUnits(argv['max-fee'], 'gwei');
            }
            if (argv['priority-fee']) {
                override.maxPriorityFeePerGas = ethers.utils.parseUnits(argv['priority-fee'], 'gwei');
            }
            
            // If only one value is provided, fetch the other from the provider
            if (!argv['max-fee'] || !argv['priority-fee']) {
                try {
                    const feeData = await provider.getFeeData();
                    if (!override.maxFeePerGas && feeData.maxFeePerGas) {
                        override.maxFeePerGas = feeData.maxFeePerGas;
                    }
                    if (!override.maxPriorityFeePerGas && feeData.maxPriorityFeePerGas) {
                        override.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
                    }
                } catch (e) {
                    logLine({
                        level: 'warn',
                        chain: chainKey,
                        msg: 'Could not fetch missing EIP-1559 parameter from provider',
                        error: e?.message || String(e),
                    });
                }
            }
            
            // Get base fee for comparison
            let baseFeeGwei = 'N/A';
            try {
                const latestBlock = await provider.getBlock('latest');
                if (latestBlock && latestBlock.baseFeePerGas) {
                    baseFeeGwei = ethers.utils.formatUnits(latestBlock.baseFeePerGas, 'gwei');
                }
            } catch (e) {
                // Base fee not available
            }
            
            logLine({
                level: 'info',
                chain: chainKey,
                msg: 'Using global CLI gas price override (EIP-1559)',
                baseFeeGwei,
                overrideMaxFeeGwei: override.maxFeePerGas ? ethers.utils.formatUnits(override.maxFeePerGas, 'gwei') : 'auto',
                overridePriorityFeeGwei: override.maxPriorityFeePerGas ? ethers.utils.formatUnits(override.maxPriorityFeePerGas, 'gwei') : 'auto',
            });
        }
        
        DYNAMIC_GAS_CACHE.set(chainKey, override);
        return override;
    }
    
    // Check cache first
    if (DYNAMIC_GAS_CACHE.has(chainKey)) {
        return DYNAMIC_GAS_CACHE.get(chainKey);
    }

    try {
        // Get the latest block
        const latestBlock = await provider.getBlock('latest');
        if (!latestBlock) {
            logLine({ level: 'warn', chain: chainKey, msg: 'Could not fetch latest block for gas estimation' });
            return null;
        }

        // Fetch last 10 blocks to get transactions
        const blockNumber = latestBlock.number;
        const transactions = [];
        
        for (let i = 0; i < 10 && i < blockNumber; i++) {
            try {
                const block = await provider.getBlockWithTransactions(blockNumber - i);
                if (block && block.transactions && block.transactions.length > 0) {
                    // Take first transaction from each block to get a sample
                    transactions.push(block.transactions[0]);
                    if (transactions.length >= 10) break;
                }
            } catch (e) {
                // Skip block if we can't fetch it
                continue;
            }
        }

        if (transactions.length === 0) {
            logLine({ level: 'warn', chain: chainKey, msg: 'No transactions found in recent blocks for gas estimation' });
            return null;
        }

        // Detect if chain supports EIP-1559 (maxFeePerGas and maxPriorityFeePerGas)
        const supportsEip1559 = transactions.some(tx => 
            tx.maxFeePerGas !== undefined && tx.maxFeePerGas !== null
        );

        if (supportsEip1559) {
            // Extract EIP-1559 gas prices
            const maxFees = [];
            const priorityFees = [];
            
            for (const tx of transactions) {
                if (tx.maxFeePerGas && tx.maxPriorityFeePerGas) {
                    maxFees.push(ethers.BigNumber.from(tx.maxFeePerGas));
                    priorityFees.push(ethers.BigNumber.from(tx.maxPriorityFeePerGas));
                }
            }

            if (maxFees.length === 0) {
                logLine({ level: 'warn', chain: chainKey, msg: 'No EIP-1559 transactions found despite support' });
                return null;
            }

            // Calculate median
            const sortedMaxFees = maxFees.sort((a, b) => a.gt(b) ? 1 : -1);
            const sortedPriorityFees = priorityFees.sort((a, b) => a.gt(b) ? 1 : -1);
            
            const medianMaxFee = sortedMaxFees[Math.floor(sortedMaxFees.length / 2)];
            const medianPriorityFee = sortedPriorityFees[Math.floor(sortedPriorityFees.length / 2)];

            // Add 50% buffer to median
            const bufferedMaxFee = medianMaxFee.mul(150).div(100);
            const bufferedPriorityFee = medianPriorityFee.mul(150).div(100);

            const result = {
                maxFeePerGas: bufferedMaxFee,
                maxPriorityFeePerGas: bufferedPriorityFee,
            };

            // Get base fee from latest block
            let baseFeeGwei = 'N/A';
            try {
                const latestBlock = await provider.getBlock('latest');
                if (latestBlock && latestBlock.baseFeePerGas) {
                    baseFeeGwei = ethers.utils.formatUnits(latestBlock.baseFeePerGas, 'gwei');
                }
            } catch (e) {
                // Base fee not available
            }

            logLine({ 
                level: 'info', 
                chain: chainKey, 
                msg: 'Dynamic gas estimation (EIP-1559)',
                baseFeeGwei,
                medianMaxFeeGwei: ethers.utils.formatUnits(medianMaxFee, 'gwei'),
                bufferedMaxFeeGwei: ethers.utils.formatUnits(bufferedMaxFee, 'gwei'),
                medianPriorityFeeGwei: ethers.utils.formatUnits(medianPriorityFee, 'gwei'),
                bufferedPriorityFeeGwei: ethers.utils.formatUnits(bufferedPriorityFee, 'gwei'),
            });

            DYNAMIC_GAS_CACHE.set(chainKey, result);
            return result;
        } else {
            // Legacy transactions - use gasPrice only
            const gasPrices = [];
            
            for (const tx of transactions) {
                if (tx.gasPrice) {
                    gasPrices.push(ethers.BigNumber.from(tx.gasPrice));
                }
            }

            if (gasPrices.length === 0) {
                logLine({ level: 'warn', chain: chainKey, msg: 'No legacy gas prices found in transactions' });
                return null;
            }

            // Calculate median
            const sortedGasPrices = gasPrices.sort((a, b) => a.gt(b) ? 1 : -1);
            const medianGasPrice = sortedGasPrices[Math.floor(sortedGasPrices.length / 2)];

            // Add 50% buffer to median
            const bufferedGasPrice = medianGasPrice.mul(150).div(100);

            const result = {
                gasPrice: bufferedGasPrice,
            };

            // Get current gas price from provider for comparison
            let currentGasPriceGwei = 'N/A';
            try {
                const currentGasPrice = await provider.getGasPrice();
                if (currentGasPrice) {
                    currentGasPriceGwei = ethers.utils.formatUnits(currentGasPrice, 'gwei');
                }
            } catch (e) {
                // Current gas price not available
            }

            logLine({ 
                level: 'info', 
                chain: chainKey, 
                msg: 'Dynamic gas estimation (Legacy)',
                currentGasPriceGwei,
                medianGasPriceGwei: ethers.utils.formatUnits(medianGasPrice, 'gwei'),
                bufferedGasPriceGwei: ethers.utils.formatUnits(bufferedGasPrice, 'gwei'),
            });

            DYNAMIC_GAS_CACHE.set(chainKey, result);
            return result;
        }
    } catch (error) {
        logLine({ 
            level: 'error', 
            chain: chainKey, 
            msg: 'Failed to estimate dynamic gas prices',
            error: error?.message || String(error) 
        });
        return null;
    }
}

// Source chain for funding outbound gas and for receiving refunds
const SOURCE_CHAIN_KEY = 'arbitrum_one';


// ---------- CLI (yargs) ----------
const argv = yargs(hideBin(process.argv))
    .scriptName('deploy_create5')
    .usage('Usage: $0 [options]')
    .command('list', 'List available chain keys and source wallet balance')
    .option('only', { type: 'string', describe: 'Comma-separated chain keys to deploy' })
    .option('skip-source-chain-deployment', { type: 'boolean', default: false, describe: 'Skip deploying on the source chain' })
    .option('skip-funding', { type: 'boolean', default: false, describe: 'Skip funding for all chains (you will fund manually)' })
    .option('skip-funding-for', { type: 'string', describe: 'Comma-separated chain keys to skip funding for' })
    .option('skip-refund', { type: 'boolean', default: false, describe: 'Do not refund remaining balance back to source after deploy' })
    .option('dry-run', { type: 'boolean', default: false, describe: 'Simulate on destination chains only: do not send any tx, just estimate costs and report if balance is sufficient' })
    .option('deploy-without-test', { type: 'boolean', default: false, describe: 'Allow deployment without the preliminary test tx (use only if nonce is already 1)' })
    .option('deploy-without-test-for', { type: 'string', describe: 'Comma-separated chain keys to deploy without test tx (overrides nonce guard for these chains)' })
    .option('gas-price', { type: 'string', describe: 'Override gas price in Gwei (for legacy transactions, applies globally)' })
    .option('max-fee', { type: 'string', describe: 'Override maxFeePerGas in Gwei (for EIP-1559 transactions, applies globally)' })
    .option('priority-fee', { type: 'string', describe: 'Override maxPriorityFeePerGas in Gwei (for EIP-1559 transactions, applies globally)' })
    .option('override-gas-for', { type: 'string', describe: 'Comma-separated chain keys to apply global gas overrides to (if not specified, applies to all chains)' })
    .option('gas-override', { type: 'string', describe: 'Chain-specific gas override. Format: chain:param:value (e.g., core:priority-fee:60). Can be repeated for multiple chains/params.' })
    .alias('h', 'help')
    .help()
    .parseSync();

// Initialize chain-specific gas overrides after argv is available
CHAIN_GAS_OVERRIDES = parseGasOverrides(argv);

function parseListToSet(val) {
    if (!val) return null;
    const arr = String(val).split(',').map(s => s.trim()).filter(Boolean);
    return arr.length ? new Set(arr) : new Set();
}

async function listInfo() {
    const keys = Object.keys(chainConfig || {});
    console.log('Available chain keys:');
    console.log(keys.join(', '));
    console.log('');
    const sourceKey = SOURCE_CHAIN_KEY;
    const sourceRpc = getRpcUrl(sourceKey);
    const provider = new ethers.providers.JsonRpcProvider({ url: sourceRpc, timeout: 600000 });
    const wallet = await getWalletForProvider(provider);
    const balance = await provider.getBalance(wallet.address);
    console.log('Source chain:', sourceKey);
    console.log('Source address:', wallet.address);
    console.log('Source balance:', `${formatEth(balance)} ETH`);
}

// ---------- Files helpers ----------
function ensureFiles() {
    if (!fs.existsSync(DEPLOYMENTS_MD)) {
        fs.writeFileSync(DEPLOYMENTS_MD, 'display name | chainId | deployed address\n', 'utf8');
    }
    if (!fs.existsSync(DEPLOYMENTS_LOG)) {
        fs.writeFileSync(DEPLOYMENTS_LOG, '', 'utf8');
    }
    if (!fs.existsSync(CACHE_JSON)) {
        fs.writeFileSync(CACHE_JSON, JSON.stringify({}), 'utf8');
    }
}

function appendDeploymentRow(display, chainId, explorer, address) {
    const link = `${explorer.replace(/\/$/, '')}/address/${address}`;
    const mdLink = `[${address}](${link})`;
    const newRow = `${display} | ${chainId} | ${mdLink}`;

    // Read existing file
    const content = fs.readFileSync(DEPLOYMENTS_MD, 'utf8');
    const lines = content.split('\n');

    // Separate header and data rows
    const header = lines.slice(0, 2); // "Chain | Chain ID | Address" and separator line
    const dataRows = lines.slice(2).filter(line => line.trim().length > 0);

    // Add new row and sort alphabetically by chain name (case-insensitive)
    dataRows.push(newRow);
    dataRows.sort((a, b) => {
        const nameA = a.split('|')[0].trim().toLowerCase();
        const nameB = b.split('|')[0].trim().toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Write back the file with header, separator, and sorted rows
    const newContent = [...header, ...dataRows, ''].join('\n');
    fs.writeFileSync(DEPLOYMENTS_MD, newContent, 'utf8');
}

function logLine(obj) {
    const ts = new Date().toISOString();
    let content;
    if (typeof obj === 'string') {
        content = obj;
    } else {
        // Pretty-print JSON with 2-space indentation
        content = JSON.stringify(obj, null, 2);
    }
    const line = `[${ts}] ${content}`;
    // Write to log file
    fs.appendFileSync(DEPLOYMENTS_LOG, `${line}\n`);
    // Echo to console as well
    console.log(line);
}

function readCache() {
    try { return JSON.parse(fs.readFileSync(CACHE_JSON, 'utf8')); } catch { return {}; }
}

function writeCache(cache) {
    fs.writeFileSync(CACHE_JSON, JSON.stringify(cache, null, 2), 'utf8');
}

// ---------- HTTP with retry (re-use logic like gas_zip_helper) ----------
const MAX_RETRIES = 6;
const BASE_DELAY_MS = 400;
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
const jitter = (ms) => Math.floor(ms * (0.8 + Math.random() * 0.4));

async function requestJsonWithRetry(url) {
    let attempt = 0;
    while (true) {
        try {
            const json = await new Promise((resolve, reject) => {
                const req = https.get(url, (res) => {
                    let body = '';
                    res.setEncoding('utf8');
                    res.on('data', (chunk) => { body += chunk; });
                    res.on('end', () => {
                        if (res.statusCode < 200 || res.statusCode >= 300) {
                            const preview = body && body.length > 800 ? body.slice(0, 800) + '...<truncated>' : (body || res.statusMessage);
                            return reject(Object.assign(new Error(`HTTP ${res.statusCode}: ${preview}`), { statusCode: res.statusCode, body }));
                        }
                        try { resolve(JSON.parse(body)); } catch (e) { reject(e); }
                    });
                });
                req.on('error', reject);
                req.setTimeout(15000, () => { req.destroy(new Error('Request timeout')); });
            });
            return json;
        } catch (err) {
            attempt++;
            const body = err && err.body;
            const code = err && err.statusCode;
            const isRate = code === 429 || String(body || '').toLowerCase().includes('rate');
            if (!isRate || attempt > MAX_RETRIES) throw err;
            const delay = Math.min(jitter(BASE_DELAY_MS * Math.pow(2, attempt)), 10_000);
            console.warn(`[http] backoff ${attempt}/${MAX_RETRIES} -> ${delay}ms`);
            await sleep(delay);
        }
    }
}

async function fetchGasZipChains() {
    const res = await requestJsonWithRetry(GASZIP_CHAINS_URL);
    if (!res || !Array.isArray(res.chains)) throw new Error('Invalid chains data from gas.zip');
    // Map by chainId
    const map = new Map();
    for (const c of res.chains) map.set(Number(c.chain), c);
    return map;
}

// ---------- Chains config helpers ----------
function configuredChainsStrict() {
    const arr = configuredChains;
    return arr.map(c => ({
        key: c.key,
        display: c.display,
        currency: c.currency,
        chainId: c.chainId,
        rpc: getRpcUrl(c),
        explorer: getExplorerUrl(c),
        gasOverrides: {}, // Will be populated dynamically
    })).filter(c => !!c.rpc);
}

function getChainByKeyStrict(key) {
    const c = chainConfig[key];
    if (!c) throw new Error(`Unknown chain key ${key}`);
    const rpc = getRpcUrl(c);
    if (!rpc) throw new Error(`Missing RPC for ${key}`);
    return {
        key: c.key,
        display: c.display,
        currency: c.currency,
        chainId: c.chainId,
        rpc,
        explorer: getExplorerUrl(c),
        gasOverrides: {}, // Will be populated dynamically
    };
}

// ---------- Wallet selection ----------
const ENCRYPTED_WALLET = process.env.ENCRYPTED_WALLET ? JSON.parse(process.env.ENCRYPTED_WALLET) : null;
const RAW_PRIVATE_KEY = process.env.PRIVATE_KEY || null;
const HL_API_PRIV = process.env.HYPERCORE_API_PRIVKEY || null;

async function getWalletForProvider(provider) {
    if (ENCRYPTED_WALLET) {
        const seedPhrase = await decrypt_mnemonic(ENCRYPTED_WALLET);
        return Wallet.fromMnemonic(seedPhrase).connect(provider);
    }
    if (RAW_PRIVATE_KEY) return new Wallet(RAW_PRIVATE_KEY, provider);
    throw new Error('No wallet configured. Set PRIVATE_KEY or ENCRYPTED_WALLET');
}

// ---------- HyperEVM helpers ----------
async function callRpc(provider, method, params = []) {
    return provider.send(method, params);
}

async function isUsingBigBlocks(provider, address) {
    try {
        const res = await callRpc(provider, 'eth_usingBigBlocks', [address]);
        return !!res;
    } catch {
        try {
            const res = await callRpc(provider, 'usingBigBlocks', [address]);
            return !!res;
        } catch {
            return false;
        }
    }
}

async function getBigBlockGasPrice(provider) {
    try {
        const hex = await callRpc(provider, 'eth_bigBlockGasPrice', []);
        return ethers.BigNumber.from(hex);
    } catch {
        const hex = await callRpc(provider, 'eth_gasPrice', []);
        return ethers.BigNumber.from(hex);
    }
}

function normalizeHexPrivateKey(key) {
    if (!key || typeof key !== 'string') throw new Error('Private key must be a string');
    let k = key.trim();
    if (!k.startsWith('0x')) k = '0x' + k;
    const re = /^0x[0-9a-fA-F]{64}$/;
    if (!re.test(k)) throw new Error('Private key must be a 32-byte hex string (0x-prefixed)');
    return k.toLowerCase();
}

async function postJson(url, bodyObj) {
    return new Promise((resolve, reject) => {
        const data = Buffer.from(JSON.stringify(bodyObj));
        const u = new URL(url);
        const req = https.request({
            hostname: u.hostname,
            path: u.pathname,
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Content-Length': data.length },
        }, (res) => {
            let body = '';
            res.setEncoding('utf8');
            res.on('data', (c) => { body += c; });
            res.on('end', () => resolve({ statusCode: res.statusCode, body }));
        });
        req.on('error', reject);
        req.write(data);
        req.end();
    });
}

async function enableHyperEvmBigBlocksOrExplain({ targetEvmAddress, signerPriv }) {
    const pk = normalizeHexPrivateKey(signerPriv);
    const wallet = privateKeyToAccount(pk);
    const action = { type: 'evmUserModify', usingBigBlocks: true };
    const nonce = Date.now();
    const signature = await signL1Action({ wallet, action, nonce });
    const { statusCode, body } = await postJson('https://api.hyperliquid.xyz/exchange', { action, signature, nonce });
    let parsed;
    try { parsed = JSON.parse(body); } catch { parsed = { status: 'err', response: body }; }
    if (statusCode < 200 || statusCode >= 300 || parsed.status !== 'ok') {
        const msg = String(parsed.response || body || 'unknown');
        if (/does not exist/i.test(msg)) {
            throw new Error('Core user not found. Deposit to HyperCORE or set HYPERCORE_API_PRIVKEY for API wallet.');
        }
        throw new Error(`Big Blocks toggle failed: ${msg}`);
    }
    return true;
}

async function tryEnableBigBlocksWithPoll({ provider, evmAddress }) {
    const signerPriv = HL_API_PRIV || RAW_PRIVATE_KEY;
    try {
        await enableHyperEvmBigBlocksOrExplain({ targetEvmAddress: evmAddress, signerPriv });
    } catch (e) {
        console.log(`[HyperEVM] Toggle attempt failed: ${e?.message || e}`);
        return false;
    }
    const deadline = Date.now() + 30_000;
    while (Date.now() < deadline) {
        await sleep(1500);
        if (await isUsingBigBlocks(provider, evmAddress)) return true;
    }
    return false;
}

// ---------- Gas helpers ----------
async function normalizeGasOverrides(provider, overrides = {}, { isHyperEvmBig } = {}) {
    if (isHyperEvmBig) {
        const price = await getBigBlockGasPrice(provider);
        return { gasPrice: price };
    }
    let feeData; try { feeData = await provider.getFeeData(); } catch { feeData = {}; }
    let baseFee = null; try { const b = await provider.getBlock('latest'); baseFee = b && b.baseFeePerGas ? b.baseFeePerGas : null; } catch { }
    const tip = overrides.maxPriorityFeePerGas || feeData.maxPriorityFeePerGas || (ethers.utils.parseUnits ? ethers.utils.parseUnits('2', 'gwei') : ethers.BigNumber.from('2000000000'));
    let cap = overrides.maxFeePerGas || feeData.maxFeePerGas || feeData.gasPrice;
    if (!cap && baseFee) cap = baseFee.add(tip);
    if (!cap) throw new Error('Fee data unavailable');
    if (baseFee) {
        const minCap = baseFee.add(tip);
        if (cap.lt(minCap)) cap = minCap;
        return { maxFeePerGas: cap, maxPriorityFeePerGas: tip };
    } else {
        return { gasPrice: cap };
    }
}

async function estimateDeployCost(wallet, deployTx, provider, gasOverrides = {}, bytecodeHex, hyperOpts = {}) {
    const gasLimit = await wallet.estimateGas({ ...deployTx });
    let depositGas = ethers.BigNumber.from(0);
    if (bytecodeHex && bytecodeHex.startsWith('0x')) {
        const byteLen = Math.floor((bytecodeHex.length - 2) / 2);
        depositGas = ethers.BigNumber.from(byteLen).mul(200);
    }
    const norm = await normalizeGasOverrides(provider, gasOverrides, hyperOpts);
    const price = norm.maxFeePerGas || norm.gasPrice;
    const gasLimitBuffered = gasLimit.mul(180).div(100); // +80%
    const cost = gasLimitBuffered.mul(price);
    return { gasLimit, gasLimitBuffered, price, cost, depositGas };
}

async function estimateTestDeployCost(provider, wallet, gasOverrides = {}, hyperOpts = {}) {
    const gasLimit = await provider.estimateGas({ from: wallet.address, data: TEST_BYTECODE });
    const norm = await normalizeGasOverrides(provider, gasOverrides, hyperOpts);
    const price = norm.maxFeePerGas || norm.gasPrice;
    const gasLimitBuffered = gasLimit.mul(150).div(100);
    const cost = gasLimitBuffered.mul(price);
    return { gasLimit, gasLimitBuffered, price, cost };
}

function formatEth(bn) { return utils.formatEther(bn); }

// ---------- Gas.zip helpers ----------
async function fetchGasZipCalldata(depositChainId, depositWei, outboundChainIds, to, from) {
    const url = `https://backend.gas.zip/v2/quotes/${depositChainId}/${depositWei.toString()}/${outboundChainIds.join(',')}?to=${to}&from=${from}`;
    const data = await requestJsonWithRetry(url);
    if (!data || !data.calldata) throw new Error('Gas.zip quote missing calldata');
    return data.calldata;
}

async function estimateTxFee(provider, from, to, valueWei, overrides = {}, hyperOpts = {}) {
    const gasLimit = await provider.estimateGas({ to, from, value: valueWei });
    const norm = await normalizeGasOverrides(provider, overrides, hyperOpts);
    const price = norm.maxFeePerGas || norm.gasPrice;
    const gasLimitBuffered = gasLimit.mul(120).div(100);
    const cost = gasLimitBuffered.mul(price);
    return { gasLimit, gasLimitBuffered, price, cost };
}

// ---------- Core flow ----------
async function deployOnChain(chain, gasZipPricesMap, sourceCtx) {
    const provider = new ethers.providers.JsonRpcProvider({ url: chain.rpc, timeout: 600000 });
    const wallet = await getWalletForProvider(provider);
    
    // Estimate dynamic gas prices
    const dynamicGas = await estimateDynamicGasPrice(provider, chain.key);
    if (!dynamicGas) {
        logLine({ 
            level: 'warn', 
            chain: chain.key, 
            msg: 'Skipping chain: unable to estimate gas prices from recent transactions' 
        });
        return { skipped: true };
    }
    
    // Update chain's gas overrides with dynamic estimation
    chain.gasOverrides = dynamicGas;
    
    const nonce = await provider.getTransactionCount(wallet.address, 'pending');
    const isHyper = chain.key === 'hyperevm';
    const isDry = !!argv['dry-run'];
    const dwtGlobal = !!argv['deploy-without-test'];
    const dwtSet = parseListToSet(argv['deploy-without-test-for']);
    const allowSkipTest = dwtGlobal || (dwtSet && dwtSet.has(chain.key));
    if (nonce !== 0 && !allowSkipTest) {
        if (isDry) {
            logLine({ level: 'warn', chain: chain.key, msg: `Nonce is ${nonce}, but continuing (dry-run) to compute requirements.` });
        } else {
            logLine({ level: 'warn', chain: chain.key, msg: `Nonce is ${nonce}, skipping to preserve vanity address (requires first tx = test deploy).` });
            return { skipped: true };
        }
    }
    if (nonce !== 0 && allowSkipTest) {
        logLine({ level: 'info', step: 'skip_test_mode', chain: chain.key, msg: `Nonce is ${nonce}; proceeding without test tx as requested.` });
    }

    // Estimate test cost and Create5 deploy cost
    const testEst = await estimateTestDeployCost(provider, wallet, chain.gasOverrides || {}, { isHyperEvmBig: isHyper });
    const Factory = (await hardhat.ethers.getContractFactory(CONTRACT_NAME)).connect(wallet);
    const deployTx = await Factory.getDeployTransaction();
    const est = await estimateDeployCost(wallet, deployTx, provider, chain.gasOverrides || {}, Factory.bytecode, { isHyperEvmBig: isHyper });

    // Decide funding/refund policy early to determine if we need gas.zip prices
    const skipFundingGlobal = !!argv['skip-funding'];
    const skipFundingFor = parseListToSet(argv['skip-funding-for']);
    const shouldSkipFunding = skipFundingGlobal || (skipFundingFor && skipFundingFor.has(chain.key));
    const skipRefund = !!argv['skip-refund'];

    // Get gas.zip prices (optional if both funding and refund are skipped)
    const priceInfo = gasZipPricesMap.get(chain.chainId);
    const srcPrice = gasZipPricesMap.get(sourceCtx.chain.chainId);

    // Only require gas.zip prices if we're actually going to use them for funding/refund
    if (!shouldSkipFunding) {
        if (!priceInfo || typeof priceInfo.price !== 'number') {
            throw new Error(`Missing gas.zip price for chainId ${chain.chainId}. Chain may not be supported by gas.zip. Use --skip-funding --skip-refund for manual funding.`);
        }
        if (!srcPrice || typeof srcPrice.price !== 'number') {
            throw new Error('Missing gas.zip price for source chain');
        }
    }

    if (!skipRefund && (!priceInfo || typeof priceInfo.price !== 'number')) {
        throw new Error(`Missing gas.zip price for chainId ${chain.chainId}. Chain may not be supported by gas.zip. Use --skip-refund to skip refund.`);
    }

    // Required destination native amount (destination chain native):
    // Default: 2x deploy + 1x test; Ethereum L1 (chainId=1): 3x deploy + 1x test (more conservative)
    const deployMult = (chain.chainId === 1) ? 3 : 2;
    const testMult = (nonce !== 0 && allowSkipTest) ? 0 : 1;
    const requiredDestWei = est.cost.mul(deployMult).add(testEst.cost.mul(testMult));
    logLine({ level: 'info', step: 'fund_sizing', chain: chain.key, chainId: chain.chainId, deployMult, testMult, estDeployGas: est.gasLimit.toString(), estDeployCostEth: utils.formatEther(est.cost), estTestGas: testEst.gasLimit.toString(), estTestCostEth: utils.formatEther(testEst.cost) });

    let requiredUsd = 0;
    let srcEthNeeded = 0;
    let srcWeiNeeded = ethers.BigNumber.from(0);
    if (priceInfo && srcPrice && priceInfo.price && srcPrice.price) {
        requiredUsd = Number(utils.formatEther(requiredDestWei)) * priceInfo.price;
        srcEthNeeded = requiredUsd / srcPrice.price; // in native ETH (float)
        srcWeiNeeded = utils.parseEther(srcEthNeeded.toFixed(18));
    }

    // Dry-run: report requirements vs. current destination balance and exit early
    if (isDry) {
        const destBal = await provider.getBalance(wallet.address);
        const enough = destBal.gte(requiredDestWei);
        const shortfall = enough ? ethers.BigNumber.from(0) : requiredDestWei.sub(destBal);
        const requiredEth = utils.formatEther(requiredDestWei);
        const currentEth = utils.formatEther(destBal);
        const shortfallEth = utils.formatEther(shortfall);

        // Calculate expected deployment addresses
        const testContractAddress = (nonce === 0 || !allowSkipTest)
            ? ethers.utils.getContractAddress({ from: wallet.address, nonce: nonce })
            : 'N/A (test contract skipped)';
        const create5Nonce = (nonce === 0 || !allowSkipTest) ? nonce + 1 : nonce;
        const create5ContractAddress = ethers.utils.getContractAddress({ from: wallet.address, nonce: create5Nonce });

        const summary = {
            level: 'info',
            step: 'dry_run',
            chain: chain.key,
            chainId: chain.chainId,
            currentNonce: nonce,
            expectedTestContractAddress: testContractAddress,
            expectedCreate5ContractAddress: create5ContractAddress,
            deployMult,
            testMult,
            estDeployGas: est.gasLimit.toString(),
            estDeployCostEth: utils.formatEther(est.cost),
            estTestGas: testEst.gasLimit.toString(),
            estTestCostEth: utils.formatEther(testEst.cost),
            requiredWei: requiredDestWei.toString(),
            requiredEth,
            requiredUsd: priceInfo?.price ? (Number(requiredEth) * priceInfo.price).toFixed(6) : 'N/A',
            currentWei: destBal.toString(),
            currentEth,
            currentUsd: priceInfo?.price ? (Number(currentEth) * priceInfo.price).toFixed(6) : 'N/A',
            enough,
            shortfallWei: shortfall.toString(),
            shortfallEth,
            shortfallUsd: priceInfo?.price ? (Number(shortfallEth) * priceInfo.price).toFixed(6) : 'N/A',
        };
        logLine(summary);
        return { dry: true, enough };
    }

    // Execute funding if not skipped
    let didFund = false;
    if (shouldSkipFunding) {
        logLine({ level: 'info', step: 'skip_fund', chain: chain.key, reason: skipFundingGlobal ? 'skip_funding_flag' : 'skip_funding_for' });
    } else {
        // Fund from source chain via gas.zip
        const calldata = await fetchGasZipCalldata(sourceCtx.chain.chainId, srcWeiNeeded, [chain.chainId], wallet.address, sourceCtx.wallet.address);
        const srcFeeEst = await estimateTxFee(sourceCtx.provider, sourceCtx.wallet.address, DIRECT_FORWARDER, srcWeiNeeded, sourceCtx.chain.gasOverrides || {});
        const srcBal = await sourceCtx.provider.getBalance(sourceCtx.wallet.address);
        if (srcBal.lte(srcWeiNeeded.add(srcFeeEst.cost))) {
            logLine({ level: 'info', action: 'stop', msg: 'Insufficient source balance to continue', need: formatEth(srcWeiNeeded.add(srcFeeEst.cost)), have: formatEth(srcBal) });
            return { stop: true };
        }

        const srcOverrides = await normalizeGasOverrides(sourceCtx.provider, sourceCtx.chain.gasOverrides || {});
        const fundTx = await sourceCtx.wallet.sendTransaction({ to: DIRECT_FORWARDER, data: calldata, value: srcWeiNeeded, ...srcOverrides });
        const fundRcpt = await fundTx.wait(1);
        const fundGasPrice = fundRcpt.effectiveGasPrice || srcOverrides.maxFeePerGas || srcOverrides.gasPrice;
        const fundCostWei = fundRcpt.gasUsed.mul(fundGasPrice);
        logLine({ level: 'info', action: 'fund', chainFrom: sourceCtx.chain.key, chainTo: chain.key, tx: fundTx.hash, link: `${sourceCtx.chain.explorer}/tx/${fundTx.hash}`, amount: formatEth(srcWeiNeeded), gasUsed: fundRcpt.gasUsed.toString(), costEth: formatEth(fundCostWei), costUsd: (Number(formatEth(fundCostWei)) * (srcPrice?.price || 0)).toFixed(6) });

        // Wait for gas.zip settlement (L1 Ethereum needs longer)
        const waitMs = (chain.chainId === 1) ? 30000 : 15000;
        logLine({ level: 'info', step: 'wait_settlement', chain: chain.key, chainId: chain.chainId, ms: waitMs });
        await sleep(waitMs);
        didFund = true;
    }

    // Test deploy (only when not skipping)
    const overrides = await normalizeGasOverrides(provider, chain.gasOverrides || {}, { isHyperEvmBig: isHyper });
    if (!(nonce !== 0 && allowSkipTest)) {
        const testTx = await wallet.sendTransaction({ data: TEST_BYTECODE, ...overrides });
        const testRcpt = await testTx.wait(1);
        const testCostWei = testRcpt.gasUsed.mul(testRcpt.effectiveGasPrice || overrides.maxFeePerGas || overrides.gasPrice);
        logLine({ level: 'info', action: 'test_deploy', chain: chain.key, tx: testTx.hash, link: `${chain.explorer}/tx/${testTx.hash}`, gasUsed: testRcpt.gasUsed.toString(), costEth: formatEth(testCostWei), costUsd: priceInfo?.price ? (Number(formatEth(testCostWei)) * priceInfo.price).toFixed(6) : 'N/A' });
    }

    // Factory deploy (nonce 1)
    const factoryOverrides = await normalizeGasOverrides(provider, chain.gasOverrides || {}, { isHyperEvmBig: isHyper });
    // Preflight: estimate gas for deploy tx now to ensure it will not OOG; abort if estimation fails
    let preflightGas;
    try {
        preflightGas = await provider.estimateGas({ ...deployTx, from: wallet.address, ...factoryOverrides });
    } catch (e) {
        logLine({ level: 'error', step: 'preflight_failed', chain: chain.key, error: e?.message || String(e) });
        return { skipped: true };
    }
    const safeGasLimit = preflightGas.mul(115).div(100); // 15% buffer
    const contract = await Factory.deploy({ ...factoryOverrides, gasLimit: safeGasLimit });
    const deployRcpt = await contract.deployTransaction.wait(1);
    const gasPriceUsed = deployRcpt.effectiveGasPrice || factoryOverrides.maxFeePerGas || factoryOverrides.gasPrice;
    const deployCostWei = deployRcpt.gasUsed.mul(gasPriceUsed);
    logLine({ level: 'info', action: 'deploy', chain: chain.key, address: contract.address, link: `${chain.explorer}/address/${contract.address}`, tx: deployRcpt.transactionHash, txLink: `${chain.explorer}/tx/${deployRcpt.transactionHash}`, gasUsed: deployRcpt.gasUsed.toString(), costEth: formatEth(deployCostWei), costUsd: priceInfo?.price ? (Number(formatEth(deployCostWei)) * priceInfo.price).toFixed(6) : 'N/A' });

    appendDeploymentRow(chain.display, chain.chainId, chain.explorer, contract.address);

    // Cache (include gas stats)
    const cache = readCache();
    const costEthStr = formatEth(deployCostWei);
    const costUsdStr = (Number(costEthStr) * (priceInfo?.price || 0)).toFixed(6);
    cache[chain.chainId] = {
        address: contract.address,
        explorer: chain.explorer,
        key: chain.key,
        display: chain.display,
        gasUsed: deployRcpt.gasUsed.toString(),
        costEth: costEthStr,
        costUsd: costUsdStr,
    };
    writeCache(cache);

    // Optional refund of remaining balance back to source
    if (skipRefund) {
        logLine({ level: 'info', step: 'skip_refund', chain: chain.key });
    } else {
        const afterBal = await provider.getBalance(wallet.address);
        const ninetyNine = afterBal.mul(9900).div(10000);
        let amountToSend = ethers.BigNumber.from(0);
        try {
            const feeEst2 = await estimateTxFee(provider, wallet.address, DIRECT_FORWARDER, ninetyNine, chain.gasOverrides || {}, { isHyperEvmBig: isHyper });
            amountToSend = ninetyNine.sub(feeEst2.cost);
        } catch (e) {
            logLine({ level: 'warn', action: 'refund_calc_failed', chain: chain.key, error: e?.message || String(e) });
        }
        try {
            if (amountToSend.gt(0)) {
                const ov = await normalizeGasOverrides(provider, chain.gasOverrides || {}, { isHyperEvmBig: isHyper });
                const refundTx = await wallet.sendTransaction({ to: DIRECT_FORWARDER, data: (await fetchGasZipCalldata(chain.chainId, amountToSend, [sourceCtx.chain.chainId], sourceCtx.wallet.address, wallet.address)), value: amountToSend, ...ov });
                const rcpt = await refundTx.wait(1);
                const priceInfo2 = gasZipPricesMap.get(chain.chainId);
                const refundCost = rcpt.gasUsed.mul(rcpt.effectiveGasPrice || ov.maxFeePerGas || ov.gasPrice);
                logLine({ level: 'info', action: 'refund', chainFrom: chain.key, chainTo: sourceCtx.chain.key, tx: refundTx.hash, link: `${chain.explorer}/tx/${refundTx.hash}`, amount: formatEth(amountToSend), gasUsed: rcpt.gasUsed.toString(), costEth: formatEth(refundCost), costUsd: (Number(formatEth(refundCost)) * (priceInfo2?.price || 0)).toFixed(6) });
            }
        } catch (e) {
            logLine({ level: 'warn', action: 'refund_failed', chain: chain.key, error: e?.message || String(e) });
        }
    }

    return { success: true, address: contract.address };
}

async function main() {
    // Subcommand: list
    if (Array.isArray(argv._) && argv._[0] === 'list') {
        await listInfo();
        process.exit(0);
    }
    ensureFiles();
    // Ensure artifacts are up to date before using getContractFactory
    try {
        await hardhat.run('compile');
    } catch (e) {
        logLine({ level: 'warn', step: 'compile', error: e?.message || String(e) });
    }
    const chainsAll = configuredChainsStrict();
    const hasHyper = chainsAll.some(c => c.key === 'hyperevm');
    const sourceChain = getChainByKeyStrict(SOURCE_CHAIN_KEY);
    const onlySet = parseListToSet(argv.only);
    if (onlySet && onlySet.size > 0) {
        logLine({ level: 'info', step: 'selection', only: Array.from(onlySet) });
    }
    const skipSource = !!argv['skip-source-chain-deployment'];
    if (skipSource) {
        logLine({ level: 'info', step: 'selection', skip_source: true });
    }

    // Init source chain context
    const sourceProvider = new ethers.providers.JsonRpcProvider({ url: sourceChain.rpc, timeout: 600000 });
    const sourceWallet = await getWalletForProvider(sourceProvider);
    const sourceCtx = { chain: sourceChain, provider: sourceProvider, wallet: sourceWallet };

    // Fetch gas.zip price table
    const gasZipMap = await fetchGasZipChains();

    // HyperEVM preflight: try enable Big Blocks for deployer (no nonce impact)
    if (hasHyper) {
        const hyper = getChainByKeyStrict('hyperevm');
        const hyperProvider = new ethers.providers.JsonRpcProvider({ url: hyper.rpc, timeout: 600000 });
        const hyperWallet = await getWalletForProvider(hyperProvider);
        console.log('[HyperEVM] Checking Big Blocks flag…');
        const already = await isUsingBigBlocks(hyperProvider, hyperWallet.address);
        if (already) {
            console.log('[HyperEVM] Big Blocks already enabled for', hyperWallet.address);
        } else {
            console.log('[HyperEVM] Attempting to enable Big Blocks for', hyperWallet.address);
            const ok = await tryEnableBigBlocksWithPoll({ provider: hyperProvider, evmAddress: hyperWallet.address });
            console.log(`[HyperEVM] user flag = ${ok ? 'ON' : 'OFF (will force big-block via gasPrice)'}`);
        }
        console.log('[HyperEVM] Note: You can toggle manually at https://hyperevm-block-toggle.vercel.app/');
    }

    // Step 1: Optionally deploy to Arbitrum (source) first when selected or when no filter provided
    let didSource = false;
    const shouldDoSource = !skipSource && !argv['dry-run'] && (!onlySet || onlySet.size === 0 || onlySet.has(sourceChain.key));
    if (shouldDoSource) {
        logLine({ level: 'info', step: 'deploy_source_start', chain: sourceChain.key, address: sourceWallet.address });
        
        // Estimate dynamic gas prices for source chain
        const srcDynamicGas = await estimateDynamicGasPrice(sourceProvider, sourceChain.key);
        if (srcDynamicGas) {
            sourceChain.gasOverrides = srcDynamicGas;
        } else {
            logLine({ level: 'warn', chain: sourceChain.key, msg: 'Could not estimate dynamic gas for source chain, proceeding with provider defaults' });
        }
        
        const srcNonce = await sourceProvider.getTransactionCount(sourceWallet.address, 'pending');
        if (srcNonce !== 0) {
            logLine({ level: 'warn', chain: sourceChain.key, msg: `Source nonce is ${srcNonce}. Will still attempt test->deploy sequence but vanity may not match.` });
        }

        // Test deploy on source
        const srcOverrides = await normalizeGasOverrides(sourceProvider, sourceChain.gasOverrides || {});
        const srcTestTx = await sourceWallet.sendTransaction({ data: TEST_BYTECODE, ...srcOverrides });
        const srcTestRcpt = await srcTestTx.wait(1);
        const srcTestCostWei = srcTestRcpt.gasUsed.mul(srcTestRcpt.effectiveGasPrice || srcOverrides.maxFeePerGas || srcOverrides.gasPrice);
        const srcPrice = gasZipMap.get(sourceChain.chainId);
        logLine({ level: 'info', action: 'test_deploy', chain: sourceChain.key, tx: srcTestTx.hash, link: `${sourceChain.explorer}/tx/${srcTestTx.hash}`, gasUsed: srcTestRcpt.gasUsed.toString(), costEth: formatEth(srcTestCostWei), costUsd: (Number(formatEth(srcTestCostWei)) * (srcPrice?.price || 0)).toFixed(6) });

        // Deploy Create5 on source
        const FactorySrc = (await hardhat.ethers.getContractFactory(CONTRACT_NAME)).connect(sourceWallet);
        const deployTxSrc = await FactorySrc.getDeployTransaction();
        const estSrc = await estimateDeployCost(sourceWallet, deployTxSrc, sourceProvider, sourceChain.gasOverrides || {}, FactorySrc.bytecode);
        const contractSrc = await FactorySrc.deploy({ ...(await normalizeGasOverrides(sourceProvider, sourceChain.gasOverrides || {})), gasLimit: estSrc.gasLimitBuffered });
        const srcRcpt = await contractSrc.deployTransaction.wait(1);
        const srcCostWei = srcRcpt.gasUsed.mul(srcRcpt.effectiveGasPrice || estSrc.price);
        logLine({ level: 'info', action: 'deploy', chain: sourceChain.key, address: contractSrc.address, link: `${sourceChain.explorer}/address/${contractSrc.address}`, tx: srcRcpt.transactionHash, txLink: `${sourceChain.explorer}/tx/${srcRcpt.transactionHash}`, gasUsed: srcRcpt.gasUsed.toString(), costEth: formatEth(srcCostWei), costUsd: (Number(formatEth(srcCostWei)) * (srcPrice?.price || 0)).toFixed(6) });

        appendDeploymentRow(sourceChain.display, sourceChain.chainId, sourceChain.explorer, contractSrc.address);
        const cache0 = readCache();
        const costEthSrcStr = formatEth(srcCostWei);
        const costUsdSrcStr = (Number(costEthSrcStr) * (srcPrice?.price || 0)).toFixed(6);
        cache0[sourceChain.chainId] = {
            address: contractSrc.address,
            explorer: sourceChain.explorer,
            key: sourceChain.key,
            display: sourceChain.display,
            gasUsed: srcRcpt.gasUsed.toString(),
            costEth: costEthSrcStr,
            costUsd: costUsdSrcStr,
        };
        writeCache(cache0);
        didSource = true;
    } else {
        logLine({ level: 'info', step: 'skip_source', reason: 'filtered_by_only', chain: sourceChain.key });
    }

    // Step 2: Iterate other chains until funds run out
    let targets = chainsAll.filter(c => c.chainId !== sourceChain.chainId);
    if (onlySet && onlySet.size > 0) {
        targets = targets.filter(c => onlySet.has(c.key));
    }
    for (const chain of targets) {
        try {
            logLine({ level: 'info', step: 'target_start', chain: chain.key });
            const res = await deployOnChain(chain, gasZipMap, sourceCtx);
            if (res?.stop) {
                logLine({ level: 'info', step: 'stopping', reason: 'insufficient funds on source' });
                break;
            }
        } catch (e) {
            logLine({ level: 'error', step: 'target_failed', chain: chain.key, error: e?.message || String(e) });
            // continue to next chain
        }
    }

    logLine({ level: 'info', step: 'done' });
}

main().catch((err) => {
    logLine({ level: 'fatal', error: err?.message || String(err) });
    process.exit(1);
});
