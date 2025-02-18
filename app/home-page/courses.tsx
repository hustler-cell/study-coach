'use client'

import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { CoursesPropsD } from "../types";
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

export const Courses: React.FC = () => {
    const coursesData: CoursesPropsD = {
        courses: [
            {
                imageUrl: "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/c290e4f9201b165fb509343b33ee80893aeb4eb638b03fd7a5e42bcff552a3bd?apiKey=0875a60df1154a34920056571d8491d3&",
                imageAlt: "Mathematics course illustration",
                title: "Mathematics",
                description: "Experience the Difference with Our Home Tutor Services in Bhubaneswar. Unlock Your Child's Potential Today!"
            },
            {
                imageUrl: "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/8771675f51a50ed8d4ae6531e7ea70135b73bf62d33e1f9bac8b6fef4b4402f1?apiKey=0875a60df1154a34920056571d8491d3&",
                imageAlt: "English course illustration",
                title: "English",
                description: "Transform Your Child's Learning Experience with a Dedicated Home Tutor in Bhubaneswar."
            },
            {
                imageUrl: "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/eb412695de09c488d5bfa0f7e555f34c5595c3888e1798181386b9709d3eab01?apiKey=0875a60df1154a34920056571d8491d3&",
                imageAlt: "Physics course illustration",
                title: "Physics",
                description: "Experience the Difference with Our Home Tutor Services in Bhubaneswar. Unlock Your Child's Potential Today!"
            },
            {
                imageUrl: "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/9960841b4ac465d5b557b3d89ae0e1b5fcc2df990cf45f2edb1bf8f8a286f58d?apiKey=0875a60df1154a34920056571d8491d3&",
                imageAlt: "Chemistry course illustration",
                title: "Chemistry",
                description: "Experience the Difference with Our Home Tutor Services in Bhubaneswar. Unlock Your Child's Potential Today!"
            }
        ]
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCourses, setVisibleCourses] = useState(4);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % (coursesData.courses.length - visibleCourses + 1)
        );
    }, [coursesData.courses.length, visibleCourses]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? coursesData.courses.length - visibleCourses : prevIndex - 1
        );
    }, [coursesData.courses.length, visibleCourses]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCourses(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCourses(2);
            } else {
                setVisibleCourses(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                nextSlide();
            }, 3000);
        }
        return () => clearInterval(intervalId);
    }, [isAutoPlaying, nextSlide]);

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <div className="flex flex-col mt-[120px] w-full p-0">
            <div className="z-10 self-center mt-0 text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-indigo-950 max-w-3xl px-[10px]">
                Choose the Courses that According to your Need
            </div>
            <div className="flex flex-col pt-8 pb-6 px-20 mt-8 w-full bg-[#0F509C]">
                <div 
                    className="relative overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div 
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / visibleCourses)}%)` }}
                    >
                        {coursesData.courses.map((course, index) => (
                            <div key={index} className={`flex-none w-full md:w-1/2 lg:w-1/4 px-4 mb-8`}>
                                <div className="flex flex-col justify-center items-center p-6 bg-white rounded-xl shadow-sm h-full">
                                    <img
                                        loading="lazy"
                                        src={course.imageUrl || "/placeholder.svg"}
                                        alt={course.imageAlt}
                                        className="object-contain w-24 md:w-36 aspect-square mb-4"
                                    />
                                    <div className="text-xl md:text-2xl font-medium text-indigo-700 mb-2">
                                        {course.title}
                                    </div>
                                    <div className="text-sm leading-5 text-center text-slate-700">
                                        {course.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                        aria-label="Previous course"
                    >
                        <ChevronLeftIcon className="w-6 h-6 text-sky-800" />
                    </button>
                    <button 
                        onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                        aria-label="Next course"
                    >
                        <ChevronRightIcon className="w-6 h-6 text-sky-800" />
                    </button>
                </div>
                <div className="flex gap-3 justify-center mt-7">
                    {[...Array(coursesData.courses.length - visibleCourses + 1)].map((_, i) => (
                        <div
                            key={i}
                            className={`h-3 rounded-full ${i === currentIndex ? 'w-12 bg-gray-100' : 'w-3 bg-zinc-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

