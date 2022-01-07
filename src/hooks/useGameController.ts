import { useState } from 'react'

interface ReturnValue {
  currentCard: string
  passCard: () => void
}

const useGameController = (): ReturnValue => {
  /**
   * Treat `unguessed` as a stack from which we remove elements for guessing
   */
  const [unguessed, setUnguessed] = useState(mockStrings)
  const [guessed, setGuessed] = useState([]) // eslint-disable-line

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

  return { currentCard, passCard }
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
