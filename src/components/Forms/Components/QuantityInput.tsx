import { Asterisk, StyledInput, Label, StyledErrorMessage,  useField, useFormikContext } from "./SharedUI";

type QtyInputProps = {
    name: string;
    placeholder: string;
  }

export default function QuantityInput(props: QtyInputProps) {
    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext();
    return (
        <>
            <Label htmlFor="limit">Количество документов в выдаче <Asterisk $error={meta.touched && !!meta.error}>*</Asterisk></Label>
                <StyledInput
                    {...field}
                    {...props}
                    type="text"
                    id={props.name}
                    $error={meta.touched && !!meta.error}
                    onChange={(e) => {
                        const newValue = e.target.value;
                        setFieldValue('limit', newValue);
                      }}
                    />
            <StyledErrorMessage>
                {meta.touched && meta.error ? meta.error : ""}
            </StyledErrorMessage>
        </>
    )
}