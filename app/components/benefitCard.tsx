import React, { useState } from 'react';

interface BenefitCardProps {
  imageUrl: string;
  title: string;
  description: string;
  hasBackground?: boolean;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  imageUrl,
  title,
  description,
  hasBackground = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  // Limit text length when collapsed
  const truncatedText = description.length > 100 ? description.slice(0, 100) + '...' : description;

  return (
    <div
      className={`flex flex-col grow justify-center p-5 rounded-xl min-h-[236px] max-md:mt-4 ${
        hasBackground ? 'bg-sky-50' : 'border border-solid border-zinc-100'
      }`}
    >
      <div className="max-w-full w-[336px]">
        <img
          loading="lazy"
          src={imageUrl}
          className="object-contain aspect-square w-[54px]"
          alt=""
        />
        <div className="mt-5 text-2xl font-medium leading-6 text-neutral-900">
          {title}
        </div>
        <div className="mt-5 text-base leading-7 text-stone-900">
          {isExpanded ? description : truncatedText}{' '}
          {description.length > 100 && (
            <button
              onClick={toggleReadMore}
              className="font-medium text-[#3EA6FB] focus:outline-none"
            >
              {isExpanded ? 'View Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
