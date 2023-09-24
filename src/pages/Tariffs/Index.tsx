import styled from "styled-components";
import MainBoxAnimated from "../../components/Wrappers/MainBox";
import Heading3 from "../../components/Headings/H3";
import Tagline from "../../components/Tagline/Tagline";
import Button from "../../components/Button/Button";


export default function Tariffs() {



    return (
        <MainBoxAnimated>
            <Section>
                <Top>
                <StyledHeading>Наши тарифы</StyledHeading>
                <StyledTagLine>Более подробная информация о тарифах на нашем новом сайте</StyledTagLine>
                <Button elementType="link" hue="dark" to="https://scan-interfax.ru/" target="_blank">Перейти</Button>
                </Top>

            </Section>
        </MainBoxAnimated>
    )
}

const Top = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 47px;
`
const StyledHeading = styled(Heading3)`
max-width: 817px;
margin-bottom: clamp(19px, 5vw, 25px);
@media screen and (max-width: 375px) {
    max-width: 80%;
}
`
const StyledTagLine = styled(Tagline)`
margin-bottom: 47px;
@media screen and (max-width: 375px) {
    max-width: 80%;
}
`

const Section = styled.section`
display: flex;
flex-flow: row wrap;
`

