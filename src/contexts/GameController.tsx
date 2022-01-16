import { createContext, useRef, useState } from 'react'
import { Animated } from 'react-native'

interface GameControllerContextValues {
  dragValue: Animated.Value
  unguessedState: ReactState<string[]>
  guessedState: ReactState<string[]>
}

type GameCountdownContextValues = ReactState<Countdown>

const gameControllerDefaultValue: GameControllerContextValues = {
  dragValue: new Animated.Value(0),
  unguessedState: [[], () => {}],
  guessedState: [[], () => {}],
}

const gameCountdownDefaultValue: GameCountdownContextValues = [0, () => {}]

/**
 * Contexts
 */
export const GameControllerContext = createContext<GameControllerContextValues>(
  gameControllerDefaultValue
)
export const GameCountdownContext =
  createContext<GameCountdownContextValues>(gameCountdownDefaultValue)

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
      <GameCountdownContext.Provider value={countdownState}>
        {children}
      </GameCountdownContext.Provider>
    </GameControllerContext.Provider>
  )
}
