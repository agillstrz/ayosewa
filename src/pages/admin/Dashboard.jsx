import React from "react";
import Navbar from "./Sidebar";
import kontrakan from "../../assets/dbkontrakan.jpg";
import ruko from "../../assets/dbruko.jpg";
import kos from "../../assets/dbkos.jpg";
import { useState } from "react";
import GetSewa from "../../apis/get.api";
import { useEffect } from "react";
export const Dashboard = () => {
  const [data, setData] = useState([]);
  const getDashboard = () => {
    GetSewa.Dashboard().then((res) => setData(res.data));
  };

  useEffect(() => {
    getDashboard();
  }, []);
  return (
    <div className=" w-full ">
      <h2 className="text-center">Dashboard ayoSewa</h2>
      {data && (
        <div className="flex gap-x-3 w-full">
          <div className="w-[33%] relative bg-color2 rounded-lg shadow-lg h-72 border">
            <img className="opacity-40" src={kontrakan} alt="" />
            <div className="absolute top-0  w-full flex flex-col justify-center items-center h-full ">
              <h4 className="text-3xl font-extrabold  text-yellow">
                Jumlah Kontrakan
              </h4>
              <p className="text-2xl font-extrabold bg-black p-2 rounded-full text-yellow">
                {data?.data}
              </p>
            </div>
          </div>
          <div className="w-[33%] relative bg-color2 rounded-lg shadow-lg h-72 border">
            <img className="opacity-40 h-full w-full" src={ruko} alt="" />
            <div className="absolute top-0  w-full flex justify-center flex-col items-center h-full  ">
              <h4 className="text-3xl font-extrabold  text-yellow">
                Jumlah Ruko
              </h4>
              <p className="text-2xl font-extrabold bg-black p-2 rounded-full text-yellow">
                {data?.ruko}
              </p>
            </div>
          </div>
          <div className="w-[33%] relative bg-color2 rounded-lg shadow-lg h-72 border">
            <img className="opacity-40 h-full w-full" src={kos} alt="" />
            <div className="absolute top-0  w-full flex justify-center items-center flex-col h-full  ">
              <h4 className="text-3xl font-extrabold  text-yellow">
                Jumlah Kos
              </h4>
              <p className="text-2xl font-extrabold bg-black p-2 rounded-full text-yellow">
                {data?.kos}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
