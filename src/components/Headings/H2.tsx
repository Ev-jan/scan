import styled from "styled-components";

const Heading2 = styled.h2`
color: ${props => props.theme.colors.primary.black};
font-family: ${props => props.theme.fonts[2]};
font-size: 45px;
font-weight: 900;
text-transform: uppercase;
margin: 0;
margin-bottom: 70px;

@media screen and (max-width: 768px){
    font-size: 28px;
}
`
export default Heading2
