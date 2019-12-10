import { createGlobalStyle } from 'styled-components/macro'

const AppTheme = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
        background-color: ${props => (props.theme.common.white)};
        font-size: ${props => (props.theme.typography.fontSize)};
        color: ${props => (props.theme.palette.secondary.main)};
        font-family: ${props => props.theme.typography.fontFamily};
    }

    svg {
        fill: CurrentColor;
        color: red;
    }
  }
`

export default AppTheme
