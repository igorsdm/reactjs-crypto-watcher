import { Typography } from '@mui/material'
import { CoinChart } from 'components/CoinChart'

import { Coin } from 'types/coin'

type Props = {
  list: Coin[]
}

export const Charts = ({ list }: Props) => {
  return (
    <>
      <Typography sx={{ padding: '16px 0' }}>Charts</Typography>
      {list.length ? (
        list.map(coin => <CoinChart coin={coin} />)
      ) : (
        <Typography sx={{ marginTop: '100px' }} variant="h4">
          Please add coins to your Watch List!
        </Typography>
      )}
    </>
  )
}
