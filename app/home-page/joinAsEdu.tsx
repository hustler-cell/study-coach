import * as React from "react";
import Image from "next/image";
import { images } from "../constants";
import Link from "next/link";

const { capGreen, capRed, rightArrow } = images;

const statsData = [
  {
    iconSrc: capGreen,
    count: "300",
    label: "Instructor",
    bgColor: "bg-emerald-50",
  },
  {
    iconSrc: capRed,
    count: "20,000+",
    label: "Student",
    bgColor: "bg-rose-50",
  },
];

export const Statistics: React.FC = () => {
  return (
    <div className="flex w-full mt-16 rounded-none max-md:mt-[-90px] max-md:z-[9] max-md:p-[20]">
      <div className="flex shrink-0 self-stretch my-auto h-1 bg-indigo-500 w-[90px] max-md:hidden" />
      <div className="flex-auto flex max-md:items-center max-md:justify-center self-stretch px-16 py-3 rounded-xl border-2 border-indigo-500 border-solid bg-zinc-300 bg-opacity-20 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-lg:flex-col justify-between w-full">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full max-lg:w-full">
            <div className="flex gap-5 lg:justify-between md:justify-between sm:justify-evenly justify-around items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              {statsData.map((stat, index) => (
                <div
                  className="flex gap-4 items-center max-md:flex-col max-md:gap-2"
                  key={index}
                >
                  <div>
                    <Image
                      loading="lazy"
                      src={stat.iconSrc}
                      alt={`${stat.label} icon`}
                      className="object-contain w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[80px] lg:h-[80px]"
                    />
                  </div>
                  <div className="flex flex-col self-stretch my-auto text-center max-md:text-sm whitespace-nowrap">
                    <div className="text-2xl font-semibold tracking-wide leading-none text-black max-md:text-xl">
                      {stat.count}
                    </div>
                    <div className="mt-2 text-lg leading-snug text-zinc-500 max-md:text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full max-md:w-full">
            <div className="flex max-md:flex-col max-lg:flex-col gap-9 w-full max-md:gap-3 text-3xl max-md:items-center max-lg:items-center font-semibold leading-tight text-zinc-100 max-md:mt-3 max-md:max-w-full">
              <div className="flex shrink-0 w-1.5 bg-indigo-500 rounded-3xl h-[108px] max-md:rotate-90 max-lg:rotate-90 max-md:h-[30px] max-lg:h-[30px]" />
              {/* <Link
                href={"/join-as-educator"}
                className="flex justify-center items-center"
              > */}
              <Link
                href={"/join-as-educator"}
                className="flex ml-[-20px] gap-10 items-start pl-10 my-auto bg-[#0F509C] rounded-[50px] shadow-[0px_126px_35px_rgba(0,0,0,0)] max-md:max-w-full"
              >
                <button className="flex-auto my-auto max-lg:text-[18px]">
                  JOIN AS EDUCATOR
                </button>
                <Image
                  src={rightArrow}
                  alt="Educator illustration"
                  className="object-contain z-10 shrink-0 self-end -mt-2 -mr-7 aspect-square w-[85px] "
                />
              </Link>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 self-stretch my-auto bg-indigo-500 h-[5px] w-[108px] max-md:hidden" />
    </div>
  );
};
