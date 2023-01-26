import React from "react";
import { CgLogOut } from "react-icons/cg";
import { FaHome, FaLaptopHouse } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import foto from "../../assets/ayosewa.png";
import Auth from "../../utils/Auth";
function Sidebar() {
  let navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    Auth.signOut(navigate);
  };
  return (
    <aside className="w-72 " aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto h-screen shadow-lg bg-color2 text-white">
        <div className="flex justify-center flex-col items-center border-white">
          <img
            onClick={() => navigate("/")}
            className="h-16 cursor-pointer"
            src={foto}
            alt=""
          />
          <span>ayoSewa</span>
        </div>
        <ul className="space-y-2">
          <li>
            <NavLink
              to=""
              className="flex items-center p-2 text-xl rounded-lg  hover:bg-yellow hover:text-white font-semibold "
            >
              <MdSpaceDashboard />
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sewaAdmin"
              className="flex items-center p-2 text-xl rounded-lg  hover:bg-yellow hover:text-white font-semibold "
            >
              <FaLaptopHouse />
              <span className="ml-3">Sewa</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/users"
              className="flex items-center p-2 text-xl rounded-lg  hover:bg-yellow hover:text-white font-semibold "
            >
              <FiUsers />
              <span className="ml-3">Pengguna</span>
            </NavLink>
          </li>
          <li
            onClick={() => navigate("/")}
            className="flex cursor-pointer items-center p-2 text-xl rounded-lg  hover:bg-yellow hover:text-white font-semibold "
          >
            <FaHome />
            <span className="ml-3">Home User</span>
          </li>
          <li
            onClick={handleLogout}
            className="flex cursor-pointer items-center p-2 text-xl rounded-lg  hover:bg-yellow hover:text-white font-semibold "
          >
            <CgLogOut />
            <span className="ml-3">Logout</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
