import { Asterisk, Label, StyledErrorMessage, StyledInput, useField, useFormikContext } from "./SharedUI";

const clearSpaces = (phoneNumber: string) => {
    return phoneNumber.replace(/\s/g, "");
}

const formatInn = (inn: string) => {
    const match = inn.match(/^(\d{2})(\d{3})(\d{3})(\d{2})$/);
    if (!match) {
        return clearSpaces(inn);
    }
    return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
};

type TaxInputProps = {
    name: string;
    placeholder: string;
  }

export default function TaxInput({ ...props }: TaxInputProps) {
    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext();
return (
    <>
    <Label htmlFor="inn">ИНН компании <Asterisk $error={meta.touched && !!meta.error}>*</Asterisk></Label>
        <StyledInput
        {...field}
        {...props}
            type="text"
            id={field.name}
            onChange={(e) => {setFieldValue(field.name, formatInn(e.target.value))}}
            $error={meta.touched && !!meta.error}
            />
    <StyledErrorMessage>
        {meta.touched && meta.error ? meta.error : ""}
    </StyledErrorMessage>
</>
)
}