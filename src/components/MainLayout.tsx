import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: #ccc;
  justify-content: center;
  padding: 10px;
`

const MainLayout: React.FC = (props) => {
  const { children } = props

  return <Wrapper>{children}</Wrapper>
}

export default MainLayout
