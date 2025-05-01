import React from "react";
import OfferCard from "./offerCard";
import { images } from "../constants";
import { StaticImageData } from "next/image";

interface CardData {
  id: string;
  icon: string | StaticImageData;
  heading: string;
  description: string;
}

const OfferBanner: React.FC = () => {
  const { ForStudent, ForParents, ForEducator } = images;
  const cardData: CardData[] = [
    {
      id: "1",
      icon: ForStudent,
      heading: "For Students",
      description:
        "A personalized learning experience tailored to individual needs.",
    },
    {
      id: "2",
      icon: ForEducator,
      heading: "For Educators",
      description:
        "A platform to share expertise, grow professionally, and inspire the next generation.",
    },
    {
      id: "3",
      icon: ForParents,
      heading: "For Parents",
      description:
        "Peace of mind knowing your child is receiving the best possible guidance.",
    },
  ];
  return (
    <div className="w-full px-[100px] max-md:px-5 relative mx-auto bg-white">
      <div className="offer_container py-10">
        <p className="text-center font-bold text-5xl text-[#101828] max-[400px]:text-4xl">
          What We Offer
        </p>
        <div className="flex gap-5 flex-wrap pt-5 justify-center">
          {cardData.map((item) => (
            <div key={item.id} className="w-full sm:w-auto">
              <OfferCard
                heading={item.heading}
                desc={item.description}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
