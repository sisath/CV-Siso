import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Java Wizard in the Making",
          "Crafting Code with Passion",
          "Lost in the Cosmos with NASA",
          "Mastering the Art of Java",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
