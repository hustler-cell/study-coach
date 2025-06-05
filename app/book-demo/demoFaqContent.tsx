"use client";
import React, { useState } from "react";
import { DemoFaq } from "./demoFaq";
import { FaqDataProps } from "../types";

const faqData: FaqDataProps[] = [
  {
    id: 1,
    question: "What services does StudyCoach provide?",
    answer: `StudyCoach offers expert home tutoring services in Bhubaneswar for students from Classes 1 to 12, covering ICSE, CBSE, and CHSE boards.
Learn more on our official website 🌐 https://www.studycoach.co.in/.
`,
  },
  {
    id: 2,
    question: "How do I start the classes?",
    answer:
      "Super simple! Just fill out our student registration form, and we’ll arrange your first class within 24 hours! 😲",
  },
  {
    id: 3,
    question: "Is there any charge for registration?",
    answer: "Nope! 😊 Registration is 100% free — no hidden fees.",
  },
  {
    id: 4,
    question: "How can I find a tutor through StudyCoach?",
    answer:
      "You don't need to search! Our team will find the perfect Educator for you. (We proudly call them Educators, not just Teachers! 😎)",
  },
  {
    id: 5,
    question: "Do you provide a demo class?",
    answer:
      "Absolutely! We offer a free demo class so you can experience our teaching before starting regular sessions. 😱",
  },
  {
    id: 6,
    question: "Can I switch my Educator if I’m not satisfied?",
    answer:
      "Yes, of course! 👍 If you feel the Educator isn’t the right fit, just let us know. We'll quickly arrange a better match for you.",
  },
  {
    id: 7,
    question: "How long is the demo class?",
    answer:
      "The demo class usually lasts for 45 minutes to 1 hour, giving you enough time to experience the teaching style.",
  },
  {
    id: 8,
    question: "Are online classes also available at StudyCoach?",
    answer:
      "Yes! 📚 Apart from home tuition, we also offer online classes for students who prefer learning from home.",
  },
  {
    id: 9,
    question: "Do you provide study materials?",
    answer:
      "Some Educators may provide notes, assignments, and study tips. You can discuss study material options directly with your Educator.",
  },
  {
    id: 10,
    question: "How are Educators selected at StudyCoach?",
    answer:
      "We carefully screen and interview every Educator based on their experience, qualifications, and passion for teaching.",
  },
  {
    id: 11,
    question: "How soon can my classes begin after registration?",
    answer:
      "Your classes can start within 24 hours after you complete the registration process! 🚀",
  },
];

export const DemoFaqContent: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <main className="mt-5 w-full max-md:mt-10 max-md:max-w-full relative mx-auto pb-12">
      <h1 className="text-4xl font-bold tracking-wide leading-[50px] text-[#2D1D61] max-md:text-2xl text-center">
        Frequently Asked Questions
      </h1>
      <div className="mt-8">
        <div className="grid gap-4 px-6 max-w-4xl mx-auto md:grid-cols-1">
          {faqData.map((item) => (
            <DemoFaq
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
