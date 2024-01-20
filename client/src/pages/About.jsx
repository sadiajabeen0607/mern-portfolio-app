// import React from 'react'
import portfolio from "../assets/images/porfolio-img.jpg";

const About = () => {
  return (
    <div className="mt-10 p-3 sm:p-5 sm:mx-10 border-b shadow-md" id="about">
      <div className="sm:flex gap-4">
        <div className="sm:w-[50%] ">
          <img
            src={portfolio}
            alt="profile_pic"
            className="rounded-md h-64 w-[100%]"
          />
        </div>
        <div className="w-full sm:w-[50%] mt-2 sm:mt-0">
          <h1 className="font-semibold text-gray-400 italic text-2xl flex items-center justify-center underline">
            About Me
          </h1>
          <p className="p-3 text-gray-700 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A natus
            fugiat blanditiis ut dolorum eveniet quae voluptatum quaerat iusto
            unde libero dolorem, voluptas aspernatur, architecto cumque
            asperiores hic. Voluptate animi recusandae dignissimos nobis,
            laborum provident necessitatibus optio quam illo dolore? Nesciunt
            eos nihil corrupti sapiente itaque numquam dignissimos laborum,
            maxime quisquam soluta aperiam reiciendis ab voluptatibus saepe vero
            debitis amet aspernatur culpa repudiandae libero illum dolorum
            ratione. Excepturi aperiam velit aut fugiat aliquid similique
            perferendis optio? Ex accusantium animi beatae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
