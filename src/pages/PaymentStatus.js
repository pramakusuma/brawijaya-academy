import styled from "styled-components";
import user from "../assets/user.svg";
import { Bg } from "../components/BgMain";
import circle from "../assets/circle.svg";
import circleInactive from "../assets/circle-inactive.svg";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import {
    PaymentContainer,
    PaymentWrapper,
    PaymentTitle,
    PaymentText,
    PaymentTextThin,
    PaymentTextInactive,
    PaymentList,
    PaymentLoad,
    PaymentTotal,
} from "../components/Content";
import { LinkButton } from "../components/LinkButton";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: end; */
    margin-left: 2rem;
    margin-top: 2rem;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    /* align-items: center; */
    /* justify-content: space-between; */
    padding: 2rem;
`;

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    /* flex-direction: column; */
    justify-content: right;
    /* padding: 2rem; */
`;

const ButtonDashboard = styled.button`
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

const PaymentStatus = () => {
    return (
        <Bg>
            <NavbarMain />
            <Wrapper>
                <PaymentTitle>STATUS PEMBAYARAN</PaymentTitle>
            </Wrapper>
            {/* <PaymentContainer> */}
            <PaymentLoad>
                <Wrapper>
                    <Container>
                        <img src={circle} alt="point" width="1.5%" />
                        <PaymentText>
                            Menunggu proses pembayaran dilakukan
                        </PaymentText>
                    </Container>
                    <Container>
                        <img src={circleInactive} alt="point" width="1.5%" />
                        <PaymentTextInactive>
                            Pembayaran Sedang di verifikasi
                        </PaymentTextInactive>
                    </Container>
                    <Container>
                        <img src={circleInactive} alt="point" width="1.5%" />
                        <PaymentTextInactive>
                            Pembayaran Berhasil Masuk
                        </PaymentTextInactive>
                    </Container>
                    <Container>
                        <img src={circleInactive} alt="point" width="1.5%" />
                        <PaymentTextInactive>
                            Pembayaran telah sah, silakan bergabung dan selamat
                            belajar
                        </PaymentTextInactive>
                    </Container>
                    <ButtonWrapper>
                        <LinkButton to="/class">
                            <ButtonDashboard>
                                KEMBALI KE DASHBOARD
                            </ButtonDashboard>
                        </LinkButton>
                    </ButtonWrapper>
                </Wrapper>
            </PaymentLoad>
            {/* </PaymentContainer> */}
            <Footer />
        </Bg>
    );
};

export default PaymentStatus;
