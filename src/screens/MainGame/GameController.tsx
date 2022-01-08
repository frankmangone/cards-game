import { createContext, useRef, useState } from 'react'
import { Animated } from 'react-native'

interface ContextValues {
  dragValue: Animated.Value
  unguessedState: ReactState<string[]>
  guessedState: ReactState<string[]>
}

const defaultValue: ContextValues = {
  dragValue: new Animated.Value(0),
  unguessedState: [[], () => {}],
  guessedState: [[], () => {}],
}

/**
 * Context
 */
export const GameControllerContext = createContext<ContextValues>(defaultValue)

/**
 * GameControllerProvider
 *
 * The GameController provider wraps the game view to enable
 * component access to animated values and state. It centralizes
 * the game's logic.
 */
export const GameControllerProvider: React.FC = (props) => {
  const { children } = props

  const unguessedState = useState<string[]>(mockStrings)
  const guessedState = useState<string[]>([])
  const dragValueRef = useRef(new Animated.Value(0))

  const contextValue = {
    dragValue: dragValueRef.current,
    unguessedState,
    guessedState,
  }

  return (
    <GameControllerContext.Provider value={contextValue}>{children}</GameControllerContext.Provider>
  )
}

const mockStrings = [
  'Franco',
  'Sosa',
  'Tony',
  'Batman',
  'Tu vieja',
  'Shakira',
  'Superman',
  'Terminator',
  'El maestro Splinter',
  'Leonardo Di Caprio',
  'El Papa Francisco',
  'Cleopatra',
  'Akinator',
  'Mi sombra',
]
