import axiosInstance from "../configs/axiosInstance";

const GetSewa = {
  async allSewa(name, page) {
    try {
      const response = await axiosInstance.get(
        `sewas?page=${page}&keyword=${name}`
      );
      return response;
    } catch (error) {
      console.log("error");
    }
  },

  async Rekomendasi() {
    try {
      const response = await axiosInstance.get("rekomendasi");
      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async users() {
    try {
      const response = await axiosInstance.get("users");
      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async Dashboard() {
    try {
      const response = await axiosInstance.get("dashboard");
      return response;
    } catch (error) {
      console.log("error");
    }
  },

  async Searching(search) {
    try {
      const response = await axiosInstance.get(`search/${search}`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async sewaById(id) {
    try {
      const response = await axiosInstance.get(`sewas/${id}`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async kateById(id) {
    try {
      const response = await axiosInstance.get(`kategori/${id}`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async wishList() {
    try {
      const response = await axiosInstance.get("wish");
      return response;
    } catch (error) {
      console.log("error");
    }
  },
};

export default GetSewa;
