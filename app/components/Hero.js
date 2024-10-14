import React from "react";
import { HERO_CONTENT } from "../utils/constant.js";
import { motion } from "framer-motion";

export const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* left section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              {/* <span className="text-2xl">Hiii I am</span><br/> */}
              Sangam Mundhe
            </motion.h1>

            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-300 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-2   tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* profile pic */}
        <div className="w-full  lg:w-1/2 lg:p-8 ">
          <div className="flex  justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src="./photo2.jpg"
              width={300}
              className="rounded-xl "
              alt="profile_pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
