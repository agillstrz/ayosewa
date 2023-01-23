import { FormatRupiah } from "@arismun/format-rupiah";
import { Carousel } from "flowbite-react";
import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaBath, FaBed, FaWifi } from "react-icons/fa";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { Link } from "react-router-dom";

function CardRekomendasi({ data }) {
  console.log(data);
  const [icon, setIcon] = useState(false);
  return (
    <div className=" shadow-lg h-[21rem] w-[19rem] mb-7 rounded-lg flex flex-col justify-between border   cursor-pointer">
      <div className="h-[70%] ">
        <Carousel leftControl=" " rightControl=" " indicators={false}>
          <img className="h-full w-full " src={data?.foto1} alt="..." />
          <img className="h-full  w-full " src={data?.foto2} alt="..." />
          <img className="h-full  w-full" src={data?.foto3} alt="..." />
        </Carousel>
      </div>

      <div className="text-color2 h-[30%] p-3">
        <div className="flex w-full  justify-between">
          <button className="p-1 bg-base2 capitalize  rounded-lg text-[13px]">
            {data.kategori?.name}
          </button>
          <button
            className="  rounded-lg text-xl "
            onClick={() => setIcon(!icon)}
          >
            <MdOutlineFavorite
              className={`${icon ? "text-red-600 " : "hidden"}`}
            />
            <MdOutlineFavoriteBorder
              className={`${icon ? "hidden" : "hover:text-red-600"}`}
            />
          </button>
        </div>
        <Link
          to={`/detail/${data.id}`}
          className="flex flex-col hover:underline hover:decoration-color2"
        >
          <p className="text-lg font-semibold">
            <FormatRupiah value={data.harga} />
            /Bulan
          </p>
          <p className="text-md capitalize">{data.name}</p>
          <span className="text-[14px] flex items-center capitalize opacity-90">
            <VscLocation /> {data.alamat}
          </span>
        </Link>
        <div className="flex items-center mt-2  w-[50%] flex-wrap gap-x-2 text-color2 text-[14px]">
          {data.kmandi ? (
            <div className="flex items-center gap-x-1">
              <FaBath />
              <span>{data.kmandi}</span>
            </div>
          ) : (
            ""
          )}
          {data.wifi ? (
            <div className="flex items-center gap-x-1">
              <FaWifi />
              <span>{data.wifi}</span>
            </div>
          ) : (
            ""
          )}
          {data.kamar ? (
            <div className="flex items-center gap-x-1">
              <FaBed />
              <span>{data.kamar}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex w-full justify-end p-3">
        <button className="py-2 px-3 bg-yellow rounded-lg text-white hover:bg-color2 hover:text-white font-semibold text-[14px] flex items-center gap-x-1 transition-all duration-150 ease-linear">
          <AiOutlineWhatsApp className="text-lg" /> Whatshapp
        </button>
      </div>
    </div>
  );
}

export default CardRekomendasi;
