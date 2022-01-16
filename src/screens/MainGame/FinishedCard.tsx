import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

interface FinishedCardProps {
  text: string
}

const Wrapper = styled.View`
  background-color: ${(props) => props.theme.getColor({ name: 'red', shade: 100 })};
  border: 3px solid ${(props) => props.theme.getColor({ name: 'black', opacity: 5 })};
  border-radius: 10px;
  justify-content: center;
  padding: 60px 40px;
  min-height: 200px;
  width: ${Dimensions.get('window').width - 20}px;
  z-index: 5;
`

const Text = styled.Text`
  color: ${(props) => props.theme.getColor('red')};
  font-size: 40px;
  text-align: center;
`

const TimeFinished: React.VFC<FinishedCardProps> = (props) => {
  const { text } = props

  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default TimeFinished
