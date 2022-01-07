import styled from 'styled-components/native'
import MainLayout from '@components/MainLayout'
import SwipeableCard from '@components/SwipeableCard'
import useGameController from '@hooks/useGameController'
import type { VFC } from 'react'

const ScreenWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

const MainGame: VFC = () => {
  const { currentCard, passCard, guessCard } = useGameController()

  return (
    <MainLayout>
      <ScreenWrapper>
        <SwipeableCard {...{ cardText: currentCard, passCard, guessCard }} />
      </ScreenWrapper>
    </MainLayout>
  )
}

export default MainGame
