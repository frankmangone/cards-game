import styled from 'styled-components/native'
import useGameTimer from '@hooks/useGameTimer'
import { TimerIcon } from '@components/Icons'
import InfoWrapper from './InfoWrapper'

const Text = styled.Text`
  font-size: 30px;
`

const Timer: React.VFC = () => {
  const { timer } = useGameTimer()
  return (
    <InfoWrapper>
      <TimerIcon />
      <Text>{timer}</Text>
    </InfoWrapper>
  )
}

export default Timer
