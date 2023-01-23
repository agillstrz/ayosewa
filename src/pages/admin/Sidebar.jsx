import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <aside className="w-72 " aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto h-screen shadow-lg bg-color2 text-white">
        <ul className="space-y-2">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow text-white flex items-center p-2 text-xl rounded-lg  hover:bg-yellow hover:text-white font-semibold "
                  : "flex items-center p-2 text-xl rounded-lg  hover:bg-yellow hover:text-white font-semibold "
              }
            >
              <MdSpaceDashboard />
              <span className="ml-3">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sewaAdmin"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow text-white flex items-center p-2 text-xl rounded-lg  hover:bg-yellow hover:text-white font-semibold "
                  : "flex items-center p-2 text-xl rounded-lg  hover:bg-yellow hover:text-white font-semibold "
              }
            >
              <BiCategoryAlt />
              <span className="ml-3">Sewa</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="flex items-center p-2 text-xl rounded-lg  hover:bg-yellow hover:text-white font-semibold "
            >
              <MdSpaceDashboard />
              <span className="ml-3">Ruko</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
