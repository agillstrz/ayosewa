import React from "react";
import { Outlet } from "react-router-dom";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

function LayoutUser() {
  return (
    <>
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
