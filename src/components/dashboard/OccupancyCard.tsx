import React from 'react';
import { DataTable } from '../ui/DataTable';

export const OccupancyCard: React.FC = () => {
  const tableHeaders = [
    { content: 'ZONE' },
    { content: 'Capacity' },
    { content: 'Zone' },
    { content: 'Capacity' },
  ];

  const tableRows = [
    { cells: [{ content: '' }, { content: '' }, { content: '' }, { content: '' }] },
    { cells: [{ content: '' }, { content: '' }, { content: '' }, { content: '' }] },
    { cells: [{ content: '' }, { content: '' }, { content: '' }, { content: '' }] },
  ];

  return (
    <article className="bg-[rgba(247,248,255,1)] border flex min-w-60 min-h-[389px] gap-[45px_56px] flex-wrap grow shrink w-[398px] my-auto px-[23px] py-[38px] rounded-xl border-[rgba(37,57,120,1)] border-solid max-md:max-w-full max-md:px-5">
      <div className="rotate-[3.141592653589793rad] bg-[rgba(224,227,253,1)] flex w-[85px] shrink-0 h-[86px] gap-2.5 rounded-[677px]" />
      <div className="flex min-w-60 flex-col items-stretch justify-center grow shrink w-[263px]">
        <div className="flex w-full flex-col items-stretch">
          <h2 className="text-[rgba(46,75,181,1)] text-3xl font-semibold">
            Building Occupancy
          </h2>
          <div className="flex items-center gap-2 leading-[1.4] mt-2.5">
            <span className="text-[#7B809A] text-right text-lg font-light self-stretch my-auto">
              Total Capacity
            </span>
            <div className="self-stretch text-3xl text-[rgba(52,71,103,1)] font-bold text-center w-[110px] my-auto">
              <div className="rounded bg-[rgba(189,203,253,0.3)] border flex min-h-[42px] w-full border-[rgba(39,60,134,1)] border-solid" />
              <div className="mt-2">
                <span className="font-extrabold text-[rgba(33,63,172,1)]">62</span>
                <span className="text-[rgba(55,54,60,1)]">/552</span>
              </div>
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
