import * as React from "react";
import { Banner } from "./banner";
import { images } from "../constants";

export const BannerContent: React.FC = () => {
  const { bannerImage, rectangleImage } = images;
  //   const rectangleImage = "../Images/joinAsEdu/rectangle.png";
  //   console.log(rectangleImage, "landingHeroImg");
  const bannerData = {
    tagline: "Inspire. Educate. Empower.",
    title: "Be a Part of India's Largest Home Learning Platform",
    description:
      "Join us as an educator and become a part of a community shaping the future. Share your expertise, ignite curiosity, and make a lasting impact on eager minds. Together, let’s create a world of endless learning possibilities. Your journey to inspire starts here!",
    buttons: [
      {
        text: "BOOK FREE DEMO",
        variant: "primary" as const,
        href: "/book-demo",
      },
      {
        text: "Free classes for NEET & Coding",
        variant: "secondary" as const,
        icon: "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/96f24384e1eb66793e57939f330ec3690cc3bb3446613764fa0a24c443b43ee9?apiKey=0875a60df1154a34920056571d8491d3&",
      },
    ],
    bannerImage: bannerImage,
    rectangleImage: rectangleImage,
  };

  return <Banner {...bannerData} />;
};
