import styled, { css } from "styled-components";


type BurgerProps = {
    toggleMenu: () => void;
    isMenuHidden: boolean;
}

export default function Burger({ toggleMenu, isMenuHidden }: BurgerProps) {

    const handleInputClick = () => {
        toggleMenu();
    }
    return (
        <SidebarIconToggle htmlFor="openSidebarMenu" onClick={handleInputClick}>
            <Input type="checkbox" $checked={isMenuHidden} defaultChecked={isMenuHidden} />
            <SpinnerDiagonal1 $hidden={isMenuHidden} />
            <SpinnerHorizontal $hidden={isMenuHidden} />
            <SpinnerDiagonal2 $hidden={isMenuHidden} />
        </SidebarIconToggle>
    )
}

const SidebarIconToggle = styled.label`

display: none;
@media (max-width: 650px) {
    position: absolute;
    top: calc(47px - 17px);
    display: block;
    width: 30px;
    height: 25px;
    transition: all 0.3s;
    cursor: pointer;
}

`

const Spinner = styled.div`
@media (max-width: 650px) {
    transition: all 0.3s;
    position: fixed;
    height: 5px;
    width: 100%;
    background-color: ${props => props.theme.colors.primary.blue};
}
`
const SpinnerHorizontal = styled(Spinner) <{ $hidden: boolean }>`
@media (max-width: 650px) {
    transition: all 0.3s;
    position: relative;
    margin-top: 3px;
    ${(props) => props.$hidden &&
        css`
        transition: all 0.3s;
        box-sizing: border-box;
        opacity: 0;
        background-color: ${props => props.theme.colors.primary.white};
        `
    }
}
`
const SpinnerDiagonal1 = styled(Spinner) <{ $hidden: boolean }>`
@media (max-width: 650px) {
    position: relative;
    transition: all 0.3s;
    ${(props) => props.$hidden &&
        css`
        transition: all 0.3s;
        box-sizing: border-box;
        transform: rotate(135deg);
        margin-top: 6px;
        background-color: ${props => props.theme.colors.primary.white};
        `
    }
}
`
const SpinnerDiagonal2 = styled(Spinner) <{ $hidden: boolean }>`
@media (max-width: 650px) {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    margin-top: 3px;
    ${(props) => props.$hidden &&
        css`
        transition: all 0.3s;
        box-sizing: border-box;
        transform: rotate(-135deg);
        margin-top: -13px;
        background-color: ${props => props.theme.colors.primary.white};
        `
    }
}
`

const Input = styled.input<{ $checked: boolean }>`
transition: all 0.3s;
box-sizing: border-box;
display: none;
`