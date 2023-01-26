import axiosInstance from "../configs/axiosInstance";

const PostSewa = {
  async addWish(sewa_id) {
    try {
      const response = await axiosInstance.post("wish", {
        sewa_id,
      });

      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async deleteSewa(id) {
    try {
      const response = await axiosInstance.delete(`sewas/${id}`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async deleteWish(id) {
    try {
      const response = await axiosInstance.delete(`wish/${id}`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async addSewa(payload) {
    try {
      const {
        kate_id,
        name,
        harga,
        tersedia,
        rekomendasi,
        alamat,
        link_alamat,
        link_video,
        deskripsi,
        foto1,
        foto2,
        foto3,
        luas,
        lantai,
        garasi,
        kmandi,
        kamar,
        wifi,
        ac,
      } = payload;
      const response = await axiosInstance.post("sewas", {
        kate_id,
        name,
        harga,
        tersedia,
        rekomendasi,
        alamat,
        link_alamat,
        link_video,
        deskripsi,
        foto1,
        foto2,
        foto3,
        luas,
        lantai,
        garasi,
        kmandi,
        kamar,
        wifi,
        ac,
      });

      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async editSewa(payload) {
    try {
      const {
        id,
        kate_id,
        name,
        harga,
        tersedia,
        rekomendasi,
        alamat,
        link_alamat,
        link_video,
        deskripsi,
        foto1,
        foto2,
        foto3,
        luas,
        lantai,
        garasi,
        kmandi,
        kamar,
        wifi,
        ac,
      } = payload;
      const response = await axiosInstance.put(`sewas/${id}`, {
        kate_id,
        name,
        harga,
        tersedia,
        rekomendasi,
        alamat,
        link_alamat,
        link_video,
        deskripsi,
        foto1,
        foto2,
        foto3,
        luas,
        lantai,
        garasi,
        kmandi,
        kamar,
        wifi,
        ac,
      });

      return response;
    } catch (error) {
      console.log("error");
    }
  },
};

export default PostSewa;
