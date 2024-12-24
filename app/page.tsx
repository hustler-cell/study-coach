'use client';
import React, { useState } from 'react';
import { HeroSectionContent } from './home-page/heroSectionContent';

const LandingPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
  
      <HeroSectionContent/>
    </div>
  );
};

export default LandingPage;

