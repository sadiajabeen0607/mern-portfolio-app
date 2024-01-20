// import { useState } from 'react'

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperience";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-scroll";

function App() {
  const [toggle, setToggle] = useState(true);

  // change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Sidebar handleToggle={handleToggle} toggle={toggle} />

      <div
        className={`${
          toggle ? "hidden sm:block sm:ml-56" : " block ml-10 sm:ml-16"
        } transition-all duration-700 ease-in-out`}
      >
        <Home />
        <About />
        <Education />
        <TechStack />
        <Projects />
        <WorkExperience />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop
        smooth
        className="flex items-center justify-center"
        color="#fff"
        style={{
          right: "20px",
          bottom: "20px",
          width: "35px",
          height: "35px",
          padding: "7px",
          borderRadius: "50%",
          backgroundColor: "#FDBA74",
        }}
      />
    </>
  );
}

export default App;
