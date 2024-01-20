// import React from 'react'
import portfolio from "../assets/images/porfolio-img.jpg";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcMultipleCameras,
  FcBusinessContact,
} from "react-icons/fc";
// import { Link } from "react-router-dom";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="flex align-middle justify-center mt-12 mb-0 mx-auto">
            <img
              src={portfolio}
              alt="porfolio-pic"
              className="rounded-full h-20 w-20"
            />
          </div>
          <ul className="mx-4 my-6">
            <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FcHome size={20} />
              Home
            </li>
            <li className="flex items-center text-md gap-2 cursor-pointer mt-4 text-white hover:text-blue-500">
              <FcAbout size={20} />
              About
            </li>
            <li className="flex items-center text-md gap-2 cursor-pointer mt-4 text-white hover:text-blue-500">
              <FcReadingEbook size={20} />
              Education
            </li>
            <li className="flex items-center text-md gap-2 cursor-pointer mt-4 text-white hover:text-blue-500">
              <FcPortraitMode size={20} />
              Work Experience
            </li>
            <li className="flex items-center text-md gap-2 cursor-pointer mt-4 text-white hover:text-blue-500">
              <FcBiotech size={20} />
              Tech Stack
            </li>
            <li className="flex items-center text-md gap-2 cursor-pointer mt-4 text-white hover:text-blue-500">
              <FcMultipleCameras size={20} />
              Projects
            </li>
            <li className="flex items-center text-md gap-2 cursor-pointer mt-4 text-white hover:text-blue-500">
              <FcBusinessContact size={20} />
              Contact
            </li>
          </ul>
        </>
      ) : (
        <>
          <div className="flex align-middle justify-center mt-12 mb-0 mx-auto px-1">
            <img
              src={portfolio}
              alt="porfolio-pic"
              className="rounded-full h-10 w-10"
            />
          </div>
          <ul className="mx-4 mt-6">
            <li className="flex items-center text-lg gap-2 cursor-pointer mt-5 text-white hover:text-">
              <FcHome size={20} title="Home" />
            </li>
            <li className="flex items-center text-lg gap-2 cursor-pointer mt-5 text-white hover:text-">
              <FcAbout size={20} title="About" />
            </li>
            <li className="flex items-center text-lg gap-2 cursor-pointer mt-5 text-white hover:text-">
              <FcReadingEbook size={20} title="Education" />
            </li>
            <li className="flex items-center text-lg gap-2 cursor-pointer mt-5 text-white hover:text-">
              <FcPortraitMode size={20} title="Work Experience" />
            </li>
            <li className="flex items-center text-lg gap-2 cursor-pointer mt-5 text-white hover:text-">
              <FcBiotech size={20} title="Tech Stack" />
            </li>
            <li className="flex items-center text-lg gap-2 cursor-pointer mt-5 text-white hover:text-">
              <FcMultipleCameras size={20} title="Projects" />
            </li>
            <li className="flex items-center text-lg gap-2 cursor-pointer mt-5 text-white hover:text-">
              <FcBusinessContact size={20} title="Contact" />
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default Menus;
