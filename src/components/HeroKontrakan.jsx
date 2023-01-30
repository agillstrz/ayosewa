import React, { useState } from "react";
import foto from "../assets/hero1.png";
export const HeroKontrakan = () => {
  return (
    <div className="bg-white   ">
      <div className="flex bg-white pt-28 content  pb-10 ">
        <div className="w-1/2  h-full flex items-end ">
          <img src={foto} alt="" />
        </div>
        <div className="w-1/2 h-full text-color2   ">
          <h1 className="">Cari Kontrakanmu Sekarang</h1>
        </div>
      </div>
    </div>
  );
};
