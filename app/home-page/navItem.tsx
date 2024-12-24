import { NavItemProps } from '../types';

export const NavItem = ({ text, isActive }: NavItemProps) => {
  return (
    <div className="flex flex-col self-stretch whitespace-nowrap">
      <div>{text}</div>
      {isActive && (
        <div className="flex shrink-0 self-center  bg-sky-500 rounded-md h-[7px] w-[19px]" />
      )}
    </div>
  );
};