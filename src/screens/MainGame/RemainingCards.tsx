import styled from 'styled-components/native'
import useGameCards from '@hooks/useGameCards'
import { RemainingCardsIcon } from '@components/Icons'
import InfoWrapper from './InfoWrapper'

const Text = styled.Text`
  font-size: 30px;
`

const CardsLeft: React.VFC = () => {
  const { remainingCards } = useGameCards()
  return (
    <InfoWrapper>
      <RemainingCardsIcon />
      <Text>{remainingCards}</Text>
    </InfoWrapper>
  )
}

export default CardsLeft
