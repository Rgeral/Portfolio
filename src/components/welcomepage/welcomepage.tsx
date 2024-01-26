// WelcomePage.jsx
import React from "react";
import "../../index.css"; // Assurez-vous d'importer votre fichier de styles
import { MdOutgoingMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const WelcomePage = ({ isVisible }) => {
  return (
    <div
      className={`Text px-20 s-700:h-13 s-700:w-[600px] py-20 max-w-3xl min-w-60 ${
        isVisible ? "fade-in" : "fade-out"
      }`}
    >
      <div className="flex">
        <h1 className="text-3xl">WELCOME</h1>
        <a
          href="mailto:rgeral.pro@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutgoingMail className="ml-5 mt-1" size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/robin-geral-b93b73233/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin className="ml-3 mt-1" size={30} />
        </a>
      </div>
      <p className="py-2 px-2">
        Hello! My name is Robin. I'm a young developer, curious, dynamic, and
        full of energy!<br/> At the age of 27, I made a pivotal decision to pursue a
        career transition into the field of development, enrolling at École 42.
        Having successfully completed my curriculum, I am currently in search of
        opportunities for an internship as a junior developer. <br />
        Within these pages, you'll discover a glimpse of some of the projects
        I've undertaken during my time at school, as well as personal projects
        crafted during my leisure hours. <br />I am driven by curiosity and am
        enthusiastic about exploring diverse opportunities in the realm of
        development. If you're interested in connecting or exploring potential
        collaborations, I'm here and eager to engage. Feel free to reach out—I
        look forward to connecting with you!
      </p>
    </div>
  );
};

export default WelcomePage;
