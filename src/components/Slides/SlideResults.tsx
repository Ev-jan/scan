import styled from "styled-components";
import { formatDate } from "../../helpers";


type SlideProps = {
    date: string,
    docs: number,
    risks: number
}


export default function SlideResults({ date, docs, risks }: SlideProps) {
    return (
        <Container>
            <span>{formatDate(date)}</span>
            <span>{docs}</span>
            <span>{risks}</span>
        </Container>
    );
}

const Container = styled.div`
position: relative;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-between;

width: 133px;
height: 113px;
margin: 17px 0 17px;
background-color: ${props => props.theme.colors.primary.white};
color: ${props => props.theme.colors.primary.black};
font-family: ${props => props.theme.fonts[0]};
font-size: 18px;
font-weight: 400;
border-right: 2px solid rgba(148, 148, 148, 0.4);



@media screen and (max-width: 600px) {
    flex-flow: row nowrap;
    width: 100%;
    justiy-content: center;
    align-items: center;
    height: 70px;
    border: none;
    margin: 0;
    }
`