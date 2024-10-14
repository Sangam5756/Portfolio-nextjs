import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Header = () => {
  return (
    <nav className="mb-20 flex items-center justify-between  py-2 px-2">
      <div className="flex flex-shrink-0 items-center ">
        <img
          src="/smlogotran2.png"
          alt="logo"
          className="mx-2 w-20"
          width={100}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <SiLeetcode />
      </div>
    </nav>
  );
};

export default Header;
