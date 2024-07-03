import React from "react";
import { about, cv } from "../assets";
import "./cv.css";

const About = () => {
  return (
    <section
      id="about"
      className="flex  items-center justify-center flex-col gap-12 relative"
    >
      <div className="w-full h-full flex items-center justify-center mt-12 lg:mt-0">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            About Me
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-full lg:max-w-[1200px] ">
        <div className="w-full h-full flex items-center justify-center px-8 pl-16 pr-16 lg:pl-0">
          <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img
              src={about}
              alt="about"
              className="w-full h-auto object-constai rounded-md"
            />
            <div className="absolute w-full h-full -top-3 -left-2 -inset-1 bg-gradient-to-br from-primary to-secondary rounded-md blur-[5px] -z-10"></div>
          </div>
        </div>
        <div className="w-full h-full flex items-start justify-start px-8 py-6">
          <div className="max-w-2xl pl-5">
            <p className="text-base lg:text-lg text-texlight leading-relaxed mb-6">
              Hello, I'm a full stack developer with a passion for creating
              user-friendly and efficient web applications.
            </p>
            <div className="bg-texlight rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Education
              </h3>
              <p className="text-base text-gray-700">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-base text-gray-600 italic">
                SR University, Warangal
              </p>
            </div>
          </div>
        </div>
        <div className="cv-button-container">
          <a href={cv} className="cv-button">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
