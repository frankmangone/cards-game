import styled from 'styled-components/native'
import useGameTimer from '@hooks/useGameTimer'

const Text = styled.Text`
  font-size: 30px;
  margin-bottom: 60px;
`

const Timer: React.VFC = () => {
  const { timer } = useGameTimer()
  return <Text>Time left: {timer}</Text>
}

export default Timer
