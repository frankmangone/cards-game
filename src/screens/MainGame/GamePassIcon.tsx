import React from 'react'
import { View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const xml = `
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 150 150" style="enable-background:new 0 0 150 150;" xml:space="preserve">
    <style type="text/css">
      .st0{fill:#AB2C17;}
      .st1{fill:none;stroke:#FFFFFF;stroke-width:17;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    </style>
    <circle class="st0" cx="75" cy="75" r="69.8"/>
    <line class="st1" x1="49.65" y1="48.15" x2="100.35" y2="98.85"/>
    <line class="st1" x1="100.35" y1="48.15" x2="49.65" y2="98.85"/>
  </svg>
`

const GamePassIcon: React.VFC = () => {
  return (
    <View>
      <SvgXml
        xml={xml}
        // width={`${width}`}
        // height={`${height}`}
      />
    </View>
  )
}

export default GamePassIcon
