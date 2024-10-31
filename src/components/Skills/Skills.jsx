import React from "react";
import "./Skills.css";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";

const Skills = () => {
  return (
    <>
      <div id="skills" className="bg-[#111] w-full h-[85vh] px-10 py-[3rem]">
        <div className="flex flex-col gap-2 items-center">
          <div>
            <p className="text-[1.2rem]">My Expertise</p>
          </div>
          <div className="text-center">
            <h2 id="heading" className="text-3xl font-semibold">TECHNICAL PROFICIENCY</h2>
          </div>
          <div
            id="expertise"
            className="text-center text-[1.3rem] text-gray-400"
          >
            <p>
              <strong>What I'm Expert In:</strong> Frontend Development{" "}
              <span id="hide">|</span> <strong>What I Can Deliver:</strong>{" "}
              Clean and Efficient Code
            </p>
          </div>
        </div>

        <div id="skills-card" className="flex gap-10 justify-around px-5 py-20">
          <div>
            <div className="text-center">
              <h3 className="text-4xl font-semibold">PROGRAMING</h3>
            </div>
            <div className="flex mt-10 gap-10 w-full justify-between items-center">
              <div className="flex gap-0 w-full justify-evenly items-center">
                <div className="flex flex-col items-center">
                  <FaJava
                    className="icon cursor-pointer"
                    size={80}
                    color="gray"
                  />
                  <h3>Core JAVA</h3>
                </div>
                <div className="flex flex-col items-center">
                  <FaPython
                    className="icon cursor-pointer"
                    size={80}
                    color="gray"
                  />
                  <h3>Python</h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center">
              <h3 className="text-4xl font-semibold">FRONTEND</h3>
            </div>
            <div className="flex mt-10 w-full gap-10 flex-col justify-between items-center">
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <FaHtml5
                    className="icon cursor-pointer"
                    size={80}
                    color="gray"
                  />
                  <h3>HTML5</h3>
                </div>

                <div className="flex flex-col items-center">
                  <FaCss3Alt
                    className="icon cursor-pointer"
                    size={80}
                    color="gray"
                  />
                  <h3>CSS3</h3>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <IoLogoJavascript
                    className="icon cursor-pointer"
                    size={85}
                    color="gray"
                  />
                  <h3>JS</h3>
                </div>
                <div className="flex flex-col items-center">
                  <FaReact
                    className="icon cursor-pointer"
                    size={85}
                    color="gray"
                  />
                  <h3>React JS</h3>
                </div>
                <div className="flex flex-col items-center">
                  <RiTailwindCssFill
                    className="icon cursor-pointer"
                    size={85}
                    color="gray"
                  />
                  <h3>Tailwind CSS</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center">
              <h3 className="text-4xl font-semibold">BACKEND</h3>
            </div>
            <div className="flex mt-10 w-full flex-col justify-between items-center">
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <FaNodeJs
                    className="icon cursor-pointer"
                    size={80}
                    color="gray"
                  />

                  <h3>Node JS</h3>
                </div>
                <div className="flex flex-col items-center">
                  <DiMongodb
                    className="icon cursor-pointer"
                    size={90}
                    color="gray"
                  />
                  <h3>MongoDB</h3>
                </div>
                <div className="flex flex-col items-center">
                  <SiMysql
                    className="icon cursor-pointer"
                    size={80}
                    color="gray"
                  />
                  <h3>MySQL</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center">
              <h3 className="text-4xl font-semibold">TOOLS/IDES</h3>
            </div>
            <div className="flex mt-10 w-full gap-10 flex-col justify-between items-center">
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-center">
                  <FaGitAlt
                    className="icon cursor-pointer"
                    size={80}
                    color="gray"
                  />
                  <h3>Git</h3>
                </div>
                <div className="flex flex-col items-center">
                  <FaGithub
                    className="icon cursor-pointer"
                    size={70}
                    color="gray"
                  />
                  <h3>GitHub</h3>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center">
                  <VscVscode
                    className="icon cursor-pointer"
                    size={80}
                    color="gray"
                  />
                  <h3>VS Code</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
