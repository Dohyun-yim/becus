import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.be-cus.com:8000",
  withCredentials: true,
});

export default instance;
