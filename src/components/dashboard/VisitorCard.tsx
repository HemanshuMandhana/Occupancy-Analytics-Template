import React from 'react';
import { DataTable } from '../ui/DataTable';

export const VisitorCard: React.FC = () => {
  const tableHeaders = [
    { content: 'Entrance', className: 'bg-[rgba(37,56,120,1)]' },
    { content: 'Visitors', className: 'bg-[rgba(37,56,120,1)]' },
    { content: 'Enterance', className: 'bg-[rgba(37,56,120,1)]' },
    { content: 'Visitors', className: 'bg-[rgba(37,56,120,1)]' },
  ];

  const tableRows = [
    { cells: [{ content: '' }, { content: '' }, { content: '' }, { content: '' }] },
    { 
      cells: [{ content: '' }, { content: '' }, { content: '' }, { content: '' }],
      className: 'bg-[rgba(236,239,253,1)]'
    },
    { cells: [{ content: '' }, { content: '' }, { content: '' }, { content: '' }] },
  ];

  return (
    <article className="bg-[rgba(247,248,255,1)] border flex min-w-60 min-h-[389px] gap-[45px_41px] overflow-hidden flex-wrap grow shrink w-[397px] my-auto px-[23px] py-[38px] rounded-xl border-[rgba(37,57,120,1)] border-solid max-md:max-w-full max-md:px-5">
      <div className="rotate-[3.141592653589793rad] flex w-[68px] shrink h-[86px] grow rounded-[677px]" />
      <div className="min-w-60 grow shrink w-[263px]">
        <div className="flex w-full flex-col items-stretch">
          <h2 className="text-[rgba(46,75,181,1)] text-3xl font-semibold">
            Total Visitor Count
          </h2>
          <div className="flex items-center gap-[9px] text-right leading-[1.4] mt-2.5">
            <span className="text-[#7B809A] text-lg font-light self-stretch my-auto">
              Total Count
            </span>
            <div className="self-stretch rounded bg-[rgba(189,203,253,0.3)] border min-h-[42px] gap-2.5 text-3xl text-[rgba(33,63,172,1)] font-extrabold whitespace-nowrap w-[66px] my-auto px-2 border-[rgba(39,60,134,1)] border-solid flex items-center justify-center">
              693
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-60 grow shrink w-[433px] max-md:max-w-full">
        <DataTable headers={tableHeaders} rows={tableRows} />
      </div>
    </article>
  );
};
