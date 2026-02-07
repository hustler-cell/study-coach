"use client";

import { useState } from "react";
import AuthGuard from "../components/authGuard";
import { dashboardData } from "./dashboardData";

export default function DashboardPage() {
  const [filter, setFilter] = useState("Weekly");

  const firstLetter = dashboardData.profile.name.charAt(0).toUpperCase();

  return (
    <AuthGuard>
      <main className="min-h-screen bg-[#f5f7fb] px-4 sm:px-8 py-8">
        {/* HEADER */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div className="flex flex-col gap-4">
            {/* <h1 className="text-2xl sm:text-3xl font-bold text-sky-950">
              Dashboard
            </h1> */}
            <p className="text-black-500 font-bold text-3xl pt-16">
              Welcome back, {dashboardData.profile.name} 👋
            </p>
            <p className="text-gray-500 text-lg">{dashboardData.greeting}</p>
          </div>

          {/* Profile Avatar */}
          {/* <div className="h-12 w-12 rounded-full bg-sky-950 text-white flex items-center justify-center text-xl font-bold">
            {firstLetter}
          </div> */}
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {dashboardData.stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-center"
            >
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h3 className="text-3xl font-bold text-sky-950">
                  {item.value}
                </h3>
              </div>
              <div
                className={`h-12 w-12 rounded-lg ${item.color} flex items-center justify-center text-white`}
              >
                📘
              </div>
            </div>
          ))}
        </div>

        {/* PERFORMANCE + COURSES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* PERFORMANCE */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-lg text-sky-950">
                Overall Performance
              </h2>

              {/* Dropdown */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border rounded-lg px-3 py-1 text-sm outline-none"
              >
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            {/* BAR CHART */}
            <div className="flex items-end gap-4 h-64">
              {dashboardData.performance.weekly.map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-blue-100 rounded-lg h-full relative">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-sky-600 rounded-lg transition-all"
                      style={{ height: `${item.value}%` }}
                    />
                  </div>
                  <span className="mt-2 text-xs text-gray-500">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CURRENT COURSES */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="font-semibold text-lg text-sky-950 mb-6">
              Current Courses
            </h2>

            <div className="space-y-6">
              {dashboardData.courses.map((course, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{course.title}</span>
                    <span className="text-sm text-gray-500">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${course.color}`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EXAM REPORT */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold text-lg text-sky-950 mb-6">
            Last Month Exam Report
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-gray-400">
                  <th className="text-left py-2">Subject</th>
                  <th className="text-center py-2">Score</th>
                  <th className="text-right py-2">Grade</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.exams.map((exam, i) => (
                  <tr key={i} className="border-b last:border-none">
                    <td className="py-3">{exam.subject}</td>
                    <td className="py-3 text-center">{exam.score}</td>
                    <td className="py-3 text-right font-semibold">
                      {exam.grade}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}
