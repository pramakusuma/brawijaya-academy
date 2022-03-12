import axios from "axios";
import { useState } from "react";

const token = localStorage.getItem("token");

export default axios.create({
    baseURL: "https://brawijaya-academy.herokuapp.com",
    headers: {
        Authorization: "Bearer " + token,
    },
});
