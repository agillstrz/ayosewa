import React, { useState } from "react";
import foto from "../assets/kos.jpg";
export const HeroKos = () => {
  const [icon, setIcon] = useState(null);
  return (
    <div className="bg-white   ">
      <div className="flex bg-white pt-28 content  pb-10 ">
        <div className="w-1/2  h-full flex items-end ">
          <img src={foto} alt="" />
        </div>
        <div className="w-1/2 h-full text-color2   ">
          <h1 className="">Cari kos-kosan Sekarang</h1>
        </div>
      </div>
    </div>
  );
};
