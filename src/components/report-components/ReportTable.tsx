import React from 'react';
import { format } from 'date-fns';

interface ReportTableProps {
  buildingName: string;
  zone: string;
  entrance: string;
  fromDate: Date;
  toDate: Date;
  onDownload: () => void;
}

const ReportTable: React.FC<ReportTableProps> = ({
  buildingName,
  zone,
  entrance,
  fromDate,
  toDate,
  onDownload
}) => {
  return (
    <>
      {/* Report Results Section */}
      <div className="flex flex-row justify-between items-center mt-[2vh] gap-[1vw] flex-shrink-0">
        <div className="flex-1 min-w-0">
          <h2 className="font-semibold text-[rgba(48,66,127,1)]" style={{ fontSize: 'clamp(24px, 1.5vw, 32.68px)' }}>
            Data Report
          </h2>
          <p className="text-[#4267B1]" style={{ fontSize: 'clamp(16px, 1vw, 24px)' }}>
            Data: {fromDate ? format(fromDate, "dd/MM/yyyy") : "10/02/2025"} to {toDate ? format(toDate, "dd/MM/yyyy") : "18/02/2025"}
          </p>
        </div>
        <div className="flex-shrink-0">
          <button 
            className="hover:opacity-80 transition-opacity"
            onClick={onDownload}
            aria-label="Download data as Excel file"
          >
            {/* Download Button - visible on all screen sizes */}
            <img
              src="/images/Primary Download Button.svg"
              className="hidden sm:block w-auto h-auto object-contain"
              alt="Download button"
            />
            {/* Mobile view - Excel icon only */}
            <img
              src="/images/Excel icon.svg"
              className="block sm:hidden w-auto h-auto object-contain"
              alt="Download Excel file"
            />
          </button>
        </div>
      </div>

      {/* Data Table - Fixed header with scrollable body and invisible scrollbar */}
      <div className="flex-1 border border-gray-300 mt-[2vh] min-h-0 overflow-hidden">
        <div className="h-full overflow-auto scrollbar-hide">
          <table className="w-full border-collapse min-w-[700px]">
            <thead className="sticky top-0 z-10">
              <tr className="bg-[#4267B1] text-white">
                <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                  Building
                </th>
                <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                  Zone
                </th>
                <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                  From date
                </th>
                <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                  To date
                </th>
                <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                  In count
                </th>
                <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                  Out count
                </th>
                <th className="border border-gray-300 text-center font-medium px-[1vw] py-[1vh]" style={{ fontSize: 'clamp(10px, 1.1vw, 14px)' }}>
                  Occupancy
                </th>
              </tr>
            </thead>
            <tbody className="opacity-90">
              {Array.from({ length: 20 }).map((_, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#ECEFFD]"}
                >
                  <td
                    className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                    style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                  >
                    {index < 12 ? "Roddenberry" : "Building A"}
                  </td>
                  <td
                    className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                    style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                  >
                    Floor {Math.floor(index / 2) + 1}
                  </td>
                  <td
                    className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                    style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                  >
                    {format(fromDate, "dd/MM/yyyy")}
                  </td>
                  <td
                    className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                    style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                  >
                    {format(toDate, "dd/MM/yyyy")}
                  </td>
                  <td
                    className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                    style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                  >
                    {Math.floor(Math.random() * 50) + 20}
                  </td>
                  <td
                    className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                    style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                  >
                    {Math.floor(Math.random() * 40) + 15}
                  </td>
                  <td
                    className="border border-gray-300 text-center px-[1vw] py-[1vh]"
                    style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
                  >
                    {Math.floor(Math.random() * 30) + 10}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
    </>
  );
};

export default ReportTable;