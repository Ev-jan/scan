import styled from "styled-components";
import AuthImage from "../../assets/img/authHero.png";
import { Outlet } from 'react-router-dom';
import Heading3 from "../../components/Headings/H3";
import { MainBox } from "../../components/Wrappers/MainBox";
import ShadowWrapper from "../../components/Wrappers/ShadowWrapper";


export default function Auth() {


    return (
        <MainContent>
            <Title>
                Для оформления подписки<br />на тариф необходимо<br />авторизоваться
            </Title>
            <Img src={AuthImage} />
            <FormWrapper>
                <Outlet />
            </FormWrapper>
        </MainContent>
    )
}

const MainContent = styled(MainBox)`
display: grid;
grid-template-areas:
"title form"
"img form";
grid-template-rows: auto 1fr;
grid-template-columns: 1fr minmax(340px, 429px);
padding-top: 162px;

@media screen and (max-width: 960px){
    column-gap: 10px;
    }

@media screen and (max-width: 768px){
grid-template-rows: auto auto auto;
grid-template-columns: 1fr;
row-gap: 45px;
grid-template-areas:
"title"
"form"
"img";
}
`
const Title = styled(Heading3)`
grid-area: title;
max-width: 817px;
`

const Img = styled.img`
grid-area: img;
padding-top: 13px;
padding-left: 112px;
@media screen and (max-width: 850px){
    padding-left: 40px;
    }
@media screen and (max-width: 768px){
    margin-bottom: 81px;
    padding-left: 0;

    }
@media screen and (max-width: 450px){
    height: 100vmin;
    }
`
const FormWrapper = styled(ShadowWrapper)`
grid-area: form;
@media screen and (max-width: 768px){
    padding: 15px;
    max-width: 429px;
        margin-top: 81px;
    }
`