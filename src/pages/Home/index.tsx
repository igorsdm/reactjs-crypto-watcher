import { useState, useEffect, useCallback } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { CoinList } from 'components/CoinList'

import { getPossibleCoins } from 'services/coins'

import { Coin } from 'types/coin'

import { Charts } from 'components/Charts'
import { Container, ListContainer, ChartsContainer } from './styles'

type InitialStateCoins = {
  possibleCoins: Coin[]
  watchList: Coin[]
}

export const Home = () => {
  const [coins, setCoins] = useState<InitialStateCoins>(() => {
    const storagedList = localStorage.getItem('cryptowatcher:coins')

    if (typeof storagedList === 'string') {
      return JSON.parse(storagedList)
    }

    return {
      possibleCoins: [],
      watchList: [],
    }
  })

  const getCoinsList = useCallback(async () => {
    if (!localStorage.getItem('cryptowatcher:coins')) {
      const data = await getPossibleCoins()
      setCoins({ possibleCoins: data.coins, watchList: [] })
    }
  }, [])

  useEffect(() => {
    getCoinsList()
  }, [getCoinsList])

  const onDragEnd = useCallback(
    (result: DropResult): void => {
      const { destination, source } = result

      if (!destination) {
        return
      }

      if (destination.droppableId === source.droppableId) {
        const { droppableId } = destination

        const newArray = Array.from(
          coins[droppableId as keyof InitialStateCoins]
        )

        const [removed] = newArray.splice(source.index, 1)

        newArray.splice(destination.index, 0, removed)

        const newState = { ...coins }

        newState[droppableId as keyof InitialStateCoins] = newArray

        setCoins(newState)
        localStorage.setItem('cryptowatcher:coins', JSON.stringify(newState))
      } else {
        const startArray = Array.from(
          coins[source.droppableId as keyof InitialStateCoins]
        )

        const [removed] = startArray.splice(source.index, 1)

        const finishArray = Array.from(
          coins[destination.droppableId as keyof InitialStateCoins]
        )

        finishArray.splice(destination.index, 0, removed)

        const newState = { ...coins }

        newState[source.droppableId as keyof InitialStateCoins] = startArray
        newState[destination.droppableId as keyof InitialStateCoins] =
          finishArray

        setCoins(newState)
        localStorage.setItem('cryptowatcher:coins', JSON.stringify(newState))
      }
    },
    [coins]
  )

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListContainer>
          <CoinList
            title="Possible Coins"
            droppableId="possibleCoins"
            list={coins.possibleCoins}
          />

          <CoinList
            title="Watch List"
            droppableId="watchList"
            list={coins.watchList}
          />
        </ListContainer>
      </DragDropContext>
      <ChartsContainer>
        <Charts list={coins.watchList} />
      </ChartsContainer>
    </Container>
  )
}
