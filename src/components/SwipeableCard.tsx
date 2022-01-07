import { useRef } from 'react'
import { Animated, PanResponder } from 'react-native'
import styled from 'styled-components/native'
import type { VFC } from 'react'

const Wrapper = styled(Animated.View)`
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 40px;
  width: 200px;
`

const Text = styled.Text`
  font-size: 20px;
`

const SwipeableCard: VFC = () => {
  const dragPosition = useRef(new Animated.Value(0))
  const leftPosition = dragPosition?.current.interpolate({
    inputRange: [-1000, 1000],
    outputRange: [-1000, 1000],
  })

  const dragPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_event, _gestureState) => {
        const { dx } = _gestureState
        dragPosition.current.setValue(dx)
      },
      onPanResponderRelease: (_event, _gestureState) => {},
      onPanResponderTerminationRequest: () => false,
    })
  ).current

  return (
    <Wrapper style={{ marginLeft: leftPosition }} {...dragPanResponder.panHandlers}>
      <Text>Test character name</Text>
    </Wrapper>
  )
}

export default SwipeableCard
