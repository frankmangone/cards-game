import styled from 'styled-components/native'
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native'

const Wrapper = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${(props) => props.theme.getColor('primary')};
  justify-content: center;
  padding: 10px;
`

const MainLayout: React.FC = (props) => {
  const { children } = props

  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <Wrapper>{children}</Wrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default MainLayout
