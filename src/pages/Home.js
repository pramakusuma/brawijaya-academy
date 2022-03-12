import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/bg2.svg";
import { Link } from "react-router-dom";

const Bg = styled.body`
    background-image: linear-gradient(
            270deg,
            rgba(0, 27, 47, 0.32) -14.65%,
            rgba(0, 27, 47, 0.8) 54.6%
        ),
        url(${bg});
    background-position: center;
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Title = styled.h1`
    width: 70rem;
    height: 15rem;
    margin-top: 10rem;
    margin-left: 10rem;

    font-weight: 900;
    font-size: 5rem;
    line-height: 6rem;
`;

const Description = styled.p`
    width: 50rem;
    height: 15rem;
    left: 0px;
    top: 0rem;
    margin-left: 10rem;

    font-size: 3rem;
    line-height: 4rem;
`;

const Button = styled.button`
    width: 28rem;
    height: 6rem;
    left: 0rem;
    top: 0rem;
    margin-left: 10rem;

    background: #ed540e;
    border-color: #ed540e;
    border-radius: 1.5rem;

    font-weight: 600;
    font-size: 2.5rem;
    color: #fff;
`;

const Home = () => {
    return (
        <Bg>
            <Navbar />
            <Wrapper>
                <Title>
                    SELAMAT DATANG <br />
                    DI BRAWIJAYA ACADEMY
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>
                <Link to="/dashboard">
                    <Button>GABUNG KELAS</Button>
                </Link>
            </Wrapper>
            <Footer />
        </Bg>
    );
};

export default Home;
