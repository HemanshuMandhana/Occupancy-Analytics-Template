
import React from 'react';

interface ComparisonTableProps {
  tableType: 'occupancy' | 'visitor';
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ tableType }) => {
  if (tableType === 'occupancy') {
    return (
      <div className="w-full overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-[rgba(37,56,120,1)] text-white">
              <th className="w-1/6 px-3 py-2 text-left font-medium text-sm border-r border-gray-300">ZONE</th>
              <th className="w-1/6 px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Last</th>
              <th className="w-1/6 px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Zone</th>
              <th className="w-1/6 px-3 py-2 text-left font-medium text-sm border-r border-gray-300">ZONE</th>
              <th className="w-1/6 px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Last</th>
              <th className="w-1/6 px-3 py-2 text-left font-medium text-sm">Zone</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(3)].map((_, index) => (
              <tr key={index} className={`border-b border-gray-200 ${index === 1 ? 'bg-gray-50' : ''}`}>
                <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                <td className="px-3 py-2 text-gray-600 text-sm">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (tableType === 'visitor') {
    return (
      <div className="w-full overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-[rgba(37,56,120,1)] text-white">
              <th className="w-1/6 px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Entrance</th>
              <th className="w-1/6 px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Last</th>
              <th className="w-1/6 px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Current</th>
              <th className="w-1/6 px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Entrance</th>
              <th className="w-1/6 px-3 py-2 text-left font-medium text-sm border-r border-gray-300">Last</th>
              <th className="w-1/6 px-3 py-2 text-left font-medium text-sm">Current</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(3)].map((_, index) => (
              <tr key={index} className={`border-b border-gray-200 ${index === 1 ? 'bg-gray-50' : ''}`}>
                <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                <td className="px-3 py-2 text-gray-600 text-sm border-r border-gray-200">-</td>
                <td className="px-3 py-2 text-gray-600 text-sm">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};
