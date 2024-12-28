import React from "react";
import Image from "next/image";
import GetInTouch from "../Images/getintouch.jpeg";

const getInTouch = () => {
  return (
    <main className="mt-20 w-full pt-0 px-[100px] pb-0 max-md:mt-10 max-md:max-w-full relative mx-auto shadow-md bg-white">
      <div>
        <h1 className="text-4xl font-bold tracking-wide leading-[50px] text-[#0F509C] max-md:text-3xl">
          Get in Touch
        </h1>
        <div className="font-normal">We are here for you! How can we help?</div>
      </div>
      <div className="flex gap-5 max-md:flex-col mt-8">
        <div className="left_side flex flex-col gap-5 w-1/2">
          <div className="name_input relative w-full">
            {/* Input Field */}
            <input
              type="text"
              id="nameInput"
              placeholder=" "
              className="peer w-[500px] border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none   focus:border-black"
            />
            {/* Label */}
            <label
              htmlFor="nameInput"
              className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3  peer-focus:text-sm"
            >
              Full Name
            </label>
          </div>
          {/* ------------------ */}
          <div className="name_input relative w-full">
            {/* Input Field */}
            <input
              type="text"
              id="emailInput"
              placeholder=" "
              className="peer w-[500px] border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none   focus:border-black"
            />
            {/* Label */}
            <label
              htmlFor="emailInput"
              className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3  peer-focus:text-sm"
            >
              Email Address
            </label>
          </div>
          {/* ------------------ */}
          <div className="name_input relative w-full">
            {/* Input Field */}
            <textarea
              // type="text"
              id="msgInput"
              placeholder=" "
              className="peer w-[500px] border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none   focus:border-black"
            />
            {/* Label */}
            <label
              htmlFor="msgInput"
              className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3  peer-focus:text-sm"
            >
              Your Message
            </label>
          </div>
          <div className="send_btn">
            <button className="bg-sky-800 text-zinc-100 font-bold w-[500px] py-3 rounded-md">
              Send
            </button>
          </div>
        </div>
        <div className="right_side w-1/2">
          <Image
            loading="lazy"
            src={GetInTouch}
            alt="Home tutor teaching student"
            className="object-contain w-full aspect-[1.75] max-md:max-w-full max-md:aspect-[1.2]"
          />
        </div>
      </div>
    </main>
  );
};

export default getInTouch;
