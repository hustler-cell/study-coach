import * as React from "react";
import { SocialIconProps, FooterLinkProps, ContactButtonProps } from "../types";
import { images } from "../constants";
import Image from "next/image";

const legalLinks = ["Terms and condition", "Privacy", "Cookies", "Contact"];
const popularPages = [
  "About us",
  "Student Registration",
  "Courses",
  "CBSE",
  "ICSE",
];

export const Footer = () => {
  const { rightArrowWhite, instagram, twitter, facebook, footerlogo } = images;
  const ContactButton = ({ text, iconSrc, alt }: ContactButtonProps) => (
    <button
      className="flex justify-between flex-auto gap-4 
             px-4 py-6 sm:px-6 sm:py-4 md:px-8 md:py-6
             bg-[#0F509C] rounded-xl border border-solid border-zinc-300 
             text-base sm:text-lg md:text-xl font-bold leading-none text-white 
             hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 
             focus:ring-offset-2"
      tabIndex={0}
    >
      <span>{text}</span>
      <Image
        loading="lazy"
        src={iconSrc}
        alt={alt}
        className="object-contain shrink-0 self-start aspect-[1.19] w-[20px] sm:w-[22px] md:w-[25px]"
      />
    </button>
  );
  const FooterLink = ({ text }: FooterLinkProps) => (
    <div className="mt-2.5 text-base leading-8 text-white hover:text-gray-300 cursor-pointer">
      {text}
    </div>
  );
  const SocialIcon = ({ src, alt }: SocialIconProps) => (
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 w-9 aspect-[1.09]"
    />
  );
  return (
    <div className="flex flex-col pt-20 rounded-none bg-red">
      <div className="flex flex-col  pb-20 w-full bg-sky-950 max-md:px-5 max-sm:px-1 max-md:max-w-full">
        <div className="z-10 self-center px-14 pt-12 pb-10 -mt-20 max-w-full bg-white rounded-xl border-2 border-solid border-zinc-300 w-[85%] max-md:px-5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:max-w-full ">
                <h2 className="self-start text-2xl font-medium leading-relaxed text-slate-900">
                  GET IN TOUCH
                </h2>
                <p className="mt-9 text-xl text-gray-600 max-md:max-w-full">
                  Schedule a demo to see Study Coach in action
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-wrap gap-6 max-md:mt-10">
                <ContactButton
                  text="BOOK A DEMO"
                  iconSrc={rightArrowWhite}
                  alt="Book a demo icon"
                />
                <ContactButton
                  text="GET IN TOUCH"
                  iconSrc={rightArrowWhite}
                  alt="Get in touch icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full px-[4.5%] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:ml-[-20px]">
                <Image
                  loading="lazy"
                  src={footerlogo}
                  alt="Study Coach Logo"
                  className="object-contain aspect-[4.42] w-[248px] max-md:ml-[-20px]"
                />
                <div className="flex flex-col items-start pr-1.5 pl-11 w-full max-md:pl-5">
                  <div className="text-base font-medium leading-loose text-white">
                    Unlease your full potential
                  </div>
                  <div className="flex gap-5 items-start mt-20 max-md:mt-10">
                    <SocialIcon src={facebook} alt="Facebook" />
                    <SocialIcon src={twitter} alt="Twitter" />
                    <SocialIcon src={instagram} alt="Instagram" />
                  </div>
                  <div className="mt-7 text-base leading-8 text-center text-gray-400">
                    ©2025 Study Coach
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start text-base leading-8 text-white max-md:mt-10">
                <h3 className="text-lg font-medium leading-loose">Legal</h3>
                {legalLinks.map((link, index) => (
                  <FooterLink key={index} text={link} />
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start text-base leading-8 text-white max-md:mt-10">
                <h3 className="text-lg font-medium leading-loose">
                  Popular Pages
                </h3>
                {popularPages.map((page, index) => (
                  <FooterLink key={index} text={page} />
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base leading-8 text-white max-md:mt-10">
                <h3 className="self-start text-lg font-medium leading-loose">
                  Contact Study Coach
                </h3>
                {/* <div className="mt-5 max-md:mr-2.5">
                  Customer Support (Parent) - 995995995
                </div> */}
                <div className="mt-2.5">Customer Support - +91 9668830450</div>
                <div className="mt-1.5">
                  Head Office - Plot No -76/1807, Millennium City, Pahala,
                  Bhubaneswar, 752101
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
