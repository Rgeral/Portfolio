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
    <div id="Root" className="flex justify-center items-center h-screen">
      <div id="main" className=" flex justify-center relative max-w-7xl border-lime-500 border-4 min-h-[800px] w-[1080px]">
        <div className="TopRightBorder px-[12px] absolute top-2 left-0">
          <svg
            height="400"
            width="450"
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
        <div className="BottomRightBorder absolute bottom-2 right-0 mr-10 mb-10">
          <svg
            height="450"
            width="400"
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
        <div className="absolute top-20 left-20 min-w-56 w-full flex flex-1 max-w-[1100px] h-[600px] border-lime-500 border-4">
          <div className="Text px-10 py-20 max-w-xl min-w-80  border-lime-500 border-4">
            <h1 className="text-3xl">Robin Geral</h1>
            <p className="">
              Ceci est un texte explicatif racontant ma vie et ce que je
              sais/veux faire dans le monde du travail. Cela correspond à mon
              parcours de vie, mes études, mais également à ce que je souhaite
              devenir par la suite. Mon parcour a été un peu complexe donc ce
              texte peut être amené à être un peu long, c'est chiant à lire mais
              ça me permet de préparer le site.
            </p>
          </div>
          <div className="px-40 py-60  border-lime-500 border-4">
            <h1 className="text-3xl"> Projects</h1>
            <div className="ProjectList border-l-8 border-secondary-900">
              <h2 className="px-3 py-3 underline underline-offset-2 hover:underline-offset-4">
                Minishell
              </h2>
              <h2 className="px-3 py">Transcendence</h2>
              <h2 className="px-3 py-3">Cub3d</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
