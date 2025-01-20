'use client';
import { HeroSectionContent } from './home-page/heroSectionContent';
import {Statistics} from './home-page/joinAsEdu'
import { ValueCategories } from './home-page/valueCategory';
import { PricingSection } from './home-page/pricing/pricingSection';
import { CourseBoard } from './home-page/courseBoard';
import { Courses } from './home-page/courses';
const LandingPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
  
      <HeroSectionContent/>
      <Statistics />
      <ValueCategories />
      <CourseBoard/>
      <Courses/>
<PricingSection/>
    </div>
  );
};

export default LandingPage;

