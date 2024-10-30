import React from "react";
import './Projects.css'

const data = [
  {
    id: 1,
    projectTitle: "Employee Management",
    technologyUsed: "React, Tailwind CSS, Context API, Local Storage",
    imgUrl: "/employee-management.jpg",
    githubLink: "https://github.com/ravikrpatel01/employee-management",
    deployedLink: "https://employee-management-three-rho.vercel.app/",
  },
  {
    id: 2,
    projectTitle: "Jayka",
    technologyUsed: "React, Context API, CSS",
    imgUrl: "/jayka.jpg",
    githubLink: "https://github.com/ravikrpatel01/ecom-jayka-web-project/",
    deployedLink: "https://ecom-jayka-web-project.vercel.app/",
  },
  {
    id: 3,
    projectTitle: "Blogify",
    technologyUsed: "Node.js, Express.js, MongoDB, EJS, JWT",
    imgUrl: "/blogify.jpg",
    githubLink: "https://github.com/ravikrpatel01/blogify",
    deployedLink: "https://blogify-iota-ashy.vercel.app/",
  },
  {
    id: 4,
    projectTitle: "To-Do List",
    technologyUsed: "React, Tailwind CSS, Local Storage",
    imgUrl: "/todo.jpg",
    githubLink: "https://github.com/ravikrpatel01/todo-list",
    deployedLink: "https://todo-list-seven-alpha-52.vercel.app/",
  },

  {
    id: 5,
    projectTitle: "BMI Calculator",
    technologyUsed: "HTML, CSS, JavaScript",
    imgUrl: "/bmi-calculator.jpg",
    githubLink: "https://github.com/ravikrpatel01/bmi-calculator-website",
    deployedLink: "https://ravikrpatel01.github.io/bmi-calculator-website/",
  },

  {
    id: 6,
    projectTitle: "Weather App",
    technologyUsed: "HTML, CSS, JavaScript, API, JSON",
    imgUrl: "/weather.jpg",
    githubLink: "https://github.com/ravikrpatel01/weather-app",
    deployedLink: "https://ravikrpatel01.github.io/weather-app/",
  },
];

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="bg-[#212121] w-full h-[135vh] flex flex-col gap-10 p-10"
      >
        <div className="flex flex-col items-center gap-3">
          <div>
            <p className="text-[1.2rem]">My Recent Projects</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">PERSONAL PROJECTS</h2>
          </div>
        </div>

        <div id="projects-cards" className="grid grid-cols-3 grid-rows-2 gap-10">
          {data.map((project) => (
            <div
            id="project-card"
              key={project.id}
              className="bg-[#212121] px-5 py-6 border-[1px] cursor-pointer transition-all relative rounded h-[50vh] hover:bg-[#111] hover:scale-105"
            >
              <div>
                <div className="w-full h-[160px]">
                  <img
                    className="rounded-md h-full w-full"
                    src={project.imgUrl}
                    alt=""
                  />
                </div>
                <div className="mt-3">
                  <h2 className="text-2xl font-bold text-gray-200">
                    {project.projectTitle}
                  </h2>
                  <h3 className="mt-1 text-[1rem]">
                    <b className="text-xl">Technology: </b>
                    {project.technologyUsed}
                  </h3>
                </div>
                <div className="flex justify-between w-full absolute bottom-5 left-0 px-4">
                  <a href={project.githubLink} target="_blank">
                    <button className="bg-emerald-600 px-4 py-2 rounded text-white">
                      Github Link
                    </button>
                  </a>
                  <a href={project.deployedLink} target="_blank">
                    <button className="bg-emerald-600 px-4 py-2 rounded text-white">
                      Project Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
