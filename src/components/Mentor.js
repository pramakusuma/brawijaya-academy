import styled from "styled-components";
import mentor1 from "../assets/mentor1.svg";
import { TextThin } from "./Content";

const MentorWrapper = styled.div`
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-left: 2rem; */
    /* margin-top: 2rem; */
    /* margin-left: 4rem; */
`

const MentorContainer = styled.div`
    width: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    /* margin-left: 4rem; */
    /* margin-top: 2rem; */
`

const Mentor = () => {
    return (
        <MentorContainer>
            <img src={ mentor1 } alt="mentor1" width="15%" />
            <MentorWrapper>
                <TextThin>Nama Mentor</TextThin>
                <TextThin>Prodi - Angkatan</TextThin>
            </MentorWrapper>
        </MentorContainer>
    )
}

export default Mentor;