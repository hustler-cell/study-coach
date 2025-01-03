import * as React from "react";
import { PricingFeature } from "../../types";
import Image from "next/image";

interface PricingFeatureListProps {
  features: PricingFeature[];
  textColor: string;
}

export function PricingFeatureList({ features, textColor }: PricingFeatureListProps) {
  return (
    <>
      {features.map((feature, index) => (
        <div key={index} className="flex gap-2.5 mt-2 first:mt-4">
          <Image
            loading="lazy"
            src={feature.icon}
            alt=""
            className="object-contain shrink-0 self-start w-5 aspect-square"
          />
          <div className={`text-base ${textColor}`}>{feature.text}</div>
        </div>
      ))}
    </>
  );
}