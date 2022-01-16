import { useContext } from 'react'
import CoundownContext from '@contexts/GameController/Countdown'

interface ReturnValue {
  countdown: Countdown
  startCountdown: () => void
}

const useGameCountdown = (): ReturnValue => {
  const [countdown, setCountdown] = useContext(CoundownContext)

  const startCountdown = () => {
    setCountdown(3)

    const interval = setInterval(() => {
      const newValue = countdown - 1
      setCountdown(newValue)

      if (newValue === 0) clearInterval(interval)
    }, 1000)
  }

  return {
    countdown,
    startCountdown,
  }
}

export default useGameCountdown
