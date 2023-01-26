import { Avatar, Dropdown } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import Search from "./Search";
import datas from "../mockup/dataRumah";
import sewa from "../assets/ayosewa.png";
import logo from "../assets/logo1.png";
import Auth from "../utils/Auth";
import GetSewa from "../apis/get.api";
function Navbar() {
  let navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    Auth.signOut(navigate);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 0 ? setScroll(true) : setScroll(false);
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
        <div className="flex items-center gap-x-3">
          {Auth.isAuthorization() ? (
            <>
              <NavLink
                to="/wish"
                className="text-3xl group cursor-pointer relative"
              >
                <MdFavorite className="group-hover:text-yellow transition-all duratnavion-100 ease-linear" />
                <span className="absolute top-[10px] right-0 text-[10px] text-color2">
                  1
                </span>
                {/* <div
                  className={`
               w-56  border bg-white invisible group-hover:visible  z-[9999] flex flex-col gap-y-2   absolute p-2 right-4 top-7  `}
                >
                  <div className="flex items-center hover:bg-yellow hover:font-semibold  gap-x-1 border">
                    <div className="w-[25%]  ">
                      <img className="h-8" src={datas[0].foto1} alt="" />
                    </div>
                    <div className="w-[65%] ">
                      <p className="text-[13px]">Kontrakan rainbow</p>
                    </div>
                  </div>
                  <div className="flex items-center  gap-x-1 border">
                    <div className="w-[25%]  ">
                      <img className="h-8" src={datas[0].foto1} alt="" />
                    </div>
                    <div className="w-[65%] ">
                      <p className="text-[13px]">Kontrakan rainbow</p>
                    </div>
                  </div>
                  <div className="flex items-center  gap-x-1 border">
                    <div className="w-[25%]  ">
                      <img className="h-8" src={datas[0].foto1} alt="" />
                    </div>
                    <div className="w-[65%] ">
                      <p className="text-[13px]">Kontrakan rainbow</p>
                    </div>
                  </div>
                  <div className="flex items-center  gap-x-1 border">
                    <div className="w-[25%]  ">
                      <img className="h-8" src={datas[0].foto1} alt="" />
                    </div>
                    <div className="w-[65%] ">
                      <p className="text-[13px]">Kontrakan rainbow</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center  gap-x-1 border">
                    <p className="text-sm text-color2">Lihat Lebih banyak</p>
                  </div>
                </div> */}
              </NavLink>

              <div className="space-y-1 relative  w-full  font-medium dark:text-white ">
                <div
                  className="cursor-pointer px-10"
                  onClick={() => setShow(!show)}
                >
                  user login
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
                        className="hover:bg-base2 cursor-pointer"
                      >
                        Dashboard
                      </li>
                    )}
                    <li
                      onClick={handleLogout}
                      className="hover:bg-base2 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <li className="flex items-center gap-x-2 font-semibold">
              <Link to="/login">Daftar</Link>
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
