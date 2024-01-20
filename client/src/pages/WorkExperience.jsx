import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { SiReact } from "react-icons/si";

const WorkExperience = () => {
  const experiences = [
    {
      post: "Full Stack Developer",
      company: "xyz pvt, ltd.",
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At officiis tenetur dolore?",
      period: "2022 - present",
      icon: SiReact,
    },
    {
      post: "Full Stack Developer",
      company: "xyz pvt, ltd.",
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At officiis tenetur dolore?",
      period: "2022 - present",
      icon: SiReact,
    },
    {
      post: "Full Stack Developer",
      company: "xyz pvt, ltd.",
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At officiis tenetur dolore?",
      period: "2022 - present",
      icon: SiReact,
    },
  ];
  return (
    <>
      <div className="px-4 bg-blue-200 my-5" id="work-experience">
        <h1 className="font-bold text-gray-800 text-center text-2xl pt-5">
          Work Experience
        </h1>
        <hr className="w-[400px] my-2 mx-auto" />
        <VerticalTimeline>
          {experiences.map((exp, i) => (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date={exp.period}
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={React.createElement(exp?.icon, { size: "20" })}
            >
              <h3 className="vertical-timeline-element-title font-semibold text-lg text-emerald-600">
                {exp.post}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-lg text-emerald-500">
                {exp.company}
              </h4>
              <p>{exp.detail}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkExperience;
