import { ThemeProvider } from '@contexts/Theme'

const ContextProvider: React.FC = (props) => {
  const { children } = props

  return <ThemeProvider>{children}</ThemeProvider>
}

export default ContextProvider
