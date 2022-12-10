import { Droppable } from 'react-beautiful-dnd'
import { Typography } from '@mui/material'

import { CoinCard } from 'components/CoinCard'

import { Coin } from 'types/coin'

import { Container, DroppableContainer, List } from './styles'

type Props = {
  droppableId: string
  title: string
  list: Coin[]
}

export const CoinList = ({ droppableId, title, list }: Props) => {
  return (
    <Container>
      <Typography sx={{ padding: '16px' }}>{title}</Typography>
      <DroppableContainer>
        <Droppable droppableId={droppableId}>
          {(provided, snapshot) => (
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {list.map((item, index) => {
                return <CoinCard item={item} index={index} key={item.name} />
              })}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DroppableContainer>
    </Container>
  )
}
