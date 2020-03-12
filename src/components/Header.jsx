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
    align-content: center;
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
        padding: 1rem 0;
        display: block;
        position: relative;
        transition: all 200ms ease-out;

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 64px;
            height: 2px;
            background: transparent;
            bottom: -0.75rem;
            right: 50%;
            margin-right: -34px;
            transition: 200ms ease-out background;
        }

        &:hover {
            transform: translate(0, -4px);
            transition: all 200ms ease-in;
            color: ${colors.blue600};

            &:after {
                background: ${colors.blue100};
                transition: 200ms ease-in background;
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
                    to="/work">
                    <span role="img" aria-label="work">💼</span> Work
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/blog">
                    <span role="img" aria-label="blog">✍</span> Blog
                </Link>
                <a href="https://prismic-io.s3.amazonaws.com/babarogic-prist/42460ef6-e74c-4eff-a936-db44de7d815e_Goran_Babarogic_CV.pdf">
                    <span role="img" aria-label="resume">📃</span> Resume
                </a>
            </HeaderLinks>
        </HeaderContent>
    </HeaderContainer>
)

export default Header;