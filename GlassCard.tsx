
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`glass p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
