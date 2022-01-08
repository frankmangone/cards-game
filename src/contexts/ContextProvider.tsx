import { ThemeProvider } from '@contexts/Theme'
import { GameControllerProvider } from './GameController'

const ContextProvider: React.FC = (props) => {
  const { children } = props

  return (
    <ThemeProvider>
      <GameControllerProvider>{children}</GameControllerProvider>
    </ThemeProvider>
  )
}

export default ContextProvider
