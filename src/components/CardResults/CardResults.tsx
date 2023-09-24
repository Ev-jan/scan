import styled, { css } from 'styled-components';
import PlaceHolder from '../../assets/img/placeholderImage.png';
import Button from '../Button/Button';
import { TScanDoc } from '../../types';


export default function CardResults({ title, date, sourceName, content, wordCountString, publicationType, imgUrl, sourceUrl }: TScanDoc) {


    return (
        <Container>
            <CardHeader>
                <DateSourceContainer>
                    <IssueDate>{date}</IssueDate>
                    <Source>{sourceName}</Source>
                </DateSourceContainer>
                <CardTitle>{title}</CardTitle>
                {publicationType && <TypeBadge>{publicationType}</TypeBadge>}
            </CardHeader>
            <ImageContainer $src={imgUrl}>
                {imgUrl && <Image src={imgUrl} alt={title} />}
            </ImageContainer>
            <CardBody>
                {content}
            </CardBody>
            <CardFooter>
                {sourceUrl && <StyledButton elementType="link" hue="light" to={sourceUrl} target='_blank'>
                    Читать в источнике
                </StyledButton>}
                <WordCount>{wordCountString}</WordCount>
            </CardFooter>
        </Container>
    )
}


const meta = css`
color: #949494;
font-size: ${props => props.theme.fontSizes[16]};
font-weight: 400;
vertical-align: middle;
margin-bottom: 24px;
@media (max-width: 900px) {
    font-size: ${props => props.theme.fontSizes[14]};
    margin-bottom: 21px;
}
`

const Container = styled.article`
max-width: 100%;
height: max-content;
padding: 19px 28px 30px 30px;
border-radius: 10px;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);

@media (max-width: 900px) {
    padding: 19px 14px 19px 24px;
}
`

const CardHeader = styled.header`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`
const DateSourceContainer = styled.div`
${meta};
`

const IssueDate = styled.span`
margin-right: 9px;
`

const Source = styled.span`
text-decoration-line: underline;
text-underline-offset: 4px;
line-height: 1.5;
`

const CardTitle = styled.h5`
max-width: 546px;
color: ${props => props.theme.colors.primary.black};
font-size: 26px;
font-weight: 500;
padding: 0;
margin: 0;
margin-bottom: 14px;

@media (max-width: 900px) {
    font-size: 19px;
    margin-bottom: 20px;
}
`
const TypeBadge = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 22px;
max-width: fit-content;
margin-bottom: 14px;
padding: 0 11px 0 14px;
border-radius: 5px;
background: #FFB64F;
font-size: 12px;

@media (max-width: 900px) {
    height: 20px;
    font-size: 10px;
    margin-bottom: 13px;

}
`
const CardBody = styled.div`
color: #000;
opacity: 0.5;
font-family: Inter;
font-size: 16px;
font-weight: 400;
margin-bottom: 32px;

@media (max-width: 900px) {
    margin-bottom: 25px;
    font-size: 12px;
    }
`
const ImageContainer = styled.div<{ $src: string | null }>`
  position: relative;
  width: 100%;
  height: 158px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-image: url(${props => props.$src || PlaceHolder});
  background-size: cover;
  background-position: center;


  @media (max-width: 900px) {
    margin-bottom: 18px;
    }
`;

const Image = styled.img`
position: absolute;
top: 0;
left: 0;
object-fit: contain;
object-position: center;
height: 158px;
width: 100%;
border-radius: 10px;
margin-bottom: 20px;
backdrop-filter: blur(10px);
`

const CardFooter = styled.div`
display: flex;
flex-flow: row wrap-reverse;
row-gap: 6px;
justify-content: space-between;
align-items: start;
`

const WordCount = styled.span`
${meta};
margin: 0;
padding: 0;
margin-top: auto;
`
const StyledButton = styled(Button)`
max-width: 223px;
height: 46.539px;
`