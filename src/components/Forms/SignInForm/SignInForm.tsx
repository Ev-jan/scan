import GooglePic from "../../../assets/img/authGoogle.svg"
import FacebookPic from "../../../assets/img/authFace.svg"
import YandexPic from "../../../assets/img/authYandex.svg"
import { useFormik } from 'formik';
import { toFormikValidationSchema } from "zod-formik-adapter";
import styled, { css } from "styled-components";
import Button from "../../Button/Button";
import { SignInFormSchema } from "../../../schemas";
import { handlePhoneOrLoginValue } from "../../../helpers";
import { useLoginMutation } from "../../../redux/api";
import { useAppDispatch } from "../../../redux/hooks";
import { setCredentials } from "../../../redux/features/authentication/authentication";
import { setUserData } from "../../../redux/features/profile/profile";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TLoginError } from "../../../types";


export default function SignInForm() {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [loginMutation, { isLoading }] = useLoginMutation();
    const [serverError, setServerError] = useState<string | null>(null);

    const handleLogin = async (login: string, password: string) => {
        try {
            const response = await loginMutation({ login, password });
            

            if ('data' in response) {
                const JWT = response.data.accessToken;
                const expire = response.data.expire;
                dispatch(setCredentials({ login, JWT, expire }));
                dispatch(setUserData({ login }));
                navigate('/');
            }
            if ('error' in response) {
                const responseError = response.error as TLoginError;
                console.error(responseError);
                setServerError(responseError.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }



    const formik = useFormik({
        initialValues: { login: '', password: '' },
        onSubmit: (values, { setSubmitting }) => {
            handleLogin(values.login, values.password)
            setSubmitting(false);
        },
        validationSchema: toFormikValidationSchema(SignInFormSchema),
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formik.handleChange(e);
        setServerError(null);
      }

    return (
        <StyledForm onSubmit={formik.handleSubmit}>

            <Label htmlFor="login">Логин или номер телефона:</Label>
            <StyledField
                autoComplete="off"
                $error={formik.touched.login && !!formik.errors.login}
                placeholder="+7... или логин"
                type="text"
                name="login"
                id="login"
                onChange={handleChange}
                onBlur={formik.handleBlur}
                value={handlePhoneOrLoginValue(formik.values.login)} />
            <StyledErrorMessage>{formik.touched.login && formik.errors.login ? formik.errors.login : ""}</StyledErrorMessage>
            
            <Label htmlFor="password">Пароль:</Label>
            <StyledField
                $error={formik.touched.password && !!formik.errors.password}
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password} />
            <StyledErrorMessage>{serverError || (formik.touched.password && formik.errors.password) ? serverError || formik.errors.password : ""}</StyledErrorMessage>

            <StyledButton
                elementType="button"
                hue="dark"
                type="submit"
                isLoading={isLoading}
                disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0}>Войти</StyledButton>
            <PassRecoverLink>Восстановить пароль</PassRecoverLink>

            <SignWith>Войти через:</SignWith>
            <AuthProviders>
                <AuthProviderBtn disabled><img src={GooglePic} title="this feature is under development" /></AuthProviderBtn>
                <AuthProviderBtn disabled><img src={FacebookPic} title="this feature is under development" /></AuthProviderBtn>
                <AuthProviderBtn disabled><img src={YandexPic} title="this feature is under development" /></AuthProviderBtn>
            </AuthProviders>
        </StyledForm>)
}

const StyledButton = styled(Button)`
height: 59px;
margin-top: 14px;
margin-bottom: 15px;
font-size: 20px;
max-width: 100%;

&:disabled {
    background: #5970FF;
    opacity: .7;
    color: ${props => props.theme.colors.primary.white};
    cursor: not-allowed;
}
`


const StyledForm = styled.form`
display: flex;
flex-flow: column nowrap;
width: 100%;
height: 100%;
`


const Label = styled.label`
color: #949494;
font-family: ${props => props.theme.fonts[0]};
font-size: ${props => props.theme.fontSizes[16]};
font-weight: 400;
margin-bottom: 15px;
`

const StyledField = styled.input<{ $error?: boolean }>`
padding: 12px 15px;
margin-bottom: 6px;
height: 43px;
border-radius: 5px;
border: 1px solid #C7C7C7;
outline: 1px solid #C7C7C7;
background: #FFF;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
${props => props.$error && css`
border-radius: 5px;
border: 1px solid #FF5959;
background: #FFF;
box-shadow: 0px 0px 10px 0px rgba(255, 89, 89, 0.20);
color: #FF5959;
outline: 1px solid #FF5959;
`}'

`

const StyledErrorMessage = styled.div`
color: #FF5959;
font-size: 14px;
font-weight: 400;
text-align: center;
height: 16px;
`

const PassRecoverLink = styled.a`
color: #5970FF;
font-size: 14px;
font-weight: 400;
text-decoration-line: underline;
text-align: center;
margin-bottom: 30px;

&:hover {
    opacity: .5;
    cursor: pointer;
}
`
const SignWith = styled.span`
color: #949494;
font-size: 16px;
font-weight: 400;
margin-bottom: 15px;
`

const AuthProviders = styled.div`
display: flex;
flex-flow: row nowrap;
gap: 10px;
`

const AuthProviderBtn = styled.button`
all: unset;
cursor: not-allowed;
`

// export default function SignInForm() {
//     const navigate = useNavigate();
//     const dispatch = useAppDispatch();
//     const [loginMutation, { isLoading }] = useLoginMutation();

//     const handleLogin = async (login: string, password: string) => {
//         try {
//             const response = await loginMutation({ login, password });

//             if ('data' in response) {
//                 const JWT = response.data.accessToken;
//                 const expire = response.data.expire;
//                 dispatch(setCredentials({ login, JWT, expire }));
//                 dispatch(setUserData({ login }));
//                 navigate('/');
//             }
//             if ('error' in response) {
//                 console.log(response.error);
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     const formik = useFormik({
//         initialValues: { login: '', password: '' },
//         onSubmit: (values, { setSubmitting }) => {
//             handleLogin(values.login, values.password)
//             setSubmitting(false);
//         },
//         validationSchema: toFormikValidationSchema(SignInFormSchema),
//     })

//     return (
//         <form onSubmit={formik.handleSubmit} className={style.form}>

//             <label className={style.label} htmlFor="login">Логин или номер телефона:</label>
//             <input
//                 autoComplete="off"
//                 className={`${style.input} ${formik.touched.login && !!formik.errors.login ? style.error : ''}`}
//                 placeholder="+7... или логин"
//                 type="text"
//                 name="login"
//                 id="login"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={handlePhoneOrLoginValue(formik.values.login)} />
//             <div className={style.errorMessage}>{formik.touched.login && formik.errors.login ? formik.errors.login : ""}</div>

//             <label
//                 className={style.label}
//                 htmlFor="password">Пароль:</label>

//             <input
//                 className={`${style.input} ${formik.touched.password && !!formik.errors.password ? style.error : ''}`}
//                 type="password"
//                 name="password"
//                 id="password"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.password} />
//             <div className={style.errorMessage}>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</div>

//             <StyledButton
//                 elementType="button"
//                 isLoading={isLoading}
//                 className={style.button}
//                 type="submit"
//                 disabled={!formik.touched.login || formik.isSubmitting || Object.keys(formik.errors).length > 0 || isLoading}>
//                 Войти
//             </StyledButton>
//             <a className={style.passRecoverLink}>Восстановить пароль</a>

//             <span className={style.signWith}>Войти через:</span>
//             <div className={style.authProviders}>
//                 <button title="this feature is under development" className={style.authProviderBtn} disabled><img src={GooglePic} alt="sign in with google" /></button>
//                 <button title="this feature is under development" className={style.authProviderBtn} disabled><img src={FacebookPic} alt="sign in with facebook" /></button>
//                 <button title="this feature is under development" className={style.authProviderBtn} disabled><img src={YandexPic} alt="sign in with yandex" /></button>
//             </div>
//         </form>
//     );
// }