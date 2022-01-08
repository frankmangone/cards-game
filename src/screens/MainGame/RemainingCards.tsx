import styled from 'styled-components/native'
import useGameController from '@hooks/useGameController'

const Text = styled.Text`
  font-size: 30px;
  margin-bottom: 60px;
`

const CardsLeft: React.VFC = () => {
  const { remainingCards } = useGameController()
  return <Text>Cards remaining: {remainingCards}</Text>
}

export default CardsLeft
