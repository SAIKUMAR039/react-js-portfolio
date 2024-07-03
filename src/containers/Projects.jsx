import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ProjectsData } from "../utils/helper";
import { FaLink } from "react-icons/fa6";
const Projects = () => {
  return (
    <section
      id="projects"
      className="flex  items-center justify-center flex-col gap-12 relative my-12 lg:my-24 w-full h-full px-4 lg:px-0"
    >
      <div className="w-full h-full flex items-center justify-center mt-12 lg:mt-28">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Projects
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-full lg:max-w-[1200px] lg:px-0 px-12">
        <AnimatePresence>
          {ProjectsData &&
            ProjectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
const ProjectCard = ({ project }) => {
  const [first, setfirst] = useState(false);
  // Destructure `project` from props
  return (
    <a href={project?.gitURL}>
      <motion.div
        key={project.id}
        className="overflow-hidden relative rounded-md cursor-pointer"
        onMouseEnter={() => setfirst(true)}
        onMouseLeave={() => setfirst(false)}
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          className="w-full h-full object-contain rounded-lg"
          src={project.imgSrc} // Correctly access `imgSrc` from `project`
          alt={project.name} // It's good practice to include an alt attribute
        />
        {first && (
          <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2">
            <p className="text-xl text-primary">{project?.name}</p>
            <a href={project?.gitURL} className="">
              <FaLink className="text=1xl text-white hover:text-primary" />
            </a>
          </motion.div>
        )}
      </motion.div>
    </a>
  );
};

export default Projects;
