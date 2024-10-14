import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandRedux, TbSql } from "react-icons/tb";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa";

const technologies = [
  {
    title: "React",
    proficiency: "9 / 10",
    level: "Advanced",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
  },
  {
    title: "Node.js",
    proficiency: "9 / 10",
    level: "Advanced",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    icon: <FaNodeJs className="text-7xl text-green-500" />,
  },
  {
    title: "Next.js",
    proficiency: "8 / 10",
    level: "Intermediate",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    icon: <TbBrandNextjs className="text-7xl" />,
  },
  {
    title: "MongoDB",
    proficiency: "8 / 10",
    level: "Advanced",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/0/00/Mongodb.png",
    icon: <SiMongodb className="text-7xl text-green-500" />,
  },

  {
    title: "Redux",
    proficiency: "8 / 10",
    level: "Advanced",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png",
    icon: <TbBrandRedux className="text-7xl text-purple-500" />,
  },

  {
    title: "Express",
    proficiency: "8 / 10",
    level: "Advanced",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    icon: <SiExpress className="text-7xl text-neutral-500" />,
  },
  {
    title: "Java",
    proficiency: "7 / 10",
    level: "Intermediate",
    imgSrc: <FaJava className="text-7xl text-red-800" />,
    icon: <FaJava className="text-7xl text-red-800" />,
  },
  {
    title: "SQL",
    proficiency: "7/ 10",
    level: "Advanced",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/0/00/SQL_Logo.svg",
    icon: <TbSql className="text-7xl text-blue-500" />,
  },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map((tech, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front rounded-2xl border-4 border-neutral-400 p-4 flex items-center justify-center">
                {tech.icon}
              </div>
              <div className="flip-card-back rounded-2xl border-4 border-neutral-400 p-4 flex flex-col items-center justify-center text-center">
                {tech.icon}
                <h4 className="text-xl">{tech.title}</h4>
                <p className="plain-text">{tech.proficiency}</p>
                <p className="plain-text">{tech.level}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
