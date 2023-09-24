import styled, { css } from "styled-components";
import { Field, Form, Formik, ErrorMessage, useField, useFormikContext } from "formik";
import Triangle from "../../../assets/img/arrowSelect.svg";
import Tick from "../../../assets/img/tickListItem.png";
import Unchecked from "../../../assets/img/unchecked.svg";
export { Field, Form, Formik, ErrorMessage, Triangle, useField, useFormikContext};

export const FieldSet = styled.fieldset`
  display: flex;
  flex-flow: column nowrap;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
`;

export const Label = styled.label`
  position: relative;
  font-family: ${(props) => props.theme.fonts[0]};
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
`;


const SharedInputStyle = css`
position: relative;
padding: 12px 15px;
margin-bottom: 6px;
height: 43px;
max-width: 242px;
border-radius: 5px;
border: 1px solid #C7C7C7;
outline: 1px solid #C7C7C7;
background: #FFF;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
text-align: start;

@media screen and (max-width: 400px) {
    max-width: 335px;
}

&::placeholder {
    text-align: center;
    color: #949494;
    font-family: ${(props) => props.theme.fonts[0]};
    font-size: 14px;
    font-weight: 400;
}
`
const WithIcon = css`
  background-image: url(${Triangle});
  background-repeat: no-repeat;
  background-position: 95% 50%;
`

export const StyledInput = styled.input<{ $error?: boolean }>`
${SharedInputStyle}

${(props) =>
  props.$error &&
  css`
    border-radius: 5px;
    border: 1px solid #ff5959;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(255, 89, 89, 0.2);
    color: #ff5959;
    outline: 1px solid #ff5959;
  `}'
`;

export const StyledSelect = styled.select<{ $error?: boolean }>`
${SharedInputStyle}
${WithIcon}
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
`;

export const StyledDateInput = styled(StyledInput)`
${WithIcon}
width: 100%;
`;

export const HiddenCheckBox = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  margin-right: 25px;

  &::after {
    content: "";
    border: none;
    display: inline-block;
    background-image: url(${Unchecked});
    width: 20px;
    height: 20px;
  }

  &:checked::after {
    content: "";
    display: inline-block;
    border: 1px solid #000;
    background-color: #fff;
    background-image: url(${Tick});
    background-position: center;
    background-size: 17px 17px;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  }
`;

export const CheckBoxLabel = styled(Label)`
color: rgba(0, 0, 0, 0.4);
  margin-bottom: 15px;
  padding-left: 37px;
  &:has(input[type="checkbox"]:checked) {
    color: rgba(0, 0, 0, 1);
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const StyledErrorMessage = styled.div`
  color: #ff5959;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  height: 16px;
  max-width: 242px;

@media screen and (max-width: 400px) {
    max-width: 335px;
}
`

export const Asterisk = styled.span<{$error: boolean }>`
  color: ${(props) => (props.$error ? "#ff5959" : "#000")};
  content: "*";
`;
