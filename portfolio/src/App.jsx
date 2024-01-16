import { useState, useEffect } from "react";
import "./index.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TEAnimation } from "tw-elements-react";

import WelcomePage from "./components/welcomepage/welcomepage";
import MinishellPage from "./components/projects_42/minishell.tsx";
import TranscendencePage from "./components/projects_42/transcendence.tsx";
import Cub3dPage from "./components/projects_42/cub3d.tsx";
import TopBorderBox from "./components/styles/topborder.tsx";
import BotBorderBox from "./components/styles/botborder.tsx";
import PortefolioPage from "./components/projects_perso/potfolio.tsx";

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState("welcome");
  const [isPageVisible, setIsPageVisible] = useState(true); // Nouvel état pour gérer la visibilité de la page

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  const handleLinkClick = (page) => {
    if (page != currentPage) {
      setIsPageVisible(false); // Commencer la transition de sortie
      setCurrentPage(page);
      setTimeout(() => {
        setIsPageVisible(true); // Commencer la transition d'entrée
      }, 200); // Ajustez la durée de la transition en fonction de la valeur dans votre CSS
    } else {
      setIsPageVisible(false); // Commencer la transition de sortie
      setCurrentPage("welcome");
      setTimeout(() => {
        setIsPageVisible(true); // Commencer la transition d'entrée
      }, 200);
    }
  };
  const renderContent = () => {
    switch (currentPage) {
      case "welcome":
        return <WelcomePage isVisible={isPageVisible} />;
      case "minishell":
        return <MinishellPage isVisible={isPageVisible} />;
      case "cub3d":
        return <Cub3dPage isVisible={isPageVisible} />;
      case "transcendence":
        return <TranscendencePage isVisible={isPageVisible} />;
      case "portfolio":
        return <PortefolioPage isVisible={isPageVisible} />;
      // ... autres cas
      default:
        return null;
    }
  };

  return (
    <div
      id="Root"
      className="mx-auto border-black  max-w-[1200px] h-800 sm:w-600 flex items-center  h-screen"
    >
      <div id="main" className="relative  h-[800px] w-[1200px]">
        <TopBorderBox />
        <BotBorderBox />

        <div className="absolute flex items-center  min-w-[380px]  w-full h-[800px] ">
          <div className="mx-auto s-700:flex ">
            {renderContent()}
            <div className="s-700:px-30 s-700:py-60 px-20 mt-0 max-w-xl">
              <h1 className="text-3xl"> Projects</h1>
              <div className="ProjectList border-l-8 border-secondary-900">
                <a
                  href="#"
                  className="spanim"
                  onClick={() => handleLinkClick("minishell")}
                >
                  Minishell
                </a>
                <br></br>
                <a
                  href="#"
                  className="spanim"
                  onClick={() => handleLinkClick("cub3d")}
                >
                  Cub3d
                </a>
                <br></br>
                <a
                  href="#"
                  className="spanim"
                  onClick={() => handleLinkClick("transcendence")}
                >
                  Transcendence
                </a>
                <br></br>
                <a
                  href="#"
                  className="spanim"
                  onClick={() => handleLinkClick("portfolio")}
                >
                  Portfolio
                </a>
                <br></br>
                <a href="#" className="spanim">
                  Aléa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
