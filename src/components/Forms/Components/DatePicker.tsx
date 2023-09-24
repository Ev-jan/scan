import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StyledDateInput } from "./SharedUI";
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru)

type DatePickerFieldProps = {
  name: string;
  placeholderText: string;
  error: boolean
}

export default function DatePickerField({ ...props }: DatePickerFieldProps) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value)}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
      dateFormat="dd.MM.yyyy"
      locale="ru"
      autoComplete="off"
      showYearDropdown
      customInput={<StyledDateInput $error={props.error}/>}
    />
  );
}
