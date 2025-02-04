"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { images } from "../constants";
import Image from "next/image";

// Form data type declaration
interface FormData {
  studentName: string;
  gender: string;
  location: string;
  schoolBoard: string;
  phoneNumber: string;
  email: string;
  date: string;
  pincode: string;
}

const StudentDetails = () => {
  const { BannerImg, ButtonImg } = images;
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    gender: "",
    phoneNumber: "",
    schoolBoard: "",
    location: "",
    email: "",
    pincode: "",
    date: "",
  });

  const [isFormValid, setIsFormvalid] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  //check all fields are filled & valid
  useEffect(() => {
    const isValid =
      Object.values(formData).every((field) => field.trim() !== "") &&
      /^[0-9]{6}$/.test(formData.pincode); //validate pincode
    setIsFormvalid(isValid);
  }, [formData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePincodeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 6) {
      setFormData((prev) => ({ ...prev, pincode: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form Submitted:", formData);
    }
  };
  return (
    <main className="bg-[#0F509C]">
      <div className="mt-10 w-full pt-0 p-[85px] max-md:px-[20px] pb-0 max-md:mt-10 max-md:max-w-full relative">
        <Image
          src={BannerImg}
          alt="image"
          height={500}
          width={500}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        />
        <form
          className="input_container flex flex-col gap-5 pt-[200px] pb-[70px] mt-[200px] max-sm:mt-[150px]"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-7 md:px-8">
            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-white pb-2">
                Student Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="studentName"
                placeholder="Enter Full Name"
                required
                className="border p-3 rounded-md w-full"
                value={formData.studentName}
                onChange={handleChange}
              />
            </div>
            {/* GENDER */}
            <div>
              <label className="block text-sm font-medium text-white pb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                className="border p-3 rounded-md w-full"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* PHONE NUMBER */}
            <div>
              <label className="block text-sm font-medium text-white pb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                pattern="[0-9]{10}"
                className="border p-3 rounded-md w-full"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            {/* School Board */}
            <div>
              <label className="block text-sm font-medium text-white pb-2">
                School Board <span className="text-red-500">*</span>
              </label>
              <select
                name="schoolBoard"
                className="border p-3 rounded-md w-full"
                value={formData.schoolBoard}
                onChange={handleChange}
                required
              >
                <option value="">Select School Board</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
                <option value="IB">CHSE</option>
              </select>
            </div>
            {/* Location With City */}
            <div>
              <label className="block text-sm font-medium text-white pb-2">
                Current Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter Location with City"
                required
                className="border p-3 rounded-md w-full"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-white pb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="border p-3 rounded-md w-full"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {/* Pincode */}
            <div>
              <label className="block text-sm font-medium text-white pb-2">
                Pincode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pincode"
                placeholder="Enter pincode"
                className="border p-3 rounded-md w-full"
                value={formData.pincode}
                onChange={handlePincodeInput}
                maxLength={6}
                pattern="\d{6}"
                required
              />
            </div>
            {/* DAte */}
            <div>
              <label className="block text-sm font-medium text-white pb-2">
                Select Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                className="border p-3 rounded-md w-full"
                value={formData.date}
                onChange={handleChange}
                required
                min={today}
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className={`py-3 px-6 rounded-md text-white flex justify-center items-center gap-4  ${
                isFormValid
                  ? "bg-[#0C67D1] hover:bg-white border-2 border-white hover:text-[#0C67D1]"
                  : "bg-gray-400 cursor-not-allowed"
              } transition duration-300`}
              // className="bg-[#0C67D1] hover:bg-white border-white hover:text-[#0C67D1] border"
              disabled={!isFormValid}
            >
              <Image alt="img" src={ButtonImg} height={25} width={25} />
              Book a Demo
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default StudentDetails;
