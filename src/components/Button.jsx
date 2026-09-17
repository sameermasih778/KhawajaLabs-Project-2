import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  icon: Icon,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200 active:scale-95 shadow-lg shadow-white/5 font-semibold',
    secondary: 'bg-dark-3 text-white hover:bg-dark-5 border border-white/10 hover:border-white/20 active:scale-95',
    outline: 'border border-white/15 text-white hover:bg-white/5 hover:border-white/30 active:scale-95',
    ghost: 'text-grey-5 hover:text-white hover:bg-white/5 active:scale-95',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5 font-semibold',
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </motion.button>
  );
}
