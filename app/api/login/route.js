// import { NextResponse } from "next/server";

// const USERS = [
//   {
//     email: "admin@studycoach.com",
//     password: "Admin@123", // change later or hash
//   },
// ];

// export async function POST(req) {
//   const { email, password } = await req.json();

//   const user = USERS.find((u) => u.email === email && u.password === password);

//   if (!user) {
//     return NextResponse.json(
//       { message: "Invalid email or password" },
//       { status: 401 }
//     );
//   }

//   return NextResponse.json({ message: "Login successful" });
// }
