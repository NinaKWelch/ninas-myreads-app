import styled from 'styled-components/macro'

const Container = styled.main`
  width: 100%;
  background-color: ${props => props.bgcolor || 'none'};
  color: ${props => props.theme.palette.default.dark};
`

export default Container
