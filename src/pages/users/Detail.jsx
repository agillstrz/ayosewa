import { FormatRupiah } from "@arismun/format-rupiah";
import { Avatar, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaBath, FaBed, FaPlay, FaWifi } from "react-icons/fa";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { SiAirtable } from "react-icons/si";
import { VscLocation } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import SEWA from "../../apis/get.api";
import ModalVideo from "./ModalVideo";
export const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [img, setImg] = useState(null);

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
            <ModalVideo link={data.link_video} show={show} setShow={setShow} />
          )}
          <div className="pt-20 content overflow-hidden">
            <div className="py-4 flex gap-x-10 ">
              <div className="w-1/2 h-[70%]">
                <div className="w-full h-full   ">
                  {" "}
                  <div className="w-full h-96 relative group hover:brightness-125 transition-all duration-300 ease-in ">
                    <img
                      className="w-full h-full rounded-lg border group-hover:border-color1 transition-all duration-300 ease-in "
                      src={`${!img ? data.foto1 : img}`}
                      alt=""
                    />
                    <span
                      onClick={() => setShow(!show)}
                      className="group-hover:opacity-100 opacity-0  transition-opacity duration-200 ease-in "
                    >
                      <FaPlay className="text-color2 text-6xl absolute cursor-pointer  right-1/2 z-50   top-[45%]  active:scale-105  " />
                    </span>
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
                      className="  rounded-lg text-xl "
                      onClick={() => setIcon(!icon)}
                    >
                      <MdOutlineFavorite
                        className={`${icon ? "text-red-600" : "hidden"}`}
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
                      Fasilitas Kontrakan
                    </h4>
                    <div className="flex w-full flex-wrap gap-y-1  gap-x-2">
                      <div className="cardF">
                        <p className="text-color1/80">Kamar Mandi</p>
                        <div className="flex gap-x-2 text-md items-center">
                          <FaBath />
                          <span>3</span>
                        </div>
                      </div>
                      <div className="cardF">
                        <p className="text-color1/80">Wifi</p>
                        <div className="flex gap-x-2 text-md items-center">
                          <FaWifi />
                          <span>3</span>
                        </div>
                      </div>

                      <div className="cardF">
                        <p className="text-color1/80">Kamar Tidur</p>
                        <div className="flex gap-x-2 text-md items-center">
                          <FaBed />
                          <span>1</span>
                        </div>
                      </div>
                      <div className="cardF">
                        <p className="text-color1/80">Meja</p>
                        <div className="flex gap-x-2 text-md items-center">
                          <SiAirtable />
                          <span>1</span>
                        </div>
                      </div>
                      <div className="cardF">
                        <p className="text-color1/80">Meja</p>
                        <div className="flex gap-x-2 text-md items-center">
                          <SiAirtable />
                          <span>1</span>
                        </div>
                      </div>
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
                          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          rounded={true}
                          size="lg"
                        />
                      </div>
                    </div>
                    <div className="w-[70%] text-md text-colo2">
                      <p className="font-semibold">Muhammad Agil</p>
                      <p className="text-sm opacity-80">Pemilik Website</p>
                    </div>
                  </div>
                  <div className="flex w-full mt-3 items-center justify-center ">
                    <button className="py-2 px-3 bg-yellow rounded-lg text-color2 hover:bg-color2 hover:text-white font-semibold text-[14px] flex items-center gap-x-1">
                      <AiOutlineWhatsApp /> 082281788810
                    </button>
                    <div className="w-1/2 flex justify-center">
                      <button className="py-2 px-3 bg-yellow rounded-lg text-color2 hover:bg-color2 hover:text-white font-semibold text-[14px] flex items-center gap-x-1">
                        <AiOutlineWhatsApp /> Whatshapp
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-[80%] p-3   bg-white border shadow-lg">
                  <div className=" w-full">
                    <h4 className="text-lg font-semibold">Email</h4>
                    <div className="flex flex-col gap-4">
                      <div>
                        <TextInput id="small" type="text" sizing="sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
