import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import foto from "../assets/hero1.png";
function Hero() {
  return (
    <div className="bg-white h-screen  ">
      <div className="flex bg-white h-full pt-28  content mx-20  pb-10 ">
        <div className="lg:w-1/2 w-full  h-full ">
          <div className="text-color2 flex justify-center w-full   font-semibold ">
            <div>
              <p className="lg:text-8xl text-6xl ">Ayo Sewa</p>
              <p className="text-3xl">
                <TypeAnimation
                  className="py-10"
                  sequence={[
                    "Ruko", // Types 'One'
                    1000, // Waits 1s
                    "Kontrakan", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    "Kos", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "2em" }}
                />
              </p>
              <p className="text-2xl">
                ayo<span className="text-yellow">Sewa</span> website penyewaan
                terpercaya yang akan membantumu menemukan tempat untuk disewa.
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 hidden h-full lg:flex ">
          <img src={foto} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
