import styled from "styled-components";
import contentPemdas from "../assets/content-pemdas.svg";

export const Card = styled.div`
    background-color: #fff;
    box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    width: 25rem;
    height: 30rem;
    box-sizing: border-box;
    margin: 4rem;
`

export const Isi = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
`

export const TextParagraph = styled.h2`
    display: flex;
    width: 4rem;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;

    font-weight: 800;
    line-height: 2rem;
    color: #000;
`

export const Button = styled.button`
    width: 100%;
    height: 5rem;
    left: 0rem;
    top: 0rem;
    margin-top: 2rem;


    background: #F6851E;
    border-color: #F6851E;
    box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.25);
    border-radius: 0rem 0rem 1.5rem 1.5rem;

    font-weight: 600;
    font-size: 2rem;
    color: #fff;
`


const CardJoin = () => {
    return (
        <Card>
            <Isi>
                <img src={contentPemdas} alt="isi" width='70%'/>
                <TextParagraph>Pemrograman Dasar Java</TextParagraph>
                <Button>Join Class</Button>
            </Isi>
        </Card>
    );
}

export default CardJoin;