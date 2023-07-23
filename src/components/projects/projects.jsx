import React from "react";
import ProjectCard from './projectCard'
const Projects = () => {
  return (
    <div className=" mt-[5%] overflow-x-hidden" data-aos="fade-left">
      <div className="absolute z-[3] left-[-20%] top-[30vh] w-[20%] h-[20%] rounded-full blue-gradient" />
      <div className="flex flex-col p-5 ">
        <h2 className="uppercase text-gray-300 text-[105px] font-extrabold font-text text-end">
          Proyectos
        </h2>
        <div>
          <ProjectCard/>
        </div>
      </div>
      <div className="absolute z-[3] right-[0%] bottom-[20vh] w-[10%] h-[10%] rounded-full blue-gradient" />
    </div>
  );
};

export default Projects;
