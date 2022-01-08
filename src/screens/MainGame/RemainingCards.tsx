import styled from 'styled-components/native'
import type { VFC } from 'react'

interface CardsLeftProps {
  remainingCards: number
}

const Text = styled.Text`
  font-size: 30px;
  margin-bottom: 60px;
`

const CardsLeft: VFC<CardsLeftProps> = (props) => {
  const { remainingCards } = props
  return <Text>Cards remaining: {remainingCards}</Text>
}

export default CardsLeft
