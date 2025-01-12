import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGoogledocs, SiWakatime } from "react-icons/si";
import { Resume } from "../utils/constant";

const Header = () => {
  return (
    <nav data-theme="light" className="mb-20 flex items-center justify-between  py-2 px-2">
      <div className="flex flex-shrink-0 items-center ">
        <img
          src="/smlogotran2.png"
          alt="logo"
          className="mx-2 w-20"
          width={100}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-2xl">
        <a
          href={Resume}
          title="Resume"
          target="_blank"
          className="hover:text-purple-300"
        >
          <SiGoogledocs />
        </a>
        <a
          href="https://www.linkedin.com/in/sangammundhe"
          title="linkedin"
          target="_blank"
           className="hover:text-purple-300"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/sangam5756" title="github"  className="hover:text-purple-300" target="_blank">
          <FaGithub />
        </a>

        <a
          href="https://leetcode.com/u/sangammunde3"
          title="leetcode"
           className="hover:text-purple-300"
          target="_blank"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://wakatime.com/@sangammundhe"
          title="wakatime"
          target="_blank"
           className="hover:text-purple-300"
        >
          <SiWakatime />
        </a>
      </div>
    </nav>
  );
};

export default Header;
