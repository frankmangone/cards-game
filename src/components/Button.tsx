import styled from 'styled-components/native'

interface ButtonProps {
  children: string | JSX.Element
  onPress: () => void
}

const Wrapper = styled.Pressable`
  background-color: ${(props) => props.theme.getColor('black')};
  border-radius: 4px;
  padding: 16px;
`

const Text = styled.Text`
  color: ${(props) => props.theme.getColor('white')};
  font-size: 20px;
  text-align: center;
`

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onPress } = props

  const content = typeof children === 'string' ? <Text>{children}</Text> : children

  return <Wrapper onPress={onPress}>{content}</Wrapper>
}

export default Button
