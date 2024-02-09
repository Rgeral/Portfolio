// SnowCrashPage.jsx
import React from "react";
import "../../index.css"; // Assurez-vous d'importer votre fichier de styles
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";

export const SnowCrashPage = ({ isVisible }) => {
  return (
    <div
      className={`Text px-20 s-700:h-13 s-700:w-[600px] py-20 max-w-3xl min-w-60 ${
        isVisible ? "fade-in" : "fade-out"
      }`}
    >
      <div className="flex">
        <a href="">
          <MdOutlineArrowBackIos className="mr-5" size={40} />
        </a>
        <h1 className="text-3xl mb-5">SnowCrash</h1>
        <a
          href="https://github.com/Rgeral/SnowCrash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="ml-10" size={40} />
        </a>{" "}
      </div>
      <p>
        This is my inaugural cybersecurity project aimed at exploring various
        aspects of security challenges and solutions. <br />
        SnowCrash is a
        collaborative effort between two aspiring cybersecurity enthusiasts,
        developed over a period of two weeks. With a focus on practical learning
        and hands-on experience, SnowCrash offers a unique opportunity to dive
        deep into the world of cybersecurity and hone your skills in a
        real-world environment. <br />
        This was a great opportunity to learn about the basics of cybersecurity
        and to understand the importance of security in the world of
        technology. <br />
      </p>
    </div>
  );
};

export default SnowCrashPage;
