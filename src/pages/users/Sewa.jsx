import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import GetSewa from "../../apis/get.api";
import { Card } from "../../components/Card";
import { useDebounce } from "../../hooks/searching";

function Sewa() {
  const [data, setDatas] = useState([]);
  const [load, setLoad] = useState(true);
  const [_text, setText] = useState("");

  const [text] = useDebounce(300, _text);
  const getSewa = () => {
    GetSewa.allSewa(text).then((res) => {
      setDatas(res.data.data);
    });
  };
  useEffect(() => {
    getSewa();
  }, [text]);
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
          />
        </div>

        {/* {data?.data == "" && (
        <>
          <span className="flex items-center gap-x-1 text-color2">
            <FaSearch className="text-yellow" /> tidak ditemukan....
          </span>
        </>
      )} */}
        <div className="grid grid-cols-3 mt-5 place-items-center">
          {data.data?.map((m) => (
            <Card key={m.id} data={m} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sewa;
