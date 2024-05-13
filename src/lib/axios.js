import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.be-cus.com:8000",
  withCredentials: true,
});

export default instance;
