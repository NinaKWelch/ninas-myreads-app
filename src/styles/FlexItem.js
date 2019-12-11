import styled from 'styled-components/macro'

const FlexItem = styled.div`
  width: ${props => {
    if (props.cols === 10) return 'calc(100% / 12 * 10)'
    if (props.cols === 8) return 'calc(100% / 12 * 8)'
    if (props.cols === 6) return 'calc(100% / 2)'
    if (props.cols === 4) return 'calc(100% / 3)'
    if (props.cols === 3) return 'calc(100% / 4)'
    if (props.cols === 2) return 'calc(100% / 6)'
    return '100%'
  }};
`

export default FlexItem
