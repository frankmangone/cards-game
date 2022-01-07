import styled from 'styled-components/native'
import type { FC } from 'react'

const Wrapper = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: #ccc;
`

const MainLayout: FC = (props) => {
  const { children } = props

  return <Wrapper>{children}</Wrapper>
}

export default MainLayout
