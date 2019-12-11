import styled from 'styled-components/macro'

const CardImage = styled.div`
  width: 128px; /* do not change */
  height: 193px; /* do not change */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: ${props => props.theme.palette.default.light};
  background-image: ${props => props.bgImage};
`

export default CardImage
