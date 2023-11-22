import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  const typewriterOptions = {
    strings: [
      "Java Wizard in the Making",
      "Crafting Code with Passion",
      "Lost in the Cosmos with NASA",
      "Mastering the Art of Java",
    ],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
  };

  return <Typewriter options={typewriterOptions} />;
};

export default Type;

