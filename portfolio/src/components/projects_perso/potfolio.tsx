// PortefolioPage.jsx
import React from "react";
import "../../index.css"; // Assurez-vous d'importer votre fichier de styles


export const PortefolioPage = ({ isVisible }) => {
  return (
    <div
      className={`Text px-20 s-700:h-13 s-700:w-[600px] py-20 max-w-xl min-w-60 ${
        isVisible ? "fade-in" : "fade-out"
      }`}
    >
      <h1 className="text-3xl">Portefolio</h1>
      <p>
        Ceci est un texte explicatif racontant ma vie et ce que je sais/veux
        faire dans le monde du travail. Cela correspond à mon parcours de vie,
        mes études, mais également à ce que je souhaite devenir par la suite.
        Mon parcour a été un peu complexe donc ce texte peut être amené à être
        un peu long, c'est chiant à lire mais ça me permet de préparer le site.
      </p>
    </div>
  );
};

export default PortefolioPage;
