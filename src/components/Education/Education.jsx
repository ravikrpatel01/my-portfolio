import React from "react";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  return (
    <div id="education" className="bg-[#212121] flex flex-col gap-10 w-full h-[120vh] p-10">
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-3xl font-semibold">EDUCATIONAL BACKGROUND</h2>
        </div>
      </div>
      <div className="w-full h-[95vh] grid grid-cols-2 grid-rows-2 gap-8 p-1">
        <div className="w-full flex justify-center p-5 border-[1px] border-gray-400 rounded items-center flex-col h-full hover:bg-[#111] hover:scale-y-105 cursor-pointer transition-all">
          <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
            <div className="flex text-center">
              <FaUserGraduate
                className="border-[1px] rounded-full p-4 bg-[#111]"
                size={100}
                color="gray"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold">
                Vellore Institute of Technology, Vellore
              </h2>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-gray-400">
                Master of Computer Applications
              </h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold">CGPA: 8.30</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Session: 2022-24</h4>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center p-5 border-[1px] border-gray-400 rounded items-center flex-col h-full hover:bg-[#111] hover:scale-y-105 cursor-pointer transition-all">
          <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
            <div className="flex text-center">
              <FaUserGraduate
                className="border-[1px] rounded-full p-4 bg-[#111]"
                size={100}
                color="gray"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-semibold">
                Dr. Shyama Prasad Mukherjee University, Ranchi
              </h2>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-gray-400">
                B.Sc in Computer Application
              </h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold">CGPA: 8.36</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Session: 2018-21</h4>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center p-5 border-[1px] border-gray-400 rounded items-center flex-col h-full hover:bg-[#111] hover:scale-y-105 cursor-pointer transition-all">
          <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
            <div className="flex text-center">
              <FaUserGraduate
                className="border-[1px] rounded-full p-4 bg-[#111]" transition-all
                size={100}
                color="gray"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold">
                St. Xavier's College, Ranchi
              </h2>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-gray-400">
                Intermediate of Science
              </h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Percentage: 80.2</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Session: 2016-18</h4>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center p-5 border-[1px] border-gray-400 rounded items-center flex-col h-full hover:bg-[#111] hover:scale-y-105 cursor-pointer transition-all">
          <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
            <div className="flex text-center">
              <FaUserGraduate
                className="border-[1px] rounded-full p-4 bg-[#111]"
                size={100}
                color="gray"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold">
                Upgraded High School, Kulhi
              </h2>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-gray-400">
                Matriculation
              </h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Percentage: 86.2</h3>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Passed Year: 2016</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
