import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { useTheme } from '@contexts/Theme'
import useGameController from '@hooks/useGameController'
import { xml } from 'lit-xml'

interface IconProps {
  size: number
}

const Wrapper = styled(Animated.View)<IconProps>`
  position: absolute;
  background: ${(props) => props.theme.getColor('green')};
  border: 3px solid ${(props) => props.theme.getColor({ name: 'black', opacity: 20 })};
  border-radius: ${(props) => props.size}px;
  top: 60px;
`

const GameGuessIcon: React.VFC<Partial<IconProps>> = (props) => {
  const { size = 60 } = props
  const { getColor } = useTheme()
  const { dragValue, WIDTH, SWIPE_THRESHOLD } = useGameController()

  const white = getColor('white')

  const inputRange = [-WIDTH, 0, SWIPE_THRESHOLD, WIDTH]

  const rightPosition = dragValue.interpolate({
    inputRange,
    outputRange: [10, 10, 30, 30],
  })

  const opacity = dragValue.interpolate({
    inputRange,
    outputRange: [0, 0, 1, 1],
  })

  const svg = xml`
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 150 150" style="enable-background:new 0 0 150 150;" xml:space="preserve">
      <polyline stroke="${white}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="40.78,81.52 61.98,102.73 108.04,56.67 "/>
    </svg>
  `

  return (
    <Wrapper style={{ right: rightPosition, opacity }} size={size}>
      <SvgXml xml={String(svg)} width={size} height={size} />
    </Wrapper>
  )
}

export default GameGuessIcon
