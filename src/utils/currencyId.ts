import { Currency, ETHER, Token } from 'psc-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'PRIVIX'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
