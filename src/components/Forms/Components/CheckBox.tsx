import { Field, CheckBoxLabel, CheckBoxWrapper, HiddenCheckBox } from "./SharedUI";
import { useField } from "formik";
type CheckBoxProps = {
    name: string;
    label: string;
}
export default function CheckBox(props: CheckBoxProps) {
    const [field] = useField(props);
    const { name, label } = props
    return (
        <CheckBoxWrapper>
            <CheckBoxLabel htmlFor={name}>{label}
                <Field
                    {...field}
                    type="checkbox"
                    id={name}
                    value={name}
                    component={HiddenCheckBox}
                />
            </CheckBoxLabel>
        </CheckBoxWrapper>

    )
}