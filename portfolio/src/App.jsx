import { useState, useEffect } from "react";
import "./index.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Card from "./components/articles/test";
import { TEAnimation } from "tw-elements-react";
import GitHubUserInfo from "./components/Github/GetUserGitHub";
import GitHubRepoInfo from "./components/Github/GithubRepoInfo.tsx";

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <div
      id="Root"
      className="mx-auto border-black border-4 max-w-[1200px] h-800 sm:w-600 flex items-center  h-screen"
      >
      <div
        id="main"
        className="relative border-blue-500 border-4 h-[800px] w-[1200px]"
      >
        <div className="TopLeftBorder px-[12px] absolute top-2 left-0">
          <svg
            height="300"
            width="300"
            style={{
              margin: "10px",
              padding: "20px",
              borderStyle: "inset",
              display: "inline-block",
              backgroundColor: "white",
              borderWidth: "20px",
              borderTop: "25px solid",
              borderLeft: "25px solid",
              borderRight: "5px solid rgba(0, 0, 0, 0)",
              borderBottom: "5px solid rgba(0, 0, 0, 0)",
              borderTopLeftRadius: "15px",
              boxSizing: "border-box",
            }}
          ></svg>
        </div>
        <div className=" BottomRightBorder absolute bottom-2 right-2">
          <svg
            height="300"
            width="300"
            style={{
              margin: "10px",
              padding: "20px",
              borderStyle: "inset",
              display: "inline-block",
              backgroundColor: "white",
              borderWidth: "20px",
              borderTop: "5px solid rgba(0, 0, 0, 0)",
              borderLeft: "5px solid rgba(0, 0, 0, 0)",
              borderRight: "25px solid",
              borderBottom: "25px solid",
              borderBottomRightRadius: "15px",
              boxSizing: "border-box",
            }}
          ></svg>
        </div>
        <div className="absolute flex items-center  min-w-[380px]  w-full h-[800px] border-pink-400 border-4">
          <div className="mx-auto s-700:flex border-red-500">
            <div className="Text px-20 s-700:h-13 s-700:w-[600px] py-20 max-w-xl min-w-60  border-lime-500 border-4">
              <h1 className="text-3xl">WELCOME</h1>
              <p className="py-2 px-2">
                Ceci est un texte explicatif racontant ma vie et ce que je
                sais/veux faire dans le monde du travail. Cela correspond à mon
                parcours de vie, mes études, mais également à ce que je souhaite
                devenir par la suite. Mon parcour a été un peu complexe donc ce
                texte peut être amené à être un peu long, c'est chiant à lire
                mais ça me permet de préparer le site.
              </p>
            </div>
            <div className="s-700:px-30 s-700:py-60 px-20 max-w-xl border-yellow-400 border-4">
              <h1 className="text-3xl"> Projects</h1>
              <div className="ProjectList border-l-8 border-secondary-900">
                <a href="#" className="spanim">
                  Minishell
                </a>
                <br></br>
                <a href="#" className="spanim">
                  Cub3d
                </a>
                <br></br>
                <a href="#" className="spanim">
                  Transcendence 
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
