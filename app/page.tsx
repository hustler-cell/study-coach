'use client';
import React, { useState } from 'react';
import { HeroSectionContent } from './home-page/heroSectionContent';
import {Statistics} from './home-page/joinAsEdu'
import { ValueCategories } from './home-page/valueCategory';
const LandingPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
  
      <HeroSectionContent/>
      <Statistics />
      <ValueCategories />

    </div>
  );
};

export default LandingPage;

