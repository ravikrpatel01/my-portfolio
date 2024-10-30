import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaTools,
  FaLaptopCode,
  FaUserGraduate,
  FaBars,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { IoMdMailUnread } from "react-icons/io";
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import Humburger from "./Humburger";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const menu = showLinks ? "flex" : "hidden";

  return (
    <>
      <div
        id="navbar"
        className="bg-[#212121] fixed px-8 z-50 py-6 top-0 flex items-center w-full h-[90px] border-b-[1px] border-emerald-800"
      >
        <div className="flex items-center w-full justify-between">
          <div className=" ">
            <Link to="home" smooth={true} duration={500}>
              <h2 className="text-white text-[1.8rem] cursor-pointer font-bold">
                <b className="text-emerald-700">R</b>avi{" "}
                <b className="text-emerald-700">P</b>atel
              </h2>
            </Link>
          </div>
          <div>
            <button id="humburger" className="hidden" onClick={toggleLinks}>
              <FaBars size={32} color="gray" />
            </button>
          </div>
          <div
            id="nav-links"
            className="flex flex-col items-center text-[1.2rem] text-white font-semibold"
          >
            <ul className="flex gap-6 font-semibold md:flex-row">
              <Link to="home" smooth={true} duration={500}>
                <li className="flex items-center gap-1 cursor-pointer  p-3 hover:bg-[#111] transition-all rounded-full">
                  <FaHouse size={30} color="gray" />
                </li>
              </Link>
              <Link to="education" smooth={true} duration={500}>
                <li className="flex items-center gap-1 cursor-pointer p-3 hover:bg-[#111] transition-all rounded-full">
                  <FaUserGraduate size={30} color="gray" />
                </li>
              </Link>
              <Link to="skills" smooth={true} duration={500}>
                <li className="flex items-center gap-1 cursor-pointer p-3 hover:bg-[#111] transition-all rounded-full">
                  <FaTools size={30} color="gray" />
                </li>
              </Link>

              <Link to="projects" smooth={true} duration={500}>
                <li className="flex items-center gap-1 cursor-pointer  p-3 hover:bg-[#111] transition-all rounded-full">
                  <FaLaptopCode size={30} color="gray" />
                </li>
              </Link>

              <Link to="contact" smooth={true} duration={500}>
                <li className="flex items-center gap-1 cursor-pointer  p-3 hover:bg-[#111] transition-all rounded-full">
                  <IoMdMailUnread size={30} color="gray" />
                </li>
              </Link>
            </ul>
          </div>
          <div
            id="social-links"
            className="flex items-center text-[1.2rem] text-white font-semibold"
          >
            <div className="flex gap-3">
              <a href="https://github.com/ravikrpatel01" target="_blank">
                <FaGithub
                  className="icon cursor-pointer hover:scale-[1.3] transition-all"
                  size={25}
                  color="gray"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/ravi-kumar-patel-01a9a8247/"
                target="_blank"
              >
                <FaLinkedin
                  className="icon cursor-pointer hover:scale-[1.3] transition-all"
                  size={25}
                  color="#0077B5"
                />
              </a>

              <a href="https://leetcode.com/u/ravikrpatel01/" target="_blank">
                <SiLeetcode
                  className="icon cursor-pointer hover:scale-[1.3] transition-all"
                  size={25}
                  color="#FFA116"
                />
              </a>

              <a
                href="https://www.geeksforgeeks.org/user/ravikrpatel01/"
                target="_blank"
              >
                <SiGeeksforgeeks
                  className="icon cursor-pointer hover:scale-[1.3] transition-all"
                  size={25}
                  color="#00cc66"
                />
              </a>
            </div>
            <div className="border-[1px] border-gray-400 h-7 mx-4"></div>
            <div className="">
              <a
                href="https://drive.google.com/uc?export=download&id=12qGPmltHvBb6RTdpq-LOCoPFYt6FGshT"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex bg-[#111] border-[1px] gap-2 items-center border-gray-400 px-4 py-1 text-[1rem] rounded text-white hover:bg-[#1c1c1c] transition-all">
                  RESUME
                  <FaDownload className="icon" size={15} color="white" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Humburger toggleLinks={toggleLinks} menu={menu} />
    </>
  );
};

export default Navbar;
