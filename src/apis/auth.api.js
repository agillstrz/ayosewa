import axiosInstance from "../configs/axiosInstance";
import Auth from "../utils/Auth";

const APIAuth = {
  async register(payload) {
    try {
      const { email, password, name } = payload;
      const response = await axiosInstance.post(`register`, {
        name,
        email,
        password,
      });
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async loginUser(payload) {
    try {
      const { email, password } = payload;

      const response = await axiosInstance.post(`login`, {
        email,
        password,
      });
      // const token = response.data.data.access_token;
      // localStorage.setItem("token", token);
      // ("Authorization", "Bearer " + response.data.data.acces_token);
      Auth.storeUserInfoToCookie(response.data);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APIAuth;
