import styled from 'styled-components/native'

type ButtonColor = 'black' | 'green'

interface WrapperProps {
  color: ButtonColor
}

type ButtonProps = {
  children: string | JSX.Element
  onPress: () => void
} & Partial<WrapperProps>

const Wrapper = styled.Pressable`
  background-color: ${(props) => {
    const { getColor } = props.theme
    switch (props.color) {
      case 'green':
        return getColor('green')
      default:
        return getColor('black')
    }
  }};
  border-radius: 4px;
  padding: 16px;
`

const Text = styled.Text`
  color: ${(props) => props.theme.getColor('white')};
  font-size: 20px;
  text-align: center;
`

const Button: React.FC<ButtonProps> = (props) => {
  const { children, color = 'black', onPress } = props

  const content = typeof children === 'string' ? <Text>{children}</Text> : children

  return (
    <Wrapper onPress={onPress} color={color}>
      {content}
    </Wrapper>
  )
}

export default Button
