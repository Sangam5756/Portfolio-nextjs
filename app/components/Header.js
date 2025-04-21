"use client";

import React, { useState, useEffect } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import Image from "next/image";

const navItems = [
  { name: "Home", icon: AiOutlineHome, refKey: "homeRef" },
  { name: "Building", icon: AiOutlineMail, refKey: "recentActivityRef" },
  { name: "About", icon: AiOutlineUser, refKey: "aboutRef" },
  { name: "Tech", icon: FaTools, refKey: "techRef" },
  { name: "Experience", icon: MdWorkOutline, refKey: "experienceRef" },
  { name: "Projects", icon: AiOutlineFundProjectionScreen, refKey: "projectsRef" },
  { name: "Contact", icon: AiOutlineMail, refKey: "contactRef" },
];

const Header = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close on mobile
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-3"
        }`}
    >
      <nav className="max-w-5xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="flex items-center  h-16  justify-between lg:justify-center  bg-opacity-80 backdrop-blur-md px-4  rounded-xl shadow-md">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/smlogotran2.png"
              width={40}
              height={40}
              alt="logo" className="w-10 lg:w-16" />
          </div>


          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4 text-white text-sm lg:pl-64">
            {navItems.map(({ name, icon: Icon, refKey }) => (
              <button
                key={name}
                onClick={() => scrollTo(scrollToSection[refKey])}
                className="group flex items-center gap-1 hover:text-purple-300 transition"
              >
                <Icon className="text-base" />
                <span className="relative">
                  {name}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-300 transition-all group-hover:w-full" />
                </span>
              </button>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden flex gap-8">


            <button onClick={() => scrollTo(scrollToSection["contactRef"])} className="bg-blue-600 px-2 py-1 text-white rounded-md hover:bg-blue-700">
              Hire Me
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-300"
            >
              {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-neutral-900 rounded-lg shadow-lg px-4 py-3 space-y-2">
            {navItems.map(({ name, icon: Icon, refKey }) => (
              <button
                key={name}
                onClick={() => scrollTo(scrollToSection[refKey])}
                className="flex items-center w-full gap-3 text-left text-white hover:text-purple-300 transition"
              >
                <Icon className="text-lg" />
                {name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
