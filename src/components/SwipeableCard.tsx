import { useRef } from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'
import type { VFC } from 'react'

const Wrapper = styled(Animated.View)`
  border: 1px solid black;
  border-radius: 10px;
  padding: 40px;
  width: 200px;
`

const Text = styled.Text`
  font-size: 20px;
`

const SwipeableCard: VFC = () => {
  const swipePosition = useRef(new Animated.Value(0))

  const leftPosition = swipePosition?.current.interpolate({
    inputRange: [-1, 1],
    outputRange: [-100, 100],
  })

  return (
    <Wrapper style={{ marginLeft: leftPosition }}>
      <Text>Test character name</Text>
    </Wrapper>
  )
}

export default SwipeableCard
