import { SvgXml } from 'react-native-svg'

const GameGuessIcon: React.VFC = () => {
  const xml = `
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 150 150" style="enable-background:new 0 0 150 150;" xml:space="preserve">
      <circle fill="#476427" cx="75" cy="75" r="69.8"/>
      <polyline stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="40.78,81.52 61.98,102.73 108.04,56.67 "/>
    </svg>
  `

  return <SvgXml xml={xml} width={60} height={60} />
}

export default GameGuessIcon
