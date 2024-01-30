// PortefolioPage.jsx
import React from "react";
import "../../index.css"; // Assurez-vous d'importer votre fichier de styles
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";



export const PortefolioPage = ({ isVisible }) => {
  return (
    <div
      className={`Text px-20 s-700:h-13 s-700:w-[600px] py-20 max-w-3xl min-w-60 ${
        isVisible ? "fade-in" : "fade-out"
      }`}
    >
      <div className="flex">
      <a href="">
        <MdOutlineArrowBackIos className="mr-5" size={40}/>
        </a>
        <h1 className="text-3xl mb-5">Portefolio</h1>
        <a
          href="https://github.com/Rgeral/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="ml-10" size={40} />
        </a>
      </div>
      <p>
        This marks the debut of my inaugural personal frontend project. Here,
        I'm solidifying my grasp on React concepts acquired during my academic
        journey while delving into the realm of Tailwind CSS to elevate the
        visual appeal of my portfolio. Although it's currently a work in
        progress, your visit here indicates that it's now live and accessible!
        Stay tuned for further enhancements!
      </p>
    </div>
  );
};

export default PortefolioPage;
