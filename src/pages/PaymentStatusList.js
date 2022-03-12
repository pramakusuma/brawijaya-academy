import styled from "styled-components";
import { Bg } from "../components/BgMain";
import NavbarMain from "../components/NavbarMain";
import Footer from "../components/Footer";
import { PaymentContainer,
    PaymentWrapper,
    PaymentTitle,
    PaymentText,
    PaymentTextThin,
    PaymentList,
    PaymentTotal,
    PaymentStatus,
    PaymentTextSuccess,
    PaymentTextFailed,
    TitleWhite } from "../components/Content";
import contentPemdas from "../assets/content-pemdas.svg"
import point from "../assets/point.svg"
import { LinkButton } from "../components/LinkButton";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-left: 2rem; */
    /* margin-top: 2rem; */
`

const WrapperText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    margin-left: 2rem;
    /* margin-top: 2rem; */
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    /* margin-top: 2rem; */
`

const PaymentStatusList = () => {
    return (
        <Bg>
            <NavbarMain />
            <Wrapper>
                <TitleWhite>STATUS PEMBAYARAN</TitleWhite>
            </Wrapper>
            <Wrapper>
                <PaymentStatus>
                    <Container>
                        <img src={ contentPemdas } alt="pemdas" width="5%" />
                        <WrapperText>
                            <PaymentText>Pemrograman Dasar</PaymentText>
                            <PaymentTextThin>22/02/22</PaymentTextThin>
                        </WrapperText>
                        <LinkButton to="/payment-status/success">
                            <PaymentTextSuccess>Success</PaymentTextSuccess>
                            <img src={ point } alt="point" width="2%" />
                        </LinkButton>
                    </Container>
                </PaymentStatus>
                <PaymentStatus>
                    <Container>
                        <img src={ contentPemdas } alt="pemdas" width="5%" />
                        <WrapperText>
                            <PaymentText>Pemrograman Dasar</PaymentText>
                            <PaymentTextThin>21/02/22</PaymentTextThin>
                        </WrapperText>
                        <LinkButton to="/payment-status/failed">
                            <PaymentTextFailed>Failed</PaymentTextFailed>
                            <img src={ point } alt="point" width="2%" />
                        </LinkButton>
                    </Container>
                </PaymentStatus>
            </Wrapper>
            <Footer />
        </Bg>
    )
}

export default PaymentStatusList;