import * as React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ text, variant, icon, onClick }) => {
  const baseStyles = "px-8 py-4 rounded-[100px] min-h-[56px] font-semibold text-xl relative";
  const variantStyles = {
    primary: "bg-sky-800 text-zinc-100 w-[238px]",
    secondary: "bg-white text-gray-800 shadow-sm min-w-[240px] flex gap-2 items-center justify-center"
  };

  return (
    <>
      <style>
        {`
          @keyframes traveling-border {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animated-border::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: inherit;
            background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff, #ff00ff);
            background-size: 300% 300%;
            animation: traveling-border 2s linear infinite;
            z-index: -1;
          }
        `}
      </style>

      <button
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} max-md:px-5 ${text!=="BOOK FREE DEMO"?' animated-border':''}  max-md:w-full  max-md:mt-[10px]`}
        style={{
            whiteSpace:"nowrap",
          background: variant === 'primary' ? '#0F509C' : 'white',
          boxShadow: variant === 'secondary' 
          ? '0 0 25px rgba(0, 0, 0, 0.2)' 
          : '0 4px 6px rgba(0, 0, 0, 0.2)',
                }}
      >
        {icon && (
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        )}
        {text}
      </button>
    </>
  );
}

