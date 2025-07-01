
import React from 'react';

export const OccupancyCard: React.FC = () => {
  return (
    <article className="h-[389px] border border-gray-200 rounded-xl p-6 shadow-sm bg-[#f6f7ff]">
      <div className="flex items-start gap-6 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
          <img 
            src="/lovable-uploads/84d9499d-2461-49f9-bc7a-c21e8858962c.png" 
            alt="Building icon" 
            className="w-16 h-16" 
          />
        </div>
        <div className="flex-1">
          <h2 className="text-[rgba(46,75,181,1)] text-2xl font-semibold mb-2">
            Building Occupancy
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-lg">Total Capacity</span>
            <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-3 py-1">
              <span className="text-[rgba(33,63,172,1)] text-xl font-bold">62</span>
              <span className="text-gray-600">/552</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table */}
      <div className="w-full overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-[rgba(37,56,120,1)] text-white">
              <th className="w-1/4 px-4 py-3 text-center font-medium border-r border-gray-300">ZONE</th>
              <th className="w-1/4 px-4 py-3 text-center font-medium border-r border-gray-300">Capacity</th>
              <th className="w-1/4 px-4 py-3 text-center font-medium border-r border-gray-300">Zone</th>
              <th className="w-1/4 px-4 py-3 text-center font-medium">Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 text-center text-gray-600 border-r border-gray-200">-</td>
              <td className="px-4 py-3 text-center text-gray-600 border-r border-gray-200">-</td>
              <td className="px-4 py-3 text-center text-gray-600 border-r border-gray-200">-</td>
              <td className="px-4 py-3 text-center text-gray-600">-</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="px-4 py-3 text-center text-gray-600 border-r border-gray-200">-</td>
              <td className="px-4 py-3 text-center text-gray-600 border-r border-gray-200">-</td>
              <td className="px-4 py-3 text-center text-gray-600 border-r border-gray-200">-</td>
              <td className="px-4 py-3 text-center text-gray-600">-</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-center text-gray-600 border-r border-gray-200">-</td>
              <td className="px-4 py-3 text-center text-gray-600 border-r border-gray-200">-</td>
              <td className="px-4 py-3 text-center text-gray-600 border-r border-gray-200">-</td>
              <td className="px-4 py-3 text-center text-gray-600">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};
