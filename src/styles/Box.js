import styled from 'styled-components/macro'

const Box = styled.div`
  width: 100%;
  margin: ${props => {
    if (props.mt) return `${props.mt} 0 0 0`
    if (props.mb) return `0 0 ${props.mb} 0`
    if (props.my) return `${props.my} 0`
    return '0'
  }};
  padding: ${props => {
    if (props.pt) return `${props.pt} 0 0 0`
    if (props.pb) return `0 0 ${props.pb} 0`
    if (props.py) return `${props.py} 0`
    return '0'
  }};
  border-bottom: ${props =>
    props.divider ? `3px solid ${props.theme.palette.default.light}` : 'none'};
  text-align: ${props => props.align || 'left'};
`

export default Box
