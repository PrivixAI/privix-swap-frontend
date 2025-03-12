import { ChainId, JSBI, Percent, Token,WPRIVIX } from 'psc-sdk'

export const ROUTER_ADDRESS = '0x67dcD57204E13B82882F4b4D864dA7fEF0FEFA23'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[
    
  ]
}

export const PriUSD = new Token(ChainId.MAINNET, '0xE5875a733FE722A3F03BB51f44a81f26E27a7861', 18, 'PriUSD', 'Privix Stable Coin')
// export const UST = new Token(
//   ChainId.MAINNET,
//   '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
//   18,
//   'UST',
//   'Wrapped UST Token'
// )
// export const ETH = new Token(
//   ChainId.MAINNET,
//   '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
//   18,
//   'ETH',
//   'Binance-Peg Ethereum Token'
// )

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WPRIVIX[ChainId.MAINNET]],
  [ChainId.TESTNET]: [WPRIVIX[ChainId.TESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], PriUSD],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], PriUSD],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    // [
    //   new Token(ChainId.MAINNET, '0x32a8a2052b48Da5FD253cC8B386B88B3E0BF50eE', 18, 'USDT', 'mTether'),
    //   new Token(ChainId.MAINNET, '0xaC264f337b2780b9fd277cd9C9B2149B43F87904', 18, 'MUSD', 'Mind Usd'),
    // ],
    // [MUSD, USDT],
    // [MDAI, USDT],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
