import styled from 'styled-components/macro'
import add from '../icons/add.svg'
import DownArrowIcon from '../icons/arrow-drop-down.svg'
import BackIcon from '../icons/arrow-back.svg'

export const IconButton = styled.button`
  width: ${props => (props.size ? props.size : '45px')};
  height: ${props => (props.size ? props.size : '45px')};
  border: none;
  border-radius: 50%;
  background-image: ${props =>
    props.icon ? `url(${props.icon})` : `url(${add})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 66%;
  background-color: ${props => {
    if (props.bgcolor === 'default') return props.theme.common.white
    if (props.bgcolor === 'primary') return props.theme.palette.primary.light
    if (props.bgcolor === 'secondary') return props.theme.palette.secondary.main
    return props.theme.common.black
  }};
  &:hover,
  &:focus,
  &:active {
    background-color: ${props => {
      if (props.bgcolor === 'default') return props.theme.palette.default.light
      if (props.bgcolor === 'primary') return props.theme.palette.primary.main
      if (props.bgcolor === 'secondary')
        return props.theme.palette.secondary.light
      return props.theme.palette.default.dark
    }};
    outline: 0;
  }
  box-shadow: ${props => {
    if (props.raised === 1)
      return '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
    return 'none'
  }};
`

export const SelectButton = styled(IconButton)`
  position: absolute;
  right: 0;
  bottom: -10px;
  background-image: url(${DownArrowIcon});
`

export const ActionButton = styled(IconButton)`
  position: fixed;
  right: 25px;
  bottom: 25px;
`

export const BackButton = styled(IconButton)`
  margin-left: 1em;
  background-image: url(${BackIcon});
`
