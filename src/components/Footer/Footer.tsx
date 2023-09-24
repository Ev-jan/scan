import styled from "styled-components";
import Logo from "./../../assets/img/logo.svg"


export default function Footer() {
    return (
        <StyledFooter>
            <LeftContainer>
            <Details>
                <p>г. Москва, Цветной б-р, 40</p>
                <p><a href="tel:+74957712111">+7 495 771 21 11</a></p>
                <p><a href="mailto:info@company.com">info@company.com</a></p>
            </Details>
            <div>Copyright 2022</div>
            </LeftContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
display: flex;
width: 100%;
height: ${props => props.theme.height.footer};
padding: 25px 60px;
padding: 1.5625rem ${props => props.theme.padding.right} 1.5625rem ${props => props.theme.padding.left};
align-items: center;
justify-content: space-between;
background-color: ${props => props.theme.colors.primary.blue};
box-sizing: border-box;
max-width: 1440px;
margin: 0 auto;
background-image: url(${Logo});
background-repeat: no-repeat;
background-position: 0 -27px;
background-origin: content-box;
background-size: 8.8125rem;

@media screen and (max-width: 600px) {
    background-size: 6.9375rem;
}
`
const LeftContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: end;
height: 100%;
width: 77%;
margin-left: auto;
text-align: right;
font-size: ${props => props.theme.fontSizes[14]};
font-weight: 400;

& > div {
    color: ${props => props.theme.colors.primary.white};
}
`

const Details = styled.address`

& > p, & > p > a {
margin: 0;
text-decoration: none;
font-style: normal;
color: ${props => props.theme.colors.primary.white};
}
`