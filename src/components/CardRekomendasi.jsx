import { FormatRupiah } from "@arismun/format-rupiah";
import { Carousel } from "flowbite-react";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaBath, FaBed, FaWifi } from "react-icons/fa";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { VscLocation, VscSymbolField } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { wishContext } from "../App";
import Auth from "../utils/Auth";

function CardRekomendasi({ data }) {
  const [sewa, setSewa] = useState(null);
  const [icon, setIcon] = useState(false);
  const { tambahData } = useContext(wishContext);
  return (
    <>
      <div className=" shadow-lg lg:h-[21rem] h-[16rem]  w-full z-0 lg:w-[22rem] mb-7 rounded-lg flex flex-col justify-between  cursor-pointer">
        <div className="h-[70%] ">
          <Carousel leftControl=" " rightControl=" " indicators={false}>
            <img className="h-full w-full " src={data?.foto1} alt="..." />
            <img className="h-full  w-full " src={data?.foto2} alt="..." />
            <img className="h-full  w-full" src={data?.foto3} alt="..." />
          </Carousel>
        </div>

        <div className="text-color2 h-[30%] lg:p-3 px-2">
          <div className="flex w-full  justify-between">
            <button className="p-1 bg-base2 capitalize rounded-lg text-[12px]">
              {data.kategori?.name}
            </button>
            <button
              className="rounded-lg text-xl "
              onClick={() =>
                Auth.isAuthorization()
                  ? tambahData(data.id)
                  : toast.error("anda harus login terlebih dahulu")
              }
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
            className="flex flex-col hover:underline"
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
          <div className="flex items-center  mt-2 gap-x-2 text-[15px]">
            <div className="flex items-center gap-x-1">
              {data.kmandi ? (
                <>
                  <FaBath /> {data.kmandi}
                </>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center gap-x-1">
              {data.wifi ? (
                <>
                  <FaWifi />
                  {data.wifi}
                </>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center gap-x-1">
              {" "}
              {data.ktidur ? (
                <>
                  <FaBed /> {data.ktidur}
                </>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center gap-x-1">
              {" "}
              {data.luas ? (
                <>
                  <VscSymbolField /> {data.luas}m<sup>2</sup>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end  p-3">
          <button className="py-2 px-3 bg-yellow rounded-lg text-color2 hover:bg-color2 hover:text-white font-semibold text-[14px] flex items-center gap-x-1 transition-all duration-150 ease-linear">
            <AiOutlineWhatsApp className="text-lg" /> Whatshapp
          </button>
        </div>
      </div>
    </>
  );
}

export default CardRekomendasi;
