"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { images } from "../constants";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  studentName: string;
  gender: string;
  location: string;
  schoolBoard: string;
  phoneNumber: string;
  email: string;
  date: string;
  pincode: string;
  class: string;
  subject: string;
  schoolName: string;
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
    class: "",
    subject: "",
    schoolName: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  useEffect(() => {
    const requiredFieldsFilled =
      formData.studentName.trim() &&
      formData.gender &&
      formData.location.trim() &&
      formData.schoolBoard &&
      formData.phoneNumber.trim() &&
      formData.date;

    setIsFormValid(Boolean(requiredFieldsFilled));
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
    if (!isFormValid) return;

    emailjs
      .send(
        "service_v56lrwn", // Replace with your EmailJS service ID
        "template_rzwscxo", // Replace with your EmailJS template ID
        {
          student_name: formData.studentName,
          gender: formData.gender,
          location: formData.location,
          school_board: formData.schoolBoard,
          school_name: formData.schoolName,
          phone_number: formData.phoneNumber,
          email: formData.email,
          date: formData.date,
          pincode: formData.pincode,
          class: formData.class,
          subject: formData.subject,
        },
        "QieT3NiLbMq9hmH42" // Replace with your EmailJS public key
      )
      .then(() => {
        toast.success("Form submitted successfully!");
        setFormData({
          studentName: "",
          gender: "",
          phoneNumber: "",
          schoolBoard: "",
          location: "",
          email: "",
          pincode: "",
          date: "",
          class: "",
          subject: "",
          schoolName: "",
        });
      })
      .catch((error) => {
        toast.error("Failed to submit form. Please try again.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <main className="bg-[#0F509C]">
      <ToastContainer position="bottom-center" autoClose={3000} />
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
            {/* Input Fields */}
            {[
              {
                name: "studentName",
                label: "Student Name",
                type: "text",
                required: true,
              },
              {
                name: "gender",
                label: "Gender",
                type: "select",
                options: ["Male", "Female", "Other"],
                required: true,
              },
              {
                name: "schoolBoard",
                label: "School Board",
                type: "select",
                options: ["CBSE", "ICSE", "State Board", "CHSE"],
                required: true,
              },
              {
                name: "schoolName",
                label: "School Name",
                type: "text",
                required: true,
              },
              {
                name: "class",
                label: "Class",
                type: "select",
                options: [
                  "1st",
                  "2nd",
                  "3rd",
                  "4th",
                  "5th",
                  "6th",
                  "7th",
                  "8th",
                  "9th",
                  "10th",
                  "11th",
                  "12th",
                ],
                required: true,
              },
              {
                name: "subject",
                label: "Subject",
                type: "select",
                options: [
                  "All",
                  "Mathematics",
                  "Science",
                  "Social Studies",
                  "English",
                  "Biology",
                  "Coding",
                ],
                required: true,
              },
              {
                name: "location",
                label: "Current Location",
                type: "text",
                required: true,
              },
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                required: true,
                pattern: "[0-9]{10}",
              },
              {
                name: "email",
                label: "Email Address",
                type: "email",
                required: false,
              },
              {
                name: "pincode",
                label: "Pincode",
                type: "text",
                required: false,
              },
              {
                name: "date",
                label: "Select Date",
                type: "date",
                required: true,
                min: minDate,
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-white pb-2">
                  {field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    required={field.required}
                    value={formData[field.name as keyof FormData] as string}
                    onChange={handleChange}
                    className="border p-3 rounded-md w-full text-black"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt.toLowerCase()}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof FormData] as string}
                    onChange={
                      field.name === "pincode"
                        ? handlePincodeInput
                        : handleChange
                    }
                    placeholder={`Enter ${field.label}`}
                    className="border p-3 rounded-md w-full text-black"
                    required={field.required}
                    pattern={field.pattern}
                    min={field.min}
                    maxLength={field.name === "pincode" ? 6 : undefined}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className={`py-3 px-6 rounded-md text-white flex justify-center items-center gap-4 ${
                isFormValid
                  ? "bg-[#0C67D1] hover:bg-white border-2 border-white hover:text-[#0C67D1] hover:font-semibold"
                  : "bg-gray-400 cursor-not-allowed"
              } transition duration-300`}
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
