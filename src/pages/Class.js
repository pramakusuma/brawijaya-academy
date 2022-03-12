import styled from "styled-components";
import { Bg } from "../components/BgMain";
import Footer from "../components/Footer";
import NavbarMain from "../components/NavbarMain";
import { Card,
        Isi,
        Button,
        TextParagraph } from "../components/Card"
import Search from "../components/Search";
import { TitleWhite } from "../components/Content";
import contentPemdas from "../assets/content-pemdas.svg";
import contentPemlan from "../assets/content-pemlan.svg";
import contentPemweb from "../assets/content-pemweb.svg";
import { LinkButton } from "../components/LinkButton";

const Wrapper = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
`


const Class = () => {
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
                        <img src={contentPemdas} alt="isi" width='70%' />
                        <TextParagraph>Pemrograman Dasar Java</TextParagraph>
                    </Isi>
                </Card>
                <Card>
                    <Isi>
                        <img src={contentPemlan} alt="isi" width='70%' />
                        <TextParagraph>Pemrograman Lanjut</TextParagraph>
                    </Isi>
                </Card>
                <Card>
                    <Isi>
                        <img src={contentPemweb} alt="isi" width='70%' />
                        <TextParagraph>Pemrograman Web</TextParagraph>
                    </Isi>
                </Card>
            </Wrapper>
            <Wrapper>
                <Card>
                    <Isi>
                        <img src={contentPemdas} alt="isi" width='70%' />
                        <TextParagraph>Pemrograman Dasar Java</TextParagraph>
                    </Isi>
                </Card>
                <Card>
                    <Isi>
                        <img src={contentPemlan} alt="isi" width='70%' />
                        <TextParagraph>Pemrograman Lanjut</TextParagraph>
                    </Isi>
                </Card>
                <Card>
                    <Isi>
                        <img src={contentPemweb} alt="isi" width='70%' />
                        <TextParagraph>Pemrograman Web</TextParagraph>
                    </Isi>
                </Card>
            </Wrapper>
            <Footer />
        </Bg>
    )
}

export default Class;