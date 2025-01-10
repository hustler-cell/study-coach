"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";
import Image from "next/image";
import { images } from "../constants";

const freqAskedData = [
  {
    id: 1,
    question:
      "Do I need to pay to Instapay even when there is no transaction going on in my business?",
    answer:
      "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!",
  },
  {
    id: 2,
    question: "What is a Payment Gateway?",
    answer:
      "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!",
  },
  {
    id: 3,
    question: "What platforms does ACME payment gateway support?",
    answer:
      "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!",
  },
  {
    id: 4,
    question: "Does ACME provide international payments support?",
    answer:
      "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!",
  },
  {
    id: 5,
    question:
      "Is there any setup fee or annual maintenance fee that I need to pay regularly?",
    answer:
      "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!",
  },
];

const FreqQues = () => {
  const { plus, minus } = images;
  const [activeQuestion, setActiveQuestion] = useState(freqAskedData[0].id);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  const toggleQuestion = (id: any) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <main className="mt-5 w-full max-md:mt-10 max-md:max-w-full relative mx-auto mb-12">
      <h1 className="text-3xl font-semibold tracking-wide leading-[50px] text-[#231D4F] max-md:text-2xl text-center">
        Frequently Asked Questions
      </h1>
      <div className="mt-8">
        {isMobileView ? (
          <div className="mobile_view flex flex-col gap-4 px-[100px]">
            {freqAskedData.map((ques) => (
              <div
                key={ques.id}
                className="mobile_section border p-4 rounded-md shadow-md"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleQuestion(ques.id)}
                >
                  <p className="font-semibold">{ques.question}</p>
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
          <div className="desktop_view cards_container flex relative mt-8">
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
                    {
                      freqAskedData.find((q) => q.id === activeQuestion)
                        .question
                    }
                  </div>
                  <div className="ans_div">
                    {freqAskedData.find((q) => q.id === activeQuestion).answer}
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
