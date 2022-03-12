import styled from "styled-components";
import contentPemdas from "../assets/content-pemdas.svg"
import { LinkButton } from "./LinkButton";
import { TextField } from "@mui/material";

const Wrapper = styled.div`
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 4rem;
    margin-bottom: 6rem;
`

const ButtonSubmit = styled.button`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 100%;
    height: 4rem;
    background: #ED540E;
    border-color: #ED540E;
    border-radius: 2rem;
    color: #fff;
    margin: 1rem;
    font-weight: 600;
    font-size: 1.5rem;
`

const ButtonTeacher = styled.button`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 100%;
    height: 4rem;
    background: #F3771A;
    border-color: #F3771A;
    border-radius: 2rem;
    color: #fff;
    margin: 1rem;
    font-weight: 600;
    font-size: 1.5rem;
`

const MentorCode = styled(TextField)`
    width: 23rem;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    margin-top: 3rem !important;
`

const image = styled.image`
    margin: 2rem;
`

const JoinMentor = () => {
    return (
        <Wrapper>
            <img src={contentPemdas} width="100%" alt="content" />
            <MentorCode />
            <LinkButton to="/class">
                <ButtonSubmit>SUBMIT</ButtonSubmit>
            </LinkButton>
        </Wrapper>
    )
}

export default JoinMentor;