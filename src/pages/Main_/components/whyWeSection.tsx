import styled from "styled-components";
import WhyWeImage from "../../../assets/img/heroWhyWe.png";
import Heading2 from "../../../components/Headings/H2";
import Carousel from "../../../components/Carousel/CarouselV3";
import ClockIcon from "../../../assets/img/clock.svg";
import SearchIcon from "../../../assets/img/search.svg";
import ShieldIcon from "../../../assets/img/shield.svg";
import Slide from "../../../components/Slides/SlideMain";

const slideData = [
    {
        icon: ClockIcon,
        text: "Высокая и оперативная скорость обработки заявки"
    },
    {
        icon: SearchIcon,
        text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"
    },
    {
        icon: ShieldIcon,
        text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"
    },
    {
        icon: ClockIcon,
        text: "Удобный сайт с интуитивно понятным пользовательским интерфейсом"
    },
    {
        icon: SearchIcon,
        text: "Техническая поддержка пользователей 24/7"
    },
    {
        icon: ShieldIcon,
        text: "Гибкие тарифные планы под любые потребности клиента"
    },
]

const slides = slideData.map((item, index) => (
    <Slide key={index} icon={item.icon} text={item.text} />
));

export default function WhyWeSection() {

    return (
        <Section>
            <Content>
                <Heading2>
                    Почему именно мы
                </Heading2>
                <Carousel views="Main" slides={slides} loading={false}/>
            </Content>
            <HeroImageContainer>
                <HeroImg src={WhyWeImage} />
            </HeroImageContainer>
        </Section>
    )
}


const Section = styled.section`
display: flex;
width: 100%;
flex-direction: column;`

const Content = styled.div`
display: flex;
flex-direction: column;`

const HeroImageContainer = styled.div`
position: relative;
width: 100%;
padding-top: calc((575.52 / 1440) * 100%);
margin-bottom: 100.48px;
  
    @media screen and (max-width: 768px){
        margin-bottom: 80.48px;
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