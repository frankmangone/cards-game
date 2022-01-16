import { useContext } from 'react'
import { GameCountdownContext } from '@contexts/GameController'

interface ReturnValue {
  countdown: Countdown
  startCountdown: () => void
}

const useGameCountdown = (): ReturnValue => {
  const [countdown, setCountdown] = useContext(GameCountdownContext)

  const startCountdown = () => {
    let currentValue = 3
    setCountdown(3)

    const interval = setInterval(() => {
      currentValue--
      setCountdown(currentValue)

      if (currentValue === 0) clearInterval(interval)
    }, 1000)
  }

  return {
    countdown,
    startCountdown,
  }
}

export default useGameCountdown
