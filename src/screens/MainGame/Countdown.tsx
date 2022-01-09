import styled from 'styled-components/native'

interface CountdownProps {
  countdown: Countdown
}

const Text = styled.Text`
  color: ${(props) => props.theme.getColor('white')};
  font-size: 60px;
  font-weight: bold;
  text-align: center;
`

export const Countdown: React.VFC<CountdownProps> = (props) => {
  const { countdown } = props
  return <Text>{countdown}</Text>
}

export default Countdown
