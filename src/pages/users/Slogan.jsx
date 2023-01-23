import React from "react";
import fast from "../../assets/fast.png";
import trust from "../../assets/trust.png";
import trophy from "../../assets/trophy.png";
import loss from "../../assets/loss.png";
function Slogan() {
  return (
    <div className="content ">
      <h2 className="text-3xl text-center font-bold text-color2 my-2 ">
        Kenapa ayo<span className="text-yellow">Sewa</span>?
      </h2>
      <div className="grid grid-cols-4 place-items-center">
        <div className="w-64 p-4 h-64 rounded-lg  flex flex-col items-center justify-center bg-yellow/30 shadow-lg">
          <p className="text-2xl text-center font-semibold">Cepat</p>
          <img className="h-36  p-4" src={fast} alt="" />
        </div>
        <div className="w-64 p-4 h-64 rounded-lg  bg-yellow/50 shadow-lg flex  flex-col items-center justify-center">
          <p className="text-3xl text-center font-semibold">Terpercaya</p>
          <img className="h-36  p-4" src={trust} alt="" />
        </div>
        <div className="w-64 p-4 h-64 rounded-lg  bg-yellow/70 shadow-lg flex  flex-col items-center justify-center">
          <p className="text-4xl text-center font-semibold">Berkualitas</p>
          <img className="h-36  p-4" src={trophy} alt="" />
        </div>
        <div className="w-64 p-4 h-64 rounded-lg  bg-yellow/80 shadow-lg flex  flex-col items-center justify-center">
          <p className="text-4xl text-center font-semibold">Terjangkau</p>
          <img className="h-36  p-4" src={loss} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Slogan;
