import { useContext, useEffect, useRef } from 'react'
import TimerContext from '@contexts/GameController/Timer'
import useGameFinish from '@hooks/useGameFinish'

interface ReturnValue {
  timer: Timer
  startTimer: () => void
  stopTimer: () => void
}

const useGameTimer = (): ReturnValue => {
  const [timer, setTimer] = useContext(TimerContext)

  const intervalRef = useRef<Maybe<ReturnType<typeof setInterval>>>(null)

  const { finishGame } = useGameFinish()

  const clearTimerInterval = () => {
    if (!intervalRef.current) return

    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  const startTimer = () => {
    setTimer(60)

    intervalRef.current = setInterval(() => {
      const newValue = timer - 1
      setTimer(newValue)

      if (newValue !== 0) return

      finishGame()
      clearTimerInterval()
    }, 1000)
  }

  const stopTimer = clearTimerInterval

  // TODO: Cleanup when out of focus

  useEffect(() => {
    return () => {
      clearTimerInterval()
    }
  }, [])

  return { timer, startTimer, stopTimer }
}

export default useGameTimer
