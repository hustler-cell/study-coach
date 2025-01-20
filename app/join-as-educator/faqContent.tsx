"use client";
import React, { useState } from "react";
import { Faq } from "./faq";
import { FaqDataProps } from "../types";
import { images } from "../constants";

const faqData: FaqDataProps[] = [
  {
    id: 1,
    question: "How long until we deliver your first blog post?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
  },
  {
    id: 2,
    question: "What is our approach to content marketing?",
    answer:
      "Our approach involves understanding your audience, creating tailored content strategies, and ensuring consistent delivery to maximize engagement.",
  },
  {
    id: 3,
    question: "Can we handle custom content requests?",
    answer:
      "Absolutely! We work closely with our clients to understand their needs and create custom content that aligns with their goals.",
  },
  {
    id: 4,
    question: "What industries do we specialize in?",
    answer:
      "We specialize in a wide range of industries including technology, healthcare, finance, and more. Our versatile team adapts to your industry needs.",
  },
];

export const FaqContent: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <main className="mt-5 w-full max-md:mt-10 max-md:max-w-full relative mx-auto mb-12">
      <h1 className="text-4xl font-bold tracking-wide leading-[50px] text-[#2D1D61] max-md:text-2xl text-center">
        Frequently Asked Questions
      </h1>
      <div className="mt-8">
        <div className="grid gap-4 px-6 max-w-4xl mx-auto md:grid-cols-1">
          {faqData.map((item) => (
            <Faq
              key={item.id}
              data={item}
              isActive={activeId === item.id}
              onToggle={() => toggleQuestion(item.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
