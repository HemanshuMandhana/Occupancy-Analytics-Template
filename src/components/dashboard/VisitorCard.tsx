
import React from 'react';

export const VisitorCard: React.FC = () => {
  return (
    <article className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
      <div className="flex items-start gap-6 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
          <img 
            src="/lovable-uploads/c2137da9-89d7-4a16-b4c7-1371e400e7b7.png" 
            alt="Visitor icon" 
            className="w-10 h-10" 
          />
        </div>
        <div className="flex-1">
          <h2 className="text-[rgba(46,75,181,1)] text-2xl font-semibold mb-2">
            Total Visitor Count
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-lg">Total Count</span>
            <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-4 py-2">
              <span className="text-[rgba(33,63,172,1)] text-xl font-bold">693</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="bg-[rgba(37,56,120,1)] text-white">
              <th className="px-4 py-3 text-left font-medium">Entrance</th>
              <th className="px-4 py-3 text-left font-medium">Visitors</th>
              <th className="px-4 py-3 text-left font-medium">Entrance</th>
              <th className="px-4 py-3 text-left font-medium">Visitors</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 text-gray-600">-</td>
              <td className="px-4 py-3 text-gray-600">-</td>
              <td className="px-4 py-3 text-gray-600">-</td>
              <td className="px-4 py-3 text-gray-600">-</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="px-4 py-3 text-gray-600">-</td>
              <td className="px-4 py-3 text-gray-600">-</td>
              <td className="px-4 py-3 text-gray-600">-</td>
              <td className="px-4 py-3 text-gray-600">-</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-gray-600">-</td>
              <td className="px-4 py-3 text-gray-600">-</td>
              <td className="px-4 py-3 text-gray-600">-</td>
              <td className="px-4 py-3 text-gray-600">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};
