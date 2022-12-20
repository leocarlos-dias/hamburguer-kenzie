import axios from "axios";

export const request = axios.create({
    baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com/",
    timeout: 3000,
})