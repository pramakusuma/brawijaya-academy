import styled from "styled-components";
import { Bg } from "../components/BgMain";
import Footer from "../components/Footer";
import NavbarMain from "../components/NavbarMain";
import { Card, Isi, Button, TextParagraph } from "../components/Card";
import { TitleWhite } from "../components/Content";
import Search from "../components/Search";
import contentPemdas from "../assets/content-pemdas.svg";
import contentPemlan from "../assets/content-pemlan.svg";
import contentPemweb from "../assets/content-pemweb.svg";
import { LinkButton } from "../components/LinkButton";
import AuthProvider from "../config/Auth";

import axios from "../api/axios";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Dashboard = () => {
    try {
        axios.get("/profile").then((res) => console.log(res));
        axios.get("/courses").then((res) => console.log(res.data.data.course));
    } catch (err) {
        console.log(err);
    }

    return (
        <Bg>
            <NavbarMain />
            <TitleWhite>PENCARIAN KELAS</TitleWhite>
            <Wrapper>
                <Search />
            </Wrapper>
            <Wrapper>
                <Card>
                    <Isi>
                        <img src={contentPemdas} alt="isi" width="70%" />
                        <TextParagraph>Pemrograman Dasar Java</TextParagraph>
                        <LinkButton to="/description">
                            <Button>Join Class</Button>
                        </LinkButton>
                    </Isi>
                </Card>
                <Card>
                    <Isi>
                        <img src={contentPemlan} alt="isi" width="70%" />
                        <TextParagraph>Pemrograman Lanjut</TextParagraph>
                        <Button>Join Class</Button>
                    </Isi>
                </Card>
                <Card>
                    <Isi>
                        <img src={contentPemweb} alt="isi" width="70%" />
                        <TextParagraph>Pemrograman Web</TextParagraph>
                        <Button>Join Class</Button>
                    </Isi>
                </Card>
            </Wrapper>

            <Footer />
        </Bg>
    );
};

export default Dashboard;
