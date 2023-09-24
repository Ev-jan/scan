import ResultHero from "../../../assets/img/resultHero.png";
import styled from "styled-components";
import Tagline from "../../../components/Tagline/Tagline";
import Heading3 from "../../../components/Headings/H3";

export default function Loading() {
        return (
            <>
                <div>
                    <Heading>Ищем. Скоро <br />будут результаты</Heading>
                    <Paragraph>Поиск может занять некоторое время, просим сохранять терпение.</Paragraph>
                </div>
                <Pic src={ResultHero} />
            </>
        )
    }


const Heading = styled(Heading3)`
max-width: 509px;
margin-bottom: 36px;
`

const Paragraph = styled(Tagline)`
max-width: 447px;
margin-bottom: 21px;
`
const Pic = styled.img`;
width: 100%;
height: auto;
max-width: 550px;

max-height: 490px;
margin-top: auto;
margin-bottom: 59.27px;

  @media screen and (max-width: 375px){
    min-width: unset;
    width: 100%;
}
`;
