import { Pagination, Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { GrFormNextLink, GrLinkNext } from "react-icons/gr";
import { GiNextButton } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import GetSewa from "../../apis/get.api";
import { Card } from "../../components/Card";
import { useDebounce } from "../../hooks/searching";

function Sewa() {
  const [data, setDatas] = useState([]);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [_text, setText] = useState("");

  const [text] = useDebounce(700, _text);
  const getSewa = () => {
    setLoad(true);
    GetSewa.allSewa(text, page).then((res) => {
      setDatas(res.data.data);
      setLoad(false);
    });
  };
  useEffect(() => {
    getSewa();
  }, [text, page]);
  if (load) {
    return (
      <div className="h-screen flex justify-center items-center">
        {/* <span className="h-1 bg-color2 rounded-full">loading....</span> */}
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-yellow  " />
      </div>
    );
  }
  return (
    <>
      <Toaster />
      <div className="content min-h-screen pt-24">
        <h2 className="text-center font-bold drop-shadow-lg">
          Sewa semuanya di sewa<span className="text-yellow">rent</span>
        </h2>
        <div className="flex w-full justify-center my-3">
          <input
            type="search"
            id="default-search"
            className="block w-[40%] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari sewa"
            onChange={(e) => setText(e.target.value)}
            value={_text}
          />
        </div>

        {/* {data?.data == "" && (
        <>
          <span className="flex items-center gap-x-1 text-color2">
            <FaSearch className="text-yellow" /> tidak ditemukan....
          </span>
        </>
      )} */}
        {data.data == "" ? (
          <>
            <span className="flex items-center text-color2 gap-x-1">
              <FaSearch /> tidak ditemukan....
            </span>
          </>
        ) : (
          ""
        )}
        <div className="grid grid-cols-3 mt-5 place-items-center">
          {data?.data?.map((m) => (
            <Card key={m.id} data={m} />
          ))}
        </div>
        {data.data !== "" && (
          <div className=" w-full flex justify-center mb-2 ">
            <div className="flex flex-col items-center">
              {/* Help text */}
              <span className="text-sm text-gray-700 dark:text-gray-400">
                halaman{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {data && data.current_page}
                </span>{" "}
                dari{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {data && Math.ceil(data.total / 10)}
                </span>{" "}
                Halaman
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                {/* Buttons */}
                <button
                  onClick={() => setPage(page - 1)}
                  className="inline-flex gap-x-1 items-center  px-4 py-2 text-sm font-medium text-yellow bg-color2 border-0 border-l rounded-r hover:bg-gray-900"
                >
                  <AiOutlineArrowLeft className="text-yellow text-xl" />
                  Prev
                </button>
                <button
                  onClick={() => setPage(page + 1)}
                  className="inline-flex gap-x-1 items-center  px-4 py-2 text-sm font-medium text-yellow bg-color2 border-0 border-l rounded-r hover:bg-gray-900"
                >
                  Next
                  <AiOutlineArrowRight className="text-yellow text-xl" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sewa;
