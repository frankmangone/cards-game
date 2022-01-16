import { useContext } from 'react'
import FinishContext from '@contexts/GameController/Finish'

interface ReturnValue {
  isFinished: boolean
  finishGame: () => void
  startGame: () => void
}

const useGameFinish = (): ReturnValue => {
  const [isFinished, setIsFinished] = useContext(FinishContext)

  const finishGame = () => setIsFinished(true)
  const startGame = () => setIsFinished(false)

  return {
    isFinished,
    finishGame,
    startGame,
  }
}

export default useGameFinish
