import React from 'react';

interface TableCell {
  content: React.ReactNode;
  className?: string;
}

interface TableRow {
  cells: TableCell[];
  className?: string;
}

interface DataTableProps {
  headers: TableCell[];
  rows: TableRow[];
  className?: string;
}

export const DataTable: React.FC<DataTableProps> = ({ headers, rows, className = '' }) => {
  return (
    <div className={`bg-[rgba(255,255,255,0)] border w-full overflow-hidden rounded-[5px] border-[rgba(173,173,173,1)] border-solid ${className}`}>
      <div className="bg-[rgba(255,255,255,0)] flex w-full items-stretch overflow-hidden text-[15px] text-white font-semibold whitespace-nowrap text-center leading-[1.3]">
        {headers.map((header, index) => (
          <div
            key={index}
            className={`bg-[rgba(255,255,255,0.05)] flex-1 shrink basis-[0%] border-[rgba(173,173,173,1)] border-t border-l ${header.className || ''}`}
          >
            <div className="flex-1 shrink basis-[0%] w-full overflow-hidden px-[15px] py-[13px]">
              {header.content}
            </div>
          </div>
        ))}
      </div>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`bg-[rgba(255,255,255,0)] flex w-full items-stretch overflow-hidden ${row.className || ''}`}
        >
          {row.cells.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`bg-[rgba(255,255,255,0.002)] flex-1 shrink basis-[0%] border-[rgba(173,173,173,1)] border-t border-l ${cell.className || ''}`}
            >
              <div className="flex min-h-[45px] w-full py-[13px]">
                {cell.content}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
