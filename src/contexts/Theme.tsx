import React, { createContext, useContext } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components/native'
import { THEME } from '@lib/theme'

interface ContextValues {
  theme: Theme
  getColor: (value: ColorValue) => string
}

const defaultValue = {
  theme: {} as Theme,
  getColor: () => '',
}

/**
 * Context & Hook
 */
const ThemeContext = createContext<ContextValues>(defaultValue)

export const useTheme = (): ContextValues => {
  return useContext(ThemeContext)
}

/**
 * ThemeProvider
 *
 * The theme context provides both the ability to switch between different themes
 * and the ability to use theme values in styled components through `props.theme`
 * (thanks to styled-components' ThemeProvider)
 */
export const ThemeProvider: React.FC = (props) => {
  const { children } = props

  const theme = THEME

  /**
   * getColor
   *
   * A helper function to help choose colors in a more concise and understandable manner.
   * It can take one of two values:
   * - A color name i.e. "primary"
   * - An object with keys:
   *  {
   *    name: string
   *    shade?: number
   *    opacity?: string
   *  }
   *
   * @param value
   */
  const getColor = (value: ColorValue): string => {
    if (typeof value !== 'string') {
      const { name, shade = 900, opacity = 100 } = value
      const hsl: ColorHSL = theme.colors[name][shade]
      return buildHSLString(hsl, opacity)
    }

    const hsl: ColorHSL = theme.colors[value][900]
    return buildHSLString(hsl, 100)
  }

  /**
   * buildHSLString
   *
   * @param [ColorHSL] hsl
   * @param [number] opacity
   */
  const buildHSLString = (hsl: ColorHSL, opacity: number): string => {
    const [hue, saturation, lightness] = hsl
    if (opacity === 100) return `hsl(${hue}, ${saturation}%, ${lightness}%)`
    return `hsl(${hue}, ${saturation}%, ${lightness}%, ${opacity / 100})`
  }

  const contextValue = {
    theme,
    getColor,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <SCThemeProvider theme={{ ...theme, getColor }}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}
