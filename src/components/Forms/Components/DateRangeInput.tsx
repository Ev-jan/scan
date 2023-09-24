import DatePickerField from "./DatePicker";
import { useField, FieldSet, StyledErrorMessage, Asterisk } from "./SharedUI";
import styled from "styled-components";

export const FieldSetDates = styled(FieldSet)`
border: none;
flex-flow: row nowrap;
padding: 0;
margin: 0;

& .react-datepicker-wrapper:first-of-type {
margin-right: 20px;
}

@media screen and (max-width: 930px){
    flex-flow: column nowrap;
    & .react-datepicker-wrapper:first-of-type {
        margin-right: 0;
        margin-bottom: 20px;
        }
}

}

`

const DateErrorMessage = styled(StyledErrorMessage)`
max-width: 100%;
margin-bottom: 10px;

@media screen and (max-width: 930px){
text-align: start;
}
@media screen and (max-width: 400px){
text-align: center;
}
`
const Legend = styled.legend`
color: #000;
font-family: ${props => props.theme.fonts[0]};
font-size: 18px;
font-weight: 400;
margin-bottom: 20px;
`


export default function DateRangeInput() {
    const [, metaStart] = useField('startDate');
    const [, metaEnd] = useField("endDate");
    const sharedErrorState = metaStart.touched && !!metaStart.error || metaEnd.touched && !!metaEnd.error;
    const errorMessage = metaStart.touched && metaStart.error ? 
    metaStart.error : metaEnd.touched && metaEnd.error ? 
    metaEnd.error : "";

    return (
        <>
            <FieldSetDates>
                <Legend>Диапазон поиска<Asterisk $error={sharedErrorState}> *</Asterisk></Legend>
                <DatePickerField
                    name="startDate"
                    placeholderText="Дата начала"
                    error={sharedErrorState} />
                <DatePickerField
                    name="endDate"
                    placeholderText="Дата конца"
                    error={sharedErrorState}
                />
            </FieldSetDates>
            <DateErrorMessage>
                {errorMessage}
            </DateErrorMessage>
        </>
    )
}