import { Animated } from 'react-native'
import styled from 'styled-components/native'
import useSwipeableCard from '@hooks/useSwipeableCard'
import type { VFC } from 'react'

interface SwipeableCardProps {
  cardText: string
}

// TODO: Determine width by using viewport width
const Wrapper = styled(Animated.View)`
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 60px 40px;
  width: 300px;
`

const Text = styled.Text`
  font-size: 20px;
  text-align: center;
`

const SwipeableCard: VFC<SwipeableCardProps> = (props) => {
  const { cardText } = props
  const { leftPosition, rotation, panHandlers } = useSwipeableCard()

  return (
    <Wrapper
      style={{ marginLeft: leftPosition, transform: [{ rotate: rotation }] }}
      {...panHandlers}
    >
      <Text>{cardText}</Text>
    </Wrapper>
  )
}

export default SwipeableCard
