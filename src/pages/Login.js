import * as React from "react";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../config/Auth";
import { useAuth } from "../config/Auth";
import styled from "styled-components";
import filkomHeader from "../assets/filkomHeader.svg";
import bg from "../assets/bg2.svg";
import Footer from "../components/Footer";
import { TitleWhite } from "../components/Content";
import { TextField } from "@mui/material";
import { InputBase } from "@mui/material";
import { IconButton } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { Alert } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "../api/axios";

const Bg = styled.body`
    background-image: linear-gradient(
            180deg,
            rgba(0, 27, 47, 0.24) -8.98%,
            rgba(0, 27, 47, 0.8) 50.27%
        ),
        url(${bg});
    background-position: center;
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

const Text = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    /* margin-left: 10rem; */

    font-weight: 800;
    font-size: 2.5rem;
    line-height: 6rem;
`;

const TextParagraph = styled.h2`
    display: flex;
    width: 40rem;
    /* flex-direction: column; */
    align-items: left;
    justify-content: left;
    margin-top: 1rem;

    font-weight: 800;
    line-height: 6rem;
`;

const MainForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0rem;
`;

const TextInput = styled(InputBase)`
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.3);
    outline-color: rgba(255, 255, 255, 0.3);
    border-radius: 1.5rem;
    color: #fff;
    width: 40rem;
    height: 5.5rem;
    padding: 2rem;
    /* margin: 5rem; */
`;

const Button = styled.button`
    width: 20rem;
    height: 5rem;
    left: 0rem;
    top: 0rem;
    margin: 3rem;

    background: #ed540e;
    border-color: #ed540e;
    border-radius: 1.5rem;

    font-weight: 600;
    font-size: 2rem;
    color: #fff;
`;

const Container = styled.div`
    /* min-height: 100vh; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 55rem;
    height: 45rem;
    margin-top: 5rem;
    background: linear-gradient(
        221.9deg,
        rgba(255, 255, 255, 0.4) 15.49%,
        rgba(248, 248, 248, 0) 99.3%
    );
    opacity: 0.8;
    border: 1px solid rgba(255, 255, 255, 0.35);
    box-sizing: border-box;
    backdrop-filter: blur(10px);

    border-radius: 40px;
`;

const ErrorText = styled.h2`
    color: red;
    display: flex;
    width: 40rem;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 6rem;
`;

const Login = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const [token, setToken] = React.useState("");

    const [values, setValues] = React.useState({
        username: "",
        password: "",
        showPassword: false,
    });

    const [alert, setAlert] = useState(false);
    const [cekLogin, setCekLogin] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            if (values.username == 0 || values.password == "") {
                setAlert(true);
                console.log(values);
            } else {
                setAlert(false);
                setCekLogin(false);
                console.log(values);
                const response = await axios.post("auth/login", {
                    nim: parseInt(values.username),
                    password: values.password,
                });
                console.log(JSON.stringify(response?.data));

                if (response?.data?.statusCode == 200) {
                    const data = response.data.data;
                    const accessToken = response.data.data.access_token;
                    const name = response.data.data.fullName;
                    localStorage.setItem("token", accessToken);
                    localStorage.setItem("name", name);

                    console.log(data);
                    console.log(accessToken);
                    setToken(accessToken);
                    console.log(token);

                    setAuth({ data });
                    setValues({
                        username: "",
                        password: "",
                    });
                    navigate("/dashboard");
                } else {
                    setCekLogin(true);
                }
            }
        } catch (err) {
            if (!err?.response) {
                console.log(err);
            }
        }
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Bg>
            <Nav>
                <img src={filkomHeader} alt="filkomHeader" />
            </Nav>
            <TitleWhite>BRAWIJAYA ACADEMY</TitleWhite>
            <Container>
                <Wrapper>
                    <MainForm onSubmit={handleLogin}>
                        <Text>LOGIN</Text>
                        <TextParagraph>NIM</TextParagraph>
                        <TextInput
                            type="number"
                            value={values.username}
                            name="username"
                            label="Username"
                            onChange={handleChange("username")}
                        />
                        <TextParagraph>Password</TextParagraph>
                        <TextInput
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            name="password"
                            label="Password"
                            onChange={handleChange("password")}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {alert ? (
                            <ErrorText>Silahkan Isi Kolom Login</ErrorText>
                        ) : (
                            <></>
                        )}
                        {cekLogin ? (
                            <ErrorText>NIM atau Password Salah</ErrorText>
                        ) : (
                            <></>
                        )}
                        <Link to="/">
                            <Button type="submit" onClick={handleLogin}>
                                LOGIN
                            </Button>
                        </Link>
                    </MainForm>
                </Wrapper>
            </Container>
            <Footer />
        </Bg>
    );
};

export default Login;
