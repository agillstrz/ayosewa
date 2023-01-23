import axios from "axios";
import Auth from "../utils/Auth";
import CONST from "../utils/Constants";

const axiosInstance = axios.create({
  baseURL: CONST.BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${Auth.getAccessToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
