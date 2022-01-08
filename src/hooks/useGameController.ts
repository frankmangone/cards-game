import { useContext } from 'react'
import { GameControllerContext } from '@screens/MainGame/GameController'
import type { Animated } from 'react-native'

interface ReturnValue {
  dragValue: Animated.Value
  currentCard: string
  remainingCards: number
  passCard: () => void
  guessCard: () => void
}

const useGameController = (): ReturnValue => {
  const { dragValue, unguessedState, guessedState } = useContext(GameControllerContext)

  /**
   * Treat `unguessed` as a stack from which we remove elements for guessing
   */
  const [unguessed, setUnguessed] = unguessedState
  const [guessed, setGuessed] = guessedState

  /**
   * Game information
   */
  const currentCard = unguessed[unguessed.length - 1]
  const remainingCards = unguessed.length

  /**
   * passCard
   *
   * Callback to be called when the user swipes left for 'passing'
   * (they can't make their team guess the current card!)
   */
  const passCard = () => {
    setUnguessed([currentCard, ...unguessed.slice(0, unguessed.length - 1)])
  }

  /**
   * guessCard
   *
   * Callback to be called when the user swipes right for 'guessing'
   * (their team successfully guessed their card!)
   */
  const guessCard = () => {
    setUnguessed([...unguessed.slice(0, unguessed.length - 1)])
    setGuessed([...guessed, currentCard])
  }

  return { dragValue, currentCard, remainingCards, passCard, guessCard }
}

export default useGameController
