// @ts-nocheck
require("@nomiclabs/hardhat-ethers");
require('@nomicfoundation/hardhat-verify');
require("@nomicfoundation/hardhat-foundry");
require("hardhat-deploy");
require("dotenv").config();

// Import chain configurations from chains.mjs
const { chainConfig } = require('./chainconfig/chains.mjs');

/**
 * Helper function to determine API URL for block explorer
 * Uses explorerApiUrl from chains.mjs if available, otherwise falls back to generic patterns
 */
const getExplorerApiUrl = (chain) => {
  const upperKey = chain.key.toUpperCase();
  
  // Priority 1: Check for explicit env var override
  const explicitApiUrl = process.env[`${upperKey}_EXPLORER_API_URL`];
  if (explicitApiUrl) return explicitApiUrl;
  
  // Priority 2: Use explorerApiUrl from chain config if available
  if (chain.explorerApiUrl) return chain.explorerApiUrl;
  
  // Priority 3: Fallback to generic pattern for Blockscout and other explorers
  const explorerUrl = chain.explorerUrl;
  if (!explorerUrl) return "";
  
  // Blockscout-specific pattern: https://blockscout.domain.com -> https://blockscout-api.domain.com/api
  if (explorerUrl.includes('blockscout')) {
    const cleanUrl = explorerUrl.replace(/\/+$/, '');
    const apiUrl = cleanUrl.replace('://blockscout.', '://blockscout-api.');
    return `${apiUrl}/api`;
  }
  
  // Generic fallback: ${explorerUrl}/api (works for Routescan and other explorers)
  return `${explorerUrl.replace(/\/+$/, '')}/api`;
};

/**
 * Helper to check if explorer is Blockscout-based
 * Blockscout explorers don't require an API key
 */
const isBlockscout = (explorerUrl) => {
  if (!explorerUrl) return false;
  const url = explorerUrl.toLowerCase();
  return url.includes('blockscout') || 
         url.includes('routescan') ||
         url.includes('blockscout.injective');
};

// ============================================================================
// PROGRAMMATICALLY GENERATE NETWORK CONFIGURATIONS
// ============================================================================

const networks = {};
for (const [key, chain] of Object.entries(chainConfig)) {
  if (!chain.chainId) continue;
  
  // Use RPC URL from chain config (rpcUrls[defaultRpcUrlIndex])
  let rpcUrl;
  if (chain.rpcUrls && chain.rpcUrls.length > 0) {
    const idx = chain.defaultRpcUrlIndex || 0;
    rpcUrl = chain.rpcUrls[idx];
  }
  
  // Fallback for verification-only (won't work for actual transactions)
  if (!rpcUrl) {
    rpcUrl = 'http://localhost:8545';
  }
  
  networks[chain.key] = {
    url: rpcUrl,
    accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    chainId: chain.chainId,
    gasLimit: 2e9,
  };
}

const etherscanApiKeys = {};
for (const [key, chain] of Object.entries(chainConfig)) {
  if (!chain.explorerUrl) continue;
  if (isBlockscout(chain.explorerUrl)) {
    etherscanApiKeys[chain.key] = "blockscout-no-api-key-required";
  } else {
    etherscanApiKeys[chain.key] = process.env.ETHERSCAN_API_KEY || "";
  }
}

// ============================================================================
// PROGRAMMATICALLY GENERATE CUSTOM CHAINS FOR VERIFICATION
// ============================================================================

const customChains = [];
for (const [key, chain] of Object.entries(chainConfig)) {
  if (chain.explorerUrl && chain.chainId) {
    const apiURL = getExplorerApiUrl(chain);
    const browserURL = chain.explorerUrl;
    
    if (apiURL && browserURL) {
      customChains.push({
        network: chain.key,
        chainId: chain.chainId,
        urls: {
          apiURL,
          browserURL,
        },
      });
    }
  }
}

// ============================================================================
// HARDHAT CONFIG EXPORT
// ============================================================================

module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
      evmVersion: "paris"
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  networks,
  etherscan: {
    // Per-network keys so Blockscout customChains work without Etherscan v2
    // Uncomment for etherscan v2 based verification: 
    apiKey: process.env.ETHERSCAN_API_KEY,
    
    // For non-etherscan chains, use per-network keys
    // apiKey: etherscanApiKeys,
    customChains,
  },
  // Sourcify config must be at the top level (not inside etherscan)
  sourcify: {
    enabled: false,
  },
  namedAccounts: {
    deployer: {
      default: 0, // Here, 0 refers to the first account in the mnemonic
    },
  },
};