import React from "react";
import Header from "./Header";
import Home from "./Home";
import ServiceCount from "./ServiceCount";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

import ParticlesContainer from "./ParticlesContainer";
import { Socials } from "../utils/helper";
import { AnimatePresence } from "framer-motion";
import HomeSocialLinks from "../components/HomeSocialLinks";

const App = () => {
  return (
    <div className="w-full xl:w-[1000px] py-4 xl:py-2 px-4 lg:px-14 pr-4 lg:pr-32 overflow-hidden">
      {/* particles constainer */}
<ParticlesContainer />
      {/* header */}
      <Header />

      {/* home container*/}
      <Home />

      {/* secices count */}
      <ServiceCount />
      {/* about */}
      <About />

      {/* skills */}
      <Skills />

      {/* projects */}
      <Projects />

      {/* contact*/}

      <Contact />
    
      {/* footer*/}
      <div className="w-full flex flex-col items-center justify-start my-20 ">
        <p className="text-3xl tracking-wide text-texlight"> Sai Kumar Thota</p>
        <div className="flex items-center justify-center gap-16 mt-16 ">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index}  />
              ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <p className="text-texlight">saikumarthota2004@gmail.com</p>
        <p className="text-texlight"> 9059081173</p>
        <a
          href="https://www.linkedin.com/in/sai-kumar-101764252/"
          className="mt-12 border border-[rgba(255,255,255,0.3)] px-8  rounded-xl placeholder-zinc-800 py-3 active:95 group hover:border-primary"
        >
          <p className="text-sm lg:text-base text-texlight group-hover:text-primary">
            Hire me
          </p>
        </a>
      </div>
      <div className="w-full  mt-12 items-center">
        <p className="text-texlight text-center">
          &copy; 2024 Sai Kumar Thota. All rights reserved
        </p>
      </div>
      </div>
  );
};

export default App;
