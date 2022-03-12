import styled from "styled-components";
import user from "../assets/user.svg";
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
    PaymentLoad,
    PaymentBarcode,
    PaymentBarcodeText,
    PaymentTotal,
} from "../components/Content";
import { LinkButton } from "../components/LinkButton";
import axios from "../api/axios";
import { getDialogActionsUtilityClass } from "@mui/material";

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

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    margin-top: 2rem;
`;

const ButtonStatus = styled.button`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 25rem;
    height: 4rem;
    background: #30a8cf;
    border-color: #30a8cf;
    border-radius: 1rem;
    color: #fff;
    margin: 1rem;
    font-weight: 600;
    font-size: 1.5rem;
`;

const PaymentScan = () => {
    const qr = localStorage.getItem("qrCode");
    console.log(qr);

    return (
        <Bg>
            <NavbarMain />
            <Wrapper>
                <PaymentTitle>PEMBAYARAN</PaymentTitle>
            </Wrapper>
            <Container>
                <Wrapper>
                    <PaymentTextThin>Tata Cara Pembayaran</PaymentTextThin>
                    <PaymentBarcode>
                        <PaymentBarcodeText>
                            1. Buka e-wallet atau aplikasi mobile-banking yang
                            Anda miliki
                            <br />
                            2. Scan QR Code disamping
                            <br />
                            3. Input jumlah nominal yang ingin dibayarkan
                            <br />
                            4. Pilih bayar dan masukkan nama lengkap Anda
                            <br />
                            5. Masukkan PIN keamanan untuk menyelesaikan
                            transaksi anda
                            <br />
                        </PaymentBarcodeText>
                    </PaymentBarcode>
                </Wrapper>
                <Wrapper>
                    <PaymentTextThin>
                        Silahkan scan QR CODE berikut
                    </PaymentTextThin>
                    <PaymentBarcode>
                        <img src={qr} alt="qris" width="50%" />
                    </PaymentBarcode>
                </Wrapper>
            </Container>
            <ButtonWrapper>
                <LinkButton to="/payment-status">
                    <ButtonStatus>STATUS PEMESANAN</ButtonStatus>
                </LinkButton>
            </ButtonWrapper>
        </Bg>
    );
};

export default PaymentScan;
