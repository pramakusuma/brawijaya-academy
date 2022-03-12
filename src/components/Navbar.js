import styled from "styled-components";
import filkomHeader from "../assets/filkomHeader.svg"
import user from "../assets/user.svg"
import { Link } from "react-router-dom";

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`

const Button = styled.button`
    background-color: #30A8CF;
    border-color: #30A8CF;
    color: #fff;
    width: 10rem;
    height: 3.5rem;
    border-radius: 1rem;
    margin: 1rem;
    font-weight: 600;
`

const Navbar = () => {
    return(
        <div>
            <Nav>
                <Link to="/">
                    <img src={ filkomHeader } alt="filkomHeader" />
                </Link>
                <Nav>
                    <Link to="/login">
                        <Button to="/login">Login</Button>
                    </Link>
                    <img src={ user } height="80%" alt="user" />
                </Nav>
            </Nav>

        </div>

    );
}

export default Navbar;