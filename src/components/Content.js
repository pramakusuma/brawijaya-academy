import styled from "styled-components";


export const Container = styled.div`
    width: 90%;
    height: 90%;
    background: rgba(255, 255, 255, 0.75);
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    margin: 2rem;
`

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    /* flex-direction: row; */
    justify-content: space-between;
`

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    /* flex-direction: row; */
    /* margin-left: 4rem; */
    justify-content: space-around;
`

export const Title = styled.h1`
    color: #000;
    font-size: 4rem;
    font-weight: 800;
    margin: 4rem;
`

export const TitleWhite = styled.h1`
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0rem;
    font-size: 4rem;
    line-height: 6rem;
`

export const TextParagraph = styled.text`
    width: 80rem;
    color: #000;
    font-size: 1.8rem;
    /* margin-left: 4rem; */
    margin-bottom: 4rem;
    text-align: justify;
`

export const Text = styled.text`
    width: 100%;
    color: #000;
    font-size: 1.8rem;
    margin-top: 2rem ;
    margin-bottom: 2rem;
    /* margin-left: 2rem; */
    font-weight: 600;
    text-align: justify;
`

export const TextThin = styled.text`
    width: 40rem;
    color: #000;
    font-size: 1.8rem;
    /* margin-top: 1.5rem; */
    margin-left: 2rem;
    font-weight: 100;
    text-align: justify;
    /* align-items: center; */
`

export const PaymentContainer = styled.div`
    display: flex;
    width: 100%;
    /* align-items: center; */
    justify-content: space-between;
    /* margin: 2rem; */
`

export const PaymentWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    /* align-items: center; */
    justify-content: left;
    /* margin-top: 2rem; */
    /* margin-left: 2rem; */
`

export const PaymentTitle = styled.h1`
    width: 100%;
    color: #fff;
    font-size: 4rem;
    font-weight: 10rem;
    margin-left: 2rem;
    margin-top: 2rem;
`

export const PaymentText = styled.text`
    width: 100%;
    color: #fff;
    font-size: 1.8rem;
    /* margin-top: 1.5rem; */
    margin-left: 2rem;
    font-weight: 600;
    text-align: justify;
`
export const PaymentTextInactive = styled.text`
    width: 82rem;
    color: #99A6AF;
    font-size: 1.8rem;
    /* margin-top: 1.5rem; */
    margin-left: 2rem;
    font-weight: 600;
    text-align: justify;
`

export const PaymentTextThin = styled.text`
    width: 40rem;
    color: #fff;
    font-size: 1.8rem;
    /* margin-top: 1.5rem; */
    margin-left: 2rem;
    font-weight: 100;
    text-align: justify;
    /* align-items: center; */
`

export const PaymentList = styled.div`
    width: 50rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.75);
    box-sizing: border-box;
    border-radius: 2rem;
    /* margin-left: 4rem; */
    padding-right: 2rem;
    /* margin-right: 4rem; */
    /* margin-top: 2rem; */
`

export const PaymentLoad = styled.div`
    width: 90%;
    padding: 4rem;
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    justify-content: space-between;

    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.75);
    box-sizing: border-box;
    border-radius: 2rem;
    margin-left: 4rem;
    /* margin-right: 4rem; */
    margin-top: 2rem;
`

export const PaymentTotal = styled.div`
    width: 70rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.75);
    box-sizing: border-box;
    border-radius: 2rem;
    margin-right: 4rem;
    margin-top: 2rem;
`

export const PaymentBarcode = styled.div`
    width: 60rem;
    height: 32rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.75);
    box-sizing: border-box;
    border-radius: 2rem;
    margin-right: 4rem;
    margin-top: 2rem;
`
export const PaymentBarcodeText = styled.text`
    width: 50rem;
    color: #fff;
    font-size: 1.8rem;
    margin-top: 1.5rem;
    /* margin-left: 1rem; */
    font-weight: 100;
    text-align: justify;
`

export const PaymentStatus = styled.div`
    width: 90%;
    height: 10rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(255, 255, 255, 0.25);
    filter: drop-shadow(2px 2px 2px rgba(255, 255, 255, 0.25));
    /* border: 1px solid rgba(255, 255, 255, 0.75); */
    box-sizing: border-box;
    border-radius: 2rem;
    /* margin-right: 4rem; */
    margin-top: 2rem;
`

export const PaymentTextSuccess = styled.text`
    width: 100%;
    color: #5CFA12;
    font-size: 1.8rem;
    /* margin-top: 1.5rem; */
    margin-right: 4rem;
    font-weight: 600;
    text-align: end;
`

export const PaymentTextFailed = styled.text`
    width: 100%;
    color: #FF1A0C;
    font-size: 1.8rem;
    /* margin-top: 1.5rem; */
    margin-right: 4rem;
    font-weight: 600;
    text-align: end;
`