import Cookies from "js-cookie";

const Auth = {
  isAuthorization() {
    if (Cookies.get("token") || Cookies.get("role_as")) return true;
    return null;
  },
  getAccessToken() {
    return Cookies.get("token");
  },
  getRole() {
    return Cookies.get("role_as");
  },
  getUserId() {
    return Cookies.get("sub");
  },
  signOut(navigate) {
    Cookies.remove("token");
    Cookies.remove("role_as");
    navigate("/login");
  },
  storeUserInfoToCookie(datas) {
    if (!datas.data || !datas.token) return null;
    const { token, data } = datas;
    Cookies.set("token", token);
    Cookies.set("role_as", data.role_as);
    return datas;
  },
};

export default Auth;
