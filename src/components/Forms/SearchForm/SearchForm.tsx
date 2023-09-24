import styled from "styled-components";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FieldSet, Form, Formik } from "../Components/SharedUI";
import Button from "../../Button/Button";
import TaxInput from "../Components/TaxInput";
import Select from "../Components/Select";
import QuantityInput from "../Components/QuantityInput";
import DateRangeInput from "../Components/DateRangeInput";
import CheckBox from "../Components/CheckBox";
import { TSearchFormData } from "../../../types";
import { SearchFormDataSchema, FormToSearchObjReq } from "./../../../schemas";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { getHistogramsAsync, getPublicationIdsAsync, getPublicationsAsync, setCurrentPageIdsAsync } from "../../../redux/api";
import { FormikHelpers } from "formik";
import { resetDocState } from "../../../redux/features/documents/docSlice";
import { resetHistogramState } from "../../../redux/features/histogram/histogramSlice";

const initialValues: TSearchFormData = {
    inn: '',
    tonality: 'any',
    limit: '',
    startDate: null,
    endDate: null,
    maxFullness: false,
    inBusinessNews: false,
    onlyMainRole: false,
    onlyWithRiskFactors: false,
    excludeTechNews: true,
    excludeAnnouncements: true,
    excludeDigests: true,
};

const CheckBoxValues = Object.keys(initialValues).slice(5);

const CheckBoxLabels = [
    "Признак максимальной полноты",
    "Упоминания в бизнес-контексте",
    "Главная роль в публикации",
    "Публикации только с риск-факторами",
    "Включать технические новости рынков",
    "Включать анонсы и календари",
    "Включать сводки новостей",
]

const CheckBoxData = CheckBoxLabels.map((value, index) => {
    return {
        name: CheckBoxValues[index],
        label: value,
    }
})



export default function SearchForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values: TSearchFormData, actions: FormikHelpers<TSearchFormData>) => {
        dispatch(resetDocState());
        dispatch(resetHistogramState());
        navigate("/results");
        try {
            const transformedInputs = FormToSearchObjReq.parse(values);
            await dispatch(getHistogramsAsync(transformedInputs));
            await dispatch(getPublicationIdsAsync(transformedInputs));
            await dispatch(setCurrentPageIdsAsync()).unwrap();
            await dispatch(getPublicationsAsync()).unwrap();
            actions.setSubmitting(false);
        } catch (error) {
            console.error(error);
            actions.setSubmitting(false);
        }
    };


    return (
        <Formik<TSearchFormData>
            initialValues={initialValues}
            validationSchema={toFormikValidationSchema(SearchFormDataSchema)}
            validateOnChange
            onSubmit={(values, actions) => {
                handleSubmit(values, actions)
            }}>
            {(props) => (
                <StyledForm onSubmit={props.handleSubmit}>
                    <Inn>
                        <TaxInput name="inn" placeholder="10 цифр" />
                    </Inn>
                    <Tonality>
                        <Select />
                    </Tonality>
                    <Qty>
                        <QuantityInput name="limit" placeholder="От 1 до 1000" />
                    </Qty>
                    <Range>
                        <DateRangeInput />
                    </Range>
                    <CheckboxContainer>
                        {CheckBoxData.map((item) => <CheckBox key={item.name} {...item} />)}
                    </CheckboxContainer>
                    <ButtonContainer>
                        <StyledButton
                            elementType="button"
                            type="submit"
                            disabled={Object.keys(props.errors).length !== 0 || props.isSubmitting || !props.touched}
                        >Поиск
                        </StyledButton>
                        <Footnote>
                            * Обязательные к заполнению поля
                        </Footnote>
                    </ButtonContainer>
                </StyledForm>
            )}
        </Formik>
    )
}





const StyledForm = styled(Form)`
display: grid;
grid-template-areas: 
"inn checkboxes"
"tonality checkboxes"
"qty checkboxes"
"range submit"
;
grid-template-columns: 1fr 1fr;
grid-template-rows: repeat(3, 115px) auto;
width: 100%;
height: 100%;
column-gap: 4px;

@media screen and (max-width: 768px){
    column-gap: 10px;
}
@media screen and (max-width: 600px){
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    grid-template-areas: 
    "inn"
    "tonality"
    "qty"
    "range"
    "checkboxes"
    "submit"
;
}
@media screen and (max-width: 400px){
    grid-template-rows: repeat(5, auto);
    }
}
`

const FieldWrapper = styled.div`
display: flex;
flex-direction: column;
`

const Inn = styled(FieldWrapper)`
grid-area: inn;
`
const Tonality = styled(FieldWrapper)`
grid-area: tonality;
`
const Qty = styled(FieldWrapper)`
grid-area: qty;
`
const Range = styled(FieldWrapper)`
grid-area: range;
`
const CheckboxContainer = styled(FieldSet)`
grid-area: checkboxes;
@media screen and (max-width: 400px){
    display: none;
    }

`
const ButtonContainer = styled(FieldWrapper)`
justify-content: start;
align-items: start;
grid-area: submit;
margin-left: auto;

@media screen and (max-width: 600px){
    margin-left: 0;
}
`
const StyledButton = styled(Button)`
margin-top: 40px;
margin-bottom: 10px;
height: 59px;
font-size: 20px;
width: 305px;


@media screen and (max-width: 400px) {
    width: 100%;
    max-width: 335px;
}

`
const Footnote = styled.p`
margin: 0;
color: #949494;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.42px;
`

