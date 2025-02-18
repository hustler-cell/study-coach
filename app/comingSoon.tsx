"use client";

export default function ComingSoon() {
  return (
    <div className="container min-h-screen px-2 flex flex-col justify-center items-center bg-[#f7fafc]">
      <main className="main py-20 flex-1 flex flex-col justify-center items-center text-center gap-10">
        <h1 className="title m-0 leading-5 text-5xl text-[#2d3748]">
          Coming Soon!
        </h1>
        <p className="description leading-6 text-2xl mt-4 text-[#4a5568]">
          We&apos;re working hard to bring you the ultimate student coaching
          experience. Stay tuned!
        </p>
        {/* <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Student studying"
            className="image"
          />
        </div> */}
      </main>
    </div>
  );
}
