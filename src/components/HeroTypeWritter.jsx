import React, { useEffect } from "react";

import { useState } from "react";

const HeroTypeWritter = ({ words, speed }) => {
  const [currentWordIndex, setcurrentWordIndex] = useState(0);
  const [currenttext, setcurrenttext] = useState("");
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setcurrenttext(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setcurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [currentWord, speed, words]);

  return (
    <span className="tracking-wider  text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
      {currenttext}
    </span>
  );
};
export default HeroTypeWritter;
