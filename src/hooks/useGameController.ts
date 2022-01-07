import { useState } from 'react'

interface ReturnValue {
  currentCard: string
  passCard: () => void
  guessCard: () => void
}

const useGameController = (): ReturnValue => {
  /**
   * Treat `unguessed` as a stack from which we remove elements for guessing
   */
  const [unguessed, setUnguessed] = useState<string[]>(mockStrings)
  const [guessed, setGuessed] = useState<string[]>([])

  const currentCard = unguessed[unguessed.length - 1]

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

  return { currentCard, passCard, guessCard }
}

export default useGameController

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
