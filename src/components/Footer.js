import styled from "styled-components";
import filkomLogo from "../assets/filkomLogo.svg";

const Logo = styled.div`
    display: flex;
    /* position: absolute; */
    justify-content: right;
    padding: 4.5rem;
    width: 100%;
    height: 100%;
    margin-top: 0%;
    bottom: 0;
`

const Footer = () => {
    return (
        <Logo>
            <img src={ filkomLogo } alt="filkomLogo" />
        </Logo>

    );
}

export default Footer;