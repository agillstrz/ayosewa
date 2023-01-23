import { FormatRupiah } from "@arismun/format-rupiah";
import { Carousel, Toast } from "flowbite-react";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineStar, AiOutlineWhatsApp } from "react-icons/ai";
import { FaBath, FaBed, FaWifi, FaWineGlassAlt } from "react-icons/fa";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { Link } from "react-router-dom";
import PostSewa from "../apis/post.api";

export const Card = ({ data }) => {
  const [sewa, setSewa] = useState(null);
  const [message, setMessage] = useState("");
  const [icon, setIcon] = useState(false);
  const addWish = (id) => {
    PostSewa.addWish(id).then((res) => toast.success(res.data.message));
  };
  return (
    <>
      <Toaster />
      <div className=" shadow-lg h-[21rem] z-0 w-[22rem] mb-7 rounded-lg flex flex-col justify-between  cursor-pointer">
        <div className="h-[70%] ">
          <Carousel indicators={false} leftControl=" " rightControl=" ">
            <img className="h-full w-full z-0" src={data.foto1} alt="..." />
          </Carousel>
        </div>

        <div className="text-color2 h-[30%] p-3">
          <div className="flex w-full  justify-between">
            <button className="p-1 bg-base2 capitalize rounded-lg text-[12px]">
              {data.kategori?.name}
            </button>
            <button
              className="rounded-lg text-xl "
              onClick={() => addWish(data.id)}
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
              {data.kmandi ? <FaBath /> : ""}
            </div>
            <div className="flex items-center gap-x-1">
              {data.wifi ? <FaWifi /> : ""}
            </div>
            <div className="flex items-center gap-x-1">
              {" "}
              {data.ktidur ? (
                <>
                  <FaBed />
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
};