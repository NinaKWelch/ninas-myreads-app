import styled from 'styled-components/macro'

export const Bar = styled.input`
    width: 100%;
    height: 42px;
    border: ${props => props.border
        ? `3px solid ${props.theme.palette.default.light}`
        : "none"
    };
    border-radius: ${props => props.border
        ? "25px"
        : "none"
    };
    &:hover, &:focus, &:active {
        border: ${props => props.border
            ? `3px solid ${props.theme.palette.primary.light}`
            : "none"
        };
        outline: 0;
    }
`

export const SearchBar = styled(Bar)`
    width: 100%;
    padding: 0 15px;
    font-size: 1em;
    &:focus::placeholder {
        opacity: 0;
    }
`