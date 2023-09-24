import styled from "styled-components";

const Tagline = styled.p`
display: flex;
max-width: 534px;
margin: 0;
padding: 0;
color: ${props => props.theme.colors.primary.black};
font-family: ${props => props.theme.fonts[0]};
font-size: 20px;
font-weight: 400;

@media screen and (max-width: 768px){
    font-size: ${props => props.theme.fontSizes[18]};
}
`

export default Tagline