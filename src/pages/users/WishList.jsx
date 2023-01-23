import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { VscLocation } from "react-icons/vsc";
import { siTeradata } from "simple-icons";
import SEWA from "../../apis/get.api";
import datas from "../../mockup/dataRumah";

function WishList() {
  const [data, setData] = useState([]);
  const getWish = () => {
    SEWA.wishList().then((res) => setData(res.data));
  };

  useEffect(() => {
    getWish();
  }, []);
  return (
    <div className="content min-h-screen pt-24 flex flex-col items-center">
      {data.data?.map((m) => (
        <div
          key={m.id}
          className="flex w-[80%] cursor-pointer bg-white gap-x-4  border hover:mb-3 hover:border-yellow hover:z-50 p-5 hover:scale-105 transition-all duration-150 ease-linear"
        >
          <div className="w-[30%]  flex justify-center">
            <img className="h-36 w-64" src={m.sewa.foto1} alt="" />
          </div>
          <div className="w-[70%]  text-color2 ">
            <h4 className="font-semibold text-2xl">
              <FormatRupiah value={m.sewa.harga} />
              /Bulan
            </h4>
            <h4 className="font-semibold text-lg">{m.sewa.name}</h4>
            <p className="opacity-90 flex items-center">
              {" "}
              <VscLocation />
              {m.sewa.alamat}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WishList;
