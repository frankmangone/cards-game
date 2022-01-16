import { createContext, useState, useRef } from 'react'
import { Animated } from 'react-native'

interface CardsContextValues {
  dragValue: Animated.Value
  unguessedState: ReactState<string[]>
  guessedState: ReactState<string[]>
}

const defaultValue: CardsContextValues = {
  dragValue: new Animated.Value(0),
  unguessedState: [[], () => {}],
  guessedState: [[], () => {}],
}

const CardsContext = createContext<CardsContextValues>(defaultValue)

export default CardsContext

export const CardsProvider: React.FC = (props) => {
  const { children } = props
  const unguessedState = useState<string[]>([])
  const guessedState = useState<string[]>([])
  const dragValueRef = useRef(new Animated.Value(0))

  const controller = {
    dragValue: dragValueRef.current,
    unguessedState,
    guessedState,
  }

  return <CardsContext.Provider value={controller}>{children}</CardsContext.Provider>
}
