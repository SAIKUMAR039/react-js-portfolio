import React from "react";
import { Hero } from "../assets";
import { AnimatePresence, motion } from "framer-motion";
import HeroTypewriter from "../components/HeroTypeWritter";
import { Socials } from "../utils/helper";
import HomeSocialLinks from "../components/HomeSocialLinks";

const Home = () => {
  return (
    <section
      id="home"
      className="flex  items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-full lg:max-w-[1200px] px-20 lg:px-0">
        {/* content */}
        <div className="w-full h-full flex items-center justify-center flex-col gap-4 lg:items-start ">
          <h2 className="text-2xl lg:text-2xl text-texlight">
            Hello, I'm{" "}
            <span className="block tracking-wider text-3xl lg:text-2xl text-white">
              Sai Kumar
            </span>
          </h2>
          {/* typewriter */}
          <h2 className="text-1xl  text-texlight  ">
            And I'm{" "}
            <HeroTypewriter
              speed={100}
              words={[
                "a Freelancer...",
                "a Full Stack Developer..",
                "a Data Scientist...",
              ]}
            />
          </h2>
          <p className="text-sm lg:text-base text-texlight ">
            I'm a full stack developer, UI/UX designer, and a freelancer. I'm
            also a devops engineer and a data scientist.
          </p>

          {/* social media links */}
          <div className="flex items-center justify-center gap-10 lg:gap-14 mt-16 ">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>

          {/*hire me  */}
          <a
            href="https://www.linkedin.com/in/sai-kumar-101764252/"
            className="mt-12 border border-[rgba(255,255,255,0.3)] px-8  rounded-xl placeholder-zinc-800 py-3 active:95 group hover:border-primary"
          >
            <p className="text-sm lg:text-base text-texlight group-hover:text-primary">
              Hire me
            </p>
          </a>
        </div>

        {/* image */}

        <div className="w-full h-full lg:w-[350px] lg:h-[600px] lg:p-4 flex items-center justify-center lg:items-center ">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            src={Hero}
            alt="hero"
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
