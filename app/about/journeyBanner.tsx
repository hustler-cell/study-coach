import Image from "next/image";
import React from "react";
import { images } from "../constants";

const JourneyBanner = () => {
  const { JourneyImg } = images;
  return (
    <div className="w-full px-[100px] max-md:px-5 relative mx-auto bg-[#0F509C]">
      <div className="inner_container flex items-center md:py-14 max-md:flex-col-reverse max-md:py-5 max-md:gap-5">
        <div className="left_container">
          <Image src={JourneyImg} alt="image" />
        </div>
        <div className="right_container flex flex-col gap-4">
          <p className="text-5xl font-bold text-[#FFFFFF]">Our Journey</p>
          <p className="text-md font-normal text-[#FFFFFF]">
            {`Founded in 2025, we began with a simple vision: to make quality
            education accessible to everyone. Over the years, we’ve grown into a
            trusted platform, fostering a community of students and educators
            dedicated to achieving their goals.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneyBanner;
