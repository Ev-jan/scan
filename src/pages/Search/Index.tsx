import styled from "styled-components";
import MainBoxAnimated from "../../components/Wrappers/MainBox";
import Heading3 from "../../components/Headings/H3";
import Tagline from "../../components/Tagline/Tagline";
import ShadowWrapper from "../../components/Wrappers/ShadowWrapper";
import Folders from "../../assets/img/folders.png";
import Document from "../../assets/img/document.png";
import Picture from "../../assets/img/heroSearch.png";
import SearchForm from "../../components/Forms/SearchForm/SearchForm";


export default function Search() {

    return (
        <MainBoxAnimated>
            <Top>
                <StyledHeading>Найдите необходимые данные в пару кликов.</StyledHeading>
                <StyledTagLine>Задайте параметры поиска.<br />
                    Чем больше заполните, тем точнее поиск</StyledTagLine>
            </Top>

            <Section>
                <FormWrapper>
                    <SearchForm />
                </FormWrapper>
                <Pic src={Picture} />
            </Section>
        </MainBoxAnimated>
    )
}


const Top = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 47px;
background:  url(${Document}) 70% 80% no-repeat, url(${Folders}) right bottom no-repeat;

@media screen and (max-width: 768px) {
    background:  url(${Document}) 100% 50% no-repeat;
    background-size: 58.242px 71.118px;
}

`

const StyledHeading = styled(Heading3)`
max-width: 817px;
margin-bottom: clamp(19px, 5vw, 25px);
@media screen and (max-width: 375px) {
    max-width: 80%;
}
`

const StyledTagLine = styled(Tagline)`

@media screen and (max-width: 375px) {
    max-width: 80%;
}
`

const Section = styled.section`
display: flex;
flex-flow: row wrap;
column-gap: 80px;
row-gap: 24px;
`
const FormWrapper = styled(ShadowWrapper)`
display: flex;
width: 872px;
max-width: 872px;
padding: 29px 39px 29px 44px;
flex-grow: 3;

@media screen and (max-width: 768px){
    padding: 32px 14px;
    margin: 0 -14px;
}
`

const Pic = styled.img`
flex: 0 0 calc(33.33% - 80px);
min-width: 340px;
max-width: 360px;
height: auto;
max-height: 368px;
margin-top: auto;

  @media screen and (max-width: 375px){
    min-width: unset;
    width: 100%;
}
`;

