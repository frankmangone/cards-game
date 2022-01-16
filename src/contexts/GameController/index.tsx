import { createContext, useRef, useState } from 'react'
import { Animated } from 'react-native'
import CountdownContext from './Countdown'

interface GameControllerContextValues {
  dragValue: Animated.Value
  unguessedState: ReactState<string[]>
  guessedState: ReactState<string[]>
}

const gameControllerDefaultValue: GameControllerContextValues = {
  dragValue: new Animated.Value(0),
  unguessedState: [[], () => {}],
  guessedState: [[], () => {}],
}

/**
 * Contexts
 */
export const GameControllerContext = createContext<GameControllerContextValues>(
  gameControllerDefaultValue
)

/**
 * GameControllerProvider
 *
 * The GameController provider wraps the game view to enable
 * component access to animated values and state. It centralizes
 * the game's logic.
 */
export const GameControllerProvider: React.FC = (props) => {
  const { children } = props

  const countdownState = useState<Countdown>(0)

  const unguessedState = useState<string[]>([])
  const guessedState = useState<string[]>([])
  const dragValueRef = useRef(new Animated.Value(0))

  const controller = {
    dragValue: dragValueRef.current,
    unguessedState,
    guessedState,
  }

  return (
    <GameControllerContext.Provider value={controller}>
      <CountdownContext.Provider value={countdownState}>{children}</CountdownContext.Provider>
    </GameControllerContext.Provider>
  )
}
