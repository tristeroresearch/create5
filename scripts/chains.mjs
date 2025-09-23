// Centralized chain configuration for scripts
// Each chain has a stable key usable as chainConfig[key].variable
// rpcUrls is an array, with defaultRpcUrlIndex selecting the preferred one

export const chainConfig = {
    arbitrum_one: {
        key: 'arbitrum_one',
        display: 'Arbitrum One',
        currency: 'ETH',
        chainId: 42161,
        lzSrcId: 30110,
        explorerUrl: 'https://arbiscan.io',
        rpcUrls: [
            'https://arbitrum-one.public.blastapi.io',
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0xB2b5841DBeF766d4b521221732F9B618fCf34A87',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    avalanche: {
        key: 'avalanche',
        display: 'Avalanche',
        currency: 'AVAX',
        chainId: 43114,
        lzSrcId: 30106,
        explorerUrl: 'https://snowscan.xyz/',
        rpcUrls: [
            'https://avalanche-c-chain-rpc.publicnode.com',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    ethereum: {
        key: 'ethereum',
        display: 'Ethereum',
        currency: 'ETH',
        chainId: 1,
        lzSrcId: 30101,
        explorerUrl: 'https://etherscan.io',
        rpcUrls: [
            'https://eth-mainnet.public.blastapi.io',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0xB2b5841DBeF766d4b521221732F9B618fCf34A87',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    base: {
        key: 'base',
        display: 'Base',
        currency: 'ETH',
        chainId: 8453,
        lzSrcId: 30184,
        explorerUrl: 'https://basescan.org',
        rpcUrls: [
            'https://mainnet.base.org',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    polygon: {
        key: 'polygon',
        display: 'Polygon',
        currency: 'POL',
        chainId: 137,
        lzSrcId: 30109,
        explorerUrl: 'https://polygonscan.com',
        rpcUrls: [
            'https://1rpc.io/matic',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0xB2b5841DBeF766d4b521221732F9B618fCf34A87',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    linea: {
        key: 'linea',
        display: 'Linea',
        currency: 'ETH',
        chainId: 59144,
        lzSrcId: 30183,
        explorerUrl: 'https://lineascan.build',
        rpcUrls: [
            'https://linea.drpc.org',
            'https://rpc.linea.build'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xA0DD21C4789bf0225481dDCc3D7182C4876F4178',
        },
    },

    optimism: {
        key: 'optimism',
        display: 'Optimism',
        currency: 'ETH',
        chainId: 10,
        lzSrcId: 30111,
        explorerUrl: 'https://optimistic.etherscan.io/',
        rpcUrls: [
            'https://optimism-mainnet.public.blastapi.io',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0xB2b5841DBeF766d4b521221732F9B618fCf34A87',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    unichain: {
        key: 'unichain',
        display: 'Unichain',
        currency: 'ETH',
        chainId: 130,
        lzSrcId: 30320,
        explorerUrl: 'https://uniscan.xyz',
        rpcUrls: [
            'https://unichain.drpc.org',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0x078D782b760474a361dDA0AF3839290b0EF57AD6',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    sonic: {
        key: 'sonic',
        display: 'Sonic',
        currency: 'S',
        chainId: 146,
        lzSrcId: 30332,
        explorerUrl: 'https://sonicscan.com',
        rpcUrls: [
            'https://sonic.drpc.org',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0x29219dd400f2Bf60E5a23d13Be72B486D4038894',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    sei: {
        key: 'sei',
        display: 'Sei',
        currency: 'SEI',
        chainId: 1329,
        lzSrcId: 30280,
        explorerUrl: 'https://seitrace.com',
        rpcUrls: [
            'https://sei.drpc.org',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0xe15fC38F6D8c56aF07bbCBe3BAf5708A2Bf42392',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    // ------------ Tier 2 chains ------------ //

    zksync_era: {
        key: 'zksync_era',
        display: 'zkSync Era',
        currency: 'ETH',
        chainId: 324,
        lzSrcId: 30165,
        explorerUrl: 'https://explorer.zksync.io',
        rpcUrls: [
            'https://mainnet.era.zksync.io',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    polygon_zkevm: {
        key: 'polygon_zkevm',
        display: 'Polygon zkEVM',
        currency: 'ETH',
        chainId: 1101,
        lzSrcId: 30158,
        explorerUrl: 'https://zkevm.polygonscan.com',
        rpcUrls: [
            'https://zkevm-rpc.com',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    bsc: {
        key: 'bsc',
        display: 'Binance Smart Chain',
        currency: 'BNB',
        chainId: 56,
        lzSrcId: 30102,
        explorerUrl: 'https://bscscan.com',
        rpcUrls: [
            'https://bsc-dataseed.binance.org',
            'https://binance.llamarpc.com',
            'https://bsc-mainnet.public.blastapi.io',
            'https://1rpc.io/bnb'
        ],
        defaultRpcUrlIndex: 3,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108', // 0x4337 not deployed
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    mantle: {
        key: 'mantle',
        display: 'Mantle',
        currency: 'MNT',
        chainId: 5000,
        lzSrcId: 30181,
        explorerUrl: 'https://mantlescan.xyz',
        rpcUrls: [
            "https://mantle-mainnet.public.blastapi.io",
            "https://1rpc.io/mantle"
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    katana: {
        key: 'katana',
        display: 'Katana Mainnet',
        currency: 'ETH',
        chainId: 747474,
        lzSrcId: 30375,
        explorerUrl: 'https://katanascan.com/',
        rpcUrls: [
            'https://rpc.katana.network',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    xdc: {
        key: 'xdc',
        display: 'XDC Mainnet',
        currency: 'XDC',
        chainId: 50,
        lzSrcId: 30365,
        explorerUrl: 'https://xdcscan.com/',
        rpcUrls: [
            'https://rpc.xdcrpc.com',
            'https://rpc1.xinfin.network',
            'https://erpc.xdcrpc.com',
            'https://earpc.xinfin.network'
        ],
        defaultRpcUrlIndex: 2,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },


    opbnb: {
        key: 'opbnb',
        display: 'opBNB Mainnet',
        currency: 'BNB',
        chainId: 204,
        lzSrcId: 30202,
        explorerUrl: 'https://opbnb.bscscan.com/',
        rpcUrls: [
            'https://opbnb.drpc.org',
            'https://opbnb-mainnet-rpc.bnbchain.org',
            'https://1rpc.io/opbnb',
            'https://opbnb.therpc.io',
            'https://opbnb-rpc.publicnode.com'
        ],
        defaultRpcUrlIndex: 4,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    apechain: {
        key: 'apechain',
        display: 'ApeChain',
        currency: 'APE',
        chainId: 33139,
        lzSrcId: 30312,
        explorerUrl: 'https://apescan.io',
        rpcUrls: [
            'https://apechain.drpc.org',
            'https://rpc.apechain.com',
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    berachain: {
        key: 'berachain',
        display: 'Berachain',
        currency: 'BERA',
        chainId: 80094,
        lzSrcId: 30362,
        explorerUrl: 'https://berascan.com',
        rpcUrls: [
            'https://rpc.berachain.com',
            'https://berachain.drpc.org'
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    worldchain: {
        key: 'worldchain',
        display: 'Worldchain',
        currency: 'ETH',
        chainId: 480,
        lzSrcId: 30319,
        explorerUrl: 'https://worldscan.org',
        rpcUrls: [
            'https://worldchain.drpc.org',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0x79A02482A880bCE3F13e09Da970dC34db4CD24d1',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    celo: {
        key: 'celo',
        display: 'Celo',
        currency: 'CELO',
        chainId: 42220,
        lzSrcId: 30125,
        explorerUrl: 'https://celoscan.io',
        rpcUrls: [
            'https://forno.celo.org',
            "https://rpc.ankr.com/celo"
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    scroll: {
        key: 'scroll',
        display: 'Scroll',
        currency: 'ETH',
        chainId: 534352,
        lzSrcId: 30158,
        explorerUrl: 'https://scrollscan.com',
        rpcUrls: [
            'https://rpc.scroll.io',
            'https://1rpc.io/scroll'
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    blast: {
        key: 'blast',
        display: 'Blast',
        currency: 'ETH',
        chainId: 81457,
        lzSrcId: 30243,
        explorerUrl: 'https://blastscan.io',
        rpcUrls: [
            'https://rpc.ankr.com/blast',
            'https://rpc.blast.io'
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    codex: {
        key: 'codex',
        display: 'Codex',
        currency: 'ETH',
        chainId: 81224,
        lzSrcId: 30323,
        explorerUrl: 'https://explorer.codex.xyz',
        rpcUrls: [
            'https://rpc.codex.xyz',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0xd996633a415985DBd7D6D12f4A4343E31f5037cf',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    cronos: {
        key: 'cronos',
        display: 'Cronos',
        currency: 'CRO',
        chainId: 25,
        lzSrcId: 30359,
        explorerUrl: 'https://explorer.cronos.org',
        rpcUrls: [
            'https://cronos-evm-rpc.publicnode.com',
            'https://cronos.drpc.org'
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    cronos_zkevm: {
        key: 'cronos_zkevm',
        display: 'Cronos zkEVM',
        currency: 'zkCRO',
        chainId: 388,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.zkevm.cronos.org',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=cronos-zkevm&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://mainnet.zkevm.cronos.org/',
            'https://rpc.zip/rpc/388',
            'https://cronos-zkevm.drpc.org'
        ],
        defaultRpcUrlIndex: 2,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    gnosis: {
        key: 'gnosis',
        display: 'Gnosis',
        currency: 'xDAI',
        chainId: 100,
        lzSrcId: 30145,
        explorerUrl: 'https://gnosisscan.io',
        rpcUrls: [
            'https://rpc.gnosischain.com',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0xB2b5841DBeF766d4b521221732F9B618fCf34A87',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    okx: {
        key: 'okx',
        display: 'OKX',
        currency: 'OKT',
        chainId: 66,
        lzSrcId: undefined,
        explorerUrl: 'https://www.okx.com/explorer/oktc',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=oktc&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://exchainrpc.okex.org/',
            'https://rpc.zip/rpc/66',
            'https://1rpc.io/oktc',
            'https://oktc.drpc.org'
        ],
        defaultRpcUrlIndex: 4,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    // ------------- Tier 3 chains ------------- //

    bittorrent: {
        key: 'bittorrent',
        display: 'BitTorrent Chain Mainnet',
        currency: 'BTT',
        chainId: 199,
        lzSrcId: undefined,
        explorerUrl: 'https://bttcscan.com/',
        rpcUrls: [
            'https://bittorrent.drpc.org',
            'https://rpc.bittorrentchain.io',
            'https://rpc.bt.io',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    fraxtal: {
        key: 'fraxtal',
        display: 'Fraxtal Mainnet',
        currency: 'ETH',
        chainId: 252,
        lzSrcId: 30255,
        explorerUrl: 'https://fraxscan.com/',
        rpcUrls: [
            'https://fraxtal.drpc.org',
            'https://rpc.frax.com',
            'https://fraxtal-rpc.publicnode.com',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    taiko: {
        key: 'taiko',
        display: 'Taiko Mainnet',
        currency: 'ETH',
        chainId: 167000,
        lzSrcId: 30290,
        explorerUrl: 'https://taikoscan.io/',
        rpcUrls: [
            'https://taiko.drpc.org',
            'https://rpc.taiko.xyz',
            'https://rpc.ankr.com/taiko',
            'https://taiko-rpc.publicnode.com'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    sophon: {
        key: 'sophon',
        display: 'Sophon Mainnet',
        currency: 'ETH',
        chainId: 50104,
        lzSrcId: 30334,
        explorerUrl: 'https://sophscan.xyz/',
        rpcUrls: [
            'https://rpc.sophon.xyz',
            'https://rpc-quicknode.sophon.xyz'
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    abstract: {
        key: 'abstract',
        display: 'Abstract Mainnet',
        currency: 'ETH',
        chainId: 2741,
        lzSrcId: 30324,
        explorerUrl: 'https://abscan.org/',
        rpcUrls: [
            'https://abstract.drpc.org',
            'https://api.mainnet.abs.xyz',
            'https://abstract.api.onfinality.io/public'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    arbitrum_nova: {
        key: 'arbitrum_nova',
        display: 'Arbitrum Nova',
        currency: 'ETH',
        chainId: 42170,
        lzSrcId: 30175,
        explorerUrl: 'https://nova.arbiscan.io/',
        rpcUrls: [
            'https://nova.arbitrum.io/rpc',
            'https://arbitrum-nova.public.blastapi.io',
            'https://arbitrum-nova-rpc.publicnode.com',
            'https://arbitrum-nova.drpc.org',
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x750ba8b76187092B0D1E87E28daaf484d1b5273b',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    fantom: {
        key: 'fantom',
        display: 'Fantom',
        currency: 'FTM',
        chainId: 250,
        lzSrcId: 30112,
        explorerUrl: 'https://explorer.fantom.network',
        rpcUrls: [
            'https://1rpc.io/ftm',
            'https://fantom-rpc.publicnode.com'
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    moonriver: {
        key: 'moonriver',
        display: 'Moonriver',
        currency: 'MOVR',
        chainId: 1285,
        lzSrcId: 30167,
        explorerUrl: 'https://moonriver.moonscan.io',
        rpcUrls: [
            'https://moonriver.drpc.org',
            'https://moonriver.unitedbloc.com',
            'https://rpc.api.moonriver.moonbeam.network',
            'https://moonriver.api.onfinality.io/public',
            'https://moonriver-rpc.publicnode.com'
        ],
        defaultRpcUrlIndex: 4,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    aurora: {
        key: 'aurora',
        display: 'Aurora',
        currency: 'ETH',
        chainId: 1313161554,
        lzSrcId: 30211,
        explorerUrl: 'https://explorer.aurora.dev',
        rpcUrls: [
            'https://mainnet.aurora.dev',
            'https://1rpc.io/aurora'
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed
            trustedForwarder: '0x0000000000000000000000000000000000000000',
        },
    },

    boba: {
        key: 'boba',
        display: 'Boba Network',
        currency: 'ETH',
        chainId: 288,
        lzSrcId: undefined,
        explorerUrl: 'https://bobascan.com/',
        rpcUrls: [
            'https://mainnet.boba.network',
            'https://boba-eth.drpc.org',
            'https://1rpc.io/boba/eth',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    harmony: {
        key: 'harmony',
        display: 'Harmony',
        currency: 'ONE',
        chainId: 1666600000,
        lzSrcId: 30116,
        explorerUrl: 'https://explorer.harmony.one',
        rpcUrls: [
            'wss://harmony-0.drpc.org',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
        },
    },

    kava: {
        key: 'kava',
        display: 'Kava',
        currency: 'KAVA',
        chainId: 2222,
        lzSrcId: 30177,
        explorerUrl: 'https://kavascan.com',
        rpcUrls: [
            'https://kava-evm-rpc.publicnode.com',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
        },
    },

    gravity: {
        key: 'gravity',
        display: 'Gravity',
        currency: 'G',
        chainId: 1625,
        lzSrcId: 30294,
        explorerUrl: 'https://explorer.gravity.xyz',
        rpcUrls: [
            'https://rpc.ankr.com/gravity',
            'https://rpc.gravity.xyz',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    mode: {
        key: 'mode',
        display: 'Mode',
        currency: 'ETH',
        chainId: 34443,
        lzSrcId: 30260,
        explorerUrl: 'https://explorer.mode.network',
        rpcUrls: [
            'https://1rpc.io/mode',
            'https://mainnet.mode.network',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    metis: {
        key: 'metis',
        display: 'Metis',
        currency: 'METIS',
        chainId: 1088,
        lzSrcId: 30151,
        explorerUrl: 'https://explorer.metis.io',
        rpcUrls: [
            'https://metis.drpc.org',
            'https://metis.rpc.hypersync.xyz',
            'https://metis-rpc.publicnode.com',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    soneium: {
        key: 'soneium',
        display: 'Soneium',
        currency: 'ETH',
        chainId: 1868,
        lzSrcId: 30340,
        explorerUrl: 'https://explorer.soneium.org',
        rpcUrls: [
            'https://soneium.drpc.org',
            'https://rpc.soneium.org',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    
    swell: {
        key: 'swell',
        display: 'Swell',
        currency: 'ETH',
        chainId: 1923,
        lzSrcId: 30335,
        explorerUrl: 'https://swellchainscan.io/',
        rpcUrls: [
            'https://rpc.ankr.com/swell',
            'https://swell-mainnet.alt.technology',
            'https://swell.drpc.org'
        ],
        defaultRpcUrlIndex: 2,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    hyperevm: {
        key: 'hyperevm',
        display: 'HyperEVM',
        currency: 'HYPE',
        chainId: 999,
        lzSrcId: 30367,
        explorerUrl: 'https://purrsec.com',
        rpcUrls: [
            'https://rpc.hyperliquid.xyz/evm',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    ancient8: {
        key: 'ancient8',
        display: 'Ancient8',
        currency: 'ETH',
        chainId: 888888888,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.ancient8.gg',
        rpcUrls: [
            'https://rpc.ancient8.gg',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    

    adventure_layer: {
        key: 'adventure_layer',
        display: 'Adventure Layer',
        currency: 'AGLD',
        chainId: 9988,
        lzSrcId: undefined,
        explorerUrl: 'https://advlayer-mainnet.cloud.blockscout.com',
        rpcUrls: [
            'https://autumn-hidden-general.advlayer-mainnet.quiknode.pro/'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    ailayer: {
        key: 'ailayer',
        display: 'AILayer',
        currency: 'BTC',
        chainId: 2649,
        lzSrcId: undefined,
        explorerUrl: 'https://mainnet-explorer.ailayer.xyz',
        rpcUrls: [
            'https://mainnet-rpc.ailayer.xyz',
            'https://rpc.zip/rpc/2649'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    aleph_zero_evm: {
        key: 'aleph_zero_evm',
        display: 'Aleph Zero EVM',
        currency: 'AZERO',
        chainId: 41455,
        lzSrcId: undefined,
        explorerUrl: 'https://evm-explorer.alephzero.org',
        rpcUrls: [
            'https://rpc.alephzero.raas.gelato.cloud/'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    alienx: {
        key: 'alienx',
        display: 'AlienX',
        currency: 'ETH',
        chainId: 10241024,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.alienxchain.io',
        rpcUrls: [
            'https://rpc.alienxchain.io/http',
            'https://rpc.zip/rpc/10241024'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    animechain: {
        key: 'animechain',
        display: 'Animechain',
        currency: 'ANIME',
        chainId: 69000,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer-animechain-39xf6m45e3.t.conduit.xyz',
        rpcUrls: [
            'https://rpc-animechain-39xf6m45e3.t.conduit.xyz/Kzy4aQJhDyC6rSUu36dqkZM7eX5Wq8JqJ',
            'https://rpc.zip/rpc/69000'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    appchain: {
        key: 'appchain',
        display: 'AppChain',
        currency: 'ETH',
        chainId: 466,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.appchain.xyz',
        rpcUrls: [
            'https://rpc.appchain.xyz/http',
            'https://rpc.zip/rpc/466'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    astar: {
        key: 'astar',
        display: 'Astar',
        currency: 'ASTR',
        chainId: 592,
        lzSrcId: undefined,
        explorerUrl: 'https://astar.subscan.io',
        rpcUrls: [
            'https://astar-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://astar.public.blastapi.io',
            'https://astar.api.onfinality.io/public',
            'https://rpc.zip/rpc/592'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    b_network: {
        key: 'b_network',
        display: 'B² Network',
        currency: 'BTC',
        chainId: 223,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.bsquared.network',
        rpcUrls: [
            'https://rpc.bsquared.network/',
            'https://rpc.zip/rpc/223'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    b3: {
        key: 'b3',
        display: 'B3',
        currency: 'ETH',
        chainId: 8333,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.b3.fun',
        rpcUrls: [
            'https://mainnet-rpc.b3.fun/http',
            'https://rpc.zip/rpc/8333'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    bahamut: {
        key: 'bahamut',
        display: 'Bahamut',
        currency: 'FTN',
        chainId: 5165,
        lzSrcId: undefined,
        explorerUrl: 'https://www.ftnscan.com',
        rpcUrls: [
            'https://rpc1.bahamut.io/',
            'https://rpc.zip/rpc/5165'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    battle_for_blockchain: {
        key: 'battle_for_blockchain',
        display: 'Battle for Blockchain',
        currency: 'INIT',
        chainId: 3920262608331171,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.initia.xyz/bfb-1',
        rpcUrls: [
            'https://jsonrpc-bfb-1.anvil.europe-west.initia.xyz',
            'https://rpc.zip/rpc/3920262608331171'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    beam: {
        key: 'beam',
        display: 'Beam',
        currency: 'BEAM',
        chainId: 4337,
        lzSrcId: undefined,
        explorerUrl: 'https://subnets.avax.network/beam',
        rpcUrls: [
            'https://subnets.avax.network/beam/mainnet/rpc',
            'https://rpc.zip/rpc/4337'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    bevm: {
        key: 'bevm',
        display: 'BEVM',
        currency: 'BTC',
        chainId: 11501,
        lzSrcId: undefined,
        explorerUrl: 'https://scan-mainnet.bevm.io',
        rpcUrls: [
            'https://rpc-mainnet-1.bevm.io/',
            'https://rpc.zip/rpc/11501'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    bifrost: {
        key: 'bifrost',
        display: 'BiFrost',
        currency: 'BFC',
        chainId: 3068,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.mainnet.bifrostnetwork.com',
        rpcUrls: [
            'https://public-01.mainnet.bifrostnetwork.com/rpc',
            'https://rpc.zip/rpc/3068'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    bitlayer: {
        key: 'bitlayer',
        display: 'Bitlayer',
        currency: 'BTC',
        chainId: 200901,
        lzSrcId: undefined,
        explorerUrl: 'https://www.btrscan.com',
        rpcUrls: [
            'https://rpc.ankr.com/bitlayer/697e90c0df4c82240c1def9ca28fea89eb5bd48dba57b3bde249af9ae1269394',
            'https://rpc.bitlayer.org/',
            'https://rpc.bitlayer-rpc.com',
            'https://rpc.zip/rpc/200901'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    bittensor_evm: {
        key: 'bittensor_evm',
        display: 'Bittensor EVM',
        currency: 'TAO',
        chainId: 964,
        lzSrcId: undefined,
        explorerUrl: 'https://evm.taostats.io',
        rpcUrls: [
            'https://lite.chain.opentensor.ai'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    bob: {
        key: 'bob',
        display: 'BOB',
        currency: 'ETH',
        chainId: 60808,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.gobob.xyz',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=bob&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://rpc.gobob.xyz',
            'https://rpc-bob-mainnet-0.t.conduit.xyz/H2ggWy5YXRFQQ7eiyfiKkv885t6dSY7ZY',
            'https://rpc.zip/rpc/60808'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    boba_bnb: {
        key: 'boba_bnb',
        display: 'Boba BNB',
        currency: 'BOBA',
        chainId: 56288,
        lzSrcId: undefined,
        explorerUrl: 'https://bnb.bobascan.com',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=boba-bnb&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://bnb.boba.network',
            'https://rpc.zip/rpc/56288'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    botanix: {
        key: 'botanix',
        display: 'Botanix',
        currency: 'BTC',
        chainId: 3637,
        lzSrcId: undefined,
        explorerUrl: 'https://botanixscan.io',
        rpcUrls: [
            'https://botanix-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://rpc.botanixlabs.com'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    callisto: {
        key: 'callisto',
        display: 'Callisto',
        currency: 'CLO',
        chainId: 820,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.callisto.network',
        rpcUrls: [
            'https://rpc.callistodao.org',
            'https://rpc.zip/rpc/820'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    camp: {
        key: 'camp',
        display: 'CAMP',
        currency: 'CAMP',
        chainId: 484,
        lzSrcId: undefined,
        explorerUrl: 'https://camp.cloud.blockscout.com',
        rpcUrls: [
            'https://rpc.camp.raas.gelato.cloud'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    cheesechain: {
        key: 'cheesechain',
        display: 'CheeseChain',
        currency: 'CHEESE',
        chainId: 383353,
        lzSrcId: undefined,
        explorerUrl: 'https://cheesechain.calderaexplorer.xyz',
        rpcUrls: [
            'https://cheesechain.calderachain.xyz/http',
            'https://rpc.zip/rpc/383353'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    conflux: {
        key: 'conflux',
        display: 'ConFlux',
        currency: 'CFX',
        chainId: 1030,
        lzSrcId: undefined,
        explorerUrl: 'https://evm.confluxscan.net',
        rpcUrls: [
            'https://evm.confluxrpc.com',
            'https://rpc.zip/rpc/1030'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    converge: {
        key: 'converge',
        display: 'Converge',
        currency: 'ETH',
        chainId: 432,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer-converge-mainnet.t.conduit.xyz',
        rpcUrls: [
            'https://rpc-converge-mainnet.t.conduit.xyz/CfAEvPujrUtdJ9eWJ38Hzk8tydmkACCuk'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    conwai: {
        key: 'conwai',
        display: 'Conwai',
        currency: 'CNW',
        chainId: 668668,
        lzSrcId: undefined,
        explorerUrl: 'https://conwai.calderaexplorer.xyz',
        rpcUrls: [
            'https://conwai.calderachain.xyz/http',
            'https://rpc.zip/rpc/668668'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    coredao: {
        key: 'coredao',
        display: 'CoreDAO',
        currency: 'CORE',
        chainId: 1116,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.coredao.org',
        rpcUrls: [
            'https://rpc.ankr.com/core/697e90c0df4c82240c1def9ca28fea89eb5bd48dba57b3bde249af9ae1269394',
            'https://rpc.coredao.org',
            'https://lb.drpc.org/ogrpc?network=core&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://rpc.zip/rpc/1116'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    corn: {
        key: 'corn',
        display: 'Corn',
        currency: 'BTCN',
        chainId: 21000000,
        lzSrcId: undefined,
        explorerUrl: '',
        rpcUrls: [
            'https://mainnet.corn-rpc.com',
            'https://rpc-corn-maizenet.t.conduit.xyz/H2ggWy5YXRFQQ7eiyfiKkv885t6dSY7ZY',
            'https://rpc.zip/rpc/21000000'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    

    cyber: {
        key: 'cyber',
        display: 'Cyber',
        currency: 'ETH',
        chainId: 7560,
        lzSrcId: undefined,
        explorerUrl: 'https://cyber-explorer.alt.technology',
        rpcUrls: [
            'https://rpc.cyber.co',
            'https://cyber.alt.technology'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    debank: {
        key: 'debank',
        display: 'DeBank',
        currency: 'ETH',
        chainId: 20240603,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.dbkchain.io',
        rpcUrls: [
            'https://rpc.mainnet.dbkchain.io',
            'https://rpc.zip/rpc/20240603'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    degen: {
        key: 'degen',
        display: 'Degen',
        currency: 'DEGEN',
        chainId: 666666666,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.degen.tips',
        rpcUrls: [
            'https://degen-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://rpc.degen.tips',
            'https://rpc.zip/rpc/666666666'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    derive: {
        key: 'derive',
        display: 'Derive',
        currency: 'ETH',
        chainId: 957,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.lyra.finance',
        rpcUrls: [
            'https://rpc.lyra.finance',
            'https://rpc.zip/rpc/957'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    dexalot: {
        key: 'dexalot',
        display: 'Dexalot',
        currency: 'ALOT',
        chainId: 432204,
        lzSrcId: undefined,
        explorerUrl: 'https://subnets.avax.network/dexalot',
        rpcUrls: [
            'https://subnets.avax.network/dexalot/mainnet/rpc',
            'https://rpc.zip/rpc/432204'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    dogechain: {
        key: 'dogechain',
        display: 'Dogechain',
        currency: 'DOGE',
        chainId: 2000,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.dogechain.dog',
        rpcUrls: [
            'https://rpc.dogechain.dog',
            'https://rpc.zip/rpc/2000'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    dymension: {
        key: 'dymension',
        display: 'Dymension',
        currency: 'DYM',
        chainId: 1100,
        lzSrcId: undefined,
        explorerUrl: 'https://dym.fyi',
        rpcUrls: [
            'https://dymension-evm-rpc.publicnode.com',
            'https://jsonrpc.dymension.nodestake.org',
            'https://rpc.zip/rpc/1100'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    edu: {
        key: 'edu',
        display: 'EDU',
        currency: 'EDU',
        chainId: 41923,
        lzSrcId: undefined,
        explorerUrl: 'https://educhain.blockscout.com',
        rpcUrls: [
            'https://rpc.edu-chain.raas.gelato.cloud/66a13f09ceab49998f954e7bb71c7c02'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    embr: {
        key: 'embr',
        display: 'Embr',
        currency: 'INIT',
        chainId: 2598901095158506,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.initia.xyz/embrmainnet-1',
        rpcUrls: [
            'https://jsonrpc-embrmainnet-1.anvil.asia-southeast.initia.xyz',
            'https://rpc.zip/rpc/2598901095158506'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    endurance: {
        key: 'endurance',
        display: 'Endurance',
        currency: 'ACE',
        chainId: 648,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer-endurance.fusionist.io',
        rpcUrls: [
            'https://rpc-endurance.fusionist.io/',
            'https://rpc.zip/rpc/648'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    eos_evm: {
        key: 'eos_evm',
        display: 'EOS EVM',
        currency: 'EOS',
        chainId: 17777,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.evm.eosnetwork.com',
        rpcUrls: [
            'https://api.evm.eosnetwork.com',
            'https://rpc.zip/rpc/17777'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    etherlink: {
        key: 'etherlink',
        display: 'Etherlink',
        currency: 'XTZ',
        chainId: 42793,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.etherlink.com',
        rpcUrls: [
            'PROTECTED_RPC',
            'https://node.mainnet.etherlink.com',
            'https://rpc.zip/rpc/42793'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    ethernity: {
        key: 'ethernity',
        display: 'Ethernity',
        currency: 'ETH',
        chainId: 183,
        lzSrcId: undefined,
        explorerUrl: 'https://ernscan.io',
        rpcUrls: [
            'https://mainnet.ethernitychain.io',
            'https://rpc.zip/rpc/183'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    ethw: {
        key: 'ethw',
        display: 'ETHW',
        currency: 'ETHW',
        chainId: 10001,
        lzSrcId: undefined,
        explorerUrl: 'https://www.oklink.com/ethw',
        rpcUrls: [
            'https://mainnet.ethereumpow.org',
            'https://rpc.zip/rpc/10001'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    everclear: {
        key: 'everclear',
        display: 'Everclear',
        currency: 'ETH',
        chainId: 25327,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.everclear.org',
        rpcUrls: [
            'https://rpc.everclear.raas.gelato.cloud'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    evmos: {
        key: 'evmos',
        display: 'EVMOS',
        currency: 'EVMOS',
        chainId: 9001,
        lzSrcId: undefined,
        explorerUrl: 'https://escan.live',
        rpcUrls: [
            'https://evmos-evm.publicnode.com',
            'https://rpc.zip/rpc/9001'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    exsat: {
        key: 'exsat',
        display: 'ExSat',
        currency: 'BTC',
        chainId: 7200,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.exsat.network',
        rpcUrls: [
            'https://evm.exsat.network',
            'https://rpc.zip/rpc/7200'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    flame: {
        key: 'flame',
        display: 'Flame',
        currency: 'TIA',
        chainId: 253368190,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.flame.astria.org',
        rpcUrls: [
            'https://rpc.flame.astria.org',
            'https://rpc.zip/rpc/253368190'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    flare: {
        key: 'flare',
        display: 'Flare',
        currency: 'FLR',
        chainId: 14,
        lzSrcId: undefined,
        explorerUrl: 'https://flarescan.com',
        rpcUrls: [
            'https://snowy-empty-bush.flare-mainnet.quiknode.pro/a5eb781622a624b223a8e1dafd83a5a7b89ef217/ext/bc/C/rpc/',
            'https://flare-api.flare.network/ext/C/rpc',
            'https://rpc.zip/rpc/14'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    flow_evm: {
        key: 'flow_evm',
        display: 'Flow EVM',
        currency: 'FLOW',
        chainId: 747,
        lzSrcId: undefined,
        explorerUrl: 'https://evm.flowscan.io',
        rpcUrls: [
            'https://flow-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://mainnet.evm.nodes.onflow.org',
            'https://rpc.zip/rpc/747'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    fluence: {
        key: 'fluence',
        display: 'Fluence',
        currency: 'FLT',
        chainId: 9999999,
        lzSrcId: undefined,
        explorerUrl: 'https://blockscout.mainnet.fluence.dev',
        rpcUrls: [
            'https://rpc.mainnet.fluence.dev',
            'https://rpc.zip/rpc/9999999'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    form: {
        key: 'form',
        display: 'Form',
        currency: 'ETH',
        chainId: 478,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.form.network',
        rpcUrls: [
            'https://rpc.form.network/http',
            'https://rpc.zip/rpc/478'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    forma: {
        key: 'forma',
        display: 'Forma',
        currency: 'TIA',
        chainId: 984122,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.forma.art',
        rpcUrls: [
            'https://rpc.forma.art',
            'https://rpc.zip/rpc/984122'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    fuse: {
        key: 'fuse',
        display: 'Fuse',
        currency: 'FUSE',
        chainId: 122,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.fuse.io',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=fuse&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://rpc.fuse.io',
            'https://rpc.zip/rpc/122',
            'https://fuse.drpc.org'
        ],
        defaultRpcUrlIndex: 3,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    g7: {
        key: 'g7',
        display: 'G7',
        currency: 'G7',
        chainId: 2187,
        lzSrcId: undefined,
        explorerUrl: 'https://mainnet.game7.io',
        rpcUrls: [
            'https://mainnet-rpc.game7.io',
            'https://rpc-g7-network-mainnet.t.conduit.xyz/H2ggWy5YXRFQQ7eiyfiKkv885t6dSY7ZY',
            'https://rpc.zip/rpc/2187'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    goat: {
        key: 'goat',
        display: 'GOAT',
        currency: 'BTC',
        chainId: 2345,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.goat.network',
        rpcUrls: [
            'https://rpc.goat.network',
            'https://goat-mainnet-alpha.drpc.org',
            'https://rpc.zip/rpc/2345'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    ham: {
        key: 'ham',
        display: 'Ham',
        currency: 'ETH',
        chainId: 5112,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.ham.fun',
        rpcUrls: [
            'https://ham.calderachain.xyz/http'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    hashkey: {
        key: 'hashkey',
        display: 'Hashkey',
        currency: 'HSK',
        chainId: 177,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.hsk.xyz',
        rpcUrls: [
            'https://hashkeychain-mainnet.alt.technology',
            'https://mainnet.hsk.xyz',
            'https://rpc.zip/rpc/177'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    hemi: {
        key: 'hemi',
        display: 'Hemi',
        currency: 'ETH',
        chainId: 43111,
        lzSrcId: undefined,
        explorerUrl: '',
        rpcUrls: [
            'https://7e57304f.rpc.hemi.network/rpc',
            'https://9277255a.rpc.hemi.network/rpc',
            'https://rpc.hemi.network/rpc',
            'https://rpc.zip/rpc/43111'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    humanity: {
        key: 'humanity',
        display: 'Humanity',
        currency: 'H',
        chainId: 6985385,
        lzSrcId: undefined,
        explorerUrl: 'https://humanity-mainnet.explorer.alchemy.com',
        rpcUrls: [
            'https://humanity-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://humanity-mainnet.g.alchemy.com/public'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    humanode: {
        key: 'humanode',
        display: 'Humanode',
        currency: 'HMND',
        chainId: 5234,
        lzSrcId: undefined,
        explorerUrl: 'https://humanode.subscan.io',
        rpcUrls: [
            'https://explorer-rpc-http.mainnet.stages.humanode.io'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    hychain: {
        key: 'hychain',
        display: 'Hychain',
        currency: 'TOPIA',
        chainId: 2911,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.hychain.com',
        rpcUrls: [
            'https://hychain.calderachain.xyz/http',
            'https://rpc.zip/rpc/2911'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    immutable_zkevm: {
        key: 'immutable_zkevm',
        display: 'Immutable zkEVM',
        currency: 'IMX',
        chainId: 13371,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.immutable.com',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=immutable-zkevm&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://rpc.immutable.com',
            'https://rpc.zip/rpc/13371',
            'https://immutable-zkevm.drpc.org'
        ],
        defaultRpcUrlIndex: 3,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    ing: {
        key: 'ing',
        display: 'ING',
        currency: 'INIT',
        chainId: 2780922216980457,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.initia.xyz/ingnetwork-1',
        rpcUrls: [
            'https://jsonrpc-ingnetwork-1.anvil.asia-southeast.initia.xyz',
            'https://rpc.zip/rpc/2780922216980457'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    injective_evm: {
        key: 'injective_evm',
        display: 'Injective EVM',
        currency: 'INJ',
        chainId: 2525,
        lzSrcId: undefined,
        explorerUrl: 'https://inevm.calderaexplorer.xyz',
        rpcUrls: [
            'https://inevm.calderachain.xyz/http',
            'https://rpc.zip/rpc/2525'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    ink: {
        key: 'ink',
        display: 'Ink',
        currency: 'ETH',
        chainId: 57073,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.inkonchain.com',
        rpcUrls: [
            'https://ink-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://lingering-radial-arrow.ink-mainnet.quiknode.pro/798a3ab6cfa8db1860a16308a396623ed96e0897',
            'https://ink.drpc.org',
            'https://rpc.zip/rpc/57073',
            'https://ink-public.nodies.app'
        ],
        defaultRpcUrlIndex: 2,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    iotex: {
        key: 'iotex',
        display: 'IoTeX',
        currency: 'IOTX',
        chainId: 4689,
        lzSrcId: undefined,
        explorerUrl: 'https://iotexscan.io',
        rpcUrls: [
            'https://babel-api.mainnet.iotex.io',
            'https://rpc.ankr.com/iotex/697e90c0df4c82240c1def9ca28fea89eb5bd48dba57b3bde249af9ae1269394',
            'https://rpc.zip/rpc/4689'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    kaia: {
        key: 'kaia',
        display: 'Kaia',
        currency: 'KAIA',
        chainId: 8217,
        lzSrcId: undefined,
        explorerUrl: 'https://kaiascan.io',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=klaytn&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://public-en.node.kaia.io/',
            'https://rpc.zip/rpc/8217'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    kcc: {
        key: 'kcc',
        display: 'KCC',
        currency: 'KCS',
        chainId: 321,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.kcc.io',
        rpcUrls: [
            'https://rpc-mainnet.kcc.network',
            'https://rpc.zip/rpc/321'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    layeredge: {
        key: 'layeredge',
        display: 'LayerEdge',
        currency: 'EDGEN',
        chainId: 4207,
        lzSrcId: undefined,
        explorerUrl: 'https://edgenscan.io',
        rpcUrls: [
            'https://rpc.layeredge.io',
            'https://rpc.zip/rpc/4207'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    lens: {
        key: 'lens',
        display: 'Lens',
        currency: 'GHO',
        chainId: 232,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.lens.xyz',
        rpcUrls: [
            'https://lens-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://lb.drpc.org/ogrpc?network=lens&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://rpc.zip/rpc/232'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    lightlink: {
        key: 'lightlink',
        display: 'Lightlink',
        currency: 'ETH',
        chainId: 1890,
        lzSrcId: undefined,
        explorerUrl: 'https://phoenix.lightlink.io',
        rpcUrls: [
            'https://replicator.phoenix.lightlink.io/rpc/v1',
            'https://rpc.zip/rpc/1890'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    lisk: {
        key: 'lisk',
        display: 'Lisk',
        currency: 'ETH',
        chainId: 1135,
        lzSrcId: undefined,
        explorerUrl: 'https://blockscout.lisk.com',
        rpcUrls: [
            'https://rpc.api.lisk.com',
            'https://rpc.zip/rpc/1135'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    lukso: {
        key: 'lukso',
        display: 'Lukso',
        currency: 'LYX',
        chainId: 42,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.execution.mainnet.lukso.network',
        rpcUrls: [
            'https://rpc.mainnet.lukso.network',
            'https://rpc.zip/rpc/42'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    lumia_prism: {
        key: 'lumia_prism',
        display: 'Lumia Prism',
        currency: 'LUMIA',
        chainId: 994873017,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.lumia.org',
        rpcUrls: [
            'https://lumia-prism.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://mainnet-rpc.lumia.org',
            'https://rpc.zip/rpc/994873017'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    lumio: {
        key: 'lumio',
        display: 'Lumio',
        currency: 'ETH',
        chainId: 8866,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.lumio.io',
        rpcUrls: [
            'https://mainnet.lumio.io',
            'https://rpc.zip/rpc/8866'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    manta: {
        key: 'manta',
        display: 'Manta',
        currency: 'ETH',
        chainId: 169,
        lzSrcId: undefined,
        explorerUrl: 'https://pacific-explorer.manta.network',
        rpcUrls: [
            'https://pacific-rpc.manta.network/http',
            'https://manta-pacific-gascap.calderachain.xyz/http',
            'https://rpc.zip/rpc/169'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    matchain: {
        key: 'matchain',
        display: 'Matchain',
        currency: 'BNB',
        chainId: 698,
        lzSrcId: undefined,
        explorerUrl: 'https://www.matchscan.io',
        rpcUrls: [
            'https://rpc.matchain.io/',
            'https://rpc.ankr.com/matchain_mainnet/697e90c0df4c82240c1def9ca28fea89eb5bd48dba57b3bde249af9ae1269394',
            'https://rpc.zip/rpc/698'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    merlin: {
        key: 'merlin',
        display: 'Merlin',
        currency: 'BTC',
        chainId: 4200,
        lzSrcId: undefined,
        explorerUrl: 'https://merlin.l2scan.co',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=merlin&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://rpc.merlinchain.io',
            'https://rpc.zip/rpc/4200'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    metal: {
        key: 'metal',
        display: 'Metal',
        currency: 'ETH',
        chainId: 1750,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.metall2.com',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=metall2&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://rpc.metall2.com/',
            'https://rpc.zip/rpc/1750'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    meter: {
        key: 'meter',
        display: 'Meter',
        currency: 'MTR',
        chainId: 82,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.meter.io',
        rpcUrls: [
            'https://rpc.meter.io/',
            'https://rpc.zip/rpc/82'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    mezo: {
        key: 'mezo',
        display: 'Mezo',
        currency: 'BTC',
        chainId: 31612,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.mezo.org',
        rpcUrls: [
            'https://rpc-internal.mezo.org'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    mind: {
        key: 'mind',
        display: 'Mind',
        currency: 'ETH',
        chainId: 228,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.mindnetwork.xyz',
        rpcUrls: [
            'https://rpc-mainnet-internal.mindnetwork.xyz'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    mint: {
        key: 'mint',
        display: 'Mint',
        currency: 'ETH',
        chainId: 185,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.mintchain.io',
        rpcUrls: [
            'https://rpc.mintchain.io/',
            'https://rpc-mint-mainnet-0.t.conduit.xyz/H2ggWy5YXRFQQ7eiyfiKkv885t6dSY7ZY',
            'https://global.rpc.mintchain.io',
            'https://rpc.zip/rpc/185'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    mitosis: {
        key: 'mitosis',
        display: 'Mitosis',
        currency: 'MITO',
        chainId: 124816,
        lzSrcId: undefined,
        explorerUrl: 'https://mitoscan.io',
        rpcUrls: [
            'https://rpc.mitosis.org'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    moonbeam: {
        key: 'moonbeam',
        display: 'Moonbeam',
        currency: 'GLMR',
        chainId: 1284,
        lzSrcId: undefined,
        explorerUrl: 'https://moonscan.io',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=moonbeam&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://rpc.api.moonbeam.network/',
            'https://rpc.zip/rpc/1284',
            'https://moonbeam.drpc.org'
        ],
        defaultRpcUrlIndex: 3,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    morph: {
        key: 'morph',
        display: 'Morph',
        currency: 'ETH',
        chainId: 2818,
        lzSrcId: undefined,
        explorerUrl: '',
        rpcUrls: [
            'https://rpc-quicknode.morphl2.io',
            'https://rpc.morphl2.io',
            'https://rpc.zip/rpc/2818'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    muster_network: {
        key: 'muster_network',
        display: 'Muster Network',
        currency: 'ETH',
        chainId: 4078,
        lzSrcId: undefined,
        explorerUrl: 'https://muster-explorer.alt.technology',
        rpcUrls: [
            'https://muster.alt.technology',
            'https://rpc.zip/rpc/4078'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    neon_evm: {
        key: 'neon_evm',
        display: 'Neon EVM',
        currency: 'NEON',
        chainId: 245022934,
        lzSrcId: undefined,
        explorerUrl: 'https://neonscan.org',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=neon-evm&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://neon-proxy-mainnet.solana.p2p.org',
            'https://rpc.zip/rpc/245022934'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    nibiru: {
        key: 'nibiru',
        display: 'Nibiru',
        currency: 'NIBI',
        chainId: 6900,
        lzSrcId: undefined,
        explorerUrl: 'https://nibiscan.io',
        rpcUrls: [
            'https://evm-rpc.nibiru.fi'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    numbers: {
        key: 'numbers',
        display: 'Numbers',
        currency: 'NUM',
        chainId: 10507,
        lzSrcId: undefined,
        explorerUrl: 'https://mainnet.num.network',
        rpcUrls: [
            'https://mainnetrpc.num.network',
            'https://rpc.zip/rpc/10507'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    oasis_emerald: {
        key: 'oasis_emerald',
        display: 'Oasis Emerald',
        currency: 'ROSE',
        chainId: 42262,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.emerald.oasis.dev',
        rpcUrls: [
            'https://emerald.oasis.dev',
            'https://rpc.zip/rpc/42262'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    oasys: {
        key: 'oasys',
        display: 'Oasys',
        currency: 'OAS',
        chainId: 248,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.oasys.games',
        rpcUrls: [
            'https://oasys.blockpi.network/v1/rpc/public',
            'https://rpc.zip/rpc/248'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    oev_api3: {
        key: 'oev_api3',
        display: 'OEV API3',
        currency: 'ETH',
        chainId: 4913,
        lzSrcId: undefined,
        explorerUrl: 'https://oev.explorer.api3.org',
        rpcUrls: [
            'https://oev-network.calderachain.xyz/http'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    

    onyx: {
        key: 'onyx',
        display: 'Onyx',
        currency: 'XCN',
        chainId: 80888,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.onyx.org',
        rpcUrls: [
            'https://rpc.onyx.org'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    optopia: {
        key: 'optopia',
        display: 'Optopia',
        currency: 'ETH',
        chainId: 62050,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.optopia.ai',
        rpcUrls: [
            'https://rpc-mainnet.optopia.ai',
            'https://rpc.zip/rpc/62050'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    orderly: {
        key: 'orderly',
        display: 'Orderly',
        currency: 'ETH',
        chainId: 291,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.orderly.network',
        rpcUrls: [
            'https://rpc.orderly.network',
            'https://rpc-orderly-mainnet-0.t.conduit.xyz/H2ggWy5YXRFQQ7eiyfiKkv885t6dSY7ZY',
            'https://rpc.zip/rpc/291'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    peaq: {
        key: 'peaq',
        display: 'Peaq',
        currency: 'PEAQ',
        chainId: 3338,
        lzSrcId: undefined,
        explorerUrl: 'https://peaq.subscan.io',
        rpcUrls: [
            'https://little-polished-bridge.peaq-mainnet.quiknode.pro/e87f4a90db158392c023ba4305c2f0de7e4ee159',
            'https://evm.peaq.network',
            'https://rpc.zip/rpc/3338'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    pego: {
        key: 'pego',
        display: 'PEGO',
        currency: 'PG',
        chainId: 20201022,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.pego.network',
        rpcUrls: [
            'https://pegorpc.com',
            'https://rpc.zip/rpc/20201022'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    phala: {
        key: 'phala',
        display: 'Phala',
        currency: 'ETH',
        chainId: 2035,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.phala.network',
        rpcUrls: [
            'https://rpc.phala.network',
            'https://rpc.zip/rpc/2035'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    plasma: {
        key: 'plasma',
        display: 'Plasma',
        currency: 'XPL',
        chainId: 9745,
        lzSrcId: undefined,
        explorerUrl: 'https://plasmascan.to',
        rpcUrls: [
            'https://rpc.plasma.to'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    platon: {
        key: 'platon',
        display: 'PlatON',
        currency: 'LAT',
        chainId: 210425,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.platon.network',
        rpcUrls: [
            'https://openapi2.platon.network/rpc',
            'https://rpc.zip/rpc/210425'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    plume: {
        key: 'plume',
        display: 'Plume',
        currency: 'PLUME',
        chainId: 98866,
        lzSrcId: undefined,
        explorerUrl: 'https://phoenix-explorer.plumenetwork.xyz',
        rpcUrls: [
            'https://rpc.plume.org',
            'PROTECTED_RPC'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    polynomial: {
        key: 'polynomial',
        display: 'Polynomial',
        currency: 'ETH',
        chainId: 8008,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer-polynomial-mainnet-0.t.conduit.xyz',
        rpcUrls: [
            'https://rpc.polynomial.fi',
            'https://rpc.zip/rpc/8008'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    powerloom_v2: {
        key: 'powerloom_v2',
        display: 'Powerloom V2',
        currency: 'POWER',
        chainId: 7869,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer-v2.powerloom.network',
        rpcUrls: [
            'https://rpc-powerloom-mainnet-v2-v52tbqo4if.t.conduit.xyz/H2ggWy5YXRFQQ7eiyfiKkv885t6dSY7ZY',
            'https://rpc-v2.powerloom.network',
            'https://rpc.zip/rpc/7869'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    prom: {
        key: 'prom',
        display: 'Prom',
        currency: 'PROM',
        chainId: 227,
        lzSrcId: undefined,
        explorerUrl: 'https://promscan.io',
        rpcUrls: [
            'https://rpc.prom.io',
            'https://rpc.zip/rpc/227'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    proof_of_play_apex: {
        key: 'proof_of_play_apex',
        display: 'Proof of Play Apex',
        currency: 'ETH',
        chainId: 70700,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.apex.proofofplay.com',
        rpcUrls: [
            'https://rpc.apex.proofofplay.com',
            'https://rpc-proofofplay-apex-mainnet-0.t.conduit.xyz/H2ggWy5YXRFQQ7eiyfiKkv885t6dSY7ZY',
            'https://rpc.zip/rpc/70700'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    proof_of_play_boss: {
        key: 'proof_of_play_boss',
        display: 'Proof of Play Boss',
        currency: 'ETH',
        chainId: 70701,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.boss.proofofplay.com',
        rpcUrls: [
            'https://rpc.boss.proofofplay.com',
            'https://rpc-proofofplay-boss-mainnet.t.conduit.xyz/H2ggWy5YXRFQQ7eiyfiKkv885t6dSY7ZY',
            'https://rpc.zip/rpc/70701'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    pulsechain: {
        key: 'pulsechain',
        display: 'Pulsechain',
        currency: 'PLS',
        chainId: 369,
        lzSrcId: undefined,
        explorerUrl: 'https://otter.pulsechain.com',
        rpcUrls: [
            'https://rpc.pulsechain.com',
            'https://rpc.zip/rpc/369'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    r5_testnet: {
        key: 'r5_testnet',
        display: 'R5 Testnet',
        currency: 'R5',
        chainId: 337,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.r5.network',
        rpcUrls: [
            'https://rpc.r5.network',
            'https://rpc.zip/rpc/337'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    race: {
        key: 'race',
        display: 'Race',
        currency: 'ETH',
        chainId: 6805,
        lzSrcId: undefined,
        explorerUrl: 'https://racescan.io',
        rpcUrls: [
            'https://autumn-stylish-flower.race-mainnet.quiknode.pro/1a0ee92a7f2ee1b3ef7e5e29268b11b7c06fe3cd/',
            'https://racemainnet.io',
            'https://rpc.zip/rpc/6805',
            'https://mainnet.evm.nodes.onflow.org'
        ],
        defaultRpcUrlIndex: 3,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    rari: {
        key: 'rari',
        display: 'Rari',
        currency: 'ETH',
        chainId: 1380012617,
        lzSrcId: undefined,
        explorerUrl: 'https://mainnet.explorer.rarichain.org',
        rpcUrls: [
            'https://mainnet.rpc.rarichain.org/http',
            'https://rpc.zip/rpc/1380012617'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    rave: {
        key: 'rave',
        display: 'Rave',
        currency: 'INIT',
        chainId: 555110192329996,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.initia.xyz/rave-1',
        rpcUrls: [
            'https://jsonrpc-rave-1.anvil.asia-southeast.initia.xyz',
            'https://rpc.zip/rpc/555110192329996'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    redstone: {
        key: 'redstone',
        display: 'Redstone',
        currency: 'ETH',
        chainId: 690,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.redstone.xyz',
        rpcUrls: [
            'https://rpc.redstonechain.com',
            'https://rpc.zip/rpc/690'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    reya: {
        key: 'reya',
        display: 'Reya',
        currency: 'ETH',
        chainId: 1729,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.reya.network',
        rpcUrls: [
            'https://rpc.reya.network',
            'https://rpc.zip/rpc/1729'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    river: {
        key: 'river',
        display: 'River',
        currency: 'ETH',
        chainId: 550,
        lzSrcId: undefined,
        explorerUrl: '',
        rpcUrls: [
            'https://mainnet.rpc.river.build/http',
            'https://rpc.zip/rpc/550'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    ronin: {
        key: 'ronin',
        display: 'Ronin',
        currency: 'RON',
        chainId: 2020,
        lzSrcId: undefined,
        explorerUrl: 'https://app.roninchain.com',
        rpcUrls: [
            'https://ronin-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://lb.drpc.org/ogrpc?network=ronin&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    rootstock: {
        key: 'rootstock',
        display: 'Rootstock',
        currency: 'RBTC',
        chainId: 30,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.rsk.co',
        rpcUrls: [
            'https://rootstock-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://public-node.rsk.co',
            'https://mycrypto.rsk.co',
            'https://rpc.zip/rpc/30'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    rss3: {
        key: 'rss3',
        display: 'RSS3',
        currency: 'RSS3',
        chainId: 12553,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.rss3.io',
        rpcUrls: [
            'https://rpc.rss3.io',
            'https://rpc.zip/rpc/12553'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    saakuru: {
        key: 'saakuru',
        display: 'Saakuru',
        currency: 'OAS',
        chainId: 7225878,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.saakuru.network',
        rpcUrls: [
            'https://rpc.saakuru.network/',
            'https://rpc.zip/rpc/7225878'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    sanko: {
        key: 'sanko',
        display: 'Sanko',
        currency: 'DMT',
        chainId: 1996,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.sanko.xyz',
        rpcUrls: [
            'https://sanko-mainnet.calderachain.xyz/http',
            'https://rpc.zip/rpc/1996'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    satoshivm: {
        key: 'satoshivm',
        display: 'SatoshiVM',
        currency: 'BTC',
        chainId: 3109,
        lzSrcId: undefined,
        explorerUrl: 'https://svmscan.io',
        rpcUrls: [
            'https://alpha-rpc-node-http.svmscan.io',
            'https://rpc.zip/rpc/3109'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    settlus: {
        key: 'settlus',
        display: 'Settlus',
        currency: 'ETH',
        chainId: 5371,
        lzSrcId: undefined,
        explorerUrl: 'https://mainnet.settlus.network',
        rpcUrls: [
            'https://settlus-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://rpc.zip/rpc/5371'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    shape: {
        key: 'shape',
        display: 'Shape',
        currency: 'ETH',
        chainId: 360,
        lzSrcId: undefined,
        explorerUrl: 'https://shapescan.xyz',
        rpcUrls: [
            'https://shape-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://rpc.zip/rpc/360'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    shibarium: {
        key: 'shibarium',
        display: 'Shibarium',
        currency: 'BONE',
        chainId: 109,
        lzSrcId: undefined,
        explorerUrl: 'https://www.shibariumscan.io',
        rpcUrls: [
            'https://www.shibrpc.com',
            'https://rpc.zip/rpc/109'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    silicon: {
        key: 'silicon',
        display: 'Silicon',
        currency: 'ETH',
        chainId: 2355,
        lzSrcId: undefined,
        explorerUrl: 'https://scope.silicon.network',
        rpcUrls: [
            'https://rpc.silicon.network',
            'https://rpc.zip/rpc/2355'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    skate: {
        key: 'skate',
        display: 'Skate',
        currency: 'ETH',
        chainId: 5050,
        lzSrcId: undefined,
        explorerUrl: '',
        rpcUrls: [
            'https://rpc.skatechain.org',
            'https://rpc.zip/rpc/5050'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    snaxchain: {
        key: 'snaxchain',
        display: 'Snaxchain',
        currency: 'ETH',
        chainId: 2192,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.snaxchain.io',
        rpcUrls: [
            'https://mainnet.snaxchain.io',
            'https://rpc.zip/rpc/2192'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    somnia: {
        key: 'somnia',
        display: 'Somnia',
        currency: 'SOMI',
        chainId: 5031,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.somnia.network',
        rpcUrls: [
            'https://api.infra.mainnet.somnia.network'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    spotlight: {
        key: 'spotlight',
        display: 'Spotlight',
        currency: 'ETH',
        chainId: 10058111,
        lzSrcId: undefined,
        explorerUrl: 'https://spotlight-mainnet.explorer.alchemy.com',
        rpcUrls: [
            'https://spotlight-mainnet.g.alchemy.com/public',
            'https://rpc.zip/rpc/10058111'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    step: {
        key: 'step',
        display: 'Step',
        currency: 'FITFI',
        chainId: 1234,
        lzSrcId: undefined,
        explorerUrl: 'https://stepscan.io',
        rpcUrls: [
            'https://rpc.step.network',
            'https://rpc.zip/rpc/1234'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    story: {
        key: 'story',
        display: 'Story',
        currency: 'IP',
        chainId: 1514,
        lzSrcId: undefined,
        explorerUrl: 'https://www.storyscan.xyz',
        rpcUrls: [
            'https://muddy-bitter-sheet.story-mainnet.quiknode.pro/4721c3dae88e4c9e3742f3ad3e9c92796e54b24e',
            'https://mainnet.storyrpc.io',
            'https://rpc.zip/rpc/1514'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    superposition: {
        key: 'superposition',
        display: 'Superposition',
        currency: 'ETH',
        chainId: 55244,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.superposition.so',
        rpcUrls: [
            'https://rpc.superposition.so',
            'https://rpc-superposition-1v9rjalnat.t.conduit.xyz/H2ggWy5YXRFQQ7eiyfiKkv885t6dSY7ZY',
            'https://rpc.zip/rpc/55244'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    superseed: {
        key: 'superseed',
        display: 'Superseed',
        currency: 'ETH',
        chainId: 5330,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer-superseed-mainnet-0.t.conduit.xyz',
        rpcUrls: [
            'https://superseed-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://rpc-superseed-mainnet-0.t.conduit.xyz',
            'https://rpc.zip/rpc/5330'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    swan: {
        key: 'swan',
        display: 'Swan',
        currency: 'ETH',
        chainId: 254,
        lzSrcId: undefined,
        explorerUrl: 'https://swanscan.io',
        rpcUrls: [
            'https://mainnet-rpc.swanchain.org',
            'https://mainnet-rpc-01.swanchain.org',
            'https://mainnet-rpc-04.swanchain.org',
            'https://rpc.zip/rpc/254'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    sx_network: {
        key: 'sx_network',
        display: 'SX Network',
        currency: 'SX',
        chainId: 416,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.sx.technology',
        rpcUrls: [
            'https://rpc.sx.technology',
            'https://rpc.zip/rpc/416'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    syndicate_frame: {
        key: 'syndicate_frame',
        display: 'Syndicate Frame',
        currency: 'ETH',
        chainId: 5101,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer-frame.syndicate.io',
        rpcUrls: [
            'https://rpc-frame.syndicate.io',
            'https://rpc.zip/rpc/5101'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    telos: {
        key: 'telos',
        display: 'Telos',
        currency: 'TLOS',
        chainId: 40,
        lzSrcId: undefined,
        explorerUrl: 'https://www.teloscan.io',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=telos&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://rpc3.us.telos.net/evm',
            'https://rpc.zip/rpc/40'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    tenet: {
        key: 'tenet',
        display: 'Tenet',
        currency: 'TENET',
        chainId: 1559,
        lzSrcId: undefined,
        explorerUrl: 'https://tenetscan.io',
        rpcUrls: [
            'https://rpc.tenet.org/',
            'https://rpc.ankr.com/tenet_evm/697e90c0df4c82240c1def9ca28fea89eb5bd48dba57b3bde249af9ae1269394',
            'https://rpc.zip/rpc/1559'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    thundercore: {
        key: 'thundercore',
        display: 'ThunderCore',
        currency: 'TT',
        chainId: 108,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer-mainnet.thundercore.com',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=thundercore&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://mainnet-rpc.thundertoken.net',
            'https://rpc.zip/rpc/108'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    u2u_solaris: {
        key: 'u2u_solaris',
        display: 'U2U Solaris',
        currency: 'U2U',
        chainId: 39,
        lzSrcId: undefined,
        explorerUrl: '',
        rpcUrls: [
            'https://rpc-mainnet.u2u.xyz',
            'https://rpc.zip/rpc/39'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    unit0: {
        key: 'unit0',
        display: 'UNIT0',
        currency: 'UNIT0',
        chainId: 88811,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.unit0.dev',
        rpcUrls: [
            'https://rpc.unit0.dev',
            'https://rpc.zip/rpc/88811'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    vana: {
        key: 'vana',
        display: 'Vana',
        currency: 'VANA',
        chainId: 1480,
        lzSrcId: undefined,
        explorerUrl: 'https://vanascan.io',
        rpcUrls: [
            'https://rpc.vana.org'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    vanar: {
        key: 'vanar',
        display: 'Vanar',
        currency: 'VANRY',
        chainId: 2040,
        lzSrcId: undefined,
        explorerUrl: '',
        rpcUrls: [
            'https://rpc.vanarchain.com',
            'https://rpc.zip/rpc/2040'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    viction: {
        key: 'viction',
        display: 'Viction',
        currency: 'VIC',
        chainId: 88,
        lzSrcId: undefined,
        explorerUrl: 'https://tomoscan.io',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=viction&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://rpc.viction.com',
            'https://rpc.zip/rpc/88'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    vizing: {
        key: 'vizing',
        display: 'Vizing',
        currency: 'ETH',
        chainId: 28518,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.vizing.com',
        rpcUrls: [
            'https://rpc.vizing.com/',
            'https://rpc.zip/rpc/28518'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    wemix: {
        key: 'wemix',
        display: 'Wemix',
        currency: 'WEMIX',
        chainId: 1111,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.wemix.com',
        rpcUrls: [
            'https://wemix.drpc.org',
            'https://lb.drpc.org/ogrpc?network=wemix&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://api.wemix.com',
            'https://rpc.zip/rpc/1111'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    x_layer: {
        key: 'x_layer',
        display: 'X Layer',
        currency: 'OKB',
        chainId: 196,
        lzSrcId: undefined,
        explorerUrl: 'https://www.oklink.com/xlayer',
        rpcUrls: [
            'https://rpc.ankr.com/xlayer/697e90c0df4c82240c1def9ca28fea89eb5bd48dba57b3bde249af9ae1269394',
            'https://rpc.xlayer.tech'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    xai: {
        key: 'xai',
        display: 'XAI',
        currency: 'XAI',
        chainId: 660279,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.xai-chain.net',
        rpcUrls: [
            'https://rpc.ankr.com/xai',
            'https://xai-chain.net/rpc',
            'https://rpc.zip/rpc/660279'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    xchain: {
        key: 'xchain',
        display: 'XCHAIN',
        currency: 'ETH',
        chainId: 94524,
        lzSrcId: undefined,
        explorerUrl: 'https://xchain-explorer.idex.io',
        rpcUrls: [
            'https://rpc-xchain-mainnet-0.t.conduit.xyz/',
            'https://rpc.zip/rpc/94524'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    xpla: {
        key: 'xpla',
        display: 'XPLA',
        currency: 'XPLA',
        chainId: 37,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.xpla.io',
        rpcUrls: [
            'https://dimension-evm-rpc.xpla.dev',
            'https://rpc.zip/rpc/37'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    xrpl_evm: {
        key: 'xrpl_evm',
        display: 'XRPL EVM',
        currency: 'XRP',
        chainId: 1440000,
        lzSrcId: undefined,
        explorerUrl: 'explorer.xrplevm.org',
        rpcUrls: [
            'https://xrpl.rpc.zip'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    xterio: {
        key: 'xterio',
        display: 'Xterio',
        currency: 'ETH',
        chainId: 2702128,
        lzSrcId: undefined,
        explorerUrl: 'https://xterio-eth-explorer.alt.technology',
        rpcUrls: [
            'https://xterio-eth.alt.technology',
            'https://rpc.zip/rpc/2702128'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    yominet_evm: {
        key: 'yominet_evm',
        display: 'Yominet EVM',
        currency: 'ETH',
        chainId: 428962654539583,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.initia.xyz/yominet-1',
        rpcUrls: [
            'https://jsonrpc-yominet-1.anvil.initia.xyz',
            'https://rpc.zip/rpc/428962654539583'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    zaar: {
        key: 'zaar',
        display: 'Zaar',
        currency: 'INIT',
        chainId: 1335097526422335,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.initia.xyz/zaar-mainnet-1',
        rpcUrls: [
            'https://jsonrpc-zaar-mainnet-1.anvil.asia-southeast.initia.xyz',
            'https://rpc.zip/rpc/1335097526422335'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    zero: {
        key: 'zero',
        display: 'ZERO',
        currency: 'ETH',
        chainId: 543210,
        lzSrcId: undefined,
        explorerUrl: 'https://zerion-explorer.vercel.app',
        rpcUrls: [
            'https://lb.drpc.org/ogrpc?network=zero&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://zero-network.calderachain.xyz/http',
            'https://rpc.zip/rpc/543210'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    zeta: {
        key: 'zeta',
        display: 'Zeta',
        currency: 'ZETA',
        chainId: 7000,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.zetachain.com',
        rpcUrls: [
            'https://zetachain-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://zetachain-evm.blockpi.network/v1/rpc/public',
            'https://rpc.zip/rpc/7000'
        ],
        defaultRpcUrlIndex: 1,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    zircuit: {
        key: 'zircuit',
        display: 'Zircuit',
        currency: 'ETH',
        chainId: 48900,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.zircuit.com',
        rpcUrls: [
            'https://mainnet.zircuit.com',
            'wss://zircuit-mainnet.drpc.org',
            'https://lb.drpc.org/ogrpc?network=zircuit-mainnet&dkey=AoJh2RKNJUIviZEZZt-0igEzVw0J7wQR773l0mSYF3e0',
            'https://zircuit1.p2pify.com/',
            'https://rpc.zip/rpc/48900'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    zkcandy: {
        key: 'zkcandy',
        display: 'zkCandy',
        currency: 'ETH',
        chainId: 320,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.zkcandy.io',
        rpcUrls: [
            'https://rpc.zkcandy.io',
            'https://rpc.zip/rpc/320'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    zkfair: {
        key: 'zkfair',
        display: 'zkFair',
        currency: 'USDC',
        chainId: 42766,
        lzSrcId: undefined,
        explorerUrl: 'https://scan.zkfair.io',
        rpcUrls: [
            'https://rpc.zkfair.io',
            'https://endpoints.omniatech.io/v1/zkfair/mainnet/public',
            'https://rpc.zip/rpc/42766'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    zklink_nova: {
        key: 'zklink_nova',
        display: 'zkLink Nova',
        currency: 'ETH',
        chainId: 810180,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.zklink.io',
        rpcUrls: [
            'https://rpc.zklink.io',
            'https://rpc.zip/rpc/810180'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    zora: {
        key: 'zora',
        display: 'Zora',
        currency: 'ETH',
        chainId: 7777777,
        lzSrcId: undefined,
        explorerUrl: 'https://explorer.zora.energy',
        rpcUrls: [
            'https://zora-mainnet.g.alchemy.com/v2/YkBeD__7F9qzE15UoBUv8airTrwKeiji',
            'https://rpc.zora.energy',
            'https://rpc.zip/rpc/7777777',
            'https://zora.drpc.org'
        ],
        defaultRpcUrlIndex: 3,
        addresses: {
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed (verify before using)
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },
}

export function getRpcUrl(chain) {
    if (!chain || !Array.isArray(chain.rpcUrls) || chain.rpcUrls.length === 0) return null;
    const idx = Number.isInteger(chain.defaultRpcUrlIndex) ? chain.defaultRpcUrlIndex : 0;
    return chain.rpcUrls[Math.max(0, Math.min(idx, chain.rpcUrls.length - 1))];
}

export function configuredChains() {
    return Object.values(chainConfig).filter(c => !!getRpcUrl(c));
}

// Select chains by keys (array of chainConfig keys). If requireRpc is true, only include chains with a default RPC.
export function getChainsByKeys(keys, { requireRpc = true } = {}) {
    if (!Array.isArray(keys)) return [];
    const out = [];
    for (const k of keys) {
        if (!k) continue;
        const key = String(k).trim();
        const c = chainConfig[key];
        if (!c) continue;
        if (requireRpc && !getRpcUrl(c)) continue;
        out.push(c);
    }
    return out;
}

// Convenience helper: read comma-separated keys from an env var (e.g., 'CHAINS')
export function resolveChainsFromEnv(envVarName = 'CHAINS', { requireRpc = true } = {}) {
    const raw = (process.env[envVarName] || '').trim();
    if (!raw) return [];
    const keys = raw.split(',').map(s => s.trim()).filter(Boolean);
    return getChainsByKeys(keys, { requireRpc });
}