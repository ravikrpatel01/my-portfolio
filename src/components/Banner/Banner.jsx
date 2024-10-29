import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      id="home"
      className="w-full flex h-[88vh] bg-[#111] px-10 py-10 mt-[90px]"
    >
      <div className="w-1/2 gap-8 h-full flex flex-col justify-center">
        <div>
          <span className="bg-emerald-800 text-[1.2rem] px-3 py-2 border-[2px]">
            Welcome to my Portfolio!
          </span>
        </div>
        <div>
          <h2 className="text-7xl font-semibold">
            <span className="text-orange-500">Hello!👋 I'm </span>
            <span className="text-white-700">RAVI</span>,{" "}
            <span className="text-green-500">Frontend Developer</span>.
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl">
            An MCA Graduate from{" "}
            <span className="text-gray-400 font-semibold">
              Vellore Institute of Technology, Vellore
            </span>{" "}
          </h3>
          <h4 className="text-xl flex items-center gap-1">
            <FaMapMarkerAlt className="icon" size={25} color="#DC143C" />
            Bengaluru, Karnataka
          </h4>
        </div>
        <div className="flex gap-3">
          <a href="#footer">
            <button className="bg-blue-500 px-4 py-1 border-[1px]">
              Let's Connect!
            </button>
          </a>
          <a href="#contact"><button className="bg-emerald-400 px-4 py-1 border-[1px]">
            Hire me!
          </button></a>
          
        </div>
      </div>
      <div className="w-1/2  flex items-center justify-center h-full">
        <div className=" w-[80%] h-[100%]">
          <div className="bg-[#1c1c1c] rounded-full w-full flex items-center h-[100%]">
            <img
              className="h-[100%] opacity-60 transform scale-x-[-1] cursor-pointer"
              src="/banner-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
