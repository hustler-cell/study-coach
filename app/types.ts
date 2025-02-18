import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface NavItemProps {
  text: string;
  isActive?: boolean;
}

export interface PlanFeatureProps {
  icon: string;
  text: string;
}

export interface PricingPlanProps {
  price: string;
  period: string;
  title: string;
  features: PlanFeatureProps[];
}

export interface WhyChooseUsCardProps {
  icon: string;
  title: string;
  description: string;
  readMore?: boolean;
  className?: string;
}

export interface FAQItemProps {
  question: string;
  answer?: string;
  isOpen?: boolean;
}
export interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  icon?: string;
  onClick?: () => void;
}

export interface HeroSectionProps {
  title: string;
  description: string;
  buttons: ButtonProps[];
  heroImage: string | StaticImport;
}

export interface StatItemProps {
  iconSrc: string;
  count: string;
  label: string;
  bgColor: string;
}

export interface EducatorBannerProps {
  text: string;
  imageSrc: string;
}

export interface CategoryCardProps {
  icon: string | StaticImport;
  title: string;
  description: string;
}
export interface PricingFeature {
  icon: StaticImport;
  text: string;
}

export interface PricingPlan {
  price: string;
  period: string;
  title: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText: string;
}

//Join As Educator

export interface JoinAsEducatorBannerProps {
  tagline: string;
  title: string;
  description: string;
  buttons: ButtonProps[];
  bannerImage: string | StaticImport;
  rectangleImage: string | StaticImport;
}

//faq

export interface FaqDataProps {
  id: number;
  question: string;
  answer: string;
}

export interface FaqProps {
  data: FaqDataProps;
  isActive: boolean;
  onToggle: () => void;
}

  export interface BoardItemProps {
    imageSrc: string;
    imageAlt: string;
    boardType: string;
  }
  
  export interface BoardItemsData {
    items: BoardItemProps[];
  }
  export interface CourseCardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
  }
  
  export interface CoursesProps {
    courses: CourseCardProps[];
  }
  export interface CourseCardPropsD {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
  }
  
  export interface CoursesPropsD {
    courses: CourseCardPropsD[];
  }

  export interface SocialIconProps {
    src: StaticImport;
    alt: string;
  }
  
  export interface FooterLinkProps {
    text: string;
  }
  
  export interface ContactButtonProps {
    text: string;
    iconSrc: StaticImport;
    alt: string;
  }

  export interface BenefitItem {
    imageUrl: string;
    title: string;
    description: string;
    hasBackground?: boolean;
  }
  
  export interface BenefitsRowProps {
    benefits: BenefitItem[];
  }

  export interface BenefitCardProps {
    imageUrl: string;
    title: string;
    description: string;
    hasBackground?: boolean;
  }