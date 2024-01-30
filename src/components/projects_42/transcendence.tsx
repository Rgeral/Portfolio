// TranscendencePage.jsx
import React from "react";
import "../../index.css"; // Assurez-vous d'importer votre fichier de styles
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";


export const TranscendencePage = ({ isVisible }) => {
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
        <h1 className="text-3xl mb-5">Transcendence</h1>
        <a
          href="https://github.com/Rgeral/ft_transcendence"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="ml-10" size={40} />
        </a>{" "}
      </div>
      <p>
        Transcendence stands as the culminating project of my studies in the
        common core curriculum at École 42. This collaborative endeavor,
        involving a team of five, centers around the development of a website
        enabling users to engage in a game of Pong.
        <br /> Yet, the true complexity of the project lies in the
        implementation of a robust database, an efficient leaderboard system, a
        secure backend infrastructure, and the enforcement of stringent
        authentication protocols. <br /> This undertaking not only showcases my
        technical prowess but also underscores my ability to navigate intricate
        challenges within a team-oriented development environment.
      </p>
    </div>
  );
};

export default TranscendencePage;
