import React from "react";
import Image from "next/image";
import { images } from "../constants";

const getInTouch = () => {
  const { contactUsImg } = images;

  return (
    <main className="mt-16 w-full pt-5 px-[100px] pb-10 max-md:mt-[100px] max-md:px-5 relative mx-auto shadow-md bg-white">
      <div>
        <h1 className="text-4xl font-bold tracking-wide leading-[50px] text-[#0F509C] max-md:text-3xl">
          Get in Touch
        </h1>
        <div className="font-normal text-black">
          We are here for you! How can we help?
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-5 mt-8">
        {/* Left Side */}
        <div className="left_side flex flex-col gap-5 md:w-1/2 w-full">
          <div className="name_input relative w-full">
            <input
              type="text"
              id="nameInput"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-black"
            />
            <label
              htmlFor="nameInput"
              className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3 peer-focus:text-sm"
            >
              Full Name
            </label>
          </div>
          <div className="name_input relative w-full">
            <input
              type="number"
              id="mobileNumber"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-black"
            />
            <label
              htmlFor="mobileNumber"
              className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3 peer-focus:text-sm"
            >
              Mobile Number
            </label>
          </div>
          <div className="name_input relative w-full">
            <input
              type="text"
              id="emailInput"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-black"
            />
            <label
              htmlFor="emailInput"
              className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3 peer-focus:text-sm"
            >
              Email Address
            </label>
          </div>
          <div className="name_input relative w-full">
            <textarea
              id="msgInput"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-black"
            />
            <label
              htmlFor="msgInput"
              className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3 peer-focus:text-sm"
            >
              Your Message
            </label>
          </div>
          <div className="send_btn">
            <button className="bg-sky-800 text-zinc-100 font-bold w-full py-3 rounded-md">
              Send
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="right_side md:w-1/2 w-full">
          <Image
            loading="lazy"
            src={contactUsImg}
            alt="Home tutor teaching student"
            className="object-cover w-full aspect-[1.75] max-md:aspect-[1.2]"
          />
        </div>
      </div>
    </main>
  );
};

export default getInTouch;
