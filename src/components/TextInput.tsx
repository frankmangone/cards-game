import { useState } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import Show from '@components/Show'

interface TextInputProps {
  label?: string
  placeholder?: string
  value: string
  onChangeText: (value: string) => void
}

interface InputProps {
  focused: boolean
}

const InputWrapper = styled.View<InputProps>`
  border: 3px solid
    ${(props) => {
      const { getColor } = props.theme
      return props.focused ? getColor('black') : getColor({ name: 'black', opacity: 30 })
    }};
  border-radius: 4px;
  margin: 10px 0;
`

const Input = styled.TextInput`
  background-color: ${(props) => props.theme.getColor('white')};
  font-size: 20px;
  padding: 16px 16px;
`

const Label = styled.Text`
  color: ${(props) => props.theme.getColor('black')};
  font-size: 20px;
  font-weight: bold;
`

const TextInput: React.VFC<TextInputProps> = (props) => {
  const { label, placeholder, value, onChangeText } = props
  const [focused, setFocused] = useState<boolean>(false)

  return (
    <View>
      <Show when={label}>
        <Label>{label}</Label>
      </Show>
      <InputWrapper focused={focused}>
        <Input
          {...{
            placeholder,
            value,
            onChangeText,
            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false),
          }}
        />
      </InputWrapper>
    </View>
  )
}

export default TextInput
