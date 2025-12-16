import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  fullWidth, 
  children, 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wider rounded-sm';
  
  const variants = {
    primary: 'bg-[#15508b] text-white hover:bg-[#0f3d6b] focus:ring-[#15508b] shadow-md hover:shadow-lg',
    secondary: 'bg-secondary text-white hover:bg-black focus:ring-secondary',
    outline: 'border-2 border-[#15508b] text-[#15508b] hover:bg-[#15508b] hover:text-white',
    ghost: 'text-gray-700 hover:bg-gray-light hover:text-[#15508b]',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  return (
    <button
      className={twMerge(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};