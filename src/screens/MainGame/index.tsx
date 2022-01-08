import styled from 'styled-components/native'
import MainLayout from '@components/MainLayout'
import Show from '@components/Show'
import SwipeableCard from '@components/SwipeableCard'
import RemainingCards from './RemainingCards'
import useGameController from '@hooks/useGameController'
import type { VFC } from 'react'

const ScreenWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

const Done = styled.Text`
  color: #913;
  font-size: 30px;
`

const MainGame: VFC = () => {
  const { currentCard, remainingCards, passCard, guessCard } = useGameController()

  return (
    <MainLayout>
      <ScreenWrapper>
        <RemainingCards remainingCards={remainingCards} />
        <Show when={remainingCards > 0} fallback={<Done>Done!</Done>}>
          <SwipeableCard {...{ cardText: currentCard, passCard, guessCard }} />
        </Show>
      </ScreenWrapper>
    </MainLayout>
  )
}

export default MainGame
