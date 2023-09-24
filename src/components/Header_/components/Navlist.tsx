import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NavItem } from "../../../types";


type NavLinkProps = {
    links: NavItem[];
    closeMenu: () => void;
}

export default function NavLinks({links, closeMenu}: NavLinkProps) {
    return (
        <Navlist className="NavLinks">
            <ul>
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <StyledLink to={link.url} onClick={closeMenu}>{link.label}</StyledLink>
                        </li>
                    ))
                }
            </ul>
        </Navlist>
    )
}

const Navlist = styled.nav`


& ul {
    all: unset;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
    column-gap: 49px;

    @media screen and (max-width: 910px) {
        column-gap: 26px;
    }
    @media screen and (max-width: 768px) {
        column-gap: 13px;
    }

    @media screen and (max-width: 650px) {
        flex-flow: column nowrap;
        align-items: center;
        row-gap: 26px;
        margin-top: 141px;
    }
}

& ul>li {
    all: unset;
`

const StyledLink = styled(NavLink)<{$isActive?: boolean}>`
font-family: ${props => props.theme.fonts[0]};
color: ${props => props.theme.colors.primary.black};
font-size: 14px;
text-decoration: none;

&:hover {
    opacity: .7;
}

&.active {
    font-weight: bold;
  }

@media screen and (max-width: 650px) {
color: ${props => props.theme.colors.primary.white};
    
}

`

