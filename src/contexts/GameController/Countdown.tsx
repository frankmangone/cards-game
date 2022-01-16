import { createContext, useState } from 'react'

type CountdownContextValues = ReactState<Countdown>

const defaultValue: CountdownContextValues = [0, () => {}]

const CountdownContext = createContext<CountdownContextValues>(defaultValue)

export default CountdownContext

export const CountdownProvider: React.FC = (props) => {
  const { children } = props
  const countdownState = useState<Countdown>(0)

  return <CountdownContext.Provider value={countdownState}>{children}</CountdownContext.Provider>
}
