import React from "react";

import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex  items-center justify-center flex-col gap-12 relative"
    >
      <div className="w-full h-full flex items-center justify-center mt-12 lg:mt-24 ">
        <div className="w-full h-full flex items-center justify-center ">
          <h1 className="text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">
            Skills
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-full lg:max-w-[1200px] ">
        <div className="w-full h-full flex  justify-start px-8 gap-2 items-center pl-16 pr-16 lg:pl-8">
          <p className="text-base lg:text-md text-texlight text-justify">
            I bring the web to life with a powerful skillset. I'm fluent in
            HTML5, CSS, and JavaScript, allowing me to build strong foundations
            and interactive elements. React lets me create dynamic user
            interfaces, while Supabase and Firebase provide the muscle for data
            storage and backend functionality.
            <br />
            <br />
            This isn't just about code, though. I'm passionate about user
            experience. I've tackled numerous projects, always prioritizing
            clear navigation and intuitive design. My goal? To make every user
            feel comfortable and in control when they interact with my
            creations.
            <br />
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8 ml-3">
          <SkillCard
            skill={"Python"}
            percentage={"95%"}
            color={"green"}
            move={false}
          />
          <SkillCard
            skill={"HTML 5"}
            percentage={"95%"}
            color={"#FF3F3F"}
            move={true}
          />
          <SkillCard skill={"CSS 3"} percentage={"80%"} color={"#3F3FFF"} />
          <SkillCard
            skill={"JavaScript"}
            percentage={"80%"}
            color={"yellow"}
            move={true}
          />
          <SkillCard
            skill={"React & Next.js"}
            percentage={"80%"}
            color={"blue"}
          />

          <SkillCard
            skill={"Supabase & FireBase"}
            percentage={"90%"}
            color={"purple"}
            move={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
