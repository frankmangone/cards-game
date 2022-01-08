/**
 * Colors
 * https://coolors.co/fefdfb-fbf8ef-f9f4e7-61a0af-d0114a-1eae79
 **/
const COLORS: Colors = {
  // 'primary' | 'red' | 'green' | 'white' | 'black'
  primary: {
    900: [192, 33, 53], // hsl(192, 33%, 53%)
  },
  red: {
    900: [342, 85, 44], // hsl(342, 85%, 44%)
  },
  green: {
    900: [158, 71, 44], // hsl(158, 71%, 44%)
  },
  white: {
    900: [45, 60, 99], // hsl(45, 60%, 99%)
    800: [45, 60, 96], // hsl(45, 60%, 96%)
    700: [45, 60, 93], // hsl(45, 60%, 93%)
  },
  black: {
    900: [40, 60, 7], // hsl(40, 60%, 7%)
  },
}

export const THEME: Theme = {
  colors: COLORS,
  animationDuration: 200, // ms
}
