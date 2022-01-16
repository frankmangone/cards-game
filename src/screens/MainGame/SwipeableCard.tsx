import { Animated } from 'react-native'
import styled from 'styled-components/native'
import useSwipeableCard from '@hooks/useSwipeableCard'
import useGameCards from '@hooks/useGameCards'

// TODO: Determine width by using viewport width
const Wrapper = styled(Animated.View)`
  background-color: white;
  border: 3px solid ${(props) => props.theme.getColor({ name: 'black', opacity: 5 })};
  border-radius: 10px;
  padding: 60px 40px;
  width: 300px;
  z-index: 5;
`

const Text = styled.Text`
  font-size: 40px;
  text-align: center;
`

const SwipeableCard: React.VFC = () => {
  const { currentCard: cardText, passCard: onPass, guessCard: onGuess } = useGameCards()
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
