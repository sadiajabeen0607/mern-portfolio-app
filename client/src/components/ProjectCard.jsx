// import React from 'react'

const ProjectCard = ({ image, name, badge }) => {
  return (
    <>
      <div className="rounded overflow-hidden border border-gray-100 hover:shadow-lg flex flex-col relative">
        <a href="#">
          <img className="w-full h-[200px]" src={image} alt="project-1" />
        </a>
        <p className="absolute -top-5 left-0 text-xs bg-orange-400 rounded-sm text-white px-2.5 py-0.5">
          {badge}
        </p>
        <div className="p-5">
          <div className="mx-auto my-3 flex items-center justify-center gap-2">
            <p className="bg-yellow-300 text-center rounded-lg text-black py-1 px-3 text-sm">
              Node
            </p>
            <p className="bg-yellow-300 text-center rounded-lg text-black py-1 px-3 text-sm">
              express
            </p>
            <p className="bg-yellow-300 text-center rounded-lg text-black py-1 px-3 text-sm">
              react
            </p>
            <p className="bg-yellow-300 text-center rounded-lg text-black py-1 px-3 text-sm">
              MongoDb
            </p>
          </div>
          <div className="text-center">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 h-[50px]">
              {name}
            </h5>
            <a
              href="#"
              className="inline-flex items-center px-8 py-1.5 text-sm font-medium  text-white bg-emerald-500 rounded-xl hover:bg-white hover:text-emerald-500 border border-emerald-500 mt-3 transition duration-500"
            >
              View
            </a>
          </div>
        </div>
      </div>
      {/* <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg relative hover:shadow-lg sm:mt-0">
        <a href="#">
          <img
            className="rounded-t-lg h-[200px] w-[0%]"
            src={image}
            alt="project-1"
          />
        </a>
        <p className="absolute -top-5 left-0 text-xs bg-orange-400 rounded-sm text-white px-2.5 py-0.5">
          {badge}
        </p>
        <div className="p-5">
          <div className="mx-auto my-3 flex items-center justify-center gap-2">
            <p className="bg-yellow-300 text-center rounded-lg text-black py-1 px-3 text-sm">
              Node
            </p>
            <p className="bg-yellow-300 text-center rounded-lg text-black py-1 px-3 text-sm">
              express
            </p>
            <p className="bg-yellow-300 text-center rounded-lg text-black py-1 px-3 text-sm">
              react
            </p>
            <p className="bg-yellow-300 text-center rounded-lg text-black py-1 px-3 text-sm">
              MongoDb
            </p>
          </div>
          <div className="text-center">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
              {name}
            </h5>
            <a
              href="#"
              className="inline-flex items-center px-8 py-1.5 text-sm font-medium  text-white bg-emerald-500 rounded-xl hover:bg-white hover:text-emerald-500 border border-emerald-500 mt-3 transition duration-500"
            >
              View
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProjectCard;
