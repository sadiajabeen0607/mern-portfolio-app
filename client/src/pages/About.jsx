// import React from 'react'
import { useSelector } from "react-redux";
import portfolio from "../assets/images/porfolio-img.jpg";
import Jump from "react-reveal/Jump";

const About = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <Jump>
      <div className="mt-10" id="about">
        <div
          className={`sm:flex gap-4 p-3 sm:p-5 sm:mx-10  ${
            mode ? "border shadow-md" : "bg-[#512141]"
          }`}
        >
          <div className="sm:w-[50%] ">
            <img
              src={portfolio}
              alt="profile_pic"
              className="rounded-md h-72 w-[100%]"
            />
          </div>
          <div className={`w-full sm:w-[50%] mt-2 sm:mt-0 `}>
            <h1
              className={`font-semibold ${
                mode ? "text-gray-800" : "text-gray-300"
              } italic text-2xl flex items-center justify-center underline`}
            >
              About Me
            </h1>
            <p
              className={`p-3 text-center ${
                mode ? "text-gray-800" : "text-gray-400"
              }`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A natus
              fugiat blanditiis ut dolorum eveniet quae voluptatum quaerat iusto
              unde libero dolorem, voluptas aspernatur, architecto cumque
              asperiores hic. Voluptate animi recusandae dignissimos nobis,
              laborum provident necessitatibus optio quam illo dolore? Nesciunt
              eos nihil corrupti sapiente itaque numquam dignissimos laborum,
              maxime quisquam soluta aperiam reiciendis ab voluptatibus saepe
              vero debitis amet aspernatur culpa repudiandae libero illum
              dolorum ratione. Excepturi aperiam velit aut fugiat aliquid
              similique perferendis optio? Ex accusantium animi beatae?
            </p>
          </div>
        </div>
      </div>
    </Jump>
  );
};

export default About;
