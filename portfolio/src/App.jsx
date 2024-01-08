import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import profilePicture from "../images/profilePicture.jpg";
import pp from "/nfs/homes/rgeral/Desktop/projets-perso/portfolio/portfolio/images/profilePicture-removebg-preview.png"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-500">
      <main className="bg-white border-8">
        <section className="bg-gradient-to-r">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="uppercase text-3xl font-Genos ml-10 mt-10 text-sky-300">
              BIG BEAVER
            </h1>
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
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-Genos">My name is Robin</h2>
            <h3 className="text-xl">Welcome in the beaver world.</h3>
            <p className="text-md py-5">
              Trying to do my buisness, break tree to cut some water and be cool
              in the hood. When i see water i really want to put some wood on it
              because it's my job and i'm quite proud of it.
            </p>
          </div>
        </section>
          <div className="relative bg-gradient-to-b from-pink-600 to-white  mx-auto w-60 h-25 mt-10 rounded-full overflow-hidden">
            <img className="w-60 object-fill"src={pp} />
          </div>
      </main>
    </div>
  );
}

export default App;
