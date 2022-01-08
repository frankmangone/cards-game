import { Animated } from 'react-native'
import styled from 'styled-components/native'
import useSwipeableCard from '@hooks/useSwipeableCard'
import useGameController from '@hooks/useGameController'

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

const SwipeableCard: React.VFC = () => {
  const { currentCard: cardText, passCard: onPass, guessCard: onGuess } = useGameController()
  const { leftPosition, rotation, panHandlers } = useSwipeableCard({
    onPass,
    onGuess,
  })

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
