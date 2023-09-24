import { ErrorMessage, Field, Label, StyledErrorMessage, StyledSelect, useFormikContext } from "./SharedUI";


export default function Select() {
    const { setFieldValue } = useFormikContext();
    return (
        <>
            <Label htmlFor="tonality">Тональность</Label>
                <Field
                    as="select"
                    type="select"
                    name="tonality"
                    id="tonality"
                    component={StyledSelect}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        const newValue = e.target.value;
                        setFieldValue('tonality', newValue);
                      }}
                    >
                    <option key="any" value="any">Любая</option>
                    <option key="positive" value="positive">Позитивная</option>
                    <option key="negative" value="negative">Негативная</option>
                </Field>
            <StyledErrorMessage>
                <ErrorMessage name="tonality" />
            </StyledErrorMessage>
        </>
    )
}