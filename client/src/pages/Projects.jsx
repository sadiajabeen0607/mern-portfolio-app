// import React from "react";

import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/images/project-1.jpeg";
import project2 from "../assets/images/project-2.jpeg";
import project3 from "../assets/images/project-3.jpeg";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";

const Projects = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <>
      <div className="mt-5 mx-4" id="projects">
        <Fade top>
          <h1 className="font-bold text-emerald-500 text-center text-2xl my-1">
            Top Recent Projects
          </h1>
          <hr className="text-blue-300 w-[400px] my-2 mx-auto" />
          <p
            className={`pb-3 text-center text-md  mx-10 ${
              mode ? "text-gray-700" : "text-gray-200"
            }`}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, neque eaque nesciunt recusandae aliquam enim doloribus
            placeat vero consequuntur labore dicta. Temporibus amet ducimus quo
            ea laborum. Eius laborum aliquid quas ullam tenetur vitae. At odit
            voluptates asperiores. Impedit aspernatur soluta quos. Voluptatum
            libero laudantium enim nisi aliquam blanditiis facilis!
          </p>
        </Fade>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-5">
          <ProjectCard
            image={project1}
            name={"Techinfoyt Shopping Website"}
            badge={"Full Stack"}
          />
          <ProjectCard
            image={project2}
            name={"Techinfoyt Coding App"}
            badge={"Full Stack"}
          />
          <ProjectCard
            image={project3}
            name={"Techinfoyt Job Portal"}
            badge={"Full Stack"}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
