"use client"; // Mark as Client Component

import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

const Home = () => {

  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const techRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  useEffect(() => {
    const currentHost = window.location.hostname;
    console.log("currentHost", currentHost)
    if (currentHost === "sangammundhe5756.onrender.com") {
      window.location.href = "https://sangammundhe.site";
    }
  }, []);


  return (
    <div data-theme="light">
      <div className="overflow-x-hidden  text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0  h-full w-full -z-10">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div data-theme="light" className="mx-auto w-full max-w-4xl px-4 sm:px-6  lg:px-8">

          <div className="mb-16">
            <Header
              scrollToSection={{
                projectsRef,
                experienceRef,
                techRef,
                contactRef,
                homeRef,
                aboutRef
              }}
            />
          </div>
          <div ref={homeRef}>
            <Hero />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={techRef}>

            <Technologies />
          </div>
          <div ref={experienceRef}>
            <Experience />
          </div>

          <div ref={projectsRef}>
            <Project />
          </div>

          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
