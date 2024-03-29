import { FormatRupiah } from "@arismun/format-rupiah";
import { Avatar, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { GiBlockHouse, GiHomeGarage, GiIceBolt } from "react-icons/gi";
import { BiShow } from "react-icons/bi";
import { FaBath, FaPlay, FaWifi } from "react-icons/fa";
import {
  MdOutlineBedroomChild,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import { VscLocation, VscSymbolField } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import SEWA from "../../apis/get.api";
import { wishContext } from "../../App";
import GoToTop from "../../hooks/GoToTop";
import Auth from "../../utils/Auth";
import ModalVideo from "./ModalVideo";
export const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [img, setImg] = useState(null);
  const { tambahData } = useContext(wishContext);
  const detail = () => {
    try {
      setLoad(true);
      SEWA.sewaById(id).then((res) => {
        setData(res.data.data);
      });
    } catch (error) {
      console.log("error");
    }

    setLoad(false);
  };
  useEffect(() => {
    detail();
  }, []);

  if (load) {
    return <h1>oke</h1>;
  }

  return (
    <>
      {data && (
        <>
          {show && (
            <ModalVideo
              foto1={`${!img ? data.foto1 : img}`}
              show={show}
              setShow={setShow}
            />
          )}
          <div className="pt-20 content overflow-hidden">
            <div className="py-4 flex gap-x-10 ">
              <div className="w-1/2 h-[70%]">
                <div className="w-full h-full   ">
                  {" "}
                  <div
                    onClick={() => setShow(!show)}
                    className="w-full h-96 relative group hover:brightness-125 cursor-pointer transition-all duration-300 ease-in "
                  >
                    <img
                      className="w-full h-full rounded-lg  border-0 group-hover:border-color1 transition-all duration-300 ease-in "
                      src={`${!img ? data.foto1 : img}`}
                      alt=""
                    />
                    <span className="group-hover:opacity-100 opacity-0  transition-opacity duration-200 ease-in "></span>
                  </div>
                </div>
                <div className="flex mt-2 gap-x-2">
                  <img
                    onClick={() => setImg(data.foto1)}
                    className="w-44 rounded-lg cursor-pointer"
                    src={data.foto1}
                    alt=""
                  />
                  <img
                    onClick={() => setImg(data.foto2)}
                    className="w-44 rounded-lg cursor-pointer"
                    src={data.foto2}
                    alt=""
                  />
                  <img
                    onClick={() => setImg(data.foto3)}
                    className="w-44 rounded-lg cursor-pointer"
                    src={data.foto3}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-1/2 h-[70%]">
                <div className="w-full h-full text-color2">
                  <div className="flex gap-x-2 items-center">
                    <h2 className="font-semibold text-4xl ">
                      {" "}
                      <FormatRupiah value={data.harga} />
                      /Bulan
                    </h2>
                    <button className="p-1 bg-base2 capitalize  rounded-lg text-xl">
                      {data.kate_id === 1
                        ? "kontrakan"
                        : data.kate_id === 2
                        ? "kos"
                        : "Ruko"}
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
                  <p className="text-3xl">{data.name}</p>
                  <p className="text-lg flex items-center capitalize opacity-90">
                    <VscLocation /> {data.alamat}
                  </p>
                  <div>
                    <h4 className="text-color2 text-lg font-semibold">
                      Deskripsi
                    </h4>
                    <p>{data.deskripsi}</p>
                  </div>
                  <div>
                    <h4 className="text-color2 font-semibold text-lg">
                      Fasilitas
                    </h4>
                    <div className="flex w-full flex-wrap gap-y-1  gap-x-2">
                      {data.kmandi && (
                        <div className="cardF">
                          <p className="text-color1/80">Kamar Mandi</p>
                          <div className="flex gap-x-2 text-md items-center">
                            <FaBath />
                            <span> {data.kmandi}</span>
                          </div>
                        </div>
                      )}
                      {data.wifi && (
                        <div className="cardF">
                          <p className="text-color1/80">Wifi</p>
                          <div className="flex gap-x-2 text-md items-center">
                            <FaWifi />
                            <span>{data.wifi}</span>
                          </div>
                        </div>
                      )}
                      {data.kamar && (
                        <div className="cardF">
                          <p className="text-color1/80">kamar</p>
                          <div className="flex gap-x-2 text-md items-center">
                            <MdOutlineBedroomChild />
                            <span>{data.kamar}</span>
                          </div>
                        </div>
                      )}
                      {data.ac && (
                        <div className="cardF">
                          <p className="text-color1/80">ac</p>
                          <div className="flex gap-x-2 text-md items-center">
                            <GiIceBolt />
                            <span>{data.ac}</span>
                          </div>
                        </div>
                      )}
                      {data.garasi && (
                        <div className="cardF">
                          <p className="text-color1/80">garasi</p>
                          <div className="flex gap-x-2 text-md items-center">
                            <GiHomeGarage />
                            <span>{data.garasi}</span>
                          </div>
                        </div>
                      )}
                      {data.lantai && (
                        <div className="cardF">
                          <p className="text-color1/80">lantai</p>
                          <div className="flex gap-x-2 text-md items-center">
                            <GiBlockHouse />
                            <span>{data.lantai}</span>
                          </div>
                        </div>
                      )}
                      {data.luas && (
                        <div className="cardF">
                          <p className="text-color1/80">Luas</p>
                          <div className="flex gap-x-2 text-md items-center">
                            <VscSymbolField />
                            <span>
                              {data.luas}m<sup>2</sup>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-screen flex gap-x-3">
              <div className="w-[65%]">
                <h4 className="text-lg font-bold text-color2">Lokasi</h4>
                <iframe
                  className="w-full "
                  src={data.link_alamat}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className=" w-[35%] flex flex-col items-center ">
                <h4 className="text-color2 font-semibold block">
                  Berminat ? Hubungi!
                </h4>
                <div className=" w-[80%] p-3   bg-white border shadow-lg">
                  <div className="flex justify-center w-full">
                    <div className="w-[30%]">
                      <div className="flex flex-wrap gap-2">
                        <Avatar
                          img="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                          rounded={true}
                          size="lg"
                        />
                      </div>
                    </div>
                    <div className="w-[70%] text-md text-colo2">
                      <p className="font-semibold">Erin</p>
                      <p className="text-sm opacity-80">Pemilik Website</p>
                    </div>
                  </div>
                  <div className="flex w-full mt-3 items-center justify-center ">
                    <button className="py-2 px-3 bg-yellow rounded-lg text-color2 hover:bg-color2 hover:text-white font-semibold text-[14px] flex items-center gap-x-1">
                      <AiOutlineWhatsApp /> 088802281188
                    </button>
                    <div className="w-1/2 flex justify-center">
                      <a
                        href={`https://api.whatsapp.com/send?phone=6288802281188&text=Hallo%20saya%20ingin%20menyewa%20${data.name}`}
                        target={"_blank"}
                        className="py-2 px-3 bg-yellow rounded-lg text-color2 hover:bg-color2 hover:text-white font-semibold text-[14px] flex items-center gap-x-1"
                      >
                        <AiOutlineWhatsApp /> Whatshapp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* <ScrollToTop smooth /> */}
      <GoToTop />
    </>
  );
};
