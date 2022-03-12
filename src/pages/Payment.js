import styled from "styled-components";
import * as React from "react";
import { useState } from "react";
import user from "../assets/user.svg";
import qris from "../assets/qris.svg";
import gopay from "../assets/gopay.svg";
import { Bg } from "../components/BgMain";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import {
    PaymentContainer,
    PaymentWrapper,
    PaymentTitle,
    PaymentText,
    PaymentTextThin,
    PaymentList,
    PaymentTotal,
} from "../components/Content";
import { LinkButton } from "../components/LinkButton";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import axios from "../api/axios";

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 2rem;
`;

const ButtonWrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    justify-content: right;
    margin-left: 2rem;
    margin-top: 2rem;
`;

const ButtonPay = styled.button`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 20rem;
    height: 4rem;
    background: #30a8cf;
    border-color: #30a8cf;
    border-radius: 2rem;
    color: #fff;
    margin: 1rem;
    font-weight: 600;
    font-size: 1.5rem;
`;

const ToggleGroup = styled(ToggleButtonGroup)`
    margin-top: 2rem;
`;

const Toggle = styled(ToggleButton)`
    width: 80%;
    /* height: 5rem; */
    justify-content: left;
    align-items: center;
    /* margin-top: 2rem; */
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.75);
    /* border-radius: 2rem; */
`;

const Payment = () => {
    const [payment, setPayment] = React.useState("qris");

    const handleChange = (event, nextPayment) => {
        setPayment(nextPayment);
        console.log(payment);
    };

    const handlePay = async (e) => {
        try {
            const id = localStorage.getItem("idCourse");
            console.log(id);

            const resQr = await axios.get("/courses/" + id + "/buy");
            const qr = resQr.data.data.qrCode;
            localStorage.setItem("qrCode", qr);
            // console.log(qr);
        } catch (err) {
            console.log(err);
        }
    };

    const name = localStorage.getItem("name");
    const nameCourse = localStorage.getItem("nameCourse").toUpperCase();
    const price = localStorage.getItem("priceCourse");
    return (
        <Bg>
            <NavbarMain />
            <Wrapper>
                <PaymentTitle>PEMBAYARAN</PaymentTitle>
                <PaymentTextThin>
                    Silahkan pilih salah satu menu pembayaran
                </PaymentTextThin>
            </Wrapper>
            <PaymentContainer>
                <PaymentWrapper>
                    <ToggleGroup
                        orientation="vertical"
                        value={payment}
                        exclusive
                        onChange={handleChange}
                    >
                        <Toggle value="qris" aria-label="qris">
                            <PaymentList>
                                <PaymentText>QRIS</PaymentText>
                                <img src={qris} width="15%" alt="qris" />
                            </PaymentList>
                        </Toggle>
                        <Toggle value="gopay" aria-label="gopay">
                            <PaymentList>
                                <PaymentText>GOPAY</PaymentText>
                                <img src={gopay} width="15%" alt="gopay" />
                            </PaymentList>
                        </Toggle>
                    </ToggleGroup>
                </PaymentWrapper>
                <PaymentWrapper>
                    <PaymentTitle>JUMLAH</PaymentTitle>
                    <PaymentTotal>
                        <PaymentWrapper>
                            <PaymentText>{nameCourse}</PaymentText>
                            <PaymentWrapper>
                                <PaymentContainer>
                                    {/* <img src={user} alt="user" width="5%" /> */}
                                    <PaymentTextThin>{name}</PaymentTextThin>
                                </PaymentContainer>
                                <PaymentContainer>
                                    {/* <img src={user} alt="user" width="5%" /> */}
                                    <PaymentTextThin>
                                        Durasi Langganan
                                    </PaymentTextThin>
                                    <PaymentTextThin>Selamanya</PaymentTextThin>
                                </PaymentContainer>
                                <PaymentContainer>
                                    {/* <img src={user} alt="user" width="5%" /> */}
                                    <PaymentTextThin>
                                        Total Tagihan
                                    </PaymentTextThin>
                                    <PaymentTextThin>{price}</PaymentTextThin>
                                </PaymentContainer>
                            </PaymentWrapper>
                            <ButtonWrapper>
                                <LinkButton to="/payment-scan">
                                    <ButtonPay onClick={handlePay}>
                                        BAYAR
                                    </ButtonPay>
                                </LinkButton>
                            </ButtonWrapper>
                        </PaymentWrapper>
                    </PaymentTotal>
                </PaymentWrapper>
            </PaymentContainer>

            <Footer />
        </Bg>
    );
};

export default Payment;
