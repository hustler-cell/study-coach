import React from "react";
import { images } from "../constants";
import Image from "next/image";

const valuesData = [
  {
    id: "1",
    heading: "Innovation",
    desc: "Continuously improving to deliver cutting-edge learning solutions.",
  },
  {
    id: "2",
    heading: "Commitment",
    desc: "Dedicated to making education accessible and impactful.",
  },
  {
    id: "3",
    heading: "Excellence",
    desc: "Upholding the highest standards in everything we do.",
  },
  {
    id: "4",
    heading: "Community",
    desc: "Building a supportive and collaborative environment for all.",
  },
];

const ValuesBanner = () => {
  const { ValuesImg, TickIcon } = images;

  return (
    <div className="w-full px-[100px] max-md:px-5 relative mx-auto bg-[#0F509C]">
      <div className="inner_container flex items-center max-md:flex-col max-md:py-5 max-md:gap-5">
        <div className="left_container flex flex-col gap-4 md:w-1/2">
          <p className="text-5xl font-bold text-[#FFFFFF]">Our Values</p>
          {valuesData.map((item) => (
            <div className="flex gap-4 items-center" key={item.id}>
              <Image src={TickIcon} alt="icon" height={40} />
              <div className="text-white">
                <span className="font-bold">{item.heading} : </span> {item.desc}
              </div>
            </div>
          ))}
        </div>
        <div className="right_container md:w-1/2">
          <Image src={ValuesImg} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default ValuesBanner;
