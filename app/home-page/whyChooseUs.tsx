import React from "react";
import { BenefitsRow } from "../components/benefitRow";
import { motion } from "framer-motion";

const benefitsData = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/33f654e97ba05c20d9c85085d076c4ca33055cc6d178bf648f40e1d2539dab77?placeholderIfAbsent=true",
    title: "Free Demo",
    description:
      "Experience our teaching quality before you commit with a free demo class. Switch Experience our teaching quality before you commit with a free demo class. Switch ...",
    hasBackground: true,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/a8affafadd2cff5a0aa5ea3f6f945faa59ed7c7338249f160f2df36cedc43877?placeholderIfAbsent=true",
    title: "Customizable Classes",
    description:
      "Our one-on-one instruction ensures a customized learning experience.",
    hasBackground: false,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/ea6108ec77ffda4bc6579967d3300f7a795e5ceb2028ff288abd3f62cb9fa99a?placeholderIfAbsent=true",
    title: "Flexible Educator Selection",
    description:
      "Learn from experienced professionals who are dedicated to your success.",
    hasBackground: false,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/33f654e97ba05c20d9c85085d076c4ca33055cc6d178bf648f40e1d2539dab77?placeholderIfAbsent=true",
    title: "Dedicated Mentorship",
    description:
      "Experience our teaching quality before you commit with a free demo class. Switch Experience our teaching quality before you commit with a free demo class. Switch ...",
    hasBackground: true,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/a8affafadd2cff5a0aa5ea3f6f945faa59ed7c7338249f160f2df36cedc43877?placeholderIfAbsent=true",
    title: "Personalized Learning Experience",
    description:
      "Our one-on-one instruction ensures a customized learning experience.",
    hasBackground: false,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/ea6108ec77ffda4bc6579967d3300f7a795e5ceb2028ff288abd3f62cb9fa99a?placeholderIfAbsent=true",
    title: "Expert Tutors",
    description:
      "Learn from experienced professionals who are dedicated to your success.",
    hasBackground: false,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center pt-2 pb-20 w-[90%]"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-indigo-950 text-center"
      >
        Why Choose Us
      </motion.h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Discover the benefits of learning with our expert tutors and
        personalized experience.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full px-[30px]"
      >
        <BenefitsRow benefits={benefitsData} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full "
      ></motion.div>
    </motion.div>
  );
};

export default WhyChooseUs;
