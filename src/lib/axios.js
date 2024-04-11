import axios from "axios";

const instance = axios.create({
  baseURL: "http://34.64.53.159:8000",
  withCredentials: true,
});

export default instance;
