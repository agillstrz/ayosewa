import React from "react";
import { Navigate } from "react-router-dom";
import LayoutAdmin from "../pages/admin/LayoutAdmin";
import Auth from "../utils/Auth";

function PrivateAdmin() {
  // if (Auth.isAuthorization() && Auth.getRole() == 0) {
  //   return <Navigate to="/" replace />;
  // }
  return (
    <>
      <LayoutAdmin />
    </>
  );
}

export default PrivateAdmin;
