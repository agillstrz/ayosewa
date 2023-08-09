import React from "react";
import logo from "../assets/ayosewa.png";

function Footers() {
  return (
    <footer className="p-4 bg-white text-color2 border shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a className="flex items-center mb-4 sm:mb-0">
          <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl text-color2 font-semibold whitespace-nowrap ">
            ayo<span className="text-yellow">Sewa</span>
          </span>
        </a>
        {/* <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 ">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul> */}
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <span className="block text-sm text-color2 sm:text-center ">
        ©<a className="hover:underline">ayoSewa</a>. All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footers;
