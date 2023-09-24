import styled from "styled-components";
import Button from "../../Button/Button";

const StyledButton = styled(Button)`
height: 59px;
margin-top: 14px;
margin-bottom: 15px;
font-size: 20px;

&:disabled {
    background: #5970FF;
    opacity: .7;
    color: ${props => props.theme.colors.primary.white};
    cursor: not-allowed;
}
`
const StyledBox = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
gap: 30px;
`

const StyledP = styled.p`
font-size: ${props => props.theme.fontSizes[18]};
font-weight: 400;
text-align: center;
color: ${props => props.theme.colors.primary.black};
`
export default function SignUpForm() {


    return (
        <StyledBox>
            <StyledP>Регистрация новых пользователей осуществляется на нашем новом сайте</StyledP>
            <StyledButton hue="dark" elementType="link" to={"https://scan-interfax.ru/#form-access"}>Перейти</StyledButton>
        </StyledBox>
    );
}