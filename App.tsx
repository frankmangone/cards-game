import { StatusBar } from 'expo-status-bar'
import ContextProvider from '@contexts/ContextProvider'
import MainGameScreen from '@screens/MainGame'

const App: React.VFC = () => {
  return (
    <ContextProvider>
      <MainGameScreen />
      <StatusBar style="auto" />
    </ContextProvider>
  )
}

export default App
