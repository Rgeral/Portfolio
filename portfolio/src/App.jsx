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
      className="flex justify-center items-center h-screen border-black"
    >
      <div
        id="main"
        className=" flex justify-center relative max-w-7xl border-blue-500 border-4 h-[800px] min-w-[600px] w-[1080px]"
      >
        <div className="TopLeftBorder s-0:invisible s-760:visible px-[12px] absolute top-2 left-0">
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
        <div className="flex s-0:invisible s-760:visible BottomRightBorder absolute bottom-2 right-0 mr mb-10">
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
        <div className="absolute top-20 left-20 min-w-[600px] w-full flex max-w-[850px] h-[600px] border-pink-500 border-4">
          <div className="s-700:flex border-red-500">
            <div className="Text px-20 s-700:h-13 s-700:w-[500px] py-20 max-w-xl min-w-60  border-lime-500 border-4">
              <h1 className="text-3xl">WELCOME</h1>
              <p className="py-2">
                Ceci est un texte explicatif racontant ma vie et ce que je
                sais/veux faire dans le monde du travail. Cela correspond à mon
                parcours de vie, mes études, mais également à ce que je souhaite
                devenir par la suite. Mon parcour a été un peu complexe donc ce
                texte peut être amené à être un peu long, c'est chiant à lire
                mais ça me permet de préparer le site.
              </p>
            </div>
            <div className="s-700:px-20 s-700:py-60 px-20 border-yellow-400 border-4">
              <h1 className="text-3xl"> Projects</h1>
              <div className="ProjectList border-l-8 border-secondary-900">
                <a href="#" className="">
                  Minishell
                </a>
                <br></br>
                <a href="#" className="">
                  Cub3d
                </a>
                <br></br>
                <a href="#" className="">
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
