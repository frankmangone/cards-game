import { useContext } from 'react'
import { Dimensions } from 'react-native'
import { GameControllerContext } from '@contexts/GameController'
import type { Animated } from 'react-native'

interface ReturnValue {
  dragValue: Animated.Value
  currentCard: string
  remainingCards: number
  addCard: (value: string) => void
  passCard: () => void
  guessCard: () => void
  WIDTH: number
  SWIPE_THRESHOLD: number
}

const useGameController = (): ReturnValue => {
  const { dragValue, unguessedState, guessedState } = useContext(GameControllerContext)

  const { width: WIDTH } = Dimensions.get('window')
  const SWIPE_THRESHOLD = WIDTH * 0.4

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

  /**
   * addCard
   *
   * During setup, adds a card to the `unguessed` array, for later use during play
   */
  const addCard = (value: string) => {
    setUnguessed([...unguessed, value])
  }

  return {
    dragValue,
    currentCard,
    remainingCards,
    addCard,
    passCard,
    guessCard,
    WIDTH,
    SWIPE_THRESHOLD,
  }
}

export default useGameController
