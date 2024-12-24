import { PlanFeatureProps } from '../types';

export const PlanFeature = ({ icon, text }: PlanFeatureProps) => {
  return (
    <div className="flex gap-2.5 mt-2">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-start w-5 aspect-square"
      />
      <div className="text-base text-slate-500">{text}</div>
    </div>
  );
};