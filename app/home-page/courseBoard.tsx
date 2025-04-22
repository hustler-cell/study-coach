import * as React from "react";
import { BoardItemsData } from "../types";

export const CourseBoard: React.FC = () => {
  const boardData: BoardItemsData = {
    items: [
      {
        imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/23409df3fe9614c6d78e2915d2697a617afacc67a60dba13d602b01cd8ee8414?apiKey=0875a60df1154a34920056571d8491d3&",
        imageAlt: "CBSC board illustration",
        boardType: "CBSC",
      },
      {
        imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/6f52dd23b032cd1a10edc6abbadee22224aad98518c9110cf414e20d4e365d9a?apiKey=0875a60df1154a34920056571d8491d3&",
        imageAlt: "ICSE board illustration",
        boardType: "ICSE",
      },
      {
        imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/6bf23bcb022c948d6b083d1dfd6f3061aa6788beb29147376e03a3c68795ae5f?apiKey=0875a60df1154a34920056571d8491d3&",
        imageAlt: "CHSE board illustration",
        boardType: "CHSE",
      },
      {
        imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/ef10af8f19678e2e24a73a6c011e539a99a47d619e16a0889e7ef78d4f34cd94?apiKey=0875a60df1154a34920056571d8491d3&",
        imageAlt: "State board illustration",
        boardType: "STATE BOARD",
      },
    ],
  };

  return (
    <div className="flex flex-col items-center rounded-xl w-full z-[99] md:px-[70px] sm:px-[60px] md:mt-[200px] sm:mt-[60px]">
      <h1 className="text-4xl font-semibold text-center text-indigo-950 mb-8 mt-[60px]">
        Course by Study Coach
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
        {boardData.items.map((item, index) => (
          <div
            key={index}
            className="p-[50px] flex flex-col items-center bg-white rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <img
              loading="lazy"
              src={item.imageSrc || "/placeholder.svg"}
              alt={item.imageAlt}
              className="w-24 h-24 object-contain rounded-md"
            />
            <div className="mt-2 bg-blue-500 text-white font-semibold text-center py-1 px-4 rounded-md w-full text-sm transition-colors duration-300 ease-in-out hover:bg-blue-600 leading-8">
              {item.boardType}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
