// import React from "react";
import React from "react";
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
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-scroll";

const Sidebar = ({ toggle, handleToggle }) => {
  const menus = [
    { name: "Home", icon: FcHome, link: "home" },
    { name: "About", icon: FcAbout, link: "about" },
    { name: "Education", icon: FcPortraitMode, link: "education" },
    { name: "Tech Stack", icon: FcReadingEbook, link: "tech-stack" },
    { name: "Projects", icon: FcMultipleCameras, link: "projects" },
    { name: "Work Experience", icon: FcBiotech, link: "work-experience" },
    { name: "Contact", icon: FcBusinessContact, link: "contact" },
  ];

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 bg-[#0e0e0e] h-full ${
          toggle ? "w-full sm:w-56" : "w-10 sm:w-16"
        } duration-500 text-gray-100 px-0.5 sm:px-4`}
      >
        <div className="py-3 flex justify-end">
          <IoIosArrowRoundBack
            size={26}
            className="cursor-pointer text-orange-400 hover:border rounded-full hover:border-orange-400 "
            onClick={handleToggle}
          />
        </div>
        <img
          src={portfolio}
          alt="porfolio-pic"
          className={`rounded-full mx-auto ${
            toggle ? "h-20 w-20" : "h-10 w-10"
          } `}
        />
        <div
          className={`mt-2 sm:mt-4 flex flex-col gap-1.5 sm:gap-4 relative ${
            toggle && "sm:px-2 px-4"
          }`}
        >
          {menus?.map((menu, i) => (
            <Link
              to={menu.link}
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md cursor-pointer `}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !toggle && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  toggle && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
