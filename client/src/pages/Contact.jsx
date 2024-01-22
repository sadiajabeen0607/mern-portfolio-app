// import React from 'react'
import { useState } from "react";
import ContactImage from "../assets/images/contact-us.jpeg";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { useSelector } from "react-redux";
import LightSpeed from "react-reveal/LightSpeed";
import Rotate from "react-reveal/Rotate";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
      }
      const res = await axios.post(
        "http://localhost:8080/api/v1/portfolio/sendEmail",
        {
          name,
          email,
          msg,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <>
      <div
        className={`container mt-10 mx-auto md:px-8 py-5 shadow shadow-gray-400 ${
          mode ? "bg-transparent border" : "bg-[#41122d]"
        }`}
        id="contact"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LightSpeed left>
            <div className="p-4 border-r border-gray-300">
              <img
                src={ContactImage}
                alt="Contact-Us"
                className="w-full h-72"
              />
            </div>
          </LightSpeed>
          <Rotate>
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
                  name="name"
                  placeholder="Enter Your Name"
                  className="mb-3 placeholder:text-[#bdbdbd] placeholder:opacity-100 font-normal px-[10px] py-2 border border-gray-200 outline-none focus:outline-[#138781 ] shadow focus:shadow-emerald-700 rounded-sm w-full mt-1 text-emerald-700 text-sm "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="px-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  className="mb-3 placeholder:text-[#bdbdbd] placeholder:opacity-100 font-normal px-[10px] py-2 border border-gray-200 outline-none focus:outline-[#138781 ] shadow focus:shadow-emerald-700 rounded-sm w-full mt-1 text-emerald-700 text-sm "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="px-3">
                <textarea
                  type="text"
                  name="msg"
                  placeholder="Write your message"
                  className="mb-3 placeholder:text-[#bdbdbd] placeholder:opacity-100 font-normal px-[10px] py-2 border border-gray-200 outline-none focus:outline-[#138781 ] shadow focus:shadow-emerald-700 rounded-sm w-full mt-1 text-emerald-700 text-sm "
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <div className="px-3">
                <button
                  className="mb-3 font-normal px-[10px] py-2 bg-gray-700 hover:bg-gray-950  focus:shadow-emerald-700 rounded-sm w-full mt-1 text-white text-sm duration-500"
                  onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </div>
          </Rotate>
        </div>
      </div>
    </>
  );
};

export default Contact;
