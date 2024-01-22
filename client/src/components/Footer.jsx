// import React from "react";

import { useSelector } from "react-redux";
import Tada from "react-reveal/Tada";

const Footer = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <div
      className={`text-center p-3 ${
        mode ? "bg-transparent border" : "bg-[#531b3a]"
      }`}
    >
      <Tada bottom>
        <h5
          className={`text-lg font-medium py-2 ${
            mode ? " text-gray-800" : "text-gray-200"
          }`}
        >
          Made With 😊 Sadia &copy; 2024
        </h5>
      </Tada>
    </div>
  );
};

export default Footer;
