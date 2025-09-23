import 'dotenv/config';
import PromptSync from "prompt-sync";
import { Wallet, ethers, utils } from "ethers";
import { decrypt_mnemonic } from "./wallet_manager.mjs";
import { configuredChains, getChainsByKeys, getRpcUrl } from './chains.mjs';

const prompt = PromptSync();

const confirmAction = (t) => {
    const answer = prompt(t);
    return answer.toLowerCase() === "y";
};

// Wallet sources (same pattern as other scripts)
const ENCRYPTED_WALLET = process.env.ENCRYPTED_WALLET ? JSON.parse(process.env.ENCRYPTED_WALLET) : null;
const RAW_PRIVATE_KEY = process.env.RUNTIME_DEPLOYER_PRIVKEY || null;

let useEncryptedWallet = false;
let usePrivateKey = false;

if (!ENCRYPTED_WALLET && !RAW_PRIVATE_KEY) {
    throw new Error("No wallet configuration provided. Please specify either ENCRYPTED_WALLET or RUNTIME_DEPLOYER_PRIVKEY in your .env file.");
}

if (ENCRYPTED_WALLET && RAW_PRIVATE_KEY) {
    console.log("Both encrypted wallet and private key are configured in your .env file.");
    useEncryptedWallet = confirmAction("Would you like to use the encrypted wallet? (Y/N): ");
    usePrivateKey = !useEncryptedWallet;
} else {
    useEncryptedWallet = !!ENCRYPTED_WALLET;
    usePrivateKey = !!RAW_PRIVATE_KEY;
}

// Optional: specify exact chain keys here; leave empty array to use all configured chains
const SELECTED_CHAIN_KEYS = ['ethereum', 'arbitrum_one', 'avalanche', 'optimism', 'base', 'polygon', 'linea', 'sonic', 'sei', 'unichain'];
const SOURCE_CHAINS = SELECTED_CHAIN_KEYS.length
  ? getChainsByKeys(SELECTED_CHAIN_KEYS, { requireRpc: true })
  : configuredChains();

const OVERRIDES = new Map([
  ['polygon', {
    maxFeePerGas: ethers.utils.parseUnits('50', 'gwei'),
    maxPriorityFeePerGas: ethers.utils.parseUnits('30', 'gwei'),
  }],
]);

const CHAINS = SOURCE_CHAINS.map(c => ({
  key: c.key,
  display: c.display,
  currency: c.currency,
  rpc: getRpcUrl(c),
  explorer: c.explorerUrl,
  gasOverrides: OVERRIDES.get(c.key) || {},
}));

const buildPerChainConfig = () => {
    const missing = [];
    const chains = CHAINS.map((c) => {
        const required = { rpc: c.rpc, explorer: c.explorer };
        const missingKeys = Object.entries(required)
            .filter(([, v]) => !v)
            .map(([k]) => `${c.key}.${k}`);
        if (missingKeys.length) missing.push(...missingKeys);
        return { ...c };
    });
    if (missing.length) {
        throw new Error(`Missing environment variables for chains:\n  - ${missing.join("\n  - ")}`);
    }
    if (chains.length === 0) {
        throw new Error("No chains configured (RPC missing). Set the RPC env vars in .env.");
    }
    return chains;
};

const getWalletForProvider = async (provider) => {
    if (useEncryptedWallet) {
        const seedPhrase = await decrypt_mnemonic(ENCRYPTED_WALLET);
        const wallet = Wallet.fromMnemonic(seedPhrase);
        return wallet.connect(provider);
    }
    if (usePrivateKey) return new Wallet(RAW_PRIVATE_KEY, provider);
    throw new Error("No wallet available");
};

const askAddress = (label, def) => {
    let v = def && def.length ? def : prompt(`${label}${def ? ` [default ${def}]` : ""}: `);
    if (!v || v.length === 0) throw new Error(`${label} is required`);
    if (!ethers.utils.isAddress(v)) throw new Error(`${label} is not a valid address: ${v}`);
    return ethers.utils.getAddress(v);
};

// Normalize gas overrides to be compatible with current chain conditions (e.g., base fee on EIP-1559 chains)
const normalizeGasOverrides = async (provider, overrides = {}) => {
    const feeData = await provider.getFeeData();
    const latest = await provider.getBlock('latest');
    const baseFee = latest && latest.baseFeePerGas ? latest.baseFeePerGas : null;

    // Determine tip and cap
    const tip = overrides.maxPriorityFeePerGas
        || feeData.maxPriorityFeePerGas
        || (ethers.utils.parseUnits ? ethers.utils.parseUnits("2", "gwei") : ethers.BigNumber.from("2000000000"));

    let cap = overrides.maxFeePerGas || feeData.maxFeePerGas || feeData.gasPrice;
    if (!cap && baseFee) {
        cap = baseFee.add(tip);
    }
    if (!cap) throw new Error("Fee data unavailable");

    // Ensure cap >= baseFee + tip where base fee exists
    if (baseFee) {
        const minCap = baseFee.add(tip);
        if (cap.lt(minCap)) cap = minCap;
    }

    // Return overrides suitable for EIP-1559 or legacy
    if (baseFee) {
        return { maxFeePerGas: cap, maxPriorityFeePerGas: tip };
    } else {
        return { gasPrice: cap };
    }
};

const estimateTxFee = async (provider, from, to, valueWei, overrides = {}) => {
    // For estimateGas, avoid passing possibly-incompatible fee overrides (some RPCs reject low caps)
    const txReq = { to, from, value: valueWei };
    const gasLimit = await provider.estimateGas(txReq);

    // Determine a realistic price using normalized overrides
    const norm = await normalizeGasOverrides(provider, overrides);
    const price = norm.maxFeePerGas || norm.gasPrice;
    if (!price) throw new Error("Fee data unavailable");

    const gasLimitBuffered = gasLimit.mul(120).div(100);
    const cost = gasLimitBuffered.mul(price);
    return { gasLimit, gasLimitBuffered, price, cost };
};

const main = async () => {
    console.log("Preparing multi-chain ETH transfer (99% of wallet balance)\n");
    const chains = buildPerChainConfig();

    const firstProvider = new ethers.providers.JsonRpcProvider({ url: chains[0].rpc, timeout: 600000 });
    const wallet0 = await getWalletForProvider(firstProvider);
    console.log(`*******\nSender address: ${wallet0.address}\n*******`);

    const defaultRecipient = process.env.FUNDS_RECIPIENT || "";
    const recipient = askAddress("Recipient address", defaultRecipient);

    // Gather per-chain info and compute planned send amounts
    const plans = [];
    for (const c of chains) {
        const provider = new ethers.providers.JsonRpcProvider({ url: c.rpc, timeout: 600000 });
        const wallet = await getWalletForProvider(provider);
        const balance = await provider.getBalance(wallet.address);
        const nonce = await provider.getTransactionCount(wallet.address, "pending");

        // Target is 99% of balance, but must subtract fee; start with a placeholder value to estimate gas
        const ninetyNinePct = balance.mul(99).div(100);

        // We'll estimate gas with a tentative value; price affects only the fee cost
        try {
            const feeEst = await estimateTxFee(provider, wallet.address, recipient, ninetyNinePct, c.gasOverrides || {});

            // Compute final amount to send: 99% minus fee
            let amountToSend = ninetyNinePct.sub(feeEst.cost);
            if (amountToSend.lte(0)) amountToSend = ethers.BigNumber.from(0);

            plans.push({ chain: c, provider, wallet, balance, nonce, feeEst, amountToSend });
        } catch (e) {
            console.error(`Fee estimation failed on ${c.display} (${c.key}):`, e && e.message ? e.message : e);
            // Push a plan entry noting the error so we can summarize and optionally skip later
            plans.push({ chain: c, provider, wallet, balance, nonce, feeEst: null, amountToSend: ethers.BigNumber.from(0), error: e });
        }
    }

    console.log("Planned transfers:");
    for (const p of plans) {
        const { chain: c, amountToSend, nonce } = p;
        if (p.error) {
            console.log(`[${c.display}] ERROR estimating fees: ${p.error && p.error.message ? p.error.message : p.error}`);
            console.log(`  NONCE: ${nonce} -> ${nonce} (skipped)`);
        } else {
            console.log(`[${c.display}] ${utils.formatEther(amountToSend)} ${c.currency} ${p.wallet.address} -> ${recipient}`);
            const willSend = amountToSend.gt(0);
            console.log(`  NONCE: ${nonce} -> ${willSend ? nonce + 1 : nonce}${willSend ? "" : " (no send)"}`);
        }
    }

    if (!confirmAction("Proceed to send on ALL chains? (Y/N): ")) {
        console.log("Transfer aborted by the user.");
        return;
    }

    // Execute transfers sequentially
    const results = [];
    for (const p of plans) {
        const { chain: c, provider, wallet, amountToSend } = p;
        try {
            if (amountToSend.lte(0)) {
                const reason = p.error ? `fee estimation error (${p.error && p.error.message ? p.error.message : p.error})` : "amount to send is 0 or insufficient after fees.";
                console.log(`Skipping ${c.display}: ${reason}`);
                results.push({ c, txHash: null, skipped: true });
                continue;
            }
            const overrides = await normalizeGasOverrides(provider, c.gasOverrides || {});
            const tx = await wallet.sendTransaction({ to: recipient, value: amountToSend, ...overrides });
            console.log(`${c.display}: sent tx ${tx.hash} (waiting 1 confirmation...)`);
            await tx.wait(1);
            console.log(`${c.display}: confirmed at ${c.explorer}/tx/${tx.hash}`);
            results.push({ c, txHash: tx.hash, skipped: false });
        } catch (e) {
            console.error(`Transfer failed on ${c.display}:`, e.message || e);
            results.push({ c, txHash: null, skipped: false, error: e });
        }
    }

    console.log("Summary:");
    for (const r of results) {
        if (r.skipped) {
            console.log(`- ${r.c.display}: skipped`);
        } else if (r.txHash) {
            console.log(`- ${r.c.display}: ${r.c.explorer}/tx/${r.txHash}`);
        } else {
            console.log(`- ${r.c.display}: FAILED`);
        }
    }
};

main();