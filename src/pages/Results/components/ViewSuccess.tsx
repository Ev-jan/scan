import SuccessHero from "../../../assets/img/success.svg";
import Heading3 from "../../../components/Headings/H3";
import styled from "styled-components";



export default function Success() {


        return (
            <>
                <Heading>Результаты поиска</Heading>
                <Pic src={SuccessHero} />
            </>
        )

}


const Heading = styled(Heading3)`
max-width: 509px;
margin-bottom: 36px;
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
