import { useContext, useRef } from 'react'
import useNavigation from '@hooks/useNavigation'
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
  const navigation = useNavigation()

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
      clearTimeout(finishTimerRef.current!)
      navigation.push('PostGame')
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
