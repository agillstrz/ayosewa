import React, { useContext, useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { wishContext } from "../App";
import sewa from "../assets/ayosewa.png";
import Auth from "../utils/Auth";
import Search from "./Search";
function Navbar() {
  let navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  const { count } = useContext(wishContext);
  const handleLogout = (e) => {
    e.preventDefault();
    Auth.signOut(navigate);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 0 ? setScroll(true) : setScroll(false);
    });
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(false);
    });
  });

  return (
    <div className="transition-all duration-300 z-[999]  ease-in">
      <div
        className={`${
          scroll
            ? " invisible opacity-0 "
            : "flex py-5 text-md  bg-white  w-full text-color2 items-center justify-between content opacity-100 "
        }   fixed visible  transition-all duration-300 ease-out border`}
      >
        <ul className="flex gap-x-3 text-xl items-center font-semibold  ">
          <li className="font-bold relative  ">
            <Link
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow" : undefined
              }
            >
              {/* ayo<span className="text-yellow">Sewa</span> */}
              <img className="h-5" src={sewa} alt="" />
            </Link>
          </li>
          <li className="relative ">
            <NavLink
              to="/semua"
              className={({ isActive }) =>
                isActive ? "text-yellow" : undefined
              }
            >
              Semua
            </NavLink>
          </li>
          <li className=" flex items-center group  ">
            <NavLink
              to={`/kontrakan/1`}
              className={({ isActive }) =>
                isActive ? "text-yellow" : undefined
              }
            >
              Kontrakan
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              to={`/kos/2`}
              className={({ isActive }) =>
                isActive ? "text-yellow" : undefined
              }
            >
              Kos
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/ruko/3`}
              className={({ isActive }) =>
                isActive ? "text-yellow" : undefined
              }
            >
              Ruko
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-x-3  px-10">
          {Auth.isAuthorization() ? (
            <>
              <NavLink
                to="/wish"
                className="text-3xl group cursor-pointer relative"
              >
                <MdFavorite className="group-hover:text-yellow transition-all duratnavion-100 ease-linear" />
                <span className="absolute top-[10px] right-0 text-[10px] text-color2">
                  {count}
                </span>
              </NavLink>

              <div className="space-y-1 relative  w-full  font-medium dark:text-white ">
                <div
                  className="cursor-pointer capitalize "
                  onClick={() => setShow(!show)}
                >
                  {Auth.isAuthorization() && Auth.getUserId()}
                </div>
                <div
                  className={`${
                    show ? "visible " : "invisible"
                  } absolute  p-2 top-5  bg-white w-full  transition-all duration-100 ease-in`}
                >
                  <ul className="flex flex-col w-full  gap-y-3">
                    {Auth.getRole() == 1 && (
                      <li
                        onClick={() => navigate("/admin")}
                        className=" cursor-pointer"
                      >
                        Dashboard
                      </li>
                    )}
                    <li onClick={handleLogout} className=" cursor-pointer">
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <li className="flex items-center gap-x-2 font-semibold">
              <Link to="/daftar">Daftar</Link>
              <Link to="/login" className="p-1 rounded-lg bg-yellow text-white">
                Masuk
              </Link>
            </li>
          )}
        </div>
      </div>
      <Search scroll={scroll} />
    </div>
  );
}

export default Navbar;
