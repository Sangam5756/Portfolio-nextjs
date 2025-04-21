"use client";

import React from "react";
import ProfilePic from "./hero/ProfilePic";
import GithubContributions from "./GithubContributions";
import { SiGoogledocs, SiLeetcode, SiWakatime } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Resume } from "../utils/constant";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-col gap-6 items-center lg:items-center justify-center py-6 w-full">
      {/* Left Side: Profile */}
      <div className="w-full max-w-4xl gap-6 items-center justify-center flex lg:justify-start  ">
        <ProfilePic />

        <div className="hidden lg:flex flex-col gap-4 max-w-md">
          {/* Summary */}
          <p className="text-md text-gray-400">
            I’m  a Full Stack Developer skilled in MERN stack and cloud technologies. I build scalable, high-performance web apps and love solving real-world problems through code.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-4 text-2xl text-white">
            <a
              title="Resume"
              href={Resume}
              target="_blank"
              className="hover:text-purple-300"
            >
              <SiGoogledocs />
            </a>
            <a
              title="LinkedIn"
              href="https://www.linkedin.com/in/sangammundhe"
              target="_blank"
              className="hover:text-purple-300"
            >
              <FaLinkedin />
            </a>
            <a
              title="GitHub"
              href="https://github.com/sangam5756"
              target="_blank"
              className="hover:text-purple-300"
            >
              <FaGithub />
            </a>
            <a
              title="LeetCode"
              href="https://leetcode.com/u/sangammunde3"
              target="_blank"
              className="hover:text-purple-300"
            >
              <SiLeetcode />
            </a>
            <a
              title="Wakatime"
              href="https://wakatime.com/@sangammundhe"
              target="_blank"
              className="hover:text-purple-300"
            >
              <SiWakatime />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: GitHub Contributions */}
      <div className="w-full max-w-4xl ">

        <GithubContributions />
      </div>
    </div>
  );
};

export default Hero;
