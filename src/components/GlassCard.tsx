import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Premium Glassmorphism Card
 * Standardized utility for the portfolio's visual language.
 */
const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`
        backdrop-blur-xl 
        bg-white/5 
        border border-white/20 
        rounded-2xl 
        transition-all 
        duration-300 
        hover:scale-[1.02] 
        hover:bg-white/10 
        shadow-glass 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
