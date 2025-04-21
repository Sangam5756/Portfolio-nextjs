"use client";

import React from "react";
import ProfilePic from "./hero/ProfilePic";
import GithubContributions from "./GithubContributions";
import { SiGoogledocs, SiLeetcode, SiWakatime } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { hero_Text, Resume } from "../utils/constant";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-col gap-6 items-center lg:items-center justify-center py-6 w-full">
      {/* Left Side: Profile */}
      <div className="w-full max-w-4xl gap-6 items-center justify-center flex lg:justify-start  ">
        <ProfilePic />

        <div className="hidden lg:flex flex-col gap-4 max-w-md">
          {/* Summary */}
          <p className="text-md text-gray-400">
            {hero_Text}
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
          <img
            className="w-max mt-2"
            src="https://camo.githubusercontent.com/9edc149bc956ab273897e7dafbe44c1231f013a0c21f9e4ec71f8a71e4159b3b/68747470733a2f2f76697369746f722d62616467652e6c616f62692e6963752f62616467653f706167655f69643d53616e67616d353735362e73616e67616d6d756e646865" alt="visitors badge" />
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
