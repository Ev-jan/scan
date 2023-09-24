import styled, { css } from "styled-components";
import NavLinks from "./components/Navlist";
import AuthBlock from "./components/AuthBlock";
import StatsBlock from "./components/StatsBlock";
import UserBlock from "./components/UserBlock";
import Burger from "./components/Burger";
import { useLocation } from 'react-router-dom';
import { NavItem } from "../../types";
import LogoGreen from "./../../assets/img/logoFilled.svg"
import Logo from "./../../assets/img/logo.svg"
import { selectUser, useAppSelector } from '../../redux/hooks';
import { useState } from "react";


const links: NavItem[] = [
    {
        label: "Главная",
        url: ""
    },
    {
        label: "Тарифы",
        url: "tariffs"
    },
    {
        label: "FAQ",
        url: "faq"
    },
]

export default function Header() {
    const user = useAppSelector(selectUser)
    const location = useLocation();
    const currentPath = location.pathname;
    const allowedPaths = ['/auth/signin', '/auth/signup'];
    const shouldAuthBlockRender = allowedPaths.includes(currentPath);
    const [isMenuHidden, setIsMenuHidden] = useState(false);


    return (
        <StyledHeader $extend={isMenuHidden}>
            <RightSide $toggle={isMenuHidden}>
            <NavLinks links={links} closeMenu={() => setIsMenuHidden(false)}/>
                {user ? <><StatsBlock /> <UserBlock user={user}/></> : !shouldAuthBlockRender && <AuthBlock />}
            </RightSide>
            <Burger toggleMenu={() => setIsMenuHidden(prevState => !prevState)} isMenuHidden={isMenuHidden}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header<{$extend?: boolean}>`
display: flex;
width: 100%;
height: ${props => props.theme.height.header};
padding: clamp(0.5625rem, 2vh, 0.9375rem) ${props => props.theme.padding.right} clamp(0.5625rem, 2vh, 0.9375rem) ${props => props.theme.padding.left};
align-items: center;
justify-content: end;
box-sizing: border-box;
max-width: 90rem;
margin: 0 auto;
overflow: hidden;
background-color: ${props => props.theme.colors.primary.white};
background-image: url(${LogoGreen});
background-repeat: no-repeat;
background-position: -5px -27px;
background-origin: content-box;
background-size: 8.8125rem;
transition: all 0.3s ease-in-out;
align-items: start;
${props => props.$extend && css`
    height: 494px;
    background-color: ${props.theme.colors.primary.blue};
    background-image: url(${Logo});
`}


@media screen and (max-width: 600px) {
    background-size: 6.9375rem;
    background-position: -5px -14px;
}
`
const RightSide = styled.div<{$toggle?: boolean}>`
display: flex;
width: 60%;
max-width: calc(1440px / 2 + 118px);
height: 100%;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
column-gap: 29px;

@media screen and (max-width: 1100px) {
    column-gap: 13px;
    width: 77%;

    
    & > .StatsBlock {
        order: 1;
    }

    & > .UserBlock {
        order: 3;
    }
    & > .AuthBlock {
        order: 3;
    }
    & > .NavLinks {
        order: 2;
    }
}

@media screen and (max-width: 650px) {
    flex-flow: column nowrap;
    width: max-content;
    margin: 0 auto;
    height: 401px;
    row-gap: 75px;
    padding-bottom: 77px;
    transition: all 0.3s ease-in-out;
}


@media screen and (max-width: 375px) {
    & > .StatsBlock {
        opacity: 0;
    }
`
