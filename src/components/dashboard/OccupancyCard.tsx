import React from 'react';

export const OccupancyCard: React.FC = () => {
  return (
    <article className="h-[36.02vh] min-h-[300px] border border-gray-200 rounded-xl p-[2.22vh] shadow-sm bg-[#f6f7ff]">
      <div className="flex items-start gap-[2.22vh] mb-[2.22vh]">
        <div className="w-[5.93vh] h-[5.93vh] bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
          <img 
            src="/lovable-uploads/84d9499d-2461-49f9-bc7a-c21e8858962c.png" 
            alt="Building icon" 
            className="w-[5.93vh] h-[5.93vh]" 
          />
        </div>
        <div className="flex-1">
          <h2 className="text-[rgba(46,75,181,1)] text-[2.22vh] font-semibold mb-[0.74vh]">
            Building Occupancy
          </h2>
          <div className="flex items-center gap-[1.11vh]">
            <span className="text-gray-500 text-[1.67vh]">Total Capacity</span>
            <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-[1.11vh] py-[0.37vh]">
              <span className="text-[rgba(33,63,172,1)] text-[1.85vh] font-bold">62</span>
              <span className="text-gray-600">/552</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table */}
      <div className="w-full overflow-hidden rounded-[0.74vh] border border-gray-200">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-[rgba(37,56,120,1)] text-white">
              <th className="w-1/4 px-[1.48vh] py-[1.11vh] text-center font-medium border-r border-gray-300 text-[1.48vh]">ZONE</th>
              <th className="w-1/4 px-[1.48vh] py-[1.11vh] text-center font-medium border-r border-gray-300 text-[1.48vh]">Capacity</th>
              <th className="w-1/4 px-[1.48vh] py-[1.11vh] text-center font-medium border-r border-gray-300 text-[1.48vh]">Zone</th>
              <th className="w-1/4 px-[1.48vh] py-[1.11vh] text-center font-medium text-[1.48vh]">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 bg-[#FFFFFF00]">
              <td className="px-[1.48vh] py-[1.11vh] text-center text-gray-600 border-r border-gray-200 text-[1.48vh]">-</td>
              <td className="px-[1.48vh] py-[1.11vh] text-center text-gray-600 border-r border-gray-200 text-[1.48vh]">-</td>
              <td className="px-[1.48vh] py-[1.11vh] text-center text-gray-600 border-r border-gray-200 text-[1.48vh]">-</td>
              <td className="px-[1.48vh] py-[1.11vh] text-center text-gray-600 text-[1.48vh]">-</td>
            </tr>
            <tr className="border-b border-gray-200 bg-[#DADEFB5C]">
              <td className="px-[1.48vh] py-[1.11vh] text-center text-gray-600 border-r border-gray-200 text-[1.48vh]">-</td>
              <td className="px-[1.48vh] py-[1.11vh] text-center text-gray-600 border-r border-gray-200 text-[1.48vh]">-</td>
              <td className="px-[1.48vh] py-[1.11vh] text-center text-gray-600 border-r border-gray-200 text-[1.48vh]">-</td>
              <td className="px-[1.48vh] py-[1.11vh] text-center text-gray-600 text-[1.48vh]">-</td>
            </tr>
            <tr className="border-b border-gray-200 bg-[#FFFFFF00]">
              <td className="px-[1.48vh] py-[1.11vh] text-center text-gray-600 border-r border-gray-200 text-[1.48vh]">-</td>
              <td className="px-[1.48vh] py-[1.11vh] text-center text-gray-600 border-r border-gray-200 text-[1.48vh]">-</td>
              <td className="px-[1.48vh] py-[1.11vh] text-center text-gray-600 border-r border-gray-200 text-[1.48vh]">-</td>
              <td className="px-[1.48vh] py-[1.11vh] text-center text-gray-600 text-[1.48vh]">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};