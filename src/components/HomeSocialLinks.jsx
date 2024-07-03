import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
const HomeSocialLinks = ({ data, index }) => {
  const [isHover, setisHover] = useState(false);

  return (
    <motion.a
      href={data.uri}
      key={index}
      target="_blank"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ delay: index * 0.1 }}
      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary relative p-[2px] cursor-pointer"
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <AnimatePresence>
        {isHover && (
          <motion.div
            className={`absolute inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10`}
          ></motion.div>
        )}

        <div className="w-full h-full gap-4 lg:gap-16 rounded-full bg-bgPrimary flex items-center justify-center">
          <data.Icon className={`text-texlight`} />
        </div>
      </AnimatePresence>
    </motion.a>
  );
};

export default HomeSocialLinks;
