// import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdSchool } from "react-icons/io";
import React from "react";
import { useSelector } from "react-redux";

const Education = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const educationDetails = [
    {
      degree: "MCA",
      from: "Lahore Punjab",
      year: "2020 - 2022",
      icon: IoMdSchool,
    },
    {
      degree: "BCA",
      from: "Lahore Punjab",
      year: "2018 - 2020",
      icon: IoMdSchool,
    },
  ];
  return (
    <>
      <div
        className={`px-4 mt-5 ${mode ? "bg-gray-100" : "bg-[#5F304F]"}`}
        id="education"
      >
        <h1 className="font-bold text-emerald-500 text-center text-2xl pt-5">
          Education Details
        </h1>
        <hr className="text-blue-300 w-[400px] my-2 mx-auto" />
        <VerticalTimeline>
          {educationDetails.map((data, i) => (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date={data.year}
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={React.createElement(data?.icon, { size: "20" })}
            >
              <h3 className="vertical-timeline-element-title text-emerald-500 font-semibold text-lg">
                {data.degree}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-700 text-lg">
                {data.from}
              </h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
