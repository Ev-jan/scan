import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import Loader from "../Loader/Loader"

type ButtonPropsBase = {
    children: React.ReactNode,
    elementType?: "button" | "link",
    className?: string,
    hue?: "dark" | "light",
    isLoading?: boolean,
    disabled?: boolean,
    to?: string,
    onClick?: () => void,
    type?: "submit" | "reset" | "button",
    target?: "_blank"
}

type ButtonProps = ButtonPropsBase & (
    | { elementType: "button"; to?: never }
    | { elementType: "link"; to: string, disabled?: boolean }
  );

export default function Button({children, className, elementType, hue, isLoading, disabled, onClick, to, type, target}: ButtonProps) {
    if (elementType === "button") {
        return (
            <ButtonDark className={className} disabled={disabled} onClick={onClick} type={type}> 
                {isLoading ? <Loader /> : children}
            </ButtonDark>
        )
    }
    if (elementType === "link" && hue === "light") {
        return (
            <LinkLight to={to} className={className} $disabled={disabled || false} target={target}> 
              {isLoading ? <Loader /> : children}
            </LinkLight>
        )
    }
    if (elementType === "link" ) {
        return (
            <LinkDark to={to} className={className} $disabled={disabled || false} target={target}> 
              {isLoading ? <Loader /> : children}
            </LinkDark>
        )
    }
}


const shared = css`
all: unset;
position: relative;
width: 100%;
max-width: 335px;
height: 59px;
isolation: isolate;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
cursor: pointer;

&:disabled {
    background: rgba(210, 210, 210, 1);
    color: ${props => props.theme.colors.primary.black};
    cursor: not-allowed;
}
&::after {
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    background: ${props => props.theme.colors.primary.white};
    opacity: 0.4;
    transform-origin: right;
    inset: 0;
    scale: 0 1;
    transition: scale 450ms cubic-bezier(0.19, 1, 0.22, 1);
}

&:hover::after {
    scale: 1 1;
    transform-origin: left;
}

&:hover {
  filter: hue-rotate(310deg);
}

&:active::after {
    transform-origin: center;
    transition: 0s;
    transform: scale(0, 0);
}
`

const ButtonDark = styled.button<{$isLoading?: boolean}>`
${shared}
background: ${props => props.theme.colors.accent.royalBlue};
color: ${props => props.$isLoading ? "transparent" : props.theme.colors.primary.white};
`
const LinkDark = styled(NavLink)<{$disabled: boolean}>`
${shared}
color: ${props => props.$disabled ? props.theme.colors.primary.black :  props.theme.colors.primary.white};
background: ${props => props.$disabled ? props.theme.colors.disabled : props.theme.colors.accent.royalBlue};
`
const LinkLight = styled(NavLink)<{$disabled: boolean}>`
${shared}
color: ${props => props.$disabled ? props.theme.colors.primary.black : props.theme.colors.primary.black};
background: ${props => props.$disabled ? props.theme.colors.disabled : props.theme.colors.accent.aqua};
`
