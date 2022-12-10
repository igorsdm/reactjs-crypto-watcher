import { CircularProgress, Typography } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { getCoinHistoricalPrice } from 'services/coins'

import { Coin } from 'types/coin'

import { Card, TitleContainer, NoDataContainer } from './styles'

type Props = {
  coin: Coin
}

export const CoinChart = ({ coin }: Props) => {
  const [coinData, setCoinData] = useState([])

  const formatData = useCallback((values: any) => {
    const formattedData = values.map((value: any) => {
      return {
        date: new Date(value[0] * 1000).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
        }),
        price: parseFloat(value[1].toFixed(2)),
      }
    })

    return formattedData
  }, [])

  const getCoinData = useCallback(async () => {
    setCoinData([])
    const { chart } = await getCoinHistoricalPrice(coin.id)

    setCoinData(formatData(chart))
  }, [coin.id, formatData])

  useEffect(() => {
    getCoinData()
  }, [getCoinData])

  return (
    <Card>
      {coinData.length ? (
        <>
          <TitleContainer>
            <Typography>{coin.name}</Typography>
          </TitleContainer>
          <ResponsiveContainer width="100%" height={500}>
            <LineChart
              data={coinData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="date" height={50} dy={16} minTickGap={50} />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      ) : (
        <NoDataContainer>
          <CircularProgress />
        </NoDataContainer>
      )}
    </Card>
  )
}
