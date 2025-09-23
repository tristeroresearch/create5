require("@nomiclabs/hardhat-ethers");
require('@nomicfoundation/hardhat-verify');
require("@nomicfoundation/hardhat-foundry");
require("hardhat-deploy");
require("dotenv").config();
const fs = require('fs');

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
  networks: {
    ethereum: {
      url: process.env.ETHEREUM_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    avalanche: {
      url: process.env.AVALANCHE_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    arbitrum_one: {
      url: process.env.ARBITRUM_ONE_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    base: {
      url: process.env.BASE_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    linea: {
      url: process.env.LINEA_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    bsc: {
      url: process.env.BSC_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    optimism: {
      url: process.env.OPTIMISM_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    polygon: {
      url: process.env.POLYGON_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    sonic: {
      url: process.env.SONIC_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    unichain: {
      url: process.env.UNICHAIN_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    worldchain: {
      url: process.env.WORLDCHAIN_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    codex: {
      url: process.env.CODEX_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    fantom: {
      url: process.env.FANTOM_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    moonriver: {
      url: process.env.MOONRIVER_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    aurora: {
      url: process.env.AURORA_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    cronos: {
      url: process.env.CRONOS_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    kava: {
      url: process.env.KAVA_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    mode: {
      url: process.env.MODE_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    apechain: {
      url: process.env.APECHAIN_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    berachain: {
      url: process.env.BERACHAIN_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    swell: {
      url: process.env.SWELL_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    hyperevm: {
      url: process.env.HYPEREVM_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    polygon_zkevm: {
      url: process.env.POLYGON_ZKEVM_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    zksync_era: {
      url: process.env.ZKSYNC_ERA_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    scroll: {
      url: process.env.SCROLL_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    gnosis: {
      url: process.env.GNOSIS_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    sei: {
      url: process.env.SEI_RPC || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    bittorrent: {
      url: process.env.BITTORRENT_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    fraxtal: {
      url: process.env.FRAXTAL_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    opbnb: {
      url: process.env.OPBNB_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    taiko: {
      url: process.env.TAIKO_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    xdc: {
      url: process.env.XDC_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    sophon: {
      url: process.env.SOPHON_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    abstract: {
      url: process.env.ABSTRACT_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    katana: {
      url: process.env.KATANA_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    arbitrum_nova: {
      url: process.env.ARBITRUM_NOVA_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    boba: {
      url: process.env.BOBA_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    harmony: {
      url: process.env.HARMONY_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    gravity: {
      url: process.env.GRAVITY_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    metis: {
      url: process.env.METIS_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    soneium: {
      url: process.env.SONEIUM_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    ancient8: {
      url: process.env.ANCIENT8_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    celo: {
      url: process.env.CELO_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    mantle: {
      url: process.env.MANTLE_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    },
    blast: {
      url: process.env.BLAST_RPC || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasLimit: 2e9,
    }
  },
  etherscan: {
    // apiKey: {
    //   ethereum_mainnet: process.env['ETHERSCAN_API_KEY'],
    //   avalanche_mainnet: process.env['SNOWSCAN_API_KEY'],
    //   arbitrum_mainnet: process.env['ARBISCAN_API_KEY'],
    //   base_mainnet: process.env['BASESCAN_API_KEY'],
    //   bsc_mainnet: process.env['BSCSCAN_API_KEY'],
    //   optimism_mainnet: process.env['OPTIMISM_API_KEY'],
    //   polygon_mainnet: process.env['POLYGONSCAN_API_KEY'],
    //   unichain_mainnet: process.env['UNICHAIN_API_KEY'],
    //   blast: process.env['BLASTSCAN_API_KEY'],
    //   mantle: process.env['MANTLESCAN_API_KEY'],
    //   apechain: process.env['APESCAN_API_KEY'],
    //   sepolia: process.env['ETHERSCAN_API_KEY'],
    //   sei: process.env['SEITRACE_API_KEY'],
    //   linea_mainnet: process.env['ETHERSCAN_API_KEY'],
    // },
    apiKey: process.env['ETHERSCAN_API_KEY'],  // single key for all explorers
    sourcify: {
      // Disabled by default
      // Doesn't need an API key
      enabled: true
    },
    customChains: [
      {
        network: "ethereum",
        chainId: 1,
        urls: {
          apiURL: "https://api.etherscan.io/api",
          browserURL: process.env['ETHEREUM_EXPLORER_URL']
        }
      },
      {
        network: "avalanche",
        chainId: 43114,
        urls: {
          apiURL: "https://api.snowscan.xyz/api",
          browserURL: process.env['AVALANCHE_EXPLORER_URL']
        }
      },
      {
        network: "arbitrum_one",
        chainId: 42161,
        urls: {
          apiURL: "https://api.arbiscan.io/api",
          browserURL: process.env['ARBITRUM_ONE_EXPLORER_URL']
        }
      },
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: process.env['BASE_EXPLORER_URL']
        }
      },
      {
        network: "bsc",
        chainId: 56,
        urls: {
          apiURL: "https://api.bscscan.com/api",
          browserURL: process.env['BSC_EXPLORER_URL']
        }
      },
      {
        network: "optimism",
        chainId: 10,
        urls: {
          apiURL: "https://api-optimistic.etherscan.io/api",
          browserURL: process.env['OPTIMISM_EXPLORER_URL']
        }
      },
      {
        network: "polygon",
        chainId: 137,
        urls: {
          apiURL: "https://api.polygonscan.com/api",
          browserURL: process.env['POLYGON_EXPLORER_URL']
        }
      },
      {
        network: "unichain",
        chainId: 130,
        urls: {
          apiURL: "https://api.uniscan.xyz/api",
          browserURL: process.env['UNICHAIN_EXPLORER_URL']
        }
      },
      {
        network: "linea",
        chainId: 59144,
        urls: {
          apiURL:
            process.env['LINEA_EXPLORER_API_URL'] ||
            (process.env['LINEA_EXPLORER_URL'] ? `${process.env['LINEA_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['LINEA_EXPLORER_URL']
        }
      },
      {
        network: "sonic",
        chainId: Number(process.env['SONIC_CHAIN_ID'] || 146),
        urls: {
          apiURL:
            process.env['SONIC_EXPLORER_API_URL'] ||
            (process.env['SONIC_EXPLORER_URL'] ? `${process.env['SONIC_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['SONIC_EXPLORER_URL']
        }
      },
      {
        network: "worldchain",
        chainId: Number(process.env['WORLDCHAIN_CHAIN_ID'] || 480),
        urls: {
          apiURL:
            process.env['WORLDCHAIN_EXPLORER_API_URL'] ||
            (process.env['WORLDCHAIN_EXPLORER_URL'] ? `${process.env['WORLDCHAIN_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['WORLDCHAIN_EXPLORER_URL']
        }
      },
      {
        network: "codex",
        chainId: Number(process.env['CODEX_CHAIN_ID'] || 81224),
        urls: {
          apiURL:
            process.env['CODEX_EXPLORER_API_URL'] ||
            (process.env['CODEX_EXPLORER_URL'] ? `${process.env['CODEX_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['CODEX_EXPLORER_URL']
        }
      },
      {
        network: "blast",
        chainId: 81457,
        urls: {
          apiURL: "https://api.blastscan.io/api",
          browserURL: process.env['BLAST_EXPLORER_URL']
        }
      },
      {
        network: "mantle",
        chainId: 5000,
        urls: {
          apiURL: "https://api.mantlescan.xyz/api",
          browserURL: process.env['MANTLE_EXPLORER_URL']
        }
      },
      {
        network: "apechain",
        chainId: 33139,
        urls: {
          apiURL: "https://api.apescan.io/api",
          browserURL: process.env['APECHAIN_EXPLORER_URL']
        }
      },
      {
        network: "sei",
        chainId: 1329,
        urls: {
          apiURL: "https://seitrace.com/pacific-1/api",
          browserURL: process.env['SEI_EXPLORER_URL']
        }
      },
      {
        network: "fantom",
        chainId: Number(process.env['FANTOM_CHAIN_ID'] || 250),
        urls: {
          apiURL:
            process.env['FANTOM_EXPLORER_API_URL'] ||
            (process.env['FANTOM_EXPLORER_URL'] ? `${process.env['FANTOM_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['FANTOM_EXPLORER_URL']
        }
      },
      {
        network: "moonriver",
        chainId: Number(process.env['MOONRIVER_CHAIN_ID'] || 1285),
        urls: {
          apiURL:
            process.env['MOONRIVER_EXPLORER_API_URL'] ||
            (process.env['MOONRIVER_EXPLORER_URL'] ? `${process.env['MOONRIVER_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['MOONRIVER_EXPLORER_URL']
        }
      },
      {
        network: "aurora",
        chainId: Number(process.env['AURORA_CHAIN_ID'] || 1313161554),
        urls: {
          apiURL:
            process.env['AURORA_EXPLORER_API_URL'] ||
            (process.env['AURORA_EXPLORER_URL'] ? `${process.env['AURORA_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['AURORA_EXPLORER_URL']
        }
      },
      {
        network: "cronos",
        chainId: Number(process.env['CRONOS_CHAIN_ID'] || 25),
        urls: {
          apiURL:
            process.env['CRONOS_EXPLORER_API_URL'] ||
            (process.env['CRONOS_EXPLORER_URL'] ? `${process.env['CRONOS_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['CRONOS_EXPLORER_URL']
        }
      },
      {
        network: "kava",
        chainId: Number(process.env['KAVA_CHAIN_ID'] || 2222),
        urls: {
          apiURL:
            process.env['KAVA_EXPLORER_API_URL'] ||
            (process.env['KAVA_EXPLORER_URL'] ? `${process.env['KAVA_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['KAVA_EXPLORER_URL']
        }
      },
      {
        network: "mode",
        chainId: Number(process.env['MODE_CHAIN_ID'] || 34443),
        urls: {
          apiURL:
            process.env['MODE_EXPLORER_API_URL'] ||
            (process.env['MODE_EXPLORER_URL'] ? `${process.env['MODE_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['MODE_EXPLORER_URL']
        }
      },
      {
        network: "berachain",
        chainId: Number(process.env['BERACHAIN_CHAIN_ID'] || 80094),
        urls: {
          apiURL:
            process.env['BERACHAIN_EXPLORER_API_URL'] ||
            (process.env['BERACHAIN_EXPLORER_URL'] ? `${process.env['BERACHAIN_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['BERACHAIN_EXPLORER_URL']
        }
      },
      {
        network: "swell",
        chainId: Number(process.env['SWELL_CHAIN_ID'] || 1923),
        urls: {
          apiURL:
            process.env['SWELL_EXPLORER_API_URL'] ||
            (process.env['SWELL_EXPLORER_URL'] ? `${process.env['SWELL_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['SWELL_EXPLORER_URL']
        }
      },
      // NOTE: HyperEVM deployment is cumbersome, see https://chatgpt.com/share/68b7408b-2250-8003-9562-3b535a0591f7
      {
        network: "hyperevm",
        chainId: Number(process.env['HYPEREVM_CHAIN_ID'] || 999),
        urls: {
          apiURL:
            process.env['HYPEREVM_EXPLORER_API_URL'] ||
            (process.env['HYPEREVM_EXPLORER_URL'] ? `${process.env['HYPEREVM_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['HYPEREVM_EXPLORER_URL']
        }
      },
      {
        network: "polygon_zkevm",
        chainId: Number(process.env['POLYGON_ZKEVM_CHAIN_ID'] || 1101),
        urls: {
          apiURL:
            process.env['POLYGON_ZKEVM_EXPLORER_API_URL'] ||
            (process.env['POLYGON_ZKEVM_EXPLORER_URL'] ? `${process.env['POLYGON_ZKEVM_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['POLYGON_ZKEVM_EXPLORER_URL']
        }
      },
      {
        network: "scroll",
        chainId: 534352,
        urls: {
          apiURL:
            process.env['SCROLL_EXPLORER_API_URL'] ||
            (process.env['SCROLL_EXPLORER_URL'] ? `${process.env['SCROLL_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['SCROLL_EXPLORER_URL']
        }
      },
      {
        network: "gnosis",
        chainId: 100,
        urls: {
          apiURL:
            process.env['GNOSIS_EXPLORER_API_URL'] ||
            (process.env['GNOSIS_EXPLORER_URL'] ? `${process.env['GNOSIS_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['GNOSIS_EXPLORER_URL']
        }
      },
      {
        network: "zksync_era",
        chainId: Number(process.env['ZKSYNC_ERA_CHAIN_ID'] || 324),
        urls: {
          apiURL:
            process.env['ZKSYNC_ERA_EXPLORER_API_URL'] ||
            (process.env['ZKSYNC_ERA_EXPLORER_URL'] ? `${process.env['ZKSYNC_ERA_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['ZKSYNC_ERA_EXPLORER_URL']
        }
      },
      {
        network: "bittorrent",
        chainId: 199,
        urls: {
          apiURL: process.env['BITTORRENT_EXPLORER_API_URL'] || (process.env['BITTORRENT_EXPLORER_URL'] ? `${process.env['BITTORRENT_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['BITTORRENT_EXPLORER_URL']
        }
      },
      {
        network: "fraxtal",
        chainId: 252,
        urls: {
          apiURL: process.env['FRAXTAL_EXPLORER_API_URL'] || (process.env['FRAXTAL_EXPLORER_URL'] ? `${process.env['FRAXTAL_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['FRAXTAL_EXPLORER_URL']
        }
      },
      {
        network: "opbnb",
        chainId: 204,
        urls: {
          apiURL: process.env['OPBNB_EXPLORER_API_URL'] || (process.env['OPBNB_EXPLORER_URL'] ? `${process.env['OPBNB_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['OPBNB_EXPLORER_URL']
        }
      },
      {
        network: "taiko",
        chainId: 167000,
        urls: {
          apiURL: process.env['TAIKO_EXPLORER_API_URL'] || (process.env['TAIKO_EXPLORER_URL'] ? `${process.env['TAIKO_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['TAIKO_EXPLORER_URL']
        }
      },
      {
        network: "xdc",
        chainId: 50,
        urls: {
          apiURL: process.env['XDC_EXPLORER_API_URL'] || (process.env['XDC_EXPLORER_URL'] ? `${process.env['XDC_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['XDC_EXPLORER_URL']
        }
      },
      {
        network: "sophon",
        chainId: 50104,
        urls: {
          apiURL: process.env['SOPHON_EXPLORER_API_URL'] || (process.env['SOPHON_EXPLORER_URL'] ? `${process.env['SOPHON_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['SOPHON_EXPLORER_URL']
        }
      },
      {
        network: "abstract",
        chainId: 2741,
        urls: {
          apiURL: process.env['ABSTRACT_EXPLORER_API_URL'] || (process.env['ABSTRACT_EXPLORER_URL'] ? `${process.env['ABSTRACT_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['ABSTRACT_EXPLORER_URL']
        }
      },
      {
        network: "katana",
        chainId: 747474,
        urls: {
          apiURL: process.env['KATANA_EXPLORER_API_URL'] || (process.env['KATANA_EXPLORER_URL'] ? `${process.env['KATANA_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['KATANA_EXPLORER_URL']
        }
      },
      {
        network: "arbitrum_nova",
        chainId: 42170,
        urls: {
          apiURL: process.env['ARBITRUM_NOVA_EXPLORER_API_URL'] || (process.env['ARBITRUM_NOVA_EXPLORER_URL'] ? `${process.env['ARBITRUM_NOVA_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['ARBITRUM_NOVA_EXPLORER_URL']
        }
      },
      {
        network: "boba",
        chainId: 288,
        urls: {
          apiURL: process.env['BOBA_EXPLORER_API_URL'] || (process.env['BOBA_EXPLORER_URL'] ? `${process.env['BOBA_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['BOBA_EXPLORER_URL']
        }
      },
      {
        network: "harmony",
        chainId: 1666600000,
        urls: {
          apiURL: process.env['HARMONY_EXPLORER_API_URL'] || (process.env['HARMONY_EXPLORER_URL'] ? `${process.env['HARMONY_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['HARMONY_EXPLORER_URL']
        }
      },
      {
        network: "gravity",
        chainId: 1625,
        urls: {
          apiURL: process.env['GRAVITY_EXPLORER_API_URL'] || (process.env['GRAVITY_EXPLORER_URL'] ? `${process.env['GRAVITY_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['GRAVITY_EXPLORER_URL']
        }
      },
      {
        network: "metis",
        chainId: 1088,
        urls: {
          apiURL: process.env['METIS_EXPLORER_API_URL'] || (process.env['METIS_EXPLORER_URL'] ? `${process.env['METIS_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['METIS_EXPLORER_URL']
        }
      },
      {
        network: "soneium",
        chainId: 1868,
        urls: {
          apiURL: process.env['SONEIUM_EXPLORER_API_URL'] || (process.env['SONEIUM_EXPLORER_URL'] ? `${process.env['SONEIUM_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['SONEIUM_EXPLORER_URL']
        }
      },
      {
        network: "ancient8",
        chainId: 888888888,
        urls: {
          apiURL: process.env['ANCIENT8_EXPLORER_API_URL'] || (process.env['ANCIENT8_EXPLORER_URL'] ? `${process.env['ANCIENT8_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['ANCIENT8_EXPLORER_URL']
        }
      },
      {
        network: "celo",
        chainId: 42220,
        urls: {
          apiURL: process.env['CELO_EXPLORER_API_URL'] || (process.env['CELO_EXPLORER_URL'] ? `${process.env['CELO_EXPLORER_URL']}/api` : ""),
          browserURL: process.env['CELO_EXPLORER_URL']
        }
      },
    ]
  },
  namedAccounts: {
    deployer: {
      default: 0, // Here, 0 refers to the first account in the mnemonic
    },
  },
};

// --- Dynamic augmentation from deployments.cache.json to ensure verify works for all deployed chains ---
try {
  const raw = fs.readFileSync('./deployments.cache.json', 'utf8');
  const cache: Record<string, any> = JSON.parse(raw || '{}');

  const cfg = module.exports || {};
  cfg.networks = cfg.networks || {};
  cfg.etherscan = cfg.etherscan || {};
  cfg.etherscan.customChains = cfg.etherscan.customChains || [];

  const existingCustomByChainId = new Set(
    (cfg.etherscan.customChains || []).map((c: any) => Number(c.chainId))
  );

  Object.entries(cache).forEach(([chainIdStr, info]: [string, any]) => {
    if (!info || typeof info !== 'object') return;
    const rec: any = info;
    const chainId = Number(chainIdStr);
    const key = rec.key || undefined;
    const explorer = ((rec.explorer as string) || '').replace(/\/$/, '');
    if (!key || !chainId) return;

    // 1) Ensure a network entry exists
    if (!cfg.networks[key]) {
      const rpcEnv = `${key.toUpperCase()}_RPC`;
      cfg.networks[key] = {
        url: process.env[rpcEnv] || '',
        accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        gasLimit: 2e9,
      };
    }

    // 2) Ensure a customChains entry exists for Etherscan verification
    if (!existingCustomByChainId.has(chainId)) {
      const apiEnv = `${key.toUpperCase()}_EXPLORER_API_URL`;
      const browserEnv = `${key.toUpperCase()}_EXPLORER_URL`;
      const browserURL = process.env[browserEnv] || explorer || '';
      const apiURL = process.env[apiEnv] || (browserURL ? `${browserURL}/api` : '');
      cfg.etherscan.customChains.push({
        network: key,
        chainId,
        urls: {
          apiURL,
          browserURL,
        },
      });
      existingCustomByChainId.add(chainId);
    }
  });
} catch (err) {
  // deployments.cache.json might not exist during initial setup; warn and continue.
  if (process.env.DEBUG) {
    const msg = (err && (err as any).message) ? (err as any).message : String(err);
    console.warn('[hardhat] dynamic network augmentation skipped:', msg);
  }
}