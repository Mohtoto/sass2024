import React from "react";
import { Box } from "./Box";

const About = () => {
  return (
    <Box className="col-span-12 ">
      <p>
        As a software engineer, <span className="text-zinc-400">I am passionate about building web applications
        with great user experiences. I use React, TypeScript, Node.js,
        Express.js, MongoDB, SQL, and TailwindCSS to create responsive, dynamic,
        and performant web pages and services. I also follow clean coding
        practices, such as ESLint, and use version control, CI/CD, and REST APIs
        to ensure the quality and reliability of my code.</span>
      </p>
    </Box>
  );
};

export default About;
