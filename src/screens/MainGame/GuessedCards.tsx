import styled from 'styled-components/native'
import useGameCards from '@hooks/useGameCards'
import { CheckIcon } from '@components/Icons'
import { useTheme } from '@contexts/Theme'
import InfoWrapper from './InfoWrapper'

const Text = styled.Text`
  font-size: 30px;
`

const GuessedCards: React.VFC = () => {
  const { guessedCards } = useGameCards()
  const { getColor } = useTheme()

  return (
    <InfoWrapper>
      <CheckIcon color={getColor('green')} />
      <Text>{guessedCards}</Text>
    </InfoWrapper>
  )
}

export default GuessedCards
