import styled from "styled-components";
import contentPemdas from "../assets/content-pemdas.svg"
import { LinkButton } from "./LinkButton";

const Wrapper = styled.div`
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 4rem;
    margin-bottom: 6rem;
`

const ButtonStudent = styled.button`
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

const JoinButton = () => {
    return (
        <Wrapper>
            <img src={contentPemdas} width="100%" alt="content" />
            <LinkButton to="/payment">
                <ButtonStudent>JOIN AS STUDENT</ButtonStudent>
            </LinkButton>
            <LinkButton to="/description-mentor">
                <ButtonTeacher>JOIN AS TEACHER</ButtonTeacher>
            </LinkButton>
        </Wrapper>
    )
}

export default JoinButton;