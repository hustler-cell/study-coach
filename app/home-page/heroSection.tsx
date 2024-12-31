import * as React from 'react';
import { Button } from '../components/button';
import { HeroSectionProps } from '../types';
import Image from 'next/image';

export const HeroSection: React.FC<HeroSectionProps> = ({ title, description, buttons, heroImage }) => {
  return (
    <div className="mt-10  w-full pt-0 px-[85px] max-md:px-[20px] pb-0 max-md:mt-10 max-md:max-w-full relative">
      <div className="flex gap-5 max-md:flex-col">
        {/* Left Side Section */}
        <div className="flex mt-20 flex-col w-[45%] max-md:w-full">
          <div className="flex mt-[60px] z-10 flex-col items-start w-full max-md:mt-10">
            <h1 className="text-4xl font-bold tracking-wide leading-[50px] text-indigo-950 max-md:text-3xl">
              {title}
            </h1>
            <p className="mt-10 text-xl font-light leading-8 text-black max-md:text-lg max-md:mt-6">
              {description}
            </p>
            <div className="flex gap-3.5 mb-[30px] mt-[77px] items-start mt-10 max-md:mt-6 max-md:gap-2 max-md:bottom-0 max-md:flex-col max-md:w-full max-md:mt-[20px]">
            {buttons.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Section (Image) */}
        <div className="flex mt-[60] flex-col max-md:mt-[-120px] ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center px-9 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
            <Image
            priority
              src={heroImage}
              alt="Home tutor teaching student"
              className="object-contain w-full aspect-[1.75] max-md:max-w-full max-md:aspect-[1.2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
