// import React from 'react'
import Fade from "react-reveal/Fade";

const TechStackCard = ({ Icon, name }) => {
  return (
    <Fade left>
      <div
        className={`w-full border rounded-md py-4 px-2 bg-white text-black hover:bg-emerald-700 hover:text-white hover:border-none transition duration-500 hover:shadow-lg`}
      >
        <div className="flex items-center justify-center gap-3">
          <Icon size={25} />
          <p className="text-lg">{name}</p>
        </div>
      </div>
    </Fade>
  );
};

export default TechStackCard;
