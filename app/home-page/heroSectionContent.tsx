import * as React from 'react';
import { HeroSection } from '../home-page/heroSection';

export const HeroSectionContent: React.FC = () => {
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
    heroImage: "https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/8a28b10bb841d2c5f04c2fc434962454b67addc4eace97d6a638b9fc629a6290?apiKey=0875a60df1154a34920056571d8491d3&"
  };

  return <HeroSection {...heroData} />;
}