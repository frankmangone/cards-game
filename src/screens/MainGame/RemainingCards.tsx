import styled from 'styled-components/native'
import useGameCards from '@hooks/useGameCards'

const Text = styled.Text`
  font-size: 30px;
  margin-bottom: 60px;
`

const CardsLeft: React.VFC = () => {
  const { remainingCards } = useGameCards()
  return <Text>Cards remaining: {remainingCards}</Text>
}

export default CardsLeft
