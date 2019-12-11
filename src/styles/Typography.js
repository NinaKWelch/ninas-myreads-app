import styled from 'styled-components/macro'

const Typography = styled.div`
  font-size: ${props => props.size || props.theme.typography.fontSize};
  color: ${props => {
    if (props.color === 'default') return props.theme.palette.default.dark
    if (props.color === 'light') return props.theme.palette.default.main
    if (props.color === 'white') return props.theme.common.white
    if (props.color === 'primary') return props.theme.palette.primary.main
    return props.theme.common.black
  }};
  font-weight: ${props => props.weight || props.theme.typography.fontRegular};
  font-family: ${props =>
    props.brand ? "'Lobster', cursive" : props.theme.typography.fontFamily};
  line-height: ${props => props.height || props.theme.typography.lineHeight};
  padding-bottom: ${props => (props.gutterBottom ? '0.5em' : 'none')};
`

Typography.defaultProps = {
  color: 'default',
  family: 'default'
}

export default Typography
