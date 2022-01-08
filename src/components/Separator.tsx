import styled from 'styled-components/native'

interface WidthProp {
  width: number
  height: null | undefined
}

interface HeightProp {
  width: null | undefined
  height: number
}

type CombinedProps = Pick<WidthProp, 'width'> & Pick<HeightProp, 'height'>
type SeparatorProps = WidthProp | HeightProp | CombinedProps

const Separator = styled.View<SeparatorProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '0px')};
  height: ${(props) => (props.height ? `${props.height}px` : '0px')};
`

export default Separator
