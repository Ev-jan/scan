import styled from "styled-components";

export const Heading3 = styled.h3`
display: flex;
color: ${props => props.theme.colors.primary.black};
font-family: ${props => props.theme.fonts[2]};
padding: 0;
margin: 0;
font-size: 40px;
font-weight: 900;
text-transform: lowercase;

@media screen and (max-width: 960px){
    font-size: 28px;
    }

@media screen and (max-width: 768px){
    font-size: 22px;
}
`
export default Heading3