
import React from 'react';

interface ResponsiveDashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ResponsiveDashboardCard: React.FC<ResponsiveDashboardCardProps> = ({ 
  title, 
  children, 
  className = '' 
}) => {
  return (
    <article 
      className={`bg-white border flex flex-col overflow-hidden items-stretch rounded-xl border-gray-200 shadow-sm ${className}`}
      style={{
        // Full HD: 496.65px × 389.06px
        // Using clamp for responsive scaling
        width: 'clamp(320px, 25.86vw, 496.65px)',
        height: 'clamp(300px, 20.27vh, 389.06px)',
        minWidth: '320px',
        minHeight: '300px'
      }}
    >
      <header className="flex items-center gap-4 lg:gap-6 mb-4 px-4 lg:px-[23px] pt-6 lg:pt-[38px]">
        <div 
          className="rotate-[3.141592653589793rad] bg-[rgba(224,227,253,1)] flex gap-2.5 rounded-[677px] flex-shrink-0"
          style={{
            width: 'clamp(50px, 4.38vw, 85px)',
            height: 'clamp(50px, 4.48vh, 86px)'
          }}
        />
        <h2 
          className="text-[rgba(46,75,181,1)] font-semibold"
          style={{ fontSize: 'clamp(1.25rem, 1.56vw, 1.875rem)' }}
        >
          {title}
        </h2>
      </header>
      <div className="flex-1 px-4 lg:px-[23px] pb-6 lg:pb-[38px] overflow-hidden">
        {children}
      </div>
    </article>
  );
};
