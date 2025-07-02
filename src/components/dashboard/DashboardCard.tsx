
import React from 'react';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, children, className = '' }) => {
  return (
    <article className={`bg-white border flex min-h-[350px] lg:min-h-[389px] flex-col overflow-hidden items-stretch w-full px-4 lg:px-[23px] py-6 lg:py-[38px] rounded-xl border-gray-200 shadow-sm ${className}`}>
      <header className="flex items-center gap-6 lg:gap-10 mb-4">
        <div className="rotate-[3.141592653589793rad] bg-[rgba(224,227,253,1)] flex w-[70px] lg:w-[85px] h-[70px] lg:h-[86px] gap-2.5 rounded-[677px] flex-shrink-0" />
        <h2 className="text-[rgba(46,75,181,1)] text-2xl lg:text-3xl font-semibold">{title}</h2>
      </header>
      <div className="flex-1">
        {children}
      </div>
    </article>
  );
};
