import React from "react";

const data = [
  {
    id: 1,
    projectTitle: "To-Do List",
    technologyUsed: "React, Redux, CSS, Firebase",
    imgUrl: "/project1.jpg",
    githubLink: "https://github.com/username/ecommerce-platform",
    deployedLink: "https://ecommerce-platform.example.com",
  },
  {
    id: 2,
    projectTitle: "Blogify",
    technologyUsed: "Node.js, Express, MongoDB, EJS, JWT",
    imgUrl: "/blogify.jpg",
    githubLink: "https://github.com/username/blogify",
    deployedLink: "https://blogify.example.com",
  },
  {
    id: 3,
    projectTitle: "Employee Management",
    technologyUsed: "React, Context API, LocalStorage",
    imgUrl: "/employee-management.jpg",
    githubLink: "https://github.com/username/employee-management",
    deployedLink: "https://employee-management.example.com",
  },
  {
    id: 4,
    projectTitle: "Hospital Management",
    technologyUsed: "Java, Spring Boot, MySQL, Thymeleaf",
    imgUrl: "/hospital-management.jpg",
    githubLink: "https://github.com/username/hospital-management",
    deployedLink: "https://hospital-management.example.com",
  },
  {
    id: 5,
    projectTitle: "Jayka",
    technologyUsed: "React, CSS, API Integration",
    imgUrl: "/food-delivery.jpg",
    githubLink: "https://github.com/username/food-delivery-app",
    deployedLink: "https://food-delivery.example.com",
  },
];

const Projects = () => {
  return (
    <>
      <div id="projects" className="bg-[#212121] w-full h-[130vh] flex flex-col gap-10 p-10">
        <div className="flex flex-col items-center gap-3">
          <div>
            <p className="text-[1.2rem]">My Recent Projects</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">PERSONAL PROJECTS</h2>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-10">
          {data.map((project) => (
            <div
              key={project.id}
              className="bg-[#212121] px-5 py-6 border-[1px] relative rounded h-[48vh]"
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
                  <button className="bg-emerald-600 px-4 py-2 rounded text-white">
                    Github Link
                  </button>
                  <button className="bg-emerald-600 px-4 py-2 rounded text-white">
                    Project Demo
                  </button>
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
