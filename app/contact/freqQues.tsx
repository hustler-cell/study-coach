"use client";
import React, { useState } from "react";
import "./styles.css";

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
      "Is there any setup fee or annual maintainance fee that I need to pay regularly?",
    answer:
      "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!",
  },
];

const FreqQues = () => {
  const [activeQuestion, setActiveQuestion] = useState(freqAskedData[0]);
  return (
    <main className="mt-5 w-full pt-0 px-[100px] pb-0 max-md:mt-10 max-md:max-w-full relative mx-auto mb-12">
      <h1 className="text-3xl font-semibold tracking-wide leading-[50px] text-[#231D4F] max-md:text-2xl text-center">
        Frequently Asked Questions
      </h1>
      <div className="cards_container flex relative mt-8">
        <div className="card1 h-full  border w-1/2 relative -mr-32 ml-10 shadow-md z-20 mt-8 rounded-sm">
          {freqAskedData.map((ques) => (
            <div
              key={ques.id}
              className={`each-section  flex items-center justify-between p-4 border-b cursor-pointer h-16 ${
                activeQuestion.id === ques.id ? "bg-[#FAFBFF]" : "bg-white"
              }`}
              onClick={() => setActiveQuestion(ques)}
            >
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  checked={activeQuestion.id === ques.id}
                  onChange={() => setActiveQuestion(ques)}
                  className="custom_radio"
                />
                <p>{ques.question}</p>
              </div>
              <div
                className={`flex justify-end items-center ${
                  activeQuestion.id === ques.id
                    ? "text-[#007AFF]"
                    : "text-gray-400"
                }`}
              >
                &#9654;
              </div>
            </div>
          ))}
        </div>
        <div className="card2 h-[500px]  border w-1/2 z-10 rounded-2xl bg-[#FAFBFF] shadow-inner">
          <div className="inner_container pl-40 mt-10 flex flex-col gap-8">
            <div className="ques_div font-bold ">{activeQuestion.question}</div>
            <div className="ans_div">{activeQuestion.answer}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FreqQues;
