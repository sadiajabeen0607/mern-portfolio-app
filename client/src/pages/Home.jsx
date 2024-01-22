// import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../assets/docs/sample.pdf";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../features/darkModeSlice";
import Fade from "react-reveal/Fade";

const Home = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  // console.log(mode, "mode");
  return (
    <>
      <header className="bg-black shadow-md h-56 pt-10 pr-4 px-8" id="home">
        <div
          className="flex items-center justify-center w-10 h-10 bg-gray-600 mt-2 text-center fixed right-0 cursor-pointer z-10 rounded-l-md"
          onClick={() => dispatch(toggleDarkMode())}
        >
          {mode ? <BsMoonStarsFill size={25} /> : <BsSunFill size={25} />}
        </div>
        <Fade right>
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
        </Fade>
        <Fade bottom>
          <div className="text-white mt-5 flex gap-2 text-sm sm:text-lg">
            <a
              href="https://api.whatsapp.com/send?phone=123456789"
              rel="noreferrer"
              target="_blank"
              className=" text-center bg-blue-400 w-20 sm:w-36 py-1.5 rounded-md hover:text-blue-400 hover:bg-white hover:w-28 sm:hover:w-48 transition-all duration-700 ease-in-out"
            >
              Hire me
            </a>
            <a
              href={Resume}
              download="your_name.pdf"
              className="bg-orange-300 w-24 sm:w-36 px-2 py-1.5 rounded-md hover:opacity-50 transition-all duration-700 ease-in-out text-center"
            >
              My Resume
            </a>
          </div>
        </Fade>
      </header>
    </>
  );
};

export default Home;
