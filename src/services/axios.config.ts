import axios from "axios";

const instance = axios.create({
    baseURL: 'https://summaraizer-brown.vercel.app/api',
    withCredentials: true
})

export default instance;