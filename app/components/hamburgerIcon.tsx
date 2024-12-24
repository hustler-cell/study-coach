import React from 'react';

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="lg:hidden mt-[5px] flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 z-10"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span className={`bg-white block h-0.5 w-full rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
      <span className={`bg-white block h-0.5 w-full rounded-sm transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : ''}`} />
      <span className={`bg-white block h-0.5 w-full rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
    </button>
  );
};

export default HamburgerIcon;

