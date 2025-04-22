import * as React from "react";
import { PricingPlan } from "../../types";
import { PricingCard } from "./pricingCard";
import { images } from "@/app/constants";

const { grayTick, tickMark } = images;
const pricingPlans: PricingPlan[] = [
  {
    price: "2099",
    period: "/month",
    title: "Home Tutor For LKG,UKG",
    features: [
      { icon: tickMark, text: "Free Demo" },
      { icon: tickMark, text: "Customisable Classes" },
      { icon: tickMark, text: "Switch Educator" },
      { icon: tickMark, text: "Dedicated Proctor" },
      { icon: tickMark, text: "Many More" },
    ],
    buttonText: "Choose plan",
  },
  {
    price: "2599",
    period: "/month",
    title: "Home Tutor For STD 1-5",
    features: [
      { icon: tickMark, text: "Free Demo" },
      { icon: tickMark, text: "Customisable Classes" },
      { icon: tickMark, text: "Switch Educator" },
      { icon: tickMark, text: "Dedicated Proctor" },
      { icon: tickMark, text: "Many More" },
    ],
    buttonText: "Choose plan",
  },
  {
    price: "3099",
    period: "/month",
    title: "Home Tutor For STD 6-8",
    features: [
      { icon: grayTick, text: "Free Demo" },
      { icon: grayTick, text: "Customisable Classes" },
      { icon: grayTick, text: "Switch Educator" },
      { icon: grayTick, text: "Dedicated Proctor" },
      { icon: grayTick, text: "Many More" },
    ],
    isPopular: true,
    buttonText: "Choose plan",
  },
  {
    price: "3599",
    period: "/month",
    title: "Home Tutor For STD 9-10",
    features: [
      { icon: tickMark, text: "Free Demo" },
      { icon: tickMark, text: "Customisable Classes" },
      { icon: tickMark, text: "Switch Educator" },
      { icon: tickMark, text: "Dedicated Proctor" },
      { icon: tickMark, text: "Many More" },
    ],
    buttonText: "Choose plan",
  },
];

export function PricingSection() {
  return (
    <div className="flex flex-col items-center rounded-none z-[9] my-[6%]">
      <div className="z-10 -mt-3.5 ml-7 text-4xl font-semibold text-center text-indigo-950">
        Popular Packages
      </div>
      <div className="flex mt-7 ml-8 max-w-full text-xs tracking-wider text-center whitespace-nowrap bg-[#DCDCE0] rounded-3xl w-[220px]">
        <div className="px-6 py-4 font-semibold text-white bg-sky-700 rounded-3xl max-md:px-5">
          MONTHLY
        </div>
        <div className="px-6 py-4 font-black rounded-3xl  text-slate-500 max-md:px-5">
          YEARLY
        </div>
      </div>
      <div className="self-stretch px-12 pb-9 mt-12 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full p-[60px] border border-solid border-gray-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <PricingCard plan={plan} isHighlighted={index === 2} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
