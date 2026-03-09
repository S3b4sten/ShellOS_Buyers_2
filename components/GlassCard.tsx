import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  onClick,
  hoverEffect = true
}) => {
  return (
    <div 
      onClick={onClick}
      className={`
        glass-card rounded-xl p-6 relative overflow-hidden
        ${hoverEffect ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Clean white background, minimal decoration if any */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};