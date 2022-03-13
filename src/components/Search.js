import styled from "styled-components";
import { TextField } from "@mui/material";
import { InputBase } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchLogo from "../assets/Search.svg";

const Bar = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    width: 60rem;
    height: 3.5rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: 2rem;

    @media only screen and (min-width: 390px) {
        padding: 2rem;
        width: 50rem;
    }
`;

const Input = styled(InputBase)`
    width: 100%;
    height: auto;
    border-color: none;
    font-size: medium;
    color: #fff;

    @media only screen and (min-width: 390px) {
        font-size: large;
        width: 100%;
    }
`;

const Search = () => {
    return (
        <Bar>
            <Input
                placeholder="Search"
                color="primary"
                sx={{ height: 10, ml: 2, flex: 1 }}
            />
            <IconButton type="submit">
                <img src={SearchLogo} alt="search" />
            </IconButton>
        </Bar>
    );
};

export default Search;
