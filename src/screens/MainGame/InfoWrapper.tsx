import styled from 'styled-components/native'

const InfoWrapper = styled.View`
  align-items: center;
  align-self: stretch;
  background-color: ${(props) => props.theme.getColor('white')};
  border-radius: 10px;
  flex-direction: row;
  flex-grow: 0;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;

  border: 3px solid ${(props) => props.theme.getColor('black')}};
`

export default InfoWrapper
