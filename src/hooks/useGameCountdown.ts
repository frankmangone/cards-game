import { useContext } from 'react'
import CoundownContext from '@contexts/GameController/Countdown'

interface ReturnValue {
  countdown: Countdown
  startCountdown: () => void
}

const useGameCountdown = (): ReturnValue => {
  const [countdown, setCountdown] = useContext(CoundownContext)

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
