
import React from 'react';
import { DashboardChart } from './DashboardChart';

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
  const isChartCard = title.toLowerCase().includes('occupancy');

  return (
    <article 
      className={`bg-white border flex flex-col overflow-hidden items-stretch rounded-xl border-gray-200 shadow-sm ${className}`}
      style={{
        // FHD: 496.65px × 389.06px
        width: 'clamp(300px, 25.86vw, 496.65px)',
        height: 'clamp(280px, 20.27vh, 389.06px)',
        minWidth: '300px',
        minHeight: '280px'
      }}
    >
      <header className="flex items-center gap-4 lg:gap-6 mb-4 px-4 lg:px-[23px] pt-4 lg:pt-[24px]">
        <div 
          className="bg-[rgba(224,227,253,1)] flex gap-2.5 rounded-full flex-shrink-0"
          style={{
            width: 'clamp(40px, 4.38vw, 85px)',
            height: 'clamp(40px, 4.48vh, 86px)'
          }}
        />
        <h2 
          className="text-[rgba(46,75,181,1)] font-semibold"
          style={{ fontSize: 'clamp(1rem, 1.56vw, 1.5rem)' }}
        >
          {title}
        </h2>
      </header>
      
      <div className="flex-1 px-4 lg:px-[23px] pb-4 lg:pb-[24px] overflow-hidden">
        {isChartCard ? (
          <DashboardChart title={title} />
        ) : (
          children
        )}
      </div>
    </article>
  );
};
