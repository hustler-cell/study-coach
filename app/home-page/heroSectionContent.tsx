import * as React from 'react';
import { HeroSection } from '../home-page/heroSection';
import { images } from '../constants';

export const HeroSectionContent: React.FC = () => {
  const {landingHeroImg}= images;
  console.log(landingHeroImg,'landingHeroImg')
  const heroData = {
    title: "Best Home Tutor in Bhubaneswar",
    description: "Finding Home Tutor in Bhubaneswar is now easier. Join us on a transformative journey to unlock your child's full potential",
    buttons: [
      {
        text: "BOOK FREE DEMO",
        variant: "primary" as const,
      },
      {
        text: "Free classes for NEET & Coding",
        variant: "secondary" as const,
        icon: "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/96f24384e1eb66793e57939f330ec3690cc3bb3446613764fa0a24c443b43ee9?apiKey=0875a60df1154a34920056571d8491d3&"
      }
    ],
    heroImage: landingHeroImg
  };

  return <HeroSection {...heroData} />;
}