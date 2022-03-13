import styled from "styled-components";
import { useState, useEffect } from "react";
import contentPemdas from "../assets/content-pemdas.svg";
import contentPemlan from "../assets/content-pemlan.svg";
import contentPemweb from "../assets/content-pemweb.svg";
import { LinkButton } from "./LinkButton";
import { useImage } from "react-image";
import axios from "../api/axios";

export const Card = styled.div`
    background-color: #fff;
    box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    width: 25rem;
    height: auto;
    box-sizing: border-box;
    margin: 4rem;

    /* @media only screen and (min-width: 640px) {
        height: 30rem;
    }

    @media only screen and (min-width: 390px) {
        width: 25rem;
        height: 25rem;
        display: flex;
        flex-direction: column;
    } */
`;

export const Isi = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
`;

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
`;

export const Button = styled.button`
    width: 100%;
    height: 5rem;
    left: 0rem;
    top: 0rem;
    margin-top: 2rem;

    background: #f6851e;
    border-color: #f6851e;
    box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.25);
    border-radius: 0rem 0rem 1.5rem 1.5rem;

    font-weight: 600;
    font-size: 2rem;
    color: #fff;
`;

const CardJoin = () => {
    const [courses, setCourses] = useState([]);
    const gambar = [contentPemdas, contentPemlan, contentPemweb];

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get("/courses");
                console.log(res.data.data.course);
                setCourses(res.data.data.course);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {courses.map(({ id, imageLink, name, price }) => {
                const image = { imageLink };
                const imageURL = JSON.stringify(image.imageLink);
                console.log(imageURL);
                console.log(id);
                return (
                    <Card>
                        <Isi>
                            <img src={gambar[0]} alt={name} width="70%" />
                            <TextParagraph key={id}>{name}</TextParagraph>
                            <LinkButton to="/description">
                                <Button
                                    onClick={(e) => {
                                        localStorage.setItem(
                                            "idCourse",
                                            JSON.stringify(id)
                                        );
                                        localStorage.setItem(
                                            "nameCourse",
                                            name
                                        );
                                        localStorage.setItem(
                                            "priceCourse",
                                            JSON.stringify(price)
                                        );
                                    }}
                                >
                                    Join Class
                                </Button>
                            </LinkButton>
                        </Isi>
                    </Card>
                );
            })}
        </>
    );
};

export default CardJoin;
