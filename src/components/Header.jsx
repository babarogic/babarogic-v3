import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";

const HeaderContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
`

const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 7em;
    justify-content: flex-end;
    width: auto;
    max-width: 100%;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 5.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-gap: 2.5em;
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 600;
        font-size: 0.95em;
        height: 100%;
        padding-bottom: 1.25em;
        padding-top: 0.25em;
        display: block;
        position: relative;

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 64px;
            height: 3px;
            background: transparent;
            bottom: 6px;
            right: 50%;
            margin-right: -34px;
            transition: 100ms ease-in-out background;
        }

        &:hover {
            &:after {
                background: ${colors.blue500};
                transition: 100ms ease-in-out background;
            }
        }

        &.Link--is-active {
            &:after {
                background: ${colors.blue500};
                transition: 100ms ease-in-out background;
            }
        }
    }
`

const Header = () => (
    <HeaderContainer>
        <HeaderContent>
            <Link to="/">
                <Logo/>
            </Link>
            <HeaderLinks>
                <Link
                    activeClassName="Link--is-active"
                    to="/Goran_Babarogic_CV.pdf">
                    <span role="img" aria-label="resume">📃</span> Resume
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/work">
                    <span role="img" aria-label="work">💼</span> Work
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/blog">
                    <span role="img" aria-label="blog">✍</span> Blog
                </Link>
            </HeaderLinks>
        </HeaderContent>
    </HeaderContainer>
)

export default Header;