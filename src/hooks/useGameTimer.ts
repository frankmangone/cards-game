import { useContext, useEffect, useRef } from 'react'
import TimerContext from '@contexts/GameController/Timer'
import useGameFinish from '@hooks/useGameFinish'

interface ReturnValue {
  timer: Timer
  startTimer: () => void
}

const useGameTimer = (): ReturnValue => {
  const [timer, setTimer] = useContext(TimerContext)

  const intervalRef = useRef<Maybe<ReturnType<typeof setInterval>>>(null)

  const { finishGame } = useGameFinish()

  const startTimer = () => {
    let currentValue = 60
    setTimer(60)

    intervalRef.current = setInterval(() => {
      currentValue--
      setTimer(currentValue)

      if (currentValue === 0) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        finishGame()
      }
    }, 1000)
  }

  useEffect(() => {
    return () => {
      if (!intervalRef.current) return
      clearInterval(intervalRef.current)
    }
  }, [])

  return { timer, startTimer }
}

export default useGameTimer
