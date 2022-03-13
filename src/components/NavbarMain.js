import styled from "styled-components";
import filkomHeader from "../assets/filkomHeader.svg";
import user from "../assets/user.svg";
import { Link } from "react-router-dom";
import { LinkButton } from "./LinkButton";

const Nav = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    @media only screen and (min-width: 640px) {
    }

    @media only screen and (min-width: 390px) {
        /* flex-direction: column; */
    }
`;

const TextParagraph = styled.h2`
    display: flex;
    width: auto;
    /* flex-direction: column; */
    align-items: center;
    justify-content: Right;
    margin-right: 1rem;

    font-weight: 800;
    line-height: auto;
`;

const Navbar = () => {
    return (
        <div>
            <Nav>
                <Link to="/">
                    <img src={filkomHeader} alt="filkomHeader" />
                </Link>
                <Nav>
                    <LinkButton to="/payment-status/list">
                        <TextParagraph>Status Pembayaran</TextParagraph>
                    </LinkButton>
                    <img src={user} height="80%" alt="user" />
                </Nav>
            </Nav>
        </div>
    );
};

export default Navbar;
