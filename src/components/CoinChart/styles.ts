import { Box, styled } from '@mui/material'

export const Card = styled(Box)({
  width: '95%',
  borderRadius: '5px',
  border: '1px solid rgba(255, 255, 255, 0.50)',
  marginBottom: '30px',
})

export const TitleContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '16px 0',
})

export const NoDataContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 500,
})
