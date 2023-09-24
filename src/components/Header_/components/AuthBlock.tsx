import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function AuthBlock() {

    return (
        <AuthContainer className="AuthBlock">
            <SignUp to={"auth/signup"}>Зарегистрироваться</SignUp>
            <SignIn to={"auth/signin"}>Войти</SignIn>
        </AuthContainer>
    )
}


const AuthContainer = styled.div`
flex-shrink: 0;
display: flex;
flex-flow: row nowrap;

@media screen and (max-width: 650px) {
flex-flow: column nowrap;
row-gap: 20.52px;
align-items: center;
max-width: 18.4375rem;
width: 100%;
}
`
const SignUp = styled(NavLink)`
all: unset;
display: inline-block;
text-align: center;
vertical-align: middle;
height: 1.625rem;
border: none;
border-right: solid 2px #029491;
padding-right: 1.125rem;
margin-right: 1.25rem;
background-color: ${props => props.theme.colors.primary.white};
font-size: ${props => props.theme.fontSizes[14]};
font-weight: 500;
line-height: 1.625rem;
opacity: 0.4;

@media screen and (max-width: 650px) {
margin-right: 0;
padding-right: 0;
background-color: transparent;
font-size: ${props => props.theme.fontSizes[16]};
letter-spacing: 0.16px;
font-weight: 400;
color: ${props => props.theme.colors.primary.white};
        }

&:hover {
    opacity: 1;
    cursor: pointer;
}

`
const SignIn = styled(NavLink)`
all: unset;
display: inline-block;
text-align: center;
vertical-align: middle;
line-height: 1.625rem;
width: 4.0625rem;
height: 1.625rem;
border: none;
border-radius: 5px;
background: ${props => props.theme.colors.accent.aqua};
font-size: ${props => props.theme.fontSizes[14]};
font-weight: 500;

@media screen and (max-width: 650px) {
width: 100%;
height: 3.25rem;
line-height: 3.25rem;
    }

&:hover {
    opacity: .4;
    cursor: pointer;
}
`

