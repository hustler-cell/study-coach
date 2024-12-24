import { PricingPlanProps } from '../types';
import { PlanFeature } from './planFeature';

export const PricingPlan = ({ price, period, title, features }: PricingPlanProps) => {
  return (
    <div className="flex flex-col items-start mt-11 w-full max-md:mt-10">
      <div className="flex gap-3 whitespace-nowrap">
        <div className="grow text-2xl leading-10 text-indigo-950">{price}</div>
        <div className="my-auto text-lg font-medium text-slate-500">{period}</div>
      </div>
      <div className="mt-5 text-base font-bold text-slate-500">{title}</div>
      {features.map((feature, index) => (
        <PlanFeature key={index} {...feature} />
      ))}
      <button className="self-stretch px-16 py-3.5 mt-6 text-base font-black text-center text-pink-300 bg-pink-300 rounded-3xl bg-blend-normal max-md:px-5">
        Choose plan
      </button>
    </div>
  );
};