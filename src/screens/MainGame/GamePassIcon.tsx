import { SvgXml } from 'react-native-svg'
import { useTheme } from '@contexts/Theme'

const GamePassIcon: React.VFC = () => {
  const { getColor } = useTheme()

  const red = getColor('red')
  const white = getColor('white')

  const xml = `
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 150 150" style="enable-background:new 0 0 150 150;" xml:space="preserve">
      <circle fill="${red}" cx="75" cy="75" r="69.8"/>
      <line stroke="${white}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="49.65" y1="48.15" x2="100.35" y2="98.85"/>
      <line stroke="${white}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="100.35" y1="48.15" x2="49.65" y2="98.85"/>
    </svg>
  `

  return <SvgXml xml={xml} width={60} height={60} />
}

export default GamePassIcon
