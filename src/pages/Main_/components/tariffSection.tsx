import styled from "styled-components";
import Heading2 from "../../../components/Headings/H2";
import Card from "../../../components/Card/Card";
import { Tariff } from "../../../types";
import { selectUser, useAppSelector } from "../../../redux/hooks";

const tariffData = [
    {
        tariff: Tariff.beginner,
        tagline: "Для небольшого исследования",
        priceCurrent: 799,
        pricePrev: 1200,
        priceMonth: 150,
        features: ["Безлимитная история запросов", "Безопасная сделка", "Поддержка 24/7"],
    },
    {
        tariff: Tariff.pro,
        tagline: "Для HR и фрилансеров",
        priceCurrent: 1299,
        pricePrev: 2600,
        priceMonth: 279,
        features: ["Все пункты тарифа Beginner", "Экспорт истории", "Рекомендации по приоритетам"],
    },
    {
        tariff: Tariff.business,
        tagline: "Для корпоративных клиентов",
        priceCurrent: 2379,
        pricePrev: 3700,
        priceMonth: null,
        features: ["Все пункты тарифа Pro", "Безлимитное количество запросов", "Приоритетная поддержка"],
    },
]


export default function TariffSection() {
    const user = useAppSelector(selectUser);
    const userCurrentTariff = user?.tariff;
    return (
        <Section>
            <Heading2>
                Наши тарифы
            </Heading2>
            <CardContainer>
                {tariffData.map((item) => <Card key={item.tariff} {...item} userCurrentTariff={userCurrentTariff} />)}
            </CardContainer>
        </Section>
    )
}


const Section = styled.section`
display: flex;
width: 100%;
flex-direction: column;`


const CardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  column-gap: 37px;
  row-gap: 43px;

  &&>* {
    width: 33.3%;
  }

  @media screen and (max-width: 1144px) {
    column-gap: 20px;
  }

  @media screen and (max-width: 990px) {
    flex-flow: column wrap;
    &&>* {
        width: 100%;
      }
  }
`;