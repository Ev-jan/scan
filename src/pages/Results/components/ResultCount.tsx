import styled from "styled-components";
import { formatCountString } from "./../../../helpers";



type ResultCountProps = {
    totalFound: number
}
export default function ResultCount({totalFound}: ResultCountProps) {

    return (
            <TotalResults>{formatCountString(totalFound)}</TotalResults>
    )
}


const TotalResults = styled.p`
color: #949494;
font-family:${props => props.theme.fonts[0]};
font-size: 18px;
font-weight: 400;
letter-spacing: 0.36px;
padding: 0;
margin: 0;
margin-bottom: 27px;

@media (max-width: 768px) {
    margin-bottom: 34px;
}
`

