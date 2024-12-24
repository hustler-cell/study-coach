import { WhyChooseUsCardProps } from '../types';

export const WhyChooseUsCard = ({ icon, title, description, readMore, className }: WhyChooseUsCardProps) => {
  return (
    <div className={`flex flex-col grow justify-center p-5 rounded-xl ${className}`}>
      <div className="flex flex-col max-w-full w-[336px]">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain aspect-square w-[54px]"
        />
        <div className="mt-5 text-2xl font-medium leading-none text-neutral-900">
          {title}
        </div>
        <div className="mt-5 text-base leading-7 text-stone-900">
          {description}
          {readMore && (
            <span className="font-medium text-sky-400"> Read More</span>
          )}
        </div>
      </div>
    </div>
  );
};