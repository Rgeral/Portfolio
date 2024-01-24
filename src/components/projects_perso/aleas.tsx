// PortefolioPage.jsx
import React from "react";
import "../../index.css"; // Assurez-vous d'importer votre fichier de styles
import { FaGithub } from "react-icons/fa";

export const AleasPage = ({ isVisible }) => {
  return (
    <div
      className={`Text px-20 s-700:h-13 s-700:w-[600px] py-20 max-w-3xl min-w-60 ${
        isVisible ? "fade-in" : "fade-out"
      }`}
    >
      <div className="flex">
        <h1 className="text-3xl mb-5">Aléas</h1>
        <a
          href="https://github.com/PierreLemmel/plml-shows-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="ml-5" size={40} />
        </a>
      </div>
      <p>
        Aléas is a project initiated by Pierre Lemmel, an actor in the "Les
        Écorcés" troupe. I recently joined the project voluntarily to assist and
        learn new things under the guidance of Pierre, a former experienced
        developer. <br />
        The project aims to integrate technology into improvisational theater
        through randomly generated music or lights controlled by the program.
        The actors must adapt to the program and perform accordingly! This
        project provides me with the opportunity to learn how to use new
        technologies and a more professional methodology.
      </p>
    </div>
  );
};

export default AleasPage;
