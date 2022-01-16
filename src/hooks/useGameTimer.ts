import { useContext } from 'react'
import TimerContext from '@contexts/GameController/Timer'
import useGameFinish from '@hooks/useGameFinish'

interface ReturnValue {
  timer: Timer
  startTimer: () => void
}

const useGameTimer = (): ReturnValue => {
  const [timer, setTimer] = useContext(TimerContext)
  const { finishGame } = useGameFinish()

  const startTimer = () => {
    let currentValue = 60
    setTimer(60)

    const interval = setInterval(() => {
      currentValue--
      setTimer(currentValue)

      if (currentValue === 0) {
        clearInterval(interval)
        finishGame()
      }
    }, 1000)
  }

  return { timer, startTimer }
}

export default useGameTimer
