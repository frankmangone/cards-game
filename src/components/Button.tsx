import styled from 'styled-components/native'

type ButtonColor = 'black' | 'green'

interface WrapperProps {
  color: ButtonColor
  disabled: boolean
}

type ButtonProps = {
  children: string | JSX.Element
  onPress: () => void
} & Partial<WrapperProps>

const Wrapper = styled.Pressable<WrapperProps>`
  background-color: ${(props) => {
    const { getColor } = props.theme
    if (props.disabled) return getColor({ name: 'black', opacity: 30 })
    switch (props.color) {
      case 'green':
        return getColor('green')
      default:
        return getColor('black')
    }
  }};
  border-radius: 4px;
  padding: 16px;

  border: 3px solid ${(props) =>
    props.disabled ? 'transparent' : props.theme.getColor({ name: 'black', opacity: 30 })}}
`

const Text = styled.Text`
  color: ${(props) => props.theme.getColor('white')};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`

const Button: React.FC<ButtonProps> = (props) => {
  const { children, color = 'black', disabled = false, onPress } = props

  const content = typeof children === 'string' ? <Text>{children}</Text> : children

  return <Wrapper {...{ onPress, color, disabled }}>{content}</Wrapper>
}

export default Button
