import styled from "styled-components";
import { TextField } from "@mui/material";
import { InputBase } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchLogo from "../assets/Search.svg"

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
`

const Input = styled(InputBase)`
    width: 100%;
    height: auto;
    border-color: none;
    font-size: medium;
`

const Search = () => {
    return (
        <Bar>
            <Input placeholder="Search" sx={{ height: 10, ml: 2, flex: 1 }}/>
            <IconButton type="submit">
                <img src={SearchLogo} alt="search" />
            </IconButton>
        </Bar>
    );
}

export default Search