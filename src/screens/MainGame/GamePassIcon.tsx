import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { useTheme } from '@contexts/Theme'
import useGameController from '@hooks/useGameController'
import { xml } from 'lit-xml'

interface IconProps {
  size?: number
}

const Wrapper = styled(Animated.View)`
  position: absolute;
  top: 60px;
`

const GamePassIcon: React.VFC<IconProps> = (props) => {
  const { size = 60 } = props
  const { getColor } = useTheme()
  const { dragValue, WIDTH, SWIPE_THRESHOLD } = useGameController()

  const inputRange = [-WIDTH, -SWIPE_THRESHOLD, 0, WIDTH]

  const leftPosition = dragValue.interpolate({
    inputRange,
    outputRange: [30, 30, 10, 10],
  })

  const opacity = dragValue.interpolate({
    inputRange,
    outputRange: [1, 1, 0, 0],
  })

  const red = getColor('red')
  const white = getColor('white')

  const svg = xml`
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 150 150" style="enable-background:new 0 0 150 150;" xml:space="preserve">
      <circle fill="${red}" cx="75" cy="75" r="69.8"/>
      <line stroke="${white}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="49.65" y1="48.15" x2="100.35" y2="98.85"/>
      <line stroke="${white}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="100.35" y1="48.15" x2="49.65" y2="98.85"/>
    </svg>
  `

  return (
    <Wrapper style={{ left: leftPosition, opacity }}>
      <SvgXml xml={String(svg)} width={size} height={size} />
    </Wrapper>
  )
}

export default GamePassIcon
