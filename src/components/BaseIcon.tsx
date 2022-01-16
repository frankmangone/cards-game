import React from 'react'
import { Platform } from 'react-native'
import { SvgXml } from 'react-native-svg'

export type BaseIconProps = {
  aspectRatio?: number
  xml: string | ((color: string) => string)
  size?: number
  color?: string
}

/**
 * BaseIcon
 *
 * Base component for all other icons in ./Icons file
 *
 * @param { color, aspectRatio, size, marginLeft, marginRight, xml } props
 * */
const BaseIcon: React.FC<BaseIconProps> = (props) => {
  /**
   * The 'size' prop will actually be taken as the height of the icon
   * It will be multiplied by the 'aspectRatio', which is ( width / height )
   *  */

  const { color = '#000', aspectRatio = 1, size = 30, xml } = props

  let width: number, height: number
  if (aspectRatio < 1) {
    height = size
    width = height * aspectRatio
  } else {
    width = size
    height = width / aspectRatio
  }

  if (Platform.OS === 'web') {
    const image = typeof xml === 'string' ? xml : xml(color)
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(image)}`}
          style={{ transform: `scale(${size / 24})` }}
        />
      </div>
    )
  }
  return (
    <SvgXml
      xml={typeof xml === 'string' ? xml : xml(color)}
      width={`${width}`}
      height={`${height}`}
    />
  )
}

export default BaseIcon
