/**
 * Randomizes the order of the `unguessed` array, using Fisher-Yates algorithm
 * (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
 */

const shuffle = <T>(array: T[]): T[] => {
  const result = [...array]

  for (let i = result.length - 1; i > 0; i--) {
    /**
     * Generate random integer such that 0 ≤ j ≤ i
     *
     * A slight caveat: if j is EXACTLY i + 1 (meaning we got exactly 1 in Math.random),
     * then we run into a problem because the index might not exist (in the first loop
     * of the `for`). This is a VERY unlikely outcome, so it's overlooked in the code.
     */
    const j = Math.floor(Math.random() * i + 1)

    // Swap em'
    const aux = result[i]
    result[i] = result[j]
    result[j] = aux
  }

  return result
}

export default shuffle
