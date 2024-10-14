import React from "react";
import { PROJECTS } from "../utils/constant";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        {" "}
        Projects
      </motion.h1>
      <div>
        {" "}
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8  flex flex-wrap lg:justify-center">
            <div className="w-full  lg:w-1/4">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6  rounded"
              />
              <div className="flex  gap-2 lg:gap-4 mb-2">
                <motion.a
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="px-2 text-purple-500 py-1 bg-neutral-900 rounded hover:text-white"
                  href={project.link}
                  target="_blank"
                >
                  live
                </motion.a>
                <motion.a
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="px-2 text-green-500 py-1 bg-neutral-900 rounded hover:text-white"
                  href={project.githubrepo}
                  target="_blank"
                >
                  github
                </motion.a>
              </div>
            </div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold ">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex gap-1 flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mt-1 rounded  bg-neutral-900 px-2 py-1 text-sm text-purple-500 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
