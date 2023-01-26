import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function LayoutAdmin() {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="w-full">
          <nav className="border w-full px-5">
            <ul className="flex py-3 w-full justify-end">
              <li className="flex flex-col">
                <p>Admin Login</p>
                <span className="text-[12px] opacity-90">Admin</span>
              </li>
            </ul>
          </nav>
          <div className="px-5 mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutAdmin;
