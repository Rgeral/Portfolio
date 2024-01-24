import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import pp from "../images/profilePicture-removebg-preview.png";
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
    <div className="">
      <main className="bg-white bg-auto border-8">
        <section className="bg-gradient-to-r">
          <nav className="py-10 mb-12 flex justify-between  bg-black">
            <h1 className="uppercase text-3xl font-Genos ml-10 mt-10 text-yellow-300">
              Welcome in the BIG BEAVER World
            </h1>
            <div className="flex justify-center">
              <TEAnimation
                animation="[fade-in_1s_ease-in-out]"
                start="onHover"
                reset
                className="[&>svg]:w-20"
              >
                <p>test</p>
              </TEAnimation>
            </div>

            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer bg-white mt-10" />
              </li>
              <li className="mt-10">
                <a
                  className="mr-10 mt-10 bg-gradient-to-r from-orange-500 to-yellow-300 text-white px-4 py-1 ml-4 rounded-xl"
                  href="#"
                >
                  resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" flex  justify-between">
            {/* ici div1 */}
            <TEAnimation
              animation="[fade-in-left_1s_ease-in-out]"
              start="onLoad"
              reset
              className="[&>svg]:w-1/2 ml-10"
            ></TEAnimation>
            <div className=" w-1/3 mr-60 bg-gray-500 rounded-xl min-w-96 max-h-72">

              <TEAnimation
                animation="[fade-in-left_1s_ease-in-out]"
                start="onLoad"
                reset
                className="[&>svg]:w-1/2 ml-10"
              >
                <div className="flex items-center justify-between space-x-10">
                  <h2 className="text-5xl text-wh py-2 font-Genos">
                    My name is Robin
                  </h2>
                </div>

                <h3 className="text-xl">Welcome in the beaver world.</h3>
                <p className="text-md py-4 mr-20">
                  Trying to do my business, break tree to cut some water and be
                  cool in the hood. When I see water I really want to put some
                  wood on it because it's my job and I'm quite proud of it. This
                  is a bsic presentation on my work that i would like to show
                  you !!
                </p>
                {/* <img src="../images/blackpaint.png" className="py-16"></img> */}
              </TEAnimation>
            </div>
            {/* ici div2 */}
            <div
              className={`${
                hasLoaded
                ? "transform translate-x-0"
                : "transform -translate-x-full"
              } w-1/2 px-10 mt-40`}
              >
              <TEAnimation
                animation="[fade-in-right_1s_ease-in-out]"
                start="onLoad"
                reset
                className="[&>svg]:w-20"
                >
                <p className="border-l-4  py-4 min-w-96 max-h-674">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus quis suscipit velit. Quisque nec convallis est,
                  vitae ullamcorper massa. Sed eu purus imperdiet, pretium purus
                  a, pretium augue. Proin pharetra tellus sit amet eros aliquet
                  tristique. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Phasellus quis suscipit velit. Quisque nec convallis
                  est, vitae ullamcorper massa. Sed eu purus imperdiet, pretium
                  purus a, pretium augue. Proin pharetra tellus sit amet eros
                  aliquet tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Phasellus quis suscipit velit. Quisque nec
                  convallis est, vitae ullamcorper massa. Sed eu purus
                  imperdiet, pretium purus a, pretium augue. Proin pharetra
                  tellus sit amet eros aliquet tristique. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Phasellus quis suscipit
                </p>
              </TEAnimation>
            </div>
          </div>
        </section>

        <div className="text-center mt-10 flex justify-between space-x-10">
          <TEAnimation
            animation="[fade-in-left_1s_ease-in-out]"
            start="onScroll"
            reset
          >
            <Card
              imageUrl="../images/Sunset.jpg"
              title="competences"
              description="- Autonome<br/>
              -Test</br>
              -Sociable"
              tags={["test"]}
              classname="max-w-sm rounded shadow-lg border-4 ml-14"
              
            />
          </TEAnimation>
          <TEAnimation
            animation="[fade-in-up_1s_ease-in-out]"
            start="onScroll"
            reset
          >
            <Card
              imageUrl="../images/Sunset.jpg"
              title="Technologies connues"
              description="-React</br>
              -NestJs</br>
              -Github"
              tags={["test"]}
              classname="max-w-sm rounded shadow-lg border-4"
            />
          </TEAnimation>
          <TEAnimation
            animation="[fade-in-right_1s_ease-in-out]"
            start="onScroll"
            reset
          >
            <Card
              imageUrl="../images/Sunset.jpg"
              title="Bonjour"
              description="Yipiiie </br>
              -test</br>
              -test2"
              tags={["test"]}
              classname="max-w-sm rounded shadow-lg border-4 mr-10"
            />
          </TEAnimation>
        </div>

        <div className=" bg-white-500 mt-10">
          <GitHubRepoInfo username="kbarbry" repo="ft_transcendence " />
        </div>
        <hr className="my-4 border-t-4 border-black" />
        <div className=" bg-white-500 mt-10">
          <GitHubRepoInfo username="Rgeral" repo="CPP_Modules" />
        </div>
      </main>
    </div>
  );
}

export default App;
