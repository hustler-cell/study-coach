"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { images } from "../constants";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetInTouch = () => {
  const { contactUsImg } = images;
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_EDUCATOR!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_GET_IN_TOUCH!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_EDUCATOR!
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "bottom-center",
        });
        formRef.current?.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.", {
          position: "bottom-center",
        });
        // console.error("EmailJS Error:", error);
      });
  };

  return (
    <main className="mt-16 w-full pt-5 px-[100px] pb-10 max-md:mt-[100px] max-md:px-5 relative mx-auto shadow-md bg-white">
      <ToastContainer />
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
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="left_side flex flex-col gap-5 md:w-1/2 w-full"
        >
          {/* Full Name */}
          <div className="name_input relative w-full">
            <input
              type="text"
              name="user_name"
              placeholder=" "
              required
              className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-black"
            />
            <label
              htmlFor="user_name"
              className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3 peer-focus:text-sm"
            >
              Full Name
            </label>
          </div>

          {/* Mobile Number */}
          <div className="name_input relative w-full">
            <input
              type="tel"
              name="user_phone"
              placeholder=" "
              required
              className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-black"
            />
            <label
              htmlFor="user_phone"
              className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3 peer-focus:text-sm"
            >
              Mobile Number
            </label>
          </div>

          {/* Email */}
          <div className="name_input relative w-full">
            <input
              type="email"
              name="user_email"
              placeholder=" "
              required
              className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-black"
            />
            <label
              htmlFor="user_email"
              className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3 peer-focus:text-sm"
            >
              Email Address
            </label>
          </div>

          {/* Message */}
          <div className="name_input relative w-full">
            <textarea
              name="message"
              rows={4}
              placeholder=" "
              required
              className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-black"
            />
            <label
              htmlFor="message"
              className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3 peer-focus:text-sm"
            >
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <div className="send_btn">
            <button
              type="submit"
              className="bg-sky-800 text-white font-bold w-full py-3 rounded-md hover:bg-sky-900 transition-all duration-300"
            >
              Send
            </button>
          </div>
        </form>

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

export default GetInTouch;
