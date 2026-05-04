'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface GlassCardAnimatedProps {
  children: ReactNode;
  className?: string;
}

/**
 * GlassCardAnimated Component
 * Enhances the base GlassCard with hover glow and scale effects.
 */
export default function GlassCardAnimated({ children, className = '' }: GlassCardAnimatedProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className={`
        relative overflow-hidden
        backdrop-blur-xl bg-white/5 border border-white/20 
        rounded-2xl shadow-glass group ${className}
      `}
    >
      {/* Dynamic Glow Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
