import { Animated } from 'react-native'
import styled from 'styled-components/native'
import useSwipeableCard from '@hooks/useSwipeableCard'
import type { VFC } from 'react'

// TODO: Determine width by using viewport width
const Wrapper = styled(Animated.View)`
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 40px;
  width: 300px;
`

const Text = styled.Text`
  font-size: 20px;
`

const SwipeableCard: VFC = () => {
  const { leftPosition, rotation, panHandlers } = useSwipeableCard()

  return (
    <Wrapper
      style={{ marginLeft: leftPosition, transform: [{ rotate: rotation }] }}
      {...panHandlers}
    >
      <Text>Test character name</Text>
    </Wrapper>
  )
}

export default SwipeableCard
