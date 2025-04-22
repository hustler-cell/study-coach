import * as React from "react";
import { HeroSection } from "../home-page/heroSection";
import { images } from "../constants";

export const HeroSectionContent: React.FC = () => {
  const { landingHeroImg } = images;
  console.log(landingHeroImg, "landingHeroImg");
  const heroData = {
    title: "Find the Best Tutor in Bhubaneswar",
    description:
      "Looking for a home tutor in Bhubaneswar? We make it easy! Empower your child with expert guidance.",
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
    heroImage: landingHeroImg,
  };

  return <HeroSection {...heroData} />;
};
