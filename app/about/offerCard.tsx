import Image, { StaticImageData } from "next/image";
import React from "react";

interface OfferCardProps {
  heading: string;
  desc: string;
  icon: string | StaticImageData;
}

const OfferCard: React.FC<OfferCardProps> = ({ heading, desc, icon }) => {
  return (
    <div className="bg-[#ffffff] flex flex-col gap-4 p-8 shadow-md rounded-xl w-full sm:w-[370px] h-[230px]">
      <div className="flex gap-3 items-center">
        <Image src={icon} alt="icon" height={50} width={50} />
        <p className="font-bold text-2xl">{heading}</p>
      </div>
      <p className="text-[#646464] md:pl-4">{desc}</p>
    </div>
  );
};

export default OfferCard;
