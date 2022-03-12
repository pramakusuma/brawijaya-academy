import styled from "styled-components";
import filkomHeader from "../assets/filkomHeader.svg"
import user from "../assets/user.svg"
import { Link } from "react-router-dom";
import { LinkButton } from "./LinkButton";

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`

const TextParagraph = styled.h2`
    display: flex;
    width: 40rem;
    /* flex-direction: column; */
    align-items: Right;
    justify-content: Right;
    margin-right: 1rem;

    font-weight: 800;
    line-height: 5rem;
`

const Navbar = () => {
    return(
        <div>
            <Nav>
                <Link to="/">
                    <img src={ filkomHeader } alt="filkomHeader" />
                </Link>
                <Nav>
                    <LinkButton to="/payment-status/list">
                        <TextParagraph>Status Pembayaran</TextParagraph>
                    </LinkButton>
                    <img src={ user } height="80%" alt="user" />
                </Nav>
            </Nav>

        </div>

    );
}

export default Navbar;