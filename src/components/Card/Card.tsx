import styled from "styled-components";
import Button from "../Button/Button";
import Tick from "../../assets/img/tickListItem.png";
import { Tariff } from "../../types";
import CardHeader from "./CardHeader";
import { formatNumber } from "../../helpers";

type CardProps = {
    tariff: keyof typeof Tariff;
    userCurrentTariff?: keyof typeof Tariff;
    tagline: string;
    priceCurrent: number;
    pricePrev: number;
    priceMonth: number | null;
    features: string[];
}

export default function Card({ tariff, tagline, priceCurrent, pricePrev, priceMonth, features, userCurrentTariff }: CardProps ) {

    const isTariffActive = userCurrentTariff === tariff;

    return (
        <Container $isTarifActive={isTariffActive} $tariff={tariff}>
            <CardHeader tariff={tariff} tagline={tagline} />
            <Content>
                {isTariffActive && <ActiveTariffBadge>Текущий тариф</ActiveTariffBadge>}
                <PriceBlock>
                    <Prices>
                        <PriceCurrent>{formatNumber(priceCurrent)} ₽</PriceCurrent>
                        <PricePrev>{formatNumber(pricePrev)} ₽</PricePrev>
                    </Prices>
                        {priceMonth && <Tagline>или {priceMonth} ₽/мес. при рассрочке на 24 мес.</Tagline>}
                </PriceBlock>

                <OptionListTitle>В тариф входит:</OptionListTitle>
                <OptionList>
                    {features.map((feature) => <Option key={feature}>{feature}</Option>)}
                </OptionList>
            </Content>
            <Footer>
                    <Button elementType="link" hue="dark" to={isTariffActive ? "" : "/tariffs"} isLoading={false} disabled={isTariffActive}>
                    {isTariffActive ? "Перейти в личный кабинет" : "Подробнее"}
                    </Button>
            </Footer>
        </Container>
    )
}






const Container = styled.div<{ $tariff?: keyof typeof Tariff, $isTarifActive?: boolean }>`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
box-sizing: content-box;
overflow: hidden;
width: 100%;
max-width: 415px;
background: #FFF;
border-radius: 10px;
border: ${props =>
    props.$isTarifActive
      ? `2px solid ${
          props.$tariff === "beginner"
            ? props.theme.colors.accent.orange
            : props.$tariff === "pro"
            ? props.theme.colors.accent.aqua
            : props.$tariff === "business"
            ? props.theme.colors.primary.black
            : "transparent"
        }`
      : "none"};
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);
`
const Content = styled.div`
position: relative;
font-size: ${props => props.theme.fontSizes[16]};
margin-bottom: 55px;
padding: 33px 15px 0 30px;
width: 100%;
`
const ActiveTariffBadge = styled.div`
position: absolute;
top: 12px;
right: 10px;
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
width: 134px;
height: 24px;
color: ${props => props.theme.colors.primary.white};
font-size: ${props => props.theme.fontSizes[14]};
font-weight: 400;
border-radius: 10px;
background: #3BA5E0;
`
const PriceBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
gap: 10px;
height: 127px;
`
const Prices = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
gap: 19px;
`
const PriceCurrent = styled.span`
color: ${props => props.theme.colors.primary.black};
font-size: ${props => props.theme.fontSizes[30]};
font-weight: 500;
`
const PricePrev = styled.span`
color: rgba(0, 0, 0, .5);
font-size: ${props => props.theme.fontSizes[25]};
font-weight: 500;
text-decoration-line: line-through;
`
const OptionListTitle = styled.h4`
margin: 0;
padding: 0;
font-size: ${props => props.theme.fontSizes[20]};
font-weight: 500;
margin-bottom: 10px;
`

const OptionList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

const Option = styled.li`
margin-bottom: 5px;

&::before {
content: url(${Tick});
vertical-align: middle;
margin-right: 8px;

}
`
const Footer = styled.footer`
display: flex;
width: 100%;
justify-content: center;
padding: 0 30px 24px;
`;

const Tagline = styled.p`
font-size: ${props => props.theme.fontSizes[18]};
padding: 0;
margin: 0;
`
