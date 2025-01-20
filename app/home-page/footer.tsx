import * as React from "react";
import { SocialIconProps,FooterLinkProps,ContactButtonProps } from "../types";

const legalLinks = ["Terms and condition", "Privacy", "Cookies", "Contact"];
const popularPages = ["About us", "Student Registration", "Courses", "CBSE", "ICSE"];

export const Footer = () => {
    const ContactButton = ({ text, iconSrc, alt }: ContactButtonProps) => (
        <button 
          className="flex flex-auto gap-8 px-8 py-6 bg-sky-500 rounded-xl border border-solid border-zinc-300 text-xl font-bold leading-none text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          tabIndex={0}
        >
          <span>{text}</span>
          <img
            loading="lazy"
            src={iconSrc}
            alt={alt}
            className="object-contain shrink-0 self-start aspect-[1.19] w-[25px]"
          />
        </button>
      );
    const FooterLink = ({ text }: FooterLinkProps) => (
        <div className="mt-2.5 text-base leading-8 text-white hover:text-gray-300 cursor-pointer">
          {text}
        </div>
      );
    const SocialIcon = ({ src, alt }: SocialIconProps) => (
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="object-contain shrink-0 w-9 aspect-[1.09]"
        />
      );
  return (
    <div className="flex flex-col pt-20 rounded-none mt-[10%]">
      <div className="flex flex-col  pb-20 w-full bg-sky-950 max-md:px-5 max-md:max-w-full">
        <div className="z-10 self-center px-14 pt-16 pb-10 -mt-20 max-w-full bg-white rounded-xl border-2 border-solid border-zinc-300 w-[85%] max-md:px-5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
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
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/91b4d0fbb6a5e08cfa34fe854be8ecfbc8271f54909ac85a922fb612f4388a2e?apiKey=0875a60df1154a34920056571d8491d3&"
                  alt="Book a demo icon"
                />
                <ContactButton 
                  text="GET IN TOUCH"
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/91b4d0fbb6a5e08cfa34fe854be8ecfbc8271f54909ac85a922fb612f4388a2e?apiKey=0875a60df1154a34920056571d8491d3&"
                  alt="Get in touch icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full px-[4.5%] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/a67bff1510d1944f55bfc290f87ebb72fb69d4dee21e4961e2928f2baf25a6da?apiKey=0875a60df1154a34920056571d8491d3&"
                  alt="Study Coach Logo"
                  className="object-contain aspect-[4.42] w-[248px]"
                />
                <div className="flex flex-col items-start pr-1.5 pl-11 w-full max-md:pl-5">
                  <div className="text-base font-medium leading-loose text-white">
                    Unlease your full potential
                  </div>
                  <div className="flex gap-5 items-start mt-20 max-md:mt-10">
                    <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/0698de7326cb674adc87f0e896ea9a383098afc974b8217d31af5584cb2748ec?apiKey=0875a60df1154a34920056571d8491d3&" alt="Facebook" />
                    <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/9429085b57672ac9b52e23c4fb90e1b77b52ecb7aa027f3327ff230f344f4b63?apiKey=0875a60df1154a34920056571d8491d3&" alt="Twitter" />
                    <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/f14f420e4c2f0765fc103e1fb91dc88c1794465d22a48570b2a454c99acadd63?apiKey=0875a60df1154a34920056571d8491d3&" alt="Instagram" />
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
                <h3 className="text-lg font-medium leading-loose">Popular Pages</h3>
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
                <div className="mt-5 max-md:mr-2.5">
                  Customer Support (Parent) - 995995995
                </div>
                <div className="mt-2.5">
                  Customer Support (Educator) - 995995995
                </div>
                <div className="mt-1.5">
                  Head Office - Kendranaya , Praprem Palace
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};