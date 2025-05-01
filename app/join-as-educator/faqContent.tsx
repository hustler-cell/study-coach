"use client";
import React, { useState } from "react";
import { Faq } from "./faq";
import { FaqDataProps } from "../types";

const faqData: FaqDataProps[] = [
  {
    id: 1,
    question: "How can I become a tutor at StudyCoach?",
    answer: `1.	Fill Out the Form: Start by filling out the application form on our website.
2.	Get Contacted: After we receive your application, one of our team members will get in touch with you.
3.	Interview: We’ll schedule an interview to talk about your experience and teaching style. Start your tutoring journey with StudyCoach today!`,
  },
  {
    id: 2,
    question: "Will StudyCoach provide any training before I start teaching?",
    answer:
      "Yes, we offer basic guidelines and tips to help you understand our teaching standards    and how to deliver the best learning experience to students.",
  },
  {
    id: 3,
    question: "Can I work part-time as a tutor with StudyCoach?",
    answer:
      "Yes! You can work part-time depending on your availability. We offer flexible schedules to fit your needs.",
  },
  {
    id: 4,
    question: "How much will I earn as a Home Tutor at StudyCoach?",
    answer:
      "Your salary as a Home Tutor depends on your qualifications and interview. We’ll discuss the exact details during the hiring process.",
  },
  {
    id: 5,
    question: "Will I get a travel allowance?",
    answer:
      "Yes, if you need to travel more than 5 km for classes, we will provide a travel allowance.",
  },
  {
    id: 6,
    question: "What are the working hours and number of classes for tutors?",
    answer:
      "The class timings and number of sessions depend on your availability and schedule.",
  },
  {
    id: 7,
    question: "Can I choose the subjects and classes I want to teach?",
    answer:
      "Yes! You can tell us your preferred subjects and classes during the application process. We will try to match you with students accordingly.",
  },
  {
    id: 8,
    question: "How often will I get paid?",
    answer:
      "Tutors are usually paid monthly by StudyCoach. Payment details will be shared with you during onboarding.",
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
