import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SIgnUpForm";
// import SignUpForm from "../../components/Forms/SIgnUpForm";
import { useState } from "react";
import styled, { css } from "styled-components";
import Padlock from "../../assets/img/padlock.png"



const TabWrapper = styled.div`
display: flex;
margin-bottom: 40px;
gap: 10px;

& > button:nth-of-type(1) {
    width: 40.4%;
}
& > button:nth-of-type(2) {
    width: 59.6%;
}

@media  screen and (max-width: 768px){
    &>*font-size: 14px;
}
`

const Tab = styled.button<{ $isActive?: boolean }>`
all: unset;
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 35px;
font-size: 16px;
${props => props.$isActive ? css`
color: #029491;
&>img {
    display: block;
}
border-bottom: 2px solid #029491;
` : css`
color: #C7C7C7;
border-bottom: 2px solid #C7C7C7;
`};


`
const TabIcon = styled.img`
display: none;
position: absolute;
inset: -80px -65px;

@media  screen and (max-width: 768px){
    inset: -80px 70%;
}
`
type CompoundAuthFormPRops = { view: "signin" | "signup" }

export default function CompoundAuthForm({ view } : CompoundAuthFormPRops) {
    
const [authProcess, setAuthProcess] = useState<"signin" | "signup">(view || "signup");
const handleClick = () => {
    setAuthProcess((prev) => (prev === "signin" ? "signup" : "signin"));
}
    return (

        <>
            <TabWrapper>
                <Tab $isActive={authProcess === "signin"} onClick={handleClick}><TabIcon src={Padlock} />Войти</Tab>
                <Tab $isActive={authProcess === "signup"} onClick={() => setAuthProcess("signup")}><TabIcon src={Padlock} />Зарегистрироваться</Tab>
            </TabWrapper>
            {authProcess === 'signin' ? <SignInForm /> : <SignUpForm />}
        </>
    )
}