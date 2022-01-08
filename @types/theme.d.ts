/**
 * Colors
 **/
type ColorHSL = [number, number, number]
type ColorShade = number
type ColorNames = 'primary' | 'red' | 'green' | 'white' | 'black'
type Colors = Record<ColorNames, Record<number, ColorHSL>>

type ColorValue =
  | ColorNames
  | {
      name: string
      shade?: number
      opacity?: number
    }

interface Theme {
  colors: Colors
  animationDuration: number
}
