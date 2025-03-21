import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaTools,
  FaLaptopCode,
  FaUserGraduate,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { IoMdMailUnread } from "react-icons/io";
import { Link } from "react-scroll";
import './Humburger.css'

const Humburger = (props) => {
  const { toggleLinks, menu } = props;

  return (
    <div 
      id="menu-bar"
      className={`${menu} fixed flex-col top-0 z-50 w-full bg-[#212121] mt-[77px] h-[35vh] py-2 px-1`}
    >
      <div id="menu-card" className="flex h-[25vh] justify-between w-full border-b-2">
        <div>
          <ul className="flex flex-col gap-2">
            <Link onClick={toggleLinks} to="home" smooth={true} duration={500}>
              <li className="flex items-center gap-2 cursor-pointer px-3 mt-2 mb-1">
                <FaHouse size={28} color="gray" />
                Home
              </li>
            </Link>
            <Link
              onClick={toggleLinks}
              to="education"
              smooth={true}
              duration={500}
            >
              <li className="flex items-center gap-2 cursor-pointer px-3 mb-1">
                <FaUserGraduate size={28} color="gray" />
                Education
              </li>
            </Link>
            <Link
              onClick={toggleLinks}
              to="skills"
              smooth={true}
              duration={500}
            >
              <li className="flex items-center gap-2 cursor-pointer px-3 mb-1">
                <FaTools size={28} color="gray" />
                Skills
              </li>
            </Link>

            <Link
              onClick={toggleLinks}
              to="projects"
              smooth={true}
              duration={500}
            >
              <li className="flex items-center gap-2 cursor-pointer px-3 mb-1">
                <FaLaptopCode size={28} color="gray" />
                Projects
              </li>
            </Link>

            <Link
              onClick={toggleLinks}
              to="contact"
              smooth={true}
              duration={500}
            >
              <li className="flex items-center gap-2 cursor-pointer px-3 mb-1">
                <IoMdMailUnread size={28} color="gray" />
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <a
              className="flex items-center gap-2 cursor-pointer px-3 mt-2 mb-1"
              onClick={toggleLinks}
              href="https://www.linkedin.com/in/ravi-kumar-patel-01a9a8247/"
              target="_blank"
            >
              <FaLinkedin
                className="icon cursor-pointer hover:scale-[1.3] transition-all"
                size={28}
                color="#0077B5"
              />
              LinkedIn
            </a>
            <a
              className="flex items-center gap-2 cursor-pointer px-3 mb-1"
              onClick={toggleLinks}
              href="https://github.com/ravikrpatel01"
              target="_blank"
            >
              <FaGithub
                className="icon cursor-pointer hover:scale-[1.3] transition-all"
                size={28}
                color="gray"
              />
              GitHub
            </a>
            <a
              className="flex items-center gap-2 cursor-pointer px-3 mb-1"
              onClick={toggleLinks}
              href="https://leetcode.com/u/ravikrpatel01/"
              target="_blank"
            >
              <SiLeetcode
                className="icon cursor-pointer hover:scale-[1.3] transition-all"
                size={28}
                color="#FFA116"
              />
              LeetCode
            </a>
            <a
              className="flex items-center gap-2 cursor-pointer px-3 mb-1"
              onClick={toggleLinks}
              href="https://www.geeksforgeeks.org/user/ravikrpatel01/"
              target="_blank"
            >
              <SiGeeksforgeeks
                className="icon cursor-pointer hover:scale-[1.3] transition-all"
                size={28}
                color="#00cc66"
              />
              GFG
            </a>
          </ul>
        </div>
      </div>
      <div className="mt-2 w-full px-2 py-1">
        <a
          href="https://drive.google.com/uc?export=download&id=1Wh_TFhM-Kc3WNi6E1E2p1utMhltIOt9t"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            onClick={toggleLinks}
            className=" text-[1.4rem] w-full bg-blue-600 px-5 py-2 gap-3 flex justify-center items-center rounded"
          >
            Download RESUME
            <FaDownload className="icon" size={19} color="white" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Humburger;
