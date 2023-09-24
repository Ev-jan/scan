import styled from "styled-components";
import MainBoxAnimated from "../../components/Wrappers/MainBox";
import Heading3 from "../../components/Headings/H3";
import Tagline from "../../components/Tagline/Tagline";

export default function Faq() {

    return (
        <MainBoxAnimated>
            <Top>
                <StyledHeading>Частые вопросы</StyledHeading>
                <StyledTagLine>Возможно, на ваш вопрос уже есть ответ</StyledTagLine>
            </Top>

            <Section>
                <QuestionList>
                    <Question>
                        <QuestionHeading>Какие данные можно найти в "СКАН"?</QuestionHeading>
                        <Answer>В нашей базе представлена информация о более чем 20 миллионах компаний. Вы можете найти здесь сведения о любой организации, зарегистрированной в России.</Answer>
                    </Question>
                    <Question>
                        <QuestionHeading>Как "СКАН" помогает выбирать лучших подрядчиков?</QuestionHeading>
                        <Answer>Мы предоставляем информацию о прошлых работах и отзывах других клиентов о контрагентах. Это позволяет принимать взвешенное решение при выборе подрядчика.
                            </Answer>
                    </Question>
                    <Question>
                        <QuestionHeading>Как работает сервис поиска публикаций по ИНН?</QuestionHeading>
                        <Answer>Наш сервис позволяет найти все публикации о компании по её ИНН в интернете. Это важный инструмент для контроля репутации бизнеса.</Answer>
                    </Question>
                    <Question>
                        <QuestionHeading>Как связаться с поддержкой "СКАН" в случае возникновения вопросов?</QuestionHeading>
                        <Answer>Вы можете связаться с нами через форму обратной связи на сайте или по указанным контактам. Наша команда готова помочь вам в решении любых вопросов.</Answer>
                    </Question>
                </QuestionList>
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

@media screen and (max-width: 375px) {
    max-width: 80%;
}
`

const Section = styled.section`
display: flex;
flex-flow: row wrap;
`
const QuestionList = styled.ul`
display: flex;
flex-direction: column;
width: 100%;
`
const Question = styled.li`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 24px;
`
const QuestionHeading = styled.h4`
font-size: ${props => props.theme.fontSizes[16]};
font-family: ${props => props.theme.fonts[2]};
font-weight: 600;
`
const Answer = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 1.5;
margin: 0;
`


