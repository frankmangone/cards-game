import styled from 'styled-components/native'
import useGameController from '@hooks/useGameController'
import Show from '@components/Show'
import SwipeableCard from '@components/SwipeableCard'
import RemainingCards from './RemainingCards'
import GameGuessIcon from './GameGuessIcon'
import GamePassIcon from './GamePassIcon'

const ScreenWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

const Done = styled.Text`
  color: ${(props) => props.theme.getColor('red')};
  font-size: 30px;
`

const GameInterface: React.VFC = () => {
  const { remainingCards } = useGameController()

  return (
    <ScreenWrapper>
      <RemainingCards />
      <Show when={remainingCards > 0} fallback={<Done>Done!</Done>}>
        <SwipeableCard />
      </Show>
      <GameGuessIcon />
      <GamePassIcon />
    </ScreenWrapper>
  )
}

export default GameInterface
