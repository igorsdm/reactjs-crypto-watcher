import { api } from 'services/clients/api'

export const getPossibleCoins = async () => {
  const { data } = await api.get(
    'https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD'
  )

  return data
}

export const getCoinHistoricalPrice = async (id: string) => {
  const { data } = await api.get(
    `https://api.coinstats.app/public/v1/charts?period=1y&coinId=${id}`
  )

  return data
}
