"use client";
import React, { useState } from "react";
import Link from "next/link";
import HamburgerIcon from "../components/hamburgerIcon";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  href: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  isActive,
  onClick,
}) => (
  <Link
    href={href}
    className="relative hover:text-gray-300 p-2 transition-colors duration-200"
    onClick={onClick}
  >
    {label}
    {isActive && (
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-[#00A3FF] rounded-full" />
    )}
  </Link>
);

const navItems = [
  { label: "Home", href: "/" },
  // { label: "Services", href: "/services" },
  // { label: "Learnings", href: "/learnings" },
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/about" },
  // { label: "Educator", href: "/join-as-educator" },
  { label: "Book Demo", href: "/book-demo" },
  // { label: "404", href: "/404" },
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
      <nav className="flex flex-wrap gap-5 fixed h-[80px] z-[999999] lg:mt-[-10px] justify-between self-stretch px-16 py-6 w-full text-xl font-medium text-white bg-sky-950 max-md:px-5 max-md:max-w-full">
        <Link href="/">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/0875a60df1154a34920056571d8491d3/cd71e30f8224820710550f2455edd855b7592ef000cd4c01d38c7e1ffe1316d9?apiKey=0875a60df1154a34920056571d8491d3&"
            alt="Company Logo"
            className="object-contain shrink-0 max-w-full  mt-[-4px] aspect-[4.46] w-[200px]"
          />
        </Link>
        <div className="hidden lg:flex flex-wrap gap-10 items-start text-[16px] self-end">
          {navItems.map((item, index) => {
            const isHome = item.href === "/";
            const isActive = isHome
              ? pathname === "/"
              : pathname.startsWith(item.href);
            return <NavItem key={index} {...item} isActive={isActive} />;
          })}
        </div>
        <HamburgerIcon isOpen={isMenuOpen} onClick={toggleMenu} />
      </nav>

      {/* Mobile Menu */}
      <div
        className="lg:hidden fixed top-[80px] left-0 z-[99] right-0 bg-white transition-all shadow-lg duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: isMenuOpen ? "100vh" : "0" }}
      >
        <div className="flex flex-col items-center py-4 text-black">
          {navItems.map((item, index) => {
            const isHome = item.href === "/";
            const isActive = isHome
              ? pathname === "/"
              : pathname.startsWith(item.href);
            return (
              <NavItem
                key={index}
                {...item}
                isActive={isActive}
                onClick={() => setIsMenuOpen(false)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
