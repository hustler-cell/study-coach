import Image from "next/image";
import React from "react";
import { images } from "../constants";
import Link from "next/link";

const AboutBanner = () => {
  const { AboutHeroBg, rightArrowWhite } = images;
  return (
    <div className="mt-16 w-full pt-5 px-[100px] max-md:mt-[100px] max-md:px-5 relative mx-auto bg-white">
      <div className="inner_container flex items-center max-md:flex-col">
        <div className="left_container flex flex-col gap-4">
          <p className="text-6xl font-bold text-[#1988E2]">About Us</p>
          <p className="text-md font-normal text-[#1E1E1E]">
            {`At Study Coach, we are passionate about transforming education
            through innovative solutions. Our mission is to connect students
            with exceptional educators, empowering learning experiences that
            inspire growth and success.`}
          </p>
          <Link href={"/contact"}>
            <button
              className="flex justify-center items-center flex-auto gap-4 md:w-44
             px-4 py-6 sm:px-6 sm:py-4 md:px-6 md:py-4
             bg-[#0F509C] rounded-xl border border-solid border-zinc-300 
             text-base sm:text-lg md:text-xl font-bold leading-none text-white 
             hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 
             focus:ring-offset-2"
            >
              <span>Join Us</span>
              <Image
                src={rightArrowWhite}
                alt="icon"
                className="object-contain shrink-0 aspect-[1.19] w-[20px] sm:w-[22px] md:w-[16px]"
              />
            </button>
          </Link>
        </div>
        <div className="right_container">
          <Image src={AboutHeroBg} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
