import { useEffect } from 'react'
import styled from 'styled-components/native'
import useGameCards from '@hooks/useGameCards'
import useGameTimer from '@hooks/useGameTimer'
import useGameFinish from '@hooks/useGameFinish'
import Separator from '@components/Separator'
import Show from '@components/Show'
import FakeCardStack from './FakeCardStack'
import GuessedCards from './GuessedCards'
import RemainingCards from './RemainingCards'
import SwipeableCard from './SwipeableCard'
import Timer from './Timer'
import GameGuessIcon from './GameGuessIcon'
import GamePassIcon from './GamePassIcon'

const ScreenWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

const CardsWrapper = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const Done = styled.Text`
  color: ${(props) => props.theme.getColor('red')};
  font-size: 30px;
`

const GameInterface: React.VFC = () => {
  const { remainingCards } = useGameCards()
  const { startTimer } = useGameTimer()
  const { isFinished, isStarted } = useGameFinish()

  useEffect(() => {
    if (!isStarted) return
    startTimer()
  }, [])

  const showGame = remainingCards > 0 && !isFinished

  return (
    <ScreenWrapper>
      <Separator height={180} />
      <RemainingCards />
      <GuessedCards />
      <Timer />
      <CardsWrapper>
        <Show when={showGame} fallback={<Done>Done!</Done>}>
          <SwipeableCard />
          <FakeCardStack remainingCards={remainingCards} />
        </Show>
      </CardsWrapper>
      <GameGuessIcon />
      <GamePassIcon />
    </ScreenWrapper>
  )
}

export default GameInterface
