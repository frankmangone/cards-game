import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { useTheme } from '@contexts/Theme'
import useGameCards from '@hooks/useGameCards'
import { xml } from 'lit-xml'

interface IconProps {
  size: number
}

const Wrapper = styled(Animated.View)<IconProps>`
  position: absolute;
  background: ${(props) => props.theme.getColor('red')};
  border: 3px solid ${(props) => props.theme.getColor({ name: 'black', opacity: 20 })};
  border-radius: ${(props) => props.size}px;
  top: 60px;
`

const GamePassIcon: React.VFC<Partial<IconProps>> = (props) => {
  const { size = 60 } = props
  const { getColor } = useTheme()
  const { dragValue, WIDTH, SWIPE_THRESHOLD } = useGameCards()

  const inputRange = [-WIDTH, -SWIPE_THRESHOLD, 0, WIDTH]

  const leftPosition = dragValue.interpolate({
    inputRange,
    outputRange: [30, 30, 10, 10],
  })

  const opacity = dragValue.interpolate({
    inputRange,
    outputRange: [1, 1, 0, 0],
  })

  const white = getColor('white')

  const svg = xml`
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 150 150" style="enable-background:new 0 0 150 150;" xml:space="preserve">
      <line stroke="${white}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="49.65" y1="48.15" x2="100.35" y2="98.85"/>
      <line stroke="${white}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="100.35" y1="48.15" x2="49.65" y2="98.85"/>
    </svg>
  `

  return (
    <Wrapper style={{ left: leftPosition, opacity }} size={size}>
      <SvgXml xml={String(svg)} width={size} height={size} />
    </Wrapper>
  )
}

export default GamePassIcon
