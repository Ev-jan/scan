import styled from "styled-components";
import Target from "../../assets/img/target.svg";
import CellPhone from "../../assets/img/cellphone.svg";
import Bulb from "../../assets/img/bulb.svg"
import { Tariff } from "../../types";

const Header = styled.header<{ $tariff?: "beginner" | "pro" | "business", $isTarifActive?: boolean }>`
position: relative;
display: flex;
flex-direction: inherit;
width: 100%;
height: 132px;
padding: 30px 10px 30px 30px;
background-color: ${props =>
    props.$tariff === "beginner"
        ? props.theme.colors.accent.orange
        : props.$tariff === "pro"
            ? props.theme.colors.accent.aqua
            : props.$tariff === "business"
                ? props.theme.colors.primary.black
                : "transparent"};
color: ${props => props.$tariff === "business" ? props.theme.colors.primary.white : props.theme.colors.primary.black};
@media screen and (max-width: 768px){
    padding: 30px 24px 34px 24px;
}
`;

const CardTitle = styled.h4<{ $tariff?: keyof typeof Tariff }>`
text-transform: capitalize;
color: ${props => props.$tariff === "business" ? props.theme.colors.primary.white : props.theme.colors.primary.black};
margin: 0;    
margin-bottom: 10px;
font-size: 30px;
font-weight: 500;


@media screen and (max-width: 768px){
    font-size: 20px;
    margin-bottom: 22px;
}
`

const Tagline = styled.p`
font-size: 18px;
padding: 0;
margin: 0;
`
const Icon = styled.div<{ $tariff?: keyof typeof Tariff }>`
  position: absolute;
  top: 5px;
  right:  5px;
  width: 92px;
  height: 92px;
  background-image: url(${props =>
        props.$tariff === "beginner"
            ? Bulb
            : props.$tariff === "pro"
                ? Target
                : props.$tariff === "business"
                    ? CellPhone
                    : Bulb
    });
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @media (max-width: 1378px) {
    width: 60px;
    height: 60px;
  }
`;
type CardHeaderProps = {
    tariff: keyof typeof Tariff,
    tagline: string;
}
export default function CardHeader({ tariff, tagline}: CardHeaderProps) {

    return (
            <Header $tariff={tariff}>
                <CardTitle $tariff={tariff}>{tariff}</CardTitle>
                <Tagline>{tagline}</Tagline>
                <Icon $tariff={tariff} />
            </Header>
 
    )
}