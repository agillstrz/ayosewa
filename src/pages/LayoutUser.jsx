import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

function LayoutUser() {
  return (
    <>
      <Toaster />
      <div className="absolute w-full ">
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <Footers />
    </>
  );
}

export default LayoutUser;
