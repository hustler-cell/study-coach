import React from 'react';
import { BenefitCard } from './benefitCard';

interface BenefitItem {
  imageUrl: string;
  title: string;
  description: string;
  hasBackground?: boolean;
}

interface BenefitsRowProps {
  benefits: BenefitItem[];
}

export const BenefitsRow: React.FC<BenefitsRowProps> = ({ benefits }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10">
  {benefits.map((benefit, index) => (
    <div key={index} className="w-full  mx-auto">
      <BenefitCard
        imageUrl={benefit.imageUrl}
        title={benefit.title}
        description={benefit.description}
        hasBackground={benefit.hasBackground}
      />
    </div>
  ))}
</div>

  );
};