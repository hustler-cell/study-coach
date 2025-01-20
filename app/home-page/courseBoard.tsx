import * as React from "react";
import { BoardItemsData } from "../types";

export const CourseBoard: React.FC = () => {
    const boardData: BoardItemsData = {
        items: [
            {
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/23409df3fe9614c6d78e2915d2697a617afacc67a60dba13d602b01cd8ee8414?apiKey=0875a60df1154a34920056571d8491d3&",
                imageAlt: "CBSC board illustration",
                boardType: "CBSC",
            },
            {
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/6f52dd23b032cd1a10edc6abbadee22224aad98518c9110cf414e20d4e365d9a?apiKey=0875a60df1154a34920056571d8491d3&",
                imageAlt: "ICSE board illustration",
                boardType: "ICSE",
            },
            {
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/6bf23bcb022c948d6b083d1dfd6f3061aa6788beb29147376e03a3c68795ae5f?apiKey=0875a60df1154a34920056571d8491d3&",
                imageAlt: "CHSE board illustration",
                boardType: "CHSE",
            },
            {
                imageSrc: "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/ef10af8f19678e2e24a73a6c011e539a99a47d619e16a0889e7ef78d4f34cd94?apiKey=0875a60df1154a34920056571d8491d3&",
                imageAlt: "State board illustration",
                boardType: "STATE BOARD",
            },
        ],
    };

    return (
        <div className="flex flex-col items-center rounded-xl w-full z-[99] px-[70px] mt-[200px]">
            <h1 className="text-4xl font-semibold text-center text-indigo-950 mb-8">
                Course by Study Coach
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-6">
                {boardData.items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            loading="lazy"
                            src={item.imageSrc || "/placeholder.svg"}
                            alt={item.imageAlt}
                            className="w-40 h-40 "
                        />
                        <div className="mt-4 bg-blue-500 text-white font-bold text-center py-2 px-6 rounded-lg w-full transition-colors duration-300 ease-in-out hover:bg-blue-600">
                            {item.boardType}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

