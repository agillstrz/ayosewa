import React, { useContext, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { wishContext } from "../../App";
import Hero from "../../components/Hero";
import Rekomendasi from "../../components/Rekomendasi";
import Slogan from "./Slogan";
export const Home = () => {
  const [show, setShow] = useState({
    satu: false,
    dua: false,
    tiga: false,
    empat: false,
  });

  return (
    <div>
      <Hero />

      <Rekomendasi />
      <Slogan />
      <div className="content my-5">
        <h2 className="text-3xl text-center font-bold text-color2 my-2 ">
          Hal yang sering di <span className="text-yellow">tanyakan</span>
        </h2>
        <div className="flex flex-col gap-y-3">
          <div className="bg-base2 rounded-3xl shadow-lg  w-full py-3 transition-all duration-150 ease-in">
            <div className="flex  flex-col h-full pb-2 relative justify-center items-center ">
              <p className="text-2xl font-bold">
                Bagaimana cara saya menyewa salah satu tempat ini?
              </p>
              <span
                onClick={() => setShow({ satu: !show.satu })}
                className={`${
                  show.satu ? "rotate-90 text-yellow" : ""
                } absolute right-0 mx-5  transition-all duration-150 ease-linear cursor-pointer`}
              >
                <IoIosArrowDropright className="text-4xl " />
              </span>
            </div>
            <div
              className={`${
                show.satu ? "" : "hidden"
              } flex   px-5 items-center w-full justify-center `}
            >
              <div className="w-1/2">
                <p className="text-lg text-center">
                  Cukup pilih salah satu tempat yang ingin disewa, lalu hubungi
                  pemilik website dinomor yang tersedia untuk info lebih lanjut
                </p>
              </div>
            </div>
          </div>
          <div className="bg-base2 rounded-3xl shadow-lg  w-full py-3 transition-all duration-150 ease-in">
            <div className="flex  flex-col h-full pb-2 relative justify-center items-center ">
              <p className="text-2xl font-bold">
                Apakah ada penawaran harga untuk penyewaan salah satu tempat
                disini?
              </p>
              <span
                onClick={() => setShow({ dua: !show.dua })}
                className={`${
                  show.dua ? "rotate-90 text-yellow" : ""
                } absolute right-0 mx-5  transition-all duration-150 ease-linear cursor-pointer`}
              >
                <IoIosArrowDropright className="text-4xl " />
              </span>
            </div>
            <div
              className={`${
                show.dua ? "" : "hidden"
              } flex   px-5 items-center w-full justify-center `}
            >
              <div className="w-1/2">
                <p className="text-lg text-center">
                  Tidak ada, semua harga yang tertera merupakan harga yang
                  bersifat tetap dan tidak dapat diubah lagi
                </p>
              </div>
            </div>
          </div>
          <div className="bg-base2 rounded-3xl shadow-lg  w-full py-3 transition-all duration-150 ease-in">
            <div className="flex  flex-col h-full pb-2 relative justify-center items-center ">
              <p className="text-2xl font-bold">
                Apakah boleh jika ingin sewa per tahun ?
              </p>
              <span
                onClick={() => setShow({ tiga: !show.tiga })}
                className={`${
                  show.tiga ? "rotate-90 text-yellow" : ""
                } absolute right-0 mx-5  transition-all duration-150 ease-linear cursor-pointer`}
              >
                <IoIosArrowDropright className="text-4xl " />
              </span>
            </div>
            <div
              className={`${
                show.tiga ? "" : "hidden"
              } flex   px-5 items-center w-full justify-center `}
            >
              <div className="w-1/2">
                <p className="text-lg text-center">
                  Boleh, untuk lebih detail bisa tanyakan pada kontak yang
                  tertera
                </p>
              </div>
            </div>
          </div>
          <div className="bg-base2 rounded-3xl shadow-lg  w-full py-3 transition-all duration-150 ease-in">
            <div className="flex  flex-col h-full pb-2 relative justify-center items-center ">
              <p className="text-2xl font-bold">
                Apakah untuk menyewa dikenakan pajak ?
              </p>
              <span
                onClick={() => setShow({ empat: !show.empat })}
                className={`${
                  show.empat ? "rotate-90 text-yellow" : ""
                } absolute right-0 mx-5  transition-all duration-150 ease-linear cursor-pointer`}
              >
                <IoIosArrowDropright className="text-4xl " />
              </span>
            </div>
            <div
              className={`${
                show.empat ? "" : "hidden"
              } flex   px-5 items-center w-full justify-center `}
            >
              <div className="w-1/2">
                <p className="text-lg text-center">Tidak</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
