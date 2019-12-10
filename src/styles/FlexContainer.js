import styled from 'styled-components/macro'

const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.justify || "center"};
`

export default FlexContainer 