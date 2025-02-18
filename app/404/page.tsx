import Image from "next/image";
import React from "react";
import { images } from "../constants";
import Link from "next/link";

const NotFoundPage = () => {
  const { NotFound } = images;
  return (
    <main className="min-h-screen flex flex-row justify-around items-center gap-10 w-full px-[100px] max-md:px-5 relative mx-auto bg-white">
      <div className="left_container flex flex-col gap-4 ">
        <p className="text-5xl font-bold">Oops.... </p>
        <p className="text-3xl font-normal">Page not found</p>
        <div>
          <p className="text-sm font-normal">
            This Page doesn`t exist or was removed!
          </p>
          <p className="text-sm font-normal">We suggest you back to home.</p>
        </div>
        <div>
          <Link href={"/"}>
            <button className="mt-10 px-4 py-3 bg-[#0F509C] rounded-xl border border-solid border-zinc-300  text-white hover:bg-sky-600 ">
              Back to home
            </button>
          </Link>
        </div>
      </div>
      <div className="right_container flex justify-center items-center">
        <Image src={NotFound} alt="404-out" height={700} width={700} />
      </div>
    </main>
  );
};

export default NotFoundPage;
