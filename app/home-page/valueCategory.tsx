import * as React from "react";
import { CategoryCardProps } from "../types";
import { images } from "../constants";
import Image from "next/image";

const { ourValueBgImg,homeTution,onlineClasses } = images;
const categories: CategoryCardProps[] = [
  {
    icon: homeTution,
    title: "Home Tuition",
    description: "Offering personalized home tuition for focused and effective learning at your convenience.",
  },
  {
    icon: onlineClasses,
    title: "Online Classes",
    description: "Providing interactive online classes for flexible and engaging learning from anywhere.",
  }
];

export const ValueCategories: React.FC = () => {
  return (
    <div className="relative mt-20 w-full px-4 sm:px-6 lg:px-8 lg:px-[100px] lg:py-[30px]">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8 lg:gap-12 z-10 relative">
        <div className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
          Our top value categories for you
        </div>
        <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-2/2">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col text-center p-6 sm:p-8 lg:p-12 bg-white rounded-3xl shadow-lg w-full sm:w-1/2 lg:w-auto">
              <Image
                loading="lazy"
                src={category.icon}
                alt={`${category.title} icon`}
                className="object-contain self-center w-12 sm:w-16 aspect-square mb-6 sm:mb-8"
              />
              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-semibold leading-tight text-gray-900 mb-4 sm:mb-6">
                  {category.title}
                </div>
                <div className="text-base sm:text-lg leading-7 text-gray-600">
                  &quot;{category.description}&quot;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: `url(${ourValueBgImg.src})`, top: '200px' }}
      ></div>
    </div>
  );
};

