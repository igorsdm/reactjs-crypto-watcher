export type Coin = {
  id: string
  availableSupply: number
  icon: string
  marketCap: number
  price: number
  name: string
  symbol: string
}

export type CoinCardProps = {
  item: Coin
  index: number
}
