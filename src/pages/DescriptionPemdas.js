import * as React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Bg } from "../components/BgMain";
import play from "../assets/play.svg";
import mentor1 from "../assets/mentor1.svg";
import mentor2 from "../assets/mentor2.svg";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import {
    Container,
    ContentWrapper,
    TitleWrapper,
    Title,
    TextParagraph,
    Text,
    TextThin,
} from "../components/Content";
import Mentor from "../components/Mentor";
import JoinButton from "../components/JoinButton";
import { LinkText } from "../components/LinkButton";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-left: 2rem; */
    /* margin-top: 2rem; */
`;

const JoinWrapper = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-left: 2rem; */
    margin-top: 2rem;
`;

const JoinContainer = styled.div`
    /* width: auto; */
    /* display: flex; */
    justify-content: center;
    align-items: center;
    /* margin-left: 2rem; */
    /* margin-top: 2rem; */
`;

const AccordionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: 2rem;
    /* margin-top: 2rem; */
`;

const AccordionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    margin-left: 2rem;
    /* margin-top: 2rem; */
`;

const DescriptionPemdas = () => {
    return (
        <Bg>
            <NavbarMain />
            <Wrapper>
                <Container>
                    <TitleWrapper>
                        <Title>PEMROGRAMAN DASAR</Title>
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
                            <Text>KONTEN KELAS</Text>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Pendahuluan</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <LinkText to="pendahuluan">
                                            <AccordionContainer>
                                                <img
                                                    src={play}
                                                    alt="play"
                                                    width="3%"
                                                />
                                                <AccordionWrapper>
                                                    <Typography>
                                                        Pendahuluan (Cara
                                                        Install Java dan Membuat
                                                        Program Sederhana)
                                                    </Typography>
                                                    <Typography>
                                                        3.54 menit
                                                    </Typography>
                                                </AccordionWrapper>
                                            </AccordionContainer>
                                        </LinkText>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion disabled>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>
                                            Konsep Dasar Bagian 1
                                        </Typography>
                                    </AccordionSummary>
                                </Accordion>
                                <Accordion disabled>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>Latihan 1</Typography>
                                    </AccordionSummary>
                                </Accordion>
                                <Accordion disabled>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>
                                            Konsep Dasar Bagian 2
                                        </Typography>
                                    </AccordionSummary>
                                </Accordion>
                                <Accordion disabled>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>Latihan 2</Typography>
                                    </AccordionSummary>
                                </Accordion>
                                <Accordion disabled>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>
                                            Konsep Dasar Bagian 3
                                        </Typography>
                                    </AccordionSummary>
                                </Accordion>
                                <Accordion disabled>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>Latihan 3</Typography>
                                    </AccordionSummary>
                                </Accordion>
                            </div>
                        </TextParagraph>
                        <JoinWrapper>
                            <JoinButton />
                            <Text>MENTOR</Text>
                            <Mentor />
                            <Mentor />
                        </JoinWrapper>
                    </ContentWrapper>
                </Container>
            </Wrapper>
            <Footer />
        </Bg>
    );
};

export default DescriptionPemdas;
