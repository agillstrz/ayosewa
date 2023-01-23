import React from "react";
import { useState } from "react";
import { MdFavoriteBorder, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import datas from "../mockup/dataRumah";

function Search({ scroll }) {
  const [name, setName] = useState("");
  let location = useLocation();
  console.log(location.pathname);
  let navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${name}`);
    setName("");
  };
  return (
    <div className={`${location.pathname === "/semua" ? "hidden" : ""}`}>
      <div
        className={`${
          scroll
            ? "flex py-2 visible text-md shadow-md bg-white text-color2 items-center justify-center content transition-all  w-full duration-300 ease-out fixed  z-[998] "
            : "invisible"
        } `}
      >
        <div className="flex w-[70%] items-center justify-center gap-x-2 ">
          <div className="font-bold">
            <Link to="/">
              sewa<span className="text-yellow">Rent</span>
            </Link>
          </div>
          <form className="w-[70%] " onSubmit={handleSearch}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cari tempat yang ingin kamu sewa sekarang..."
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </form>
          <div>
            <NavLink
              to="/wish"
              className="text-3xl group cursor-pointer relative"
            >
              <MdFavoriteBorder className="group-hover:text-yellow transition-all duration-100 ease-linear" />
              <span className="absolute top-[10px] right-0 text-[10px] text-color2">
                1
              </span>
              <div
                className={`
               w-56  border bg-white invisible group-hover:visible borders z-[9999] flex flex-col gap-y-2   absolute p-2 right-4 top-7  `}
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
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
