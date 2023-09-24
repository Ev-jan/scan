import styled from "styled-components";

export const Heading4 = styled.h4`
display: flex;
color: ${props => props.theme.colors.primary.black};
font-family: ${props => props.theme.fonts[2]};
padding: 0;
margin: 0;
font-size: 30px;
font-weight: 900;
text-transform: lowercase;

@media screen and (max-width: 768px){
    font-size: 28px;
}
`
export default Heading4