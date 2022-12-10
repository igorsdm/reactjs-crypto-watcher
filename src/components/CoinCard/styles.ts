import { Card as MuiCard, Box, styled } from '@mui/material'

type Props = {
  isDragging: boolean
}

export const Container = styled(Box)({
  userSelect: 'none',
  padding: '2px',
  margin: '0 0 8px 0',
})

export const CardContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flex: 1,
  padding: '24px 8px',
})

export const Card = styled(MuiCard, {
  shouldForwardProp: prop => prop !== 'isDragging',
})<Props>(({ isDragging }) => ({
  backgroundColor: isDragging
    ? 'rgba(0, 0, 0, 0.50)'
    : 'rgba(255, 255, 255, 0.50)',
}))
