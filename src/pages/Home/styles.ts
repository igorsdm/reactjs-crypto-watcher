import { Box, styled } from '@mui/material'

export const Container = styled(Box)({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
})

export const ListContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginRight: '10px',
})

export const ChartsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
})
