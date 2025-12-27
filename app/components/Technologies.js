import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandRedux,TbBrandPrisma, TbSql } from "react-icons/tb";
import { SiMongodb,SiSpringboot, SiExpress,SiRecoil } from "react-icons/si";
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
  title: "SPRING-BOOT",
  proficiency: "8/10",
  level: "Intermediate",
  imgSrc: "data:image/png;base64,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",
  icon: <SiSpringboot  className="text-7xl text-indigo-500" />,
}
  ,
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
    title: "SQL",
    proficiency: "8/ 10",
    level: "Intermediate",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/0/00/SQL_Logo.svg",
    icon: <TbSql className="text-7xl text-blue-500" />,
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
    proficiency: "7/ 10",
    level: "Intermediate",
    imgSrc: <FaJava className="text-7xl text-red-800" />,
    icon: <FaJava className="text-7xl text-red-800" />,
  },

  {
  title: "Prisma",
  proficiency: "8/10",
  level: "Intermediate",
  imgSrc: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
  icon: <TbBrandPrisma className="text-7xl text-indigo-500" />,
},
  {
  title: "Recoil",
  proficiency: "8/10",
  level: "Intermediate",
  imgSrc: "data:image/png;base64,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",
  icon: <SiRecoil className="text-7xl text-indigo-500" />,
}


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
                {/* <p className="plain-text">{tech.proficiency}</p> */}
                {/* <p className="plain-text">{tech.level}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
