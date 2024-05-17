import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.be-cus.com:8000",
  withCredentials: true,
});

export default axiosInstance;
