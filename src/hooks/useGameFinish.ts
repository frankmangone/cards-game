import { useContext } from 'react'
import FinishContext from '@contexts/GameController/Finish'

interface ReturnValue {
  isFinished: boolean
  isStarted: boolean
  finishGame: () => void
  startGame: () => void
}

const useGameFinish = (): ReturnValue => {
  const [isFinished, setIsFinished] = useContext(FinishContext)

  const finishGame = () => {
    setIsFinished(true)
    startFinishTimer()
  }
  const startGame = () => setIsFinished(false)

  const startFinishTimer = () => {
    console.log('start finish timer')
  }

  return {
    isFinished,
    isStarted: !isFinished,
    finishGame,
    startGame,
  }
}

export default useGameFinish
