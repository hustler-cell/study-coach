import * as React from "react";
import { PricingPlan } from "../../types";
import { PricingFeatureList } from "./pricingFeatureList";
import { images } from "@/app/constants";

const {pricingBg}=images
interface PricingCardProps {
  plan: PricingPlan;
  isHighlighted?: boolean;
}

export function PricingCard({ plan, isHighlighted }: PricingCardProps) {
  const baseClasses = "flex flex-col items-start w-full";
  const highlightedClasses = isHighlighted
    ? "px-5 pt-5 pb-16 text-white bg-sky-800 rounded-3xl shadow-[0px_42px_34px_rgba(82,67,194,0.296)]"
    : "";

  return (
    <div className={`${baseClasses} ${highlightedClasses} relative`}>
  {isHighlighted?<div
    className="absolute right-0 inset-y-0 w-[200px] h-full bg-cover bg-no-repeat z-0"
    style={{ backgroundImage: `url(${pricingBg.src})` }}
  ></div>:null}
  {plan.isPopular && (
    <div className="self-end px-5 py-2 text-xs font-black tracking-wider text-center bg-sky-600 rounded-2xl border-2 border-white border-solid">
      MOST POPULAR
    </div>
  )}
  <div className="flex gap-3 mt-9 whitespace-nowrap">
    <div className={`grow text-2xl leading-10 ${!isHighlighted ? 'text-indigo-950' : ''}`}>
      {plan.price}
    </div>
    <div className={`my-auto text-lg font-medium ${!isHighlighted ? 'text-slate-500' : ''}`}>
      {plan.period}
    </div>
  </div>
  <div className={`mt-5 text-base font-bold ${!isHighlighted ? 'text-slate-500' : ''}`}>
    {plan.title}
  </div>
  <PricingFeatureList 
    features={plan.features} 
    textColor={isHighlighted ? 'text-white' : 'text-slate-500'} 
  />
  <div className={`px-16 py-3.5 mt-9 whitespace-nowrap w-full text-base font-black text-center ${
    isHighlighted 
      ? 'text-indigo-700 bg-pink-300' 
      : 'text-[#F496D1] bg-pink-100 bg-blend-normal'
  } rounded-3xl max-md:px-5`}>
    {plan.buttonText}
  </div>
</div>

  );
}