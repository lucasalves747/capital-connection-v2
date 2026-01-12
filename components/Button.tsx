import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

interface ButtonProps {
  children?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  variant?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  children = "Quero Acelerar Meu Negócio", 
  fullWidth = false, 
  className = "",
  variant = 'primary'
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-lg uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-sm";
  
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-black shadow-cyan-500/20",
    outline: "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black"
  };

  return (
    <a 
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </a>
  );
};