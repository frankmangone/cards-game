import styled from 'styled-components/native'
import { View } from 'react-native'
import Show from '@components/Show'

interface TextInputProps {
  label?: string
  placeholder?: string
  value: string
  onChangeText: (value: string) => void
}

const Input = styled.TextInput`
  background-color: ${(props) => props.theme.getColor('white')};
  border: 3px solid ${(props) => props.theme.getColor({ name: 'black', opacity: 50 })};
  border-radius: 4px;
  font-size: 20px;
  padding: 12px 16px;
  margin: 10px 0;
`

const Label = styled.Text`
  color: ${(props) => props.theme.getColor('black')};
  font-size: 20px;
  font-weight: bold;
`

const TextInput: React.VFC<TextInputProps> = (props) => {
  const { label, placeholder, value, onChangeText } = props

  return (
    <View>
      <Show when={label}>
        <Label>{label}</Label>
      </Show>
      <Input {...{ placeholder, value, onChangeText }} />
    </View>
  )
}

export default TextInput
