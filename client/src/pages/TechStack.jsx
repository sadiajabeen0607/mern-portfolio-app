// import React from "react";

import { useSelector } from "react-redux";
import TechStackCard from "../components/TechStackCard";
import { TechstackList } from "../utils/TechStackList";
import RubberBand from "react-reveal/RubberBand";

const TechStack = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <>
      <div className="mt-8 p-2 mx-6" id="tech-stack">
        <RubberBand>
          <h1 className="font-bold text-emerald-500 text-center text-2xl my-1">
            Technologies Stack
          </h1>
          <hr className="text-blue-300 w-[400px] mx-auto my-2" />
          <p
            className={`pb-3 text-center text-md ${
              mode ? "text-gray-700" : "text-gray-40"
            }`}
          >
            👉 including Programming Languages, frameworks, databases, front-end
            and back-end tools, and APIs
          </p>
        </RubberBand>
        <div className="flex flex-wrap gap-x-7 gap-y-5 items-center justify-center my-5">
          {TechstackList.map((tech) => (
            <div
              key={tech._id}
              className="w-full sm:w-[40%] md:w-[30%] lg:w-[20%] cursor-pointer"
            >
              <TechStackCard name={tech.name} Icon={tech.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
