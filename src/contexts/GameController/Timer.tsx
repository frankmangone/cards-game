import { createContext, useState } from 'react'

type TimerContextValues = ReactState<Timer>

const timerDefaultValue: TimerContextValues = [60, () => {}]

const TimerContext = createContext<TimerContextValues>(timerDefaultValue)

export default TimerContext

export const TimerProvider: React.FC = (props) => {
  const { children } = props
  const timerState = useState<Timer>(60)

  return <TimerContext.Provider value={timerState}>{children}</TimerContext.Provider>
}
