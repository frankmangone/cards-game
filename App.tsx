import { StatusBar } from 'expo-status-bar'
import ContextProvider from '@contexts/ContextProvider'
import NavigationRouter from './NavigationRouter'

const App: React.VFC = () => {
  return (
    <ContextProvider>
      <NavigationRouter />
      <StatusBar style="auto" />
    </ContextProvider>
  )
}

export default App
