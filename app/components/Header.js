import React from "react";


const Header = ({ scrollToSection }) => {
  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50   ">
      <div className="max-w-4xl mx-auto px-5 flex items-center  backdrop-blur-md shadow-md   justify-between">


        <div className="flex flex-shrink-0 items-center">
          <img src="/smlogotran2.png" alt="logo" className="w-10 lg:w-20" />
        </div>
        <div className="flex items-center justify-center gap-2 text-2xl">

          {/* Custom navigation */}
          <button onClick={() => scrollTo(scrollToSection.homeRef)} className="hover:text-purple-300 text-xs lg:text-sm ">
            Home
          </button>

          <button onClick={() => scrollTo(scrollToSection.aboutRef)} className="hover:text-purple-300  text-xs lg:text-sm">
            About
          </button>
          <button onClick={() => scrollTo(scrollToSection.techRef)} className="hover:text-purple-300 text-xs lg:text-sm ">
            Technologies
          </button>
          <button onClick={() => scrollTo(scrollToSection.experienceRef)} className="hover:text-purple-300  text-xs lg:text-sm">
            Experience
          </button>
          <button onClick={() => scrollTo(scrollToSection.projectsRef)} className="hover:text-purple-300  text-xs lg:text-sm">
            Projects
          </button>
          <button onClick={() => scrollTo(scrollToSection.contactRef)} className="hover:text-purple-300  text-xs lg:text-sm">
            Contact
          </button>
        </div>
      </div>
    </nav >
  );
};

export default Header;
