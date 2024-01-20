// import React from 'react'
import ContactImage from "../assets/images/contact-us.jpeg";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div
        className="container mt-12 mx-auto md:px-8 border py-5 shadow shadow-gray-400"
        id="contact"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border-r border-gray-300">
            <img src={ContactImage} alt="Contact-Us" className="w-full" />
          </div>
          <div className="p-2">
            <h1 className=" text-xl flex items-center px-3">
              Contact with
              <BsLinkedin size={25} color="blue" className="ms-2" />
              <BsGithub size={25} color="black" className="ms-2" />
              <BsFacebook size={25} color="blue" className="ms-2" />
            </h1>

            <div className="relative flex my-4 items-center px-3">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-900 font-bold">
                OR
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="px-3">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="mb-3 placeholder:text-[#bdbdbd] placeholder:opacity-100 font-normal px-[10px] py-2 border border-gray-200 outline-none focus:outline-[#138781 ] shadow focus:shadow-emerald-700 rounded-sm w-full mt-1 text-emerald-700 text-sm "
              />
            </div>
            <div className="px-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="mb-3 placeholder:text-[#bdbdbd] placeholder:opacity-100 font-normal px-[10px] py-2 border border-gray-200 outline-none focus:outline-[#138781 ] shadow focus:shadow-emerald-700 rounded-sm w-full mt-1 text-emerald-700 text-sm "
              />
            </div>
            <div className="px-3">
              <textarea
                type="text"
                placeholder="Write your message"
                className="mb-3 placeholder:text-[#bdbdbd] placeholder:opacity-100 font-normal px-[10px] py-2 border border-gray-200 outline-none focus:outline-[#138781 ] shadow focus:shadow-emerald-700 rounded-sm w-full mt-1 text-emerald-700 text-sm "
              />
            </div>
            <div className="px-3">
              <button className="mb-3 font-normal px-[10px] py-2 bg-gray-700 hover:bg-gray-950  focus:shadow-emerald-700 rounded-sm w-full mt-1 text-white text-sm duration-500">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
