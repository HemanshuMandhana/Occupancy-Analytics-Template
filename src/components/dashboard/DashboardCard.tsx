import React from 'react';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, children, className = '' }) => {
  return (
    <article className={`bg-[rgba(247,248,255,1)] border flex min-w-60 min-h-[389px] flex-col overflow-hidden items-stretch grow shrink w-[398px] my-auto px-[23px] py-[38px] rounded-xl border-[rgba(37,57,120,1)] border-solid max-md:max-w-full max-md:px-5 ${className}`}>
      <header className="flex items-center gap-10">
        <div className="rotate-[3.141592653589793rad] bg-[rgba(224,227,253,1)] flex w-[85px] shrink-0 h-[86px] gap-2.5 rounded-[677px]" />
        <h2 className="text-[rgba(46,75,181,1)] text-3xl font-semibold">{title}</h2>
      </header>
      <div className="flex-1 mt-4">
        {children}
      </div>
    </article>
  );
};
