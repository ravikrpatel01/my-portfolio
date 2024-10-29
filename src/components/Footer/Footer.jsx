import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaUserGraduate,
  FaTools,
  FaLaptopCode,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
// import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer" className="w-full h-[20vh] bg-[#212121] px-10 py-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl flex items-center gap-2 font-semibold">
              <FaUserGraduate size={26} color="gray" />
              Ravi Patel
            </h3>
            <h4 className="text-xl flex items-center text-gray-200 gap-2">
              <IoMdMailUnread size={26} color="gray" />{" "}
              <a className="text-lg" href="mailto:ravikumarpatel2001@gmail.com">
                ravikumarpatel2001@gmail.com
              </a>
            </h4>
          </div>
          <div>
            <ul className="flex gap-10">
              <li className="flex flex-col text-[1rem] items-center cursor-pointer justify-center gap-1">
                <FaHouse size={26} color="gray" />
                Home
              </li>
              <li className="flex flex-col items-center cursor-pointer justify-center gap-1">
                <FaUserGraduate size={26} color="gray" />
                Education
              </li>
              <li className="flex flex-col text-[1rem] cursor-pointer items-center justify-center gap-1">
                <FaTools size={26} color="gray" />
                Skills
              </li>
              <li className="flex flex-col text-[1rem] cursor-pointer items-center justify-center gap-1">
                <FaLaptopCode size={26} color="gray" />
                Projects
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-xl font-semibold">Connect with me!</h3>
            </div>
            <div className="flex gap-5">
              <FaGithub
                className="icon cursor-pointer hover:scale-[1.3] transition-all"
                size={25}
                color="gray"
              />
              <FaLinkedin
                className="icon cursor-pointer hover:scale-[1.3] transition-all"
                size={25}
                color="#0077B5"
              />
              <FaInstagram
                className="icon cursor-pointer hover:scale-[1.3] transition-all"
                size={25}
                color="#DC143C"
              />
              <FaFacebookSquare
                className="icon cursor-pointer hover:scale-[1.3] transition-all"
                size={25}
                color="#0A5EBA"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Footer;
