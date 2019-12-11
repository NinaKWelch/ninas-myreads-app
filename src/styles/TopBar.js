import styled from 'styled-components/macro'

const TopBar = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: center;
  background: ${props => {
    if (props.bgcolor === 'default') return props.theme.common.white
    if (props.bgcolor === 'primary') return props.theme.palette.primary.main
    return props.theme.palette.default.light
  }};
  color: ${props => props.theme.palette.default.dark};
  box-shadow: ${props => {
    if (props.raised === 1)
      return '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
    return 'none'
  }};
`

export default TopBar
