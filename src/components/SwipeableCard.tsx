import { VFC } from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'

const Wrapper = styled(Animated.View)``

const Text = styled.Text`
  font-size: 20px;
`

const SwipeableCard: VFC = () => {
  return (
    <Wrapper>
      <Text>Test character name</Text>
    </Wrapper>
  )
}

export default SwipeableCard
