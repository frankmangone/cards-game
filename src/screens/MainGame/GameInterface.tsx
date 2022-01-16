import { useEffect } from 'react'
import styled from 'styled-components/native'
import useGameCards from '@hooks/useGameCards'
import useGameTimer from '@hooks/useGameTimer'
import Show from '@components/Show'
import FakeCardStack from './FakeCardStack'
import SwipeableCard from './SwipeableCard'
import RemainingCards from './RemainingCards'
import GameGuessIcon from './GameGuessIcon'
import GamePassIcon from './GamePassIcon'

const ScreenWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

const Done = styled.Text`
  color: ${(props) => props.theme.getColor('red')};
  font-size: 30px;
`

const GameInterface: React.VFC = () => {
  const { remainingCards } = useGameCards()
  const { startTimer } = useGameTimer()

  useEffect(startTimer, [])

  return (
    <ScreenWrapper>
      <RemainingCards />
      <Show when={remainingCards > 0} fallback={<Done>Done!</Done>}>
        <SwipeableCard />
      </Show>
      <FakeCardStack remainingCards={remainingCards} />
      <GameGuessIcon />
      <GamePassIcon />
    </ScreenWrapper>
  )
}

export default GameInterface
