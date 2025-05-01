"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";
import Image from "next/image";
import { images } from "../constants";

interface faqData {
  id: number;
  question: string;
  answer: string;
}

const freqAskedData: faqData[] = [
  {
    id: 1,
    question: "What is StudyCoach and how can it benefit my child’s education?",
    answer:
      "StudyCoach is a leading tuition provider committed to enhancing students' learning journeys. We offer professional home tuition for students in grades 1-12, specializing in the ICSE, CHSE, and CBSE boards. With a 4.9-star rating on Google, we’ve earned the trust of parents who rely on our personalized teaching approach. For more details, visit our official website: 🌐 https://www.studycoach.co.in/",
  },
  {
    id: 2,
    question: "What subjects are available for tuition at StudyCoach?",
    answer:
      "At StudyCoach, we offer tuition across a variety of subjects, including Mathematics, Science, English, History, and more. For a full list of available subjects, please check our website 🌐 https://www.studycoach.co.in/.",
  },
  {
    id: 3,
    question: "How can I enroll my child in StudyCoach’s tuition program?",
    answer:
      "Enrolling your child in StudyCoach is easy! Simply fill out the enrollment form on our website or reach out to our customer service team at 📞 +91 9668830450 for assistance.",
  },
  {
    id: 4,
    question: "Are there any registration fees to join StudyCoach’s classes?",
    answer:
      "No need to worry — there are no registration fees at StudyCoach! 😉 We believe in making quality education accessible without extra costs.",
  },
];

const FreqQues = () => {
  const { plus, minus } = images;
  const [activeQuestion, setActiveQuestion] = useState<number | null>(
    freqAskedData[0].id
  );
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  const toggleQuestion = (id: number) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <main className="mt-5 w-full max-md:mt-10 max-md:max-w-full relative mx-auto mb-12">
      <h1 className="text-3xl font-semibold tracking-wide leading-[50px] text-[#231D4F] max-md:text-2xl text-center">
        Frequently Asked Questions
      </h1>
      <div className="mt-8">
        {isMobileView ? (
          <div className="mobile_view flex flex-col gap-4 px-[25px]">
            {freqAskedData.map((ques) => (
              <div
                key={ques.id}
                className="mobile_section border p-4 rounded-md shadow-md"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleQuestion(ques.id)}
                >
                  <p className="font-semibold text-black">{ques.question}</p>
                  <span className="font-bold text-xl">
                    {activeQuestion === ques.id ? (
                      <Image
                        src={minus}
                        alt="minus-icon"
                        height={20}
                        width={20}
                      />
                    ) : (
                      <Image
                        src={plus}
                        alt="minus-icon"
                        height={20}
                        width={20}
                      />
                    )}
                  </span>
                </div>
                {activeQuestion === ques.id && (
                  <div className="mt-3 text-gray-600">{ques.answer}</div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="desktop_view cards_container flex relative mt-8 pl-16">
            <div className="card1 h-full border w-1/2 relative -mr-32 ml-10 shadow-md z-20 mt-8 rounded-sm">
              {freqAskedData.map((ques) => (
                <div
                  key={ques.id}
                  className={`each-section flex items-center justify-between p-4 border-b cursor-pointer h-16 ${
                    activeQuestion === ques.id ? "bg-[#FAFBFF]" : "bg-white"
                  }`}
                  onClick={() => setActiveQuestion(ques.id)}
                >
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      checked={activeQuestion === ques.id}
                      onChange={() => setActiveQuestion(ques.id)}
                      className="custom_radio"
                    />
                    <p>{ques.question}</p>
                  </div>
                  <div
                    className={`flex justify-end items-center ${
                      activeQuestion === ques.id
                        ? "text-[#007AFF]"
                        : "text-gray-400"
                    }`}
                  >
                    &#9654;
                  </div>
                </div>
              ))}
            </div>
            <div className="card2 h-[500px] border w-1/2 z-10 rounded-2xl bg-[#FAFBFF] shadow-inner">
              {activeQuestion && (
                <div className="inner_container pl-40 pr-5 mt-10 flex flex-col gap-8">
                  <div className="ques_div font-bold">
                    {freqAskedData.find((q) => q.id === activeQuestion)
                      ?.question || "Question not found"}
                  </div>
                  <div className="ans_div">
                    {freqAskedData.find((q) => q.id === activeQuestion)
                      ?.answer || "Question not found"}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default FreqQues;
