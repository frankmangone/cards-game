import { useContext, useRef } from 'react'
import FinishContext from '@contexts/GameController/Finish'

const GAME_END_PAUSE = 2000

interface ReturnValue {
  isFinished: boolean
  isStarted: boolean
  finishGame: () => void
  startGame: () => void
}

const useGameFinish = (): ReturnValue => {
  const { isFinishedState, isStartedState } = useContext(FinishContext)
  const [isFinished, setIsFinished] = isFinishedState
  const [isStarted, setIsStarted] = isStartedState
  const finishTimerRef = useRef<Maybe<ReturnType<typeof setTimeout>>>(null)

  const finishGame = () => {
    setIsFinished(true)
    startFinishTimer()
  }
  const startGame = () => {
    setIsStarted(true)
    setIsFinished(false)
  }

  const startFinishTimer = () => {
    finishTimerRef.current = setTimeout(() => {
      console.log('navigate somewhere')
      clearTimeout(finishTimerRef.current!)
    }, GAME_END_PAUSE)
  }

  return {
    isFinished,
    isStarted,
    finishGame,
    startGame,
  }
}

export default useGameFinish
