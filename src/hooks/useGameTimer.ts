import { useContext } from 'react'
import TimerContext from '@contexts/GameController/Timer'

interface ReturnValue {
  timer: Timer
}

const useGameTimer = (): ReturnValue => {
  const [timer, setTimer] = useContext(TimerContext) // eslint-disable-line

  // const startCountdown = () => {
  //   let currentValue = 3
  //   setCountdown(3)

  //   const interval = setInterval(() => {
  //     currentValue--
  //     setCountdown(currentValue)

  //     if (currentValue === 0) clearInterval(interval)
  //   }, 1000)
  // }

  return { timer }
}

export default useGameTimer
