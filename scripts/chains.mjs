// Centralized chain configuration for scripts
// Each chain has a stable key usable as chainConfig[key].variable
// rpcUrls is an array, with defaultRpcUrlIndex selecting the preferred one

export const chainConfig = {
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0xB2b5841DBeF766d4b521221732F9B618fCf34A87',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
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
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
        },
    },

    plume: {
        key: 'plume',
        display: 'Plume',
        currency: 'PLUME',
        chainId: 98866,
        lzSrcId: 30370,
        explorerUrl: 'https://phoenix-explorer.plumenetwork.xyz',
        rpcUrls: [
            'https://rpc.plume.org',
            'PROTECTED_RPC'
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0x222365EF19F7947e5484218551B56bb3965Aa7aF',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

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
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0xB2b5841DBeF766d4b521221732F9B618fCf34A87',
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
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x750ba8b76187092B0D1E87E28daaf484d1b5273b',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xA0DD21C4789bf0225481dDCc3D7182C4876F4178',
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
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108', // 0x4337 not deployed
            trustedForwarder: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0xe15fC38F6D8c56aF07bbCBe3BAf5708A2Bf42392',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0x79A02482A880bCE3F13e09Da970dC34db4CD24d1',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4',
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
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
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
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
            'https://mainnet.mode.network',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
        explorerUrl: 'https://hyperevmscan.io',
        rpcUrls: [
            'https://rpc.hyperliquid.xyz/evm',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0xb88339CB7199b77E23DB6E890353E22632Ba630f',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    injevm: {
        key: 'injevm',
        display: 'Injective EVM',
        currency: 'INJ',
        chainId: 1776,
        lzSrcId: 0,
        explorerUrl: 'https://blockscout.injective.network/',
        rpcUrls: [
            'https://sentry.evm-rpc.injective.network/',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x0000000000000000000000000000000000000000',  // no official contract yet
            entryPoint: '0x0000000000000000000000000000000000000000',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
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
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000',
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
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0x0000000000000000000000000000000000000000',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x0000000000000000000000000000000000000000',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108',
            trustedForwarder: '0xB2b5841DBeF766d4b521221732F9B618fCf34A87',
            multicall: '0xF5042e6ffaC5a625D4E7848e0b01373D8eB9e222',
        },
    },

    mantle: {
        key: 'mantle',
        display: 'Mantle',
        currency: 'ETH',
        chainId: 5000,
        lzSrcId: 30181,
        explorerUrl: 'https://mantlescan.xyz',
        rpcUrls: [
            'https://mantle-mainnet.public.blastapi.io',
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x0000000000000000000000000000000000000000',
            messageTransmitter: '0x0000000000000000000000000000000000000000',
            usdc: '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9',
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
        ],
        defaultRpcUrlIndex: 0,
        addresses: {
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
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
            wrappedGasToken: '0x0000000000000000000000000000000000000000',
            tokenMessenger: '0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d',
            messageTransmitter: '0x81D40F21F12A8F0E3252Bccb954D722d4c464B64',
            usdc: '0xd996633a415985DBd7D6D12f4A4343E31f5037cf',
            permit2: '0x000000000022D473030F116dDEE9F6B43aC78BA3',
            entryPoint: '0x0000000000000000000000000000000000000000', // 0x4337 not deployed
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