import { createContext } from 'react'

type TimerContextValues = ReactState<Timer>

const timerDefaultValue: TimerContextValues = [60, () => {}]

const TimerContext = createContext<TimerContextValues>(timerDefaultValue)
export default TimerContext
