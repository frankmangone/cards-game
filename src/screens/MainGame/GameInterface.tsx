import { useEffect } from 'react'
import styled from 'styled-components/native'
import useGameCards from '@hooks/useGameCards'
import useGameTimer from '@hooks/useGameTimer'
import useGameFinish from '@hooks/useGameFinish'
import Separator from '@components/Separator'
import Show from '@components/Show'
import CardStack from './CardStack'
import FinishedCard from './FinishedCard'
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

const GameInterface: React.VFC = () => {
  const { remainingCards } = useGameCards()
  const { startTimer, stopTimer } = useGameTimer()
  const { isFinished, isStarted, finishGame } = useGameFinish()

  useEffect(() => {
    if (!isStarted) return
    startTimer()
  }, [])

  useEffect(() => {
    if (remainingCards > 0) return

    // Stop timer, end game
    stopTimer()
    finishGame()
  }, [remainingCards])

  const showGame = remainingCards > 0 && !isFinished

  return (
    <ScreenWrapper>
      <Separator height={180} />
      <RemainingCards />
      <GuessedCards />
      <Timer />
      <CardsWrapper>
        <Show
          when={showGame}
          fallback={<FinishedCard text={remainingCards > 0 ? "Time's up!" : 'Done!'} />}
        >
          <SwipeableCard />
          <CardStack remainingCards={remainingCards} />
        </Show>
      </CardsWrapper>
      <GameGuessIcon />
      <GamePassIcon />
    </ScreenWrapper>
  )
}

export default GameInterface
