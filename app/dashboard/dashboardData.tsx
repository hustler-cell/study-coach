export const dashboardData = {
  profile: {
    name: "Nitya Priya",
  },
  greeting: "Here's what's happening with your learning progress today.",

  stats: [
    { title: "Courses in Progress", value: 6, color: "bg-blue-100" },
    { title: "Courses Completed", value: 3, color: "bg-green-100" },
    { title: "Pending Assignments", value: 5, color: "bg-orange-100" },
    { title: "Average Score", value: "82%", color: "bg-purple-100" },
  ],

  performance: {
    weekly: [
      { day: "Mon", value: 65 },
      { day: "Tue", value: 80 },
      { day: "Wed", value: 50 },
      { day: "Thu", value: 90 },
      { day: "Fri", value: 75 },
      { day: "Sat", value: 40 },
      { day: "Sun", value: 70 },
    ],
  },

  courses: [
    {
      title: "Mathematics",
      progress: 75,
      color: "bg-blue-500",
    },
    {
      title: "Science",
      progress: 60,
      color: "bg-green-500",
    },
    {
      title: "English",
      progress: 90,
      color: "bg-purple-500",
    },
  ],

  exams: [
    { subject: "Mathematics", score: 88, grade: "A" },
    { subject: "Science", score: 76, grade: "B+" },
    { subject: "English", score: 92, grade: "A+" },
    { subject: "History", score: 69, grade: "B" },
  ],
};
