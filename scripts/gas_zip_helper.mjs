#!/usr/bin/env node
import 'dotenv/config';
import PromptSync from 'prompt-sync';
import { Wallet, ethers, utils } from 'ethers';
import { decrypt_mnemonic } from './wallet_manager.mjs';
import { configuredChains, getRpcUrl, getChainsByKeys, chainConfig } from '../chainconfig/chains.mjs';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import https from 'https';

const prompt = PromptSync();

const confirmAction = (t) => {
    const answer = prompt(t);
    return answer.toLowerCase() === 'y';
};

// Gas.zip Direct Forwarder (EOA deposit) address used across supported EVM chains
const DIRECT_FORWARDER = '0x391E7C679d29bD940d63be94AD22A25d25b5A604';

// Build chains list from centralized config (only chains with RPC configured)
const OVERRIDES = new Map([
    ['polygon_mainnet', {
        maxFeePerGas: ethers.utils.parseUnits('50', 'gwei'),
        maxPriorityFeePerGas: ethers.utils.parseUnits('30', 'gwei'),
    }],
]);

// Optional: specify exact chain keys here; leave empty array to use all configured chains
const SELECTED_CHAIN_KEYS = [];
const SOURCE_CHAINS = SELECTED_CHAIN_KEYS.length
    ? getChainsByKeys(SELECTED_CHAIN_KEYS, { requireRpc: true })
    : configuredChains();
const CHAINS = SOURCE_CHAINS.map(c => ({
    key: c.key,
    display: c.display,
    currency: c.currency,
    chainId: c.chainId,
    rpc: getRpcUrl(c),
    explorer: c.explorerUrl,
    gasOverrides: OVERRIDES.get(c.key) || {},
}));

function buildPerChainConfig() {
    const missing = [];
    const chains = CHAINS.map(c => {
        const required = { rpc: c.rpc, explorer: c.explorer, chainId: c.chainId };
        const missingKeys = Object.entries(required).filter(([, v]) => !v && v !== 0).map(([k]) => `${c.key}.${k}`);
        if (missingKeys.length) missing.push(...missingKeys);
        return c;
    });
    if (missing.length) {
        throw new Error(`Missing configuration for chains:\n  - ${missing.join('\n  - ')}`);
    }
    if (chains.length === 0) throw new Error('No chains configured (RPC missing).');
    return chains;
}

// Wallet sources: prioritize private key per user requirement; also support encrypted wallet like other scripts
const ENCRYPTED_WALLET = process.env.ENCRYPTED_WALLET ? JSON.parse(process.env.ENCRYPTED_WALLET) : null;
const RAW_PRIVATE_KEY = process.env.PRIVATE_KEY || null;

let useEncryptedWallet = false;
let usePrivateKey = false;

if (!ENCRYPTED_WALLET && !RAW_PRIVATE_KEY) {
    throw new Error('No wallet configuration provided. Please set PRIVATE_KEY (preferred) or ENCRYPTED_WALLET in your .env file.');
}
if (ENCRYPTED_WALLET && RAW_PRIVATE_KEY) {
    console.log('Both encrypted wallet and private key are configured.');
    useEncryptedWallet = confirmAction('Use the encrypted wallet? (Y/N): ');
    usePrivateKey = !useEncryptedWallet;
} else {
    useEncryptedWallet = !!ENCRYPTED_WALLET;
    usePrivateKey = !!RAW_PRIVATE_KEY;
}

// --- Rate limit handling helpers (429 backoff with jitter) ---
const MAX_RETRIES = 6;
const BASE_DELAY_MS = 400; // initial backoff

function sleep(ms) { return new Promise((res) => setTimeout(res, ms)); }
function jitter(ms) { return Math.floor(ms * (0.8 + Math.random() * 0.4)); }

function isRateLimitStatus(statusCode, bodyStr = '') {
    if (statusCode === 429) return true;
    const msg = (bodyStr || '').toLowerCase();
    return (
        msg.includes('429') ||
        msg.includes('rate limit') ||
        msg.includes('too many requests') ||
        msg.includes('request rate')
    );
}

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
                        try {
                            resolve(JSON.parse(body));
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
                req.on('error', reject);
                req.setTimeout(15000, () => {
                    req.destroy(new Error('Request timeout'));
                });
            });
            return json;
        } catch (err) {
            attempt++;
            const status = err && err.statusCode;
            const body = err && err.body;
            // Only backoff/retry on explicit 429 rate limiting; otherwise, surface the error immediately
            const shouldRetry = attempt <= MAX_RETRIES && isRateLimitStatus(status, body);
            if (!shouldRetry) throw err;
            const delay = Math.min(jitter(BASE_DELAY_MS * Math.pow(2, attempt)), 10_000);
            console.warn(`[gas.zip] backoff attempt ${attempt}/${MAX_RETRIES} -> waiting ${delay}ms (${status || 'no-status'})`);
            await sleep(delay);
        }
    }
}

async function getWalletForProvider(provider) {
    if (useEncryptedWallet) {
        const seedPhrase = await decrypt_mnemonic(ENCRYPTED_WALLET);
        const wallet = Wallet.fromMnemonic(seedPhrase);
        return wallet.connect(provider);
    }
    if (usePrivateKey) return new Wallet(RAW_PRIVATE_KEY, provider);
    throw new Error('No wallet available');
}

// Normalize gas overrides similar to existing scripts
async function normalizeGasOverrides(provider, overrides = {}) {
    let feeData;
    try { feeData = await provider.getFeeData(); } catch { feeData = {}; }
    let baseFee = null;
    try { const latest = await provider.getBlock('latest'); baseFee = latest && latest.baseFeePerGas ? latest.baseFeePerGas : null; } catch { baseFee = null; }
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

async function estimateTxFee(provider, from, to, valueWei, overrides = {}) {
    const gasLimit = await provider.estimateGas({ to, from, value: valueWei });
    const norm = await normalizeGasOverrides(provider, overrides);
    const price = norm.maxFeePerGas || norm.gasPrice;
    if (!price) throw new Error('Fee data unavailable');
    const gasLimitBuffered = gasLimit.mul(120).div(100);
    const cost = gasLimitBuffered.mul(price);
    return { gasLimit, gasLimitBuffered, price, cost };
}

function askAddress(label, def) {
    let v = def && def.length ? def : prompt(`${label}${def ? ` [default ${def}]` : ''}: `);
    if (!v || v.length === 0) throw new Error(`${label} is required`);
    if (!ethers.utils.isAddress(v)) throw new Error(`${label} is not a valid address: ${v}`);
    return ethers.utils.getAddress(v);
}

// Always prompt the user, but allow ENTER to accept default
function promptAddress(label, def) {
    const input = prompt(`${label}${def ? ` [default ${def}]` : ''}: `) || '';
    const chosen = input.trim().length ? input.trim() : (def || '');
    if (!chosen) throw new Error(`${label} is required`);
    if (!ethers.utils.isAddress(chosen)) throw new Error(`${label} is not a valid address: ${chosen}`);
    return ethers.utils.getAddress(chosen);
}

function pickSourceChain(chains) {
    console.log('Available chains:');
    chains.forEach((c, i) => console.log(`  [${i}] ${c.display} (id=${c.chainId})`));
    const idxStr = prompt('Select source chain index: ');
    const idx = Number(idxStr);
    if (!Number.isInteger(idx) || idx < 0 || idx >= chains.length) throw new Error('Invalid selection');
    return chains[idx];
}

async function fetchCalldata(depositChainId, depositWei, outboundChainIds, to, from) {
    const url = `https://backend.gas.zip/v2/quotes/${depositChainId}/${depositWei.toString()}/${outboundChainIds.join(',')}?to=${to}&from=${from}`;
    const data = await requestJsonWithRetry(url);
    if (!data || !data.calldata) throw new Error('Calldata response missing calldata');
    return data.calldata;
}

function formatEth(bn) { return utils.formatEther(bn); }

async function cmdDistribute(argv = {}) {
    const chains = buildPerChainConfig();
    
    // Determine source chain
    let src;
    if (argv.source) {
        src = chains.find(c => c.key === argv.source);
        if (!src) throw new Error(`Source chain '${argv.source}' not found`);
    } else {
        src = pickSourceChain(chains);
    }
    
    const provider = new ethers.providers.JsonRpcProvider({ url: src.rpc, timeout: 600000 });
    const wallet = await getWalletForProvider(provider);
    console.log(`\nSource: ${src.display} (id=${src.chainId})\nSender: ${wallet.address}`);

    const defaultRecipient = wallet.address;
    const recipient = argv.recipient || (argv.source ? defaultRecipient : promptAddress('Recipient (wallet B)', defaultRecipient));

    // Determine destination chains
    let dests;
    if (argv.destinations) {
        // Parse comma-separated list of destination chain keys
        const destKeys = argv.destinations.split(',').map(s => s.trim()).filter(Boolean);
        dests = destKeys.map(key => {
            const chain = chains.find(c => c.key === key);
            if (!chain) throw new Error(`Destination chain '${key}' not found`);
            return chain;
        });
        if (!dests.length) throw new Error('No valid destination chains specified');
    } else {
        // Interactive mode: prompt for destination selection
        const destCandidates = chains.filter(c => c.chainId !== src.chainId);
        console.log('Destination chains (comma-separated indices). Press ENTER for all:');
        destCandidates.forEach((c, i) => console.log(`  [${i}] ${c.display} (id=${c.chainId})`));
        const sel = prompt('Select: ');
        dests = (sel && sel.trim().length)
            ? sel.split(',').map(s => destCandidates[Number(s.trim())]).filter(Boolean)
            : destCandidates;
    }
    if (!dests.length) throw new Error('No destination chains selected');
    const outboundIds = dests.map(d => d.chainId);

    const balance = await provider.getBalance(wallet.address);
    console.log(`Current balance on ${src.display}: ${formatEth(balance)} ${src.currency}`);
    const nonce = await provider.getTransactionCount(wallet.address, 'pending');

    // Choose distribution mode
    const hasAmountFlag = !!argv.amount;
    const overridePerChain = hasAmountFlag ? false : confirmAction('Override equal split and enter per-destination amounts? (Y/N): ');
    const overrideRecipientPerChain = hasAmountFlag ? false : confirmAction('Override recipient per destination? (Y/N): ');

    if (!overridePerChain && !overrideRecipientPerChain) {
        // Single deposit, equal split handled by Gas.zip
        const amtEthStr = argv.amount || prompt(`Amount to deposit on ${src.display} in ETH (e.g., 0.05): `);
        if (!amtEthStr || !amtEthStr.trim()) throw new Error('Amount is required');
        const amountWei = utils.parseEther(amtEthStr.trim());
        if (amountWei.lte(0)) throw new Error('Amount must be > 0');
        if (amountWei.gte(balance)) throw new Error('Amount exceeds balance');

        const calldata = await fetchCalldata(src.chainId, amountWei, outboundIds, recipient, wallet.address);
        const feeEst = await estimateTxFee(provider, wallet.address, DIRECT_FORWARDER, amountWei, src.gasOverrides || {});

        console.log('\nPlanned distribution (single deposit, equal split by Gas.zip):');
        console.log(`- Source        : ${src.display} (id=${src.chainId})`);
        console.log(`- Recipient     : ${recipient}`);
        console.log(`- Outbound to   : ${dests.map(d => `${d.display}(${d.chainId})`).join(', ')}`);
        console.log(`- Send amount   : ${formatEth(amountWei)} ${src.currency}`);
        console.log(`- Est. fee cost : ${formatEth(feeEst.cost)} ${src.currency}`);
        console.log(`- Nonce         : ${nonce} -> ${nonce + 1}`);
        console.log(`- Forwarder     : ${DIRECT_FORWARDER}`);

        if (!confirmAction('Proceed with distribute? (Y/N): ')) {
            console.log('Aborted.');
            return;
        }

        const overrides = await normalizeGasOverrides(provider, src.gasOverrides || {});
        const tx = await wallet.sendTransaction({ to: DIRECT_FORWARDER, data: calldata, value: amountWei, ...overrides });
        console.log(`${src.display}: sent tx ${tx.hash} (waiting 1 confirmation...)`);
        await tx.wait(1);
        console.log(`${src.display}: confirmed at ${src.explorer}/tx/${tx.hash}`);
        return;
    }

    // Per-destination override mode: multiple deposits, one tx per destination
    const perDestPlans = [];
    let runningNonce = nonce;
    for (const d of dests) {
        // Recipient selection for this destination (optional override)
        let destRecipient = recipient;
        if (overrideRecipientPerChain) {
            const toInput = prompt(`Recipient for ${d.display} (${d.chainId}) [blank = ${recipient}]: `) || '';
            const trimmedTo = toInput.trim();
            if (trimmedTo) destRecipient = askAddress('destRecipient', trimmedTo);
        }

        // Amount input (optional if overridePerChain; if only recipient override chosen, allow blank to mean equal handling -> we still need an amount, so prompt mandatory amount if only recipient override was chosen)
        let wei = ethers.BigNumber.from(0);
        if (overridePerChain) {
            const label = `${d.display} (${d.chainId}) amount in ETH (blank=skip): `;
            const amtStr = prompt(label) || '';
            const trimmed = amtStr.trim();
            if (!trimmed) { continue; }
            try { wei = utils.parseEther(trimmed); } catch { throw new Error(`Invalid amount for ${d.display}`); }
        } else {
            // Only recipient override was chosen; require an amount per dest
            const amtStr = prompt(`${d.display} (${d.chainId}) amount in ETH: `) || '';
            const trimmed = amtStr.trim();
            if (!trimmed) { throw new Error(`Amount required for ${d.display} when overriding recipient per destination`); }
            try { wei = utils.parseEther(trimmed); } catch { throw new Error(`Invalid amount for ${d.display}`); }
        }

        if (wei.lte(0)) continue;
        if (wei.gte(balance)) throw new Error(`Amount for ${d.display} exceeds current balance`);

        // Build calldata specific to this destination
        const calldata = await fetchCalldata(src.chainId, wei, [d.chainId], destRecipient, wallet.address);
        const feeEst = await estimateTxFee(provider, wallet.address, DIRECT_FORWARDER, wei, src.gasOverrides || {});
        perDestPlans.push({ dest: d, to: destRecipient, amount: wei, calldata, feeEst, nonceFrom: runningNonce, nonceTo: runningNonce + 1 });
        runningNonce += 1;
    }

    if (perDestPlans.length === 0) {
        throw new Error('No destination amounts provided.');
    }

    console.log('\nPlanned per-destination distribution (multiple deposits):');
    for (const p of perDestPlans) {
        console.log(`- ${p.dest.display} (${p.dest.chainId}): ${formatEth(p.amount)} ${src.currency} -> ${p.to}`);
        console.log(`  Est. fee cost : ${formatEth(p.feeEst.cost)} ${src.currency}`);
        console.log(`  NONCE         : ${p.nonceFrom} -> ${p.nonceTo}`);
    }
    const totalSend = perDestPlans.reduce((acc, p) => acc.add(p.amount), ethers.BigNumber.from(0));
    console.log(`Total send: ${formatEth(totalSend)} ${src.currency}`);
    if (totalSend.gte(balance)) throw new Error('Total send exceeds current balance');

    if (!confirmAction('Proceed to send all planned per-destination deposits? (Y/N): ')) {
        console.log('Aborted.');
        return;
    }

    const results = [];
    for (const p of perDestPlans) {
        try {
            const overrides = await normalizeGasOverrides(provider, src.gasOverrides || {});
            const tx = await wallet.sendTransaction({ to: DIRECT_FORWARDER, data: p.calldata, value: p.amount, ...overrides });
            console.log(`${src.display} -> ${p.dest.display}: sent tx ${tx.hash} (waiting 1 confirmation...)`);
            await tx.wait(1);
            console.log(`${src.display} -> ${p.dest.display}: confirmed at ${src.explorer}/tx/${tx.hash}`);
            results.push({ d: p.dest, txHash: tx.hash, skipped: false });
        } catch (e) {
            console.error(`Send failed for ${p.dest.display}:`, e?.message || e);
            results.push({ d: p.dest, txHash: null, skipped: false, error: e });
        }
    }

    console.log('Summary:');
    for (const r of results) {
        if (r.skipped) console.log(`- ${r.d.display}: skipped`);
        else if (r.txHash) console.log(`- ${r.d.display}: ${src.explorer}/tx/${r.txHash}`);
        else console.log(`- ${r.d.display}: FAILED`);
    }
}

async function cmdConcentrate(argv = {}) {
    const chains = buildPerChainConfig();
    
    // Determine target chain
    let target;
    if (argv.target) {
        target = chains.find(c => c.key === argv.target);
        if (!target) throw new Error(`Target chain '${argv.target}' not found`);
    } else {
        console.log('Available target chains:');
        chains.forEach((c, i) => console.log(`  [${i}] ${c.display} (id=${c.chainId})`));
        const idxStr = prompt('Select TARGET chain index (receive consolidated gas): ');
        const idx = Number(idxStr);
        if (!Number.isInteger(idx) || idx < 0 || idx >= chains.length) throw new Error('Invalid selection');
        target = chains[idx];
    }

    // Allow overriding the recipient (wallet B) who will receive on the TARGET chain; default to Wallet A
    const targetProvider = new ethers.providers.JsonRpcProvider({ url: target.rpc, timeout: 600000 });
    const targetWallet = await getWalletForProvider(targetProvider);
    const recipient = argv.recipient || (argv.target ? targetWallet.address : promptAddress('Recipient (wallet B on target)', targetWallet.address));

    const results = [];

    // Determine source chains
    let senders;
    if (argv.sources) {
        // Parse comma-separated list of source chain keys
        const sourceKeys = argv.sources.split(',').map(s => s.trim()).filter(Boolean);
        senders = sourceKeys.map(key => {
            const chain = chains.find(c => c.key === key);
            if (!chain) throw new Error(`Source chain '${key}' not found`);
            return chain;
        });
        if (!senders.length) throw new Error('No valid source chains specified');
    } else {
        // Interactive mode: exclude target chain based on flag or prompt
        const excludeTarget = argv.target 
            ? (argv.excludeTarget !== false) // Default true if target specified
            : confirmAction('Exclude target chain from senders? (Y/N): ');
        senders = chains.filter(c => !excludeTarget || c.chainId !== target.chainId);
    }

    // Build plans
    for (const c of senders) {
        const provider = new ethers.providers.JsonRpcProvider({ url: c.rpc, timeout: 600000 });
        const wallet = await getWalletForProvider(provider);
        const balance = await provider.getBalance(wallet.address);
        const nonce = await provider.getTransactionCount(wallet.address, 'pending');

        // Amount policy: leave dust => amount = floor(balance * 9900 / 10000) minus estimated fee
        const ninetyNine = balance.mul(9900).div(10000);
        let calldata = null;
        let feeEst = null;
        let amountToSend = ethers.BigNumber.from(0);
        let error = null;
        let mode = 'gaszip'; // or 'direct'

        try {
            const sameChain = c.chainId === target.chainId;
            const sameAddress = wallet.address.toLowerCase() === recipient.toLowerCase();
            if (sameChain && !sameAddress) {
                // Direct native transfer to recipient on the same chain
                mode = 'direct';
                feeEst = await estimateTxFee(provider, wallet.address, recipient, ninetyNine, c.gasOverrides || {});
                amountToSend = ninetyNine.sub(feeEst.cost);
                if (amountToSend.lte(0)) amountToSend = ethers.BigNumber.from(0);
            } else if (sameChain && sameAddress) {
                // Nothing to consolidate for this chain
                amountToSend = ethers.BigNumber.from(0);
            } else {
                // Cross-chain via Gas.zip
                // Initial fee estimate done after we fetch calldata
                calldata = await fetchCalldata(c.chainId, ninetyNine, [target.chainId], recipient, wallet.address);
                feeEst = await estimateTxFee(provider, wallet.address, DIRECT_FORWARDER, ninetyNine, c.gasOverrides || {});
                amountToSend = ninetyNine.sub(feeEst.cost);
                if (amountToSend.lte(0)) amountToSend = ethers.BigNumber.from(0);
                // Rebuild calldata for the finalized amount for safety
                if (amountToSend.gt(0)) {
                    calldata = await fetchCalldata(c.chainId, amountToSend, [target.chainId], recipient, wallet.address);
                }
            }
        } catch (e) {
            error = e;
        }

        results.push({ chain: c, provider, wallet, balance, nonce, feeEst, amountToSend, calldata, error, mode });
    }

    // Summary
    console.log('\nPlanned concentration to', `${target.display} (id=${target.chainId})`);
    console.log(`Recipient on target: ${recipient}`);
    for (const p of results) {
        const { chain: c, amountToSend, nonce, error, mode } = p;
        if (error) {
            console.log(`[${c.display}] ERROR preparing: ${error?.message || error}`);
            console.log(`  NONCE: ${nonce} -> ${nonce} (skipped)`);
        } else {
            const willSend = amountToSend.gt(0);
            const pathLabel = (mode === 'direct') ? `direct -> ${recipient}` : '-> forwarder';
            console.log(`[${c.display}] send ${formatEth(amountToSend)} ${c.currency} ${pathLabel}`);
            console.log(`  NONCE: ${nonce} -> ${willSend ? nonce + 1 : nonce}${willSend ? '' : ' (no send)'}`);
        }
    }

    if (!confirmAction('Proceed to concentrate from ALL listed chains? (Y/N): ')) {
        console.log('Aborted.');
        return;
    }

    // Execute sequentially
    const sent = [];
    for (const p of results) {
        const { chain: c, provider, wallet, amountToSend, calldata, error, mode } = p;
        try {
            if (error || !calldata || amountToSend.lte(0)) {
                if (error || amountToSend.lte(0)) {
                    const reason = error ? (error?.message || error) : 'amount to send is 0';
                    console.log(`Skipping ${c.display}: ${reason}`);
                    sent.push({ c, txHash: null, skipped: true });
                    continue;
                }
            }
            const overrides = await normalizeGasOverrides(provider, c.gasOverrides || {});
            const tx = (mode === 'direct')
                ? await wallet.sendTransaction({ to: recipient, value: amountToSend, ...overrides })
                : await wallet.sendTransaction({ to: DIRECT_FORWARDER, data: calldata, value: amountToSend, ...overrides });
            console.log(`${c.display}: sent tx ${tx.hash} (waiting 1 confirmation...)`);
            await tx.wait(1);
            console.log(`${c.display}: confirmed at ${c.explorer}/tx/${tx.hash}`);
            sent.push({ c, txHash: tx.hash, skipped: false });
        } catch (e) {
            console.error(`Send failed on ${c.display}:`, e?.message || e);
            sent.push({ c, txHash: null, skipped: false, error: e });
        }
    }

    console.log('Summary:');
    for (const r of sent) {
        if (r.skipped) console.log(`- ${r.c.display}: skipped`);
        else if (r.txHash) console.log(`- ${r.c.display}: ${r.c.explorer}/tx/${r.txHash}`);
        else console.log(`- ${r.c.display}: FAILED`);
    }
}

async function cmdList() {
    const allChains = Object.values(chainConfig);
    const keys = allChains.map(c => c.key).sort();
    console.log('Available chain keys:');
    console.log(keys.join(', '));
    console.log('');
    
    const chains = buildPerChainConfig();
    if (chains.length > 0) {
        const firstProvider = new ethers.providers.JsonRpcProvider({ url: chains[0].rpc, timeout: 600000 });
        const wallet = await getWalletForProvider(firstProvider);
        const balance = await firstProvider.getBalance(wallet.address);
        console.log(`Wallet address: ${wallet.address}`);
        console.log(`Balance on ${chains[0].display}: ${utils.formatEther(balance)} ${chains[0].currency}`);
    }
}

async function cmdInfo() {
    const chains = buildPerChainConfig();
    
    // Get wallet address from first chain
    const firstProvider = new ethers.providers.JsonRpcProvider({ url: chains[0].rpc, timeout: 600000 });
    const wallet = await getWalletForProvider(firstProvider);
    
    console.log(`*******\nWallet address: ${wallet.address}\n*******\n`);
    
    // Collect chain info
    const tableData = [];
    
    for (const chain of chains) {
        try {
            const provider = new ethers.providers.JsonRpcProvider({ url: chain.rpc, timeout: 600000 });
            const chainWallet = await getWalletForProvider(provider);
            
            // Fetch balance and nonce in parallel
            const [balance, nonce] = await Promise.all([
                provider.getBalance(chainWallet.address),
                provider.getTransactionCount(chainWallet.address, 'latest')
            ]);
            
            const balanceFormatted = utils.formatEther(balance);
            const balanceRounded = parseFloat(balanceFormatted).toFixed(6);
            
            tableData.push({
                'Chain': chain.display,
                'Key': chain.key,
                'Balance': `${balanceRounded} ${chain.currency}`,
                'Nonce': nonce
            });
        } catch (error) {
            tableData.push({
                'Chain': chain.display,
                'Key': chain.key,
                'Balance': 'ERROR',
                'Nonce': 'ERROR'
            });
        }
    }
    
    // Print table
    console.table(tableData);
    
    // Summary
    const totalChains = tableData.length;
    const errorChains = tableData.filter(row => row.Balance === 'ERROR').length;
    console.log(`\nTotal chains: ${totalChains}`);
    if (errorChains > 0) {
        console.log(`Errors: ${errorChains}`);
    }
}

async function main() {
    // CLI argument parsing
    const argv = yargs(hideBin(process.argv))
        .scriptName('gas_zip_helper')
        .usage('Usage: $0 <command> [options]')
        .command('list', 'List available chain keys and wallet balance', {}, async () => {
            await cmdList();
            process.exit(0);
        })
        .command('info', 'Display wallet address and balance/nonce table for all chains', {}, async () => {
            await cmdInfo();
            process.exit(0);
        })
        .command(
            'distribute',
            'Distribute funds from one chain to multiple destination chains via Gas.zip',
            (yargs) => {
                return yargs
                    .option('source', {
                        type: 'string',
                        describe: 'Source chain key (e.g., arbitrum_one)'
                    })
                    .option('destinations', {
                        type: 'string',
                        describe: 'Comma-separated destination chain keys'
                    })
                    .option('recipient', {
                        type: 'string',
                        describe: 'Recipient address on destination chains'
                    })
                    .option('amount', {
                        type: 'string',
                        describe: 'Amount in ETH to distribute (e.g., 0.05)'
                    })
                    .example('$0 distribute', 'Interactive mode')
                    .example('$0 distribute --source arbitrum_one --destinations base,optimism', 'Specify source and destinations')
                    .example('$0 distribute --source arbitrum_one --destinations base,optimism --amount 0.05', 'Distribute 0.05 ETH from Arbitrum to Base and Optimism')
                    .example('$0 distribute --source arbitrum_one --destinations base,optimism --amount 0.05 --recipient 0x123...', 'Specify all parameters');
            },
            async (argv) => {
                await cmdDistribute(argv);
            }
        )
        .command(
            'concentrate',
            'Concentrate funds from multiple chains to one target chain via Gas.zip',
            (yargs) => {
                return yargs
                    .option('target', {
                        type: 'string',
                        describe: 'Target chain key to receive consolidated funds'
                    })
                    .option('sources', {
                        type: 'string',
                        describe: 'Comma-separated list of source chain keys (e.g., arbitrum_one,optimism,base)'
                    })
                    .option('recipient', {
                        type: 'string',
                        describe: 'Recipient address on target chain'
                    })
                    .option('exclude-target', {
                        type: 'boolean',
                        default: true,
                        describe: 'Exclude target chain from sender list (when --sources not specified)'
                    })
                    .example('$0 concentrate', 'Interactive mode')
                    .example('$0 concentrate --target arbitrum_one --recipient 0x123...', 'Concentrate from all chains to Arbitrum')
                    .example('$0 concentrate --target base --sources arbitrum_one,optimism', 'Concentrate from specific chains to Base');
            },
            async (argv) => {
                await cmdConcentrate(argv);
            }
        )
        .demandCommand(1, 'You must specify a command: list, info, distribute, or concentrate')
        .alias('h', 'help')
        .help()
        .wrap(Math.min(120, process.stdout.columns || 100))
        .argv;
}

main().catch((err) => {
    console.error('Error:', err?.message || err);
    process.exit(1);
});
