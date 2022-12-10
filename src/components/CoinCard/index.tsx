import { Typography } from '@mui/material'
import { Draggable } from 'react-beautiful-dnd'
import { CoinCardProps } from 'types/coin'

import { Card, Container, CardContainer } from './styles'

export const CoinCard = ({ item, index }: CoinCardProps) => (
  <Draggable key={item.id} draggableId={item.id} index={index}>
    {(provided, snapshot) => {
      return (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{ ...provided.draggableProps.style }}
        >
          <Card variant="outlined" isDragging={snapshot.isDragging}>
            <CardContainer>
              <img
                src={item.icon}
                alt="Cryptocurrency"
                style={{ height: 24, width: 24 }}
              />
              <Typography style={{ paddingLeft: 16, paddingRight: 5 }}>
                {item.name}
              </Typography>
              <Typography>({item.symbol})</Typography>
            </CardContainer>
          </Card>
        </Container>
      )
    }}
  </Draggable>
)
