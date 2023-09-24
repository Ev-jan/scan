import styled from "styled-components";
import Hero from "../../../assets/img/hero.png"
import Button from "../../../components/Button/Button";
import Heading1 from "../../../components/Headings/H1";
import Tagline from "../../../components/Tagline/Tagline";
import { selectUser, useAppSelector } from "../../../redux/hooks";

const Section = styled.section`
display: flex;
width: 100%;
background: url(${Hero}) no-repeat right;
background-size: contain;
margin-bottom: 109px;

@media screen and (max-width: 1175px){
    flex-direction: column;
    background: none;
}
`
const StyledTagline = styled(Tagline)`
margin-bottom: 70px;
`

const Content = styled.div`
display: flex;
flex-direction: column;`

const HeroImageContainer = styled.div`
display: none;
  position: relative;
  width: 100%;
  padding-top: calc((327 / 351) * 100%);

  @media screen and (max-width: 1175px) {
    display: block;
    padding-top: calc((327 / 375) * 100%);
  }
`;

const HeroImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default function HeroSection() {
    const user = useAppSelector(selectUser)
    
    return (
        <Section>
            <Content>
                <Heading1>
                    сервис по поиску <br />
                    публикаций<br />
                    о компании <br />
                    по ее ИНН
                </Heading1>
                <StyledTagline>
                    Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                </StyledTagline>
                <Button elementType="link" to={user ? "/search" : "/auth/signin"} >Запросить данные</Button>
            </Content>
            <HeroImageContainer>
                <HeroImg src={Hero} />
            </HeroImageContainer>
        </Section>
    )
}