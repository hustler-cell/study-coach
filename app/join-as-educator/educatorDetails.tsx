import Image from "next/image";
import React from "react";
import { images } from "../constants";

const { bestOpper, increment, travel, monthlySalary, safety } = images;

const tutorFacilityData = [
  {
    id: 1,
    heading: "Best Opportunities",
    description:
      "Study Coach offers diverse tutoring opportunities across subjects and skill levels.",
    icon: bestOpper,
  },
  {
    id: 2,
    heading: "Increment & Bonuses",
    description:
      "Study Coach rewards your dedication with performance-based bonuses and increments.",
    icon: increment,
  },
  {
    id: 3,
    heading: "Travel Allowance",
    description:
      "We ease your commute with a travel allowance, letting you focus on teaching.",
    icon: travel,
  },
  {
    id: 4,
    heading: "Monthly Salary",
    description:
      "Enjoy the security of a steady monthly salary, ensuring reliable support for your financial goals.",
    icon: monthlySalary,
  },
  {
    id: 5,
    heading: "Safety",
    description:
      "Your safety comes first with strict protocols and robust support systems for a secure work environment.",
    icon: safety,
  },
];

const EducatorDetails = () => {
  return (
    <main className="main_container flex flex-col md:flex-row md:justify-around md:gap-0 gap-10 md:px-0 shadow-md">
      {/* left card */}
      <div className="left_card bg-[#0F509C] md:w-1/2 w-full flex flex-col gap-5 md:gap-7 items-center text-white px-2 sm:px-6 md:px-12 py-2 sm:py-6 md:py-16 max-md:shadow-xl">
        <div className="font-medium text-2xl md:text-3xl text-center">
          Why Tutor At Study Coach?
        </div>
        <div className="flex flex-col gap-4 md:gap-5 w-full">
          {tutorFacilityData.map((item) => (
            <div
              key={item.id}
              className="icon_with_desc flex items-start md:items-center gap-3 md:gap-4"
            >
              <Image
                src={item.icon}
                alt={item.heading}
                height={100}
                width={100}
              />
              <div>
                <div className="heading text-base md:text-lg font-semibold">
                  {item.heading}
                </div>
                <div className="description text-sm md:text-base font-normal leading-tight md:leading-normal">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* right card */}
      <div className="right_card bg-white md:w-1/2 w-full py-8 md:py-16 px-8 md:px-16 flex flex-col gap-8 md:gap-10">
        <div className="font-semibold text-2xl md:text-3xl text-center md:text-left">
          JOIN AS EDUCATOR
        </div>
        <div className="input_container flex flex-col gap-6 md:gap-8">
          {[
            { id: "nameInput", label: "Full Name", type: "text" },
            { id: "mobileInput", label: "Mobile Number", type: "number" },
            { id: "addressInput", label: "Current Address", type: "text" },
            { id: "cityInput", label: "Current City", type: "text" },
            {
              id: "qualificationInput",
              label: "Highest Qualification",
              type: "text",
            },
          ].map(({ id, label, type }) => (
            <div key={id} className="name_input relative w-full md:w-[80%]">
              <input
                type={type}
                id={id}
                placeholder=" "
                className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-black"
              />
              <label
                htmlFor={id}
                className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3 peer-focus:text-sm"
              >
                {label}
              </label>
            </div>
          ))}
          <div className="name_input relative w-full md:w-[80%]">
            <textarea
              id="msgInput"
              placeholder=" "
              className="peer w-full border-2 border-gray-300 rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-black"
            />
            <label
              htmlFor="msgInput"
              className="absolute bg-white px-1 left-3 top-[-12px] text-gray-500 text-sm font-normal transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:left-[12px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-9px] peer-focus:left-3 peer-focus:text-sm"
            >
              Please tell us how we can help
            </label>
          </div>
        </div>
        <div className="send_btn">
          <button className="bg-[#0F509C] text-zinc-100 font-bold w-1/3 max-md:w-full py-3 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </main>
  );
};

export default EducatorDetails;
