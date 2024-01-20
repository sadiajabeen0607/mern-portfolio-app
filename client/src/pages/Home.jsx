// import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../assets/docs/sample.pdf";
import About from "./About";
import Education from "./Education";

const Home = () => {
  return (
    <>
      <header className="bg-black shadow-md h-56 pt-10 pr-4 px-8" id="home">
        <h1 className="text-white text-2xl sm:text-3xl">Hi 🖐 I am a</h1>
        <h2 className=" text-xl sm:text-2xl text-orange-300">
          <Typewriter
            options={{
              strings: [
                "FullStack Developer!",
                "Mern Stack Developer!",
                "React Native Developer!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="text-white mt-5 flex gap-2 text-sm sm:text-lg">
          <button className="bg-blue-400 w-20 sm:w-36 py-1.5 rounded-md hover:text-blue-400 hover:bg-white hover:w-28 sm:hover:w-48 transition-all duration-700 ease-in-out">
            Hire me
          </button>
          <a
            href={Resume}
            download="your_name.pdf"
            className="bg-orange-300 w-24 sm:w-36 px-2 py-1.5 rounded-md hover:opacity-50 transition-all duration-700 ease-in-out text-center"
          >
            My Resume
          </a>
        </div>
      </header>
    </>
  );
};

export default Home;
