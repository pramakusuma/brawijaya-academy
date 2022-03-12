import styled from "styled-components";
import { Bg } from "../components/BgMain";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import {
    Container,
    ContentWrapper,
    TitleWrapper,
    Title,
    TextParagraph,
} from "../components/Content";
import JoinButton from "../components/JoinButton";
import { LinkButton } from "../components/LinkButton";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    width: 1005;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ButtonMore = styled.button`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 25rem;
    height: 4rem;
    background: #30a8cf;
    border-color: #30a8cf;
    border-radius: 2rem;
    color: #fff;
    margin: 1rem;
    font-weight: 600;
    font-size: 1.5rem;
`;

const Description = () => {
    const nameCourse = localStorage.getItem("nameCourse").toUpperCase();
    return (
        <Bg>
            <NavbarMain />
            <Wrapper>
                <Container>
                    <TitleWrapper>
                        <Title>{nameCourse}</Title>
                    </TitleWrapper>
                    <ContentWrapper>
                        <TextParagraph>
                            Bahasa pemrograman Java merupakan salah satu bahasa
                            yang paling populer di dunia. Dengan menguasai skill
                            pemrograman java maka akan banyak hal yang bisa
                            didapatkan seperti bisa menjadi pengembang aplikasi
                            andorid, tersedia banyak lapangan kerja untuk
                            programer java, bisa membuat aplikasi untuk dijual
                            ke perusahaan dan masih banyak lagi hal yang bisa
                            didapatkan.
                            <br />
                            <br />
                            Belajar apapun termasuk java haruslah dimulai dari
                            dasar seperti yang terdapat pada kursus ini. Di
                            kursus ini kita akan mulai bagian yang sangat dasar
                            mulai dari persiapan agar java bisa dijalankan di
                            komputer kalian hingga latihan-latihan permasalahan
                            sederhana yang bisa diselesaikan dengan java.
                            <br />
                            <br />
                            Jadi tunggu apa lagi, yuk segera ikut kelas ini.
                            <br />
                            <br />
                            <Link to="pemdas">
                                <ButtonMore>SELENGKAPNYA</ButtonMore>
                            </Link>
                        </TextParagraph>
                        <JoinButton />
                    </ContentWrapper>
                </Container>
            </Wrapper>
            <Footer />
        </Bg>
    );
};

export default Description;
