import { Animated, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import useSwipeableCard from '@hooks/useSwipeableCard'
import useGameCards from '@hooks/useGameCards'

const Wrapper = styled(Animated.View)`
  background-color: white;
  border: 3px solid ${(props) => props.theme.getColor({ name: 'black', opacity: 5 })};
  border-radius: 10px;
  justify-content: center;
  padding: 60px 40px;
  min-height: 200px;
  width: ${Dimensions.get('window').width - 20}px;
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
