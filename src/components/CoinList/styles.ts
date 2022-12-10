import { Box, styled } from '@mui/material'

type Props = {
  isDraggingOver: boolean
}

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

export const DroppableContainer = styled(Box)({
  width: 250,
  minHeight: 500,
  marginRight: '20px',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid rgba(255, 255, 255, 0.50)',
})

export const List = styled(Box, {
  shouldForwardProp: prop => prop !== 'isDraggingOver',
})<Props>(({ isDraggingOver }) => ({
  height: '100%',
  backgroundColor: isDraggingOver ? 'rgba(0, 255, 0, 0.10)' : 'inherited',
}))
