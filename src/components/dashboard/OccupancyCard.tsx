
import React from 'react';

export const OccupancyCard: React.FC = () => {
  return (
    <article className="border border-gray-200 rounded-xl p-3 shadow-sm bg-white h-full flex flex-col">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
          <img 
            src="/lovable-uploads/84d9499d-2461-49f9-bc7a-c21e8858962c.png" 
            alt="Building icon" 
            className="w-8 h-8" 
          />
        </div>
        <div className="flex-1">
          <h2 className="text-[rgba(46,75,181,1)] text-lg font-semibold mb-1">
            Building Occupancy
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Total Capacity</span>
            <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-2 py-1">
              <span className="text-[rgba(33,63,172,1)] text-lg font-bold">62</span>
              <span className="text-gray-600 text-sm">/552</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table */}
      <div className="flex-1 w-full overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full table-fixed h-full">
          <thead>
            <tr className="bg-[rgba(37,56,120,1)] text-white">
              <th className="w-1/4 px-2 py-2 text-center font-medium border-r border-gray-300 text-xs">ZONE</th>
              <th className="w-1/4 px-2 py-2 text-center font-medium border-r border-gray-300 text-xs">Capacity</th>
              <th className="w-1/4 px-2 py-2 text-center font-medium border-r border-gray-300 text-xs">Zone</th>
              <th className="w-1/4 px-2 py-2 text-center font-medium text-xs">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-2 py-2 text-center text-gray-600 border-r border-gray-200 text-xs">-</td>
              <td className="px-2 py-2 text-center text-gray-600 border-r border-gray-200 text-xs">-</td>
              <td className="px-2 py-2 text-center text-gray-600 border-r border-gray-200 text-xs">-</td>
              <td className="px-2 py-2 text-center text-gray-600 text-xs">-</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="px-2 py-2 text-center text-gray-600 border-r border-gray-200 text-xs">-</td>
              <td className="px-2 py-2 text-center text-gray-600 border-r border-gray-200 text-xs">-</td>
              <td className="px-2 py-2 text-center text-gray-600 border-r border-gray-200 text-xs">-</td>
              <td className="px-2 py-2 text-center text-gray-600 text-xs">-</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-center text-gray-600 border-r border-gray-200 text-xs">-</td>
              <td className="px-2 py-2 text-center text-gray-600 border-r border-gray-200 text-xs">-</td>
              <td className="px-2 py-2 text-center text-gray-600 border-r border-gray-200 text-xs">-</td>
              <td className="px-2 py-2 text-center text-gray-600 text-xs">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};
