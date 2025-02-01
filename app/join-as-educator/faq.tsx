import React from "react";
import Image from "next/image";
import { FaqProps } from "../types";
import { images } from "../constants";

export const Faq: React.FC<FaqProps> = ({ data, isActive, onToggle }) => {
  const { plus, minus } = images;

  return (
    <div className="border p-4 rounded-md shadow-md">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <p className="font-semibold text-black">{data.question}</p>
        <span className="font-bold text-xl">
          <Image
            src={isActive ? minus : plus}
            alt={isActive ? "minus-icon" : "plus-icon"}
            height={20}
            width={20}
          />
        </span>
      </div>
      {isActive && <div className="mt-3 text-gray-600">{data.answer}</div>}
    </div>
  );
};
