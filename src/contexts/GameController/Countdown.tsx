import { createContext } from 'react'

type CountdownContextValues = ReactState<Countdown>

const countdownDefaultValue: CountdownContextValues = [0, () => {}]

const CountdownContext = createContext<CountdownContextValues>(countdownDefaultValue)
export default CountdownContext
