// import React from "react";
import { useState } from "react";
import Home from "../pages/Home";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import Menus from "./Menus";
import About from "../pages/About";
import TechStack from "../pages/TechStack";
import Projects from "../pages/Projects";
import Education from "../pages/Education";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="flex">
      <div
        className={`min-h-[100vh] bg-gray-800 ${
          toggle ? "w-56" : "w-16"
        } fixed`}
      >
        <div className="flex items-end justify-end cursor-pointer">
          <p className="mt-3 bg-orange-300 rounded-l-md" onClick={handleToggle}>
            {toggle ? (
              <RiArrowLeftDoubleFill size={30} />
            ) : (
              <RiArrowRightDoubleFill size={30} />
            )}
          </p>
        </div>
        <Menus toggle={toggle} className="h-[100vh]" />
      </div>
      <div className="w-full">
        <Home />
        <About />
        <Education />
        <TechStack />
        <Projects />
      </div>
    </div>
  );
};

export default Layout;
