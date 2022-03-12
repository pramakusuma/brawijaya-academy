import * as React from "react";
import { Widget, addResponseMessage } from 'react-chat-widget';
import { useEffect } from "react";
import 'react-chat-widget/lib/styles.css';
import styled from "styled-components";
import { Bg } from "../components/BgMain";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import play from "../assets/play.svg"
import ppt from "../assets/ppt.svg";
import pdf from "../assets/pdf.svg";
import YoutubeEmbed from "../components/YoutubeEmbed";
import { Container,
        ContentWrapper,
        Text,
        Title,
        TextParagraph,
        TextThin,} from "../components/Content";
import Mentor from '../components/Mentor';
import { ModulContainer } from "../components/Modul";
import JoinButton from "../components/JoinButton";
import { LinkText } from "../components/LinkButton";

const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-left: 2rem; */
    /* margin-top: 2rem; */
`

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    /* margin-top: 2rem; */
`

const AccordionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: 2rem;
    /* margin-top: 2rem; */
`

const AccordionWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    margin-left: 2rem;
    /* margin-top: 2rem; */
`

const JoinWrapper = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-left: 2rem; */
    margin: 2rem;
    /* margin-bottom: 4rem; */
`

const PemdasPendahuluan = () => {

    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
    }, []);

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        // addResponseMessage(response);
    };

    return (
        <Bg>
            <NavbarMain />
            <MainWrapper>
                <Container>
                    <MainWrapper>
                        <Text>Cara Install Java dan Membuat Program Sederhana</Text>
                        <JoinWrapper>
                            <YoutubeEmbed embedId="NNa21Dg8bPs" />
                        </JoinWrapper>
                        <ContentWrapper>
                            <TextParagraph>
                            Bagi Anda seorang Android Developer pasti sangat memerlukan JDK atau Java Development Kit untuk membangun aplikasi yang berbasis Android. JDK merupakan suatu perangkat lunak yang sering dilakukan untuk membuat proses kompilasi dari code Java menjadi bytecode yang hanya dipahami dan dijalankan oleh Java Runtime Environtment (JRE).
                            <br /><br />
                            Oleh karena itu JDK wajib untuk kita install di komputer kita yang kita gunakan untuk melakukan suatu proses pembuatan aplikasi yang menggunakan java sebagai bahasa pemrogramannya, tetapi JDK tak wajib diinstall oleh komputer yang anantinya akan menjalankan aplikasi yang sudah dibuat tersebut.
                            <br /><br />
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
                                            <img src={ play } alt="play" width="3%" />
                                            <AccordionWrapper>
                                                <Typography>
                                                    Pendahuluan (Cara Install Java dan Membuat Program Sederhana)
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
                                    <Typography>Konsep Dasar Bagian 1</Typography>
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
                                    <Typography>Konsep Dasar Bagian 2</Typography>
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
                                    <Typography>Konsep Dasar Bagian 3</Typography>
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
                                <Text>DOWNLOAD SOAL DAN MATERI</Text>
                                <ModulContainer>
                                    <img src={ ppt } alt="ppt" />
                                    <TextThin>Modul Materi</TextThin>
                                </ModulContainer>
                                <ModulContainer>
                                    <img src={ pdf } alt="pdf" />
                                    <TextThin>Latihan 1 (Pengenalan Java)</TextThin>
                                </ModulContainer>
                                {/* <ModulContainer>
                                    <img src={ pdf } alt="pdf" />
                                    <TextThin>Latihan 2 (Program Sederhana)</TextThin>
                                </ModulContainer> */}
                                <Text>MENTOR</Text>
                                <Mentor />
                                <Widget
                                    handleNewUserMessage={handleNewUserMessage}
                                    title="Pemrograman Dasar"
                                    subtitle="Silahkan Bertanya"
                                />
                            </JoinWrapper>
                    </ContentWrapper>
                    </MainWrapper>
                </Container>
            </MainWrapper>
            <Footer />
        </Bg>
    )
}

export default PemdasPendahuluan;