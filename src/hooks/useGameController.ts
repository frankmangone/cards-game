import { useState } from 'react'

const useGameController = () => {
  /**
   * Treat `unguessed` as a stack from which we remove elements for guessing
   */
  const [unguessed, setunguessed] = useState(mockStrings) // eslint-disable-line
  const [guessed, setGuessed] = useState([]) // eslint-disable-line

  const currentCard = unguessed[unguessed.length - 1]

  return { currentCard }
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
