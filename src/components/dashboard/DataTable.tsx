
import React from 'react';

interface DataTableProps {
  type: 'occupancy' | 'visitor';
}

export const DataTable: React.FC<DataTableProps> = ({ type }) => {
  if (type === 'occupancy') {
    return (
      <div className="w-full overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-[rgba(37,56,120,1)] text-white">
              <th className="w-1/4 px-2 lg:px-4 py-2 lg:py-3 text-center font-medium text-xs lg:text-sm border-r border-gray-300">ZONE</th>
              <th className="w-1/4 px-2 lg:px-4 py-2 lg:py-3 text-center font-medium text-xs lg:text-sm border-r border-gray-300">Capacity</th>
              <th className="w-1/4 px-2 lg:px-4 py-2 lg:py-3 text-center font-medium text-xs lg:text-sm border-r border-gray-300">Zone</th>
              <th className="w-1/4 px-2 lg:px-4 py-2 lg:py-3 text-center font-medium text-xs lg:text-sm">Capacity</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(3)].map((_, index) => (
              <tr key={index} className={`border-b border-gray-200 ${index === 1 ? 'bg-gray-50' : ''}`}>
                <td className="px-2 lg:px-4 py-2 lg:py-3 text-center text-gray-600 text-xs lg:text-sm border-r border-gray-200">-</td>
                <td className="px-2 lg:px-4 py-2 lg:py-3 text-center text-gray-600 text-xs lg:text-sm border-r border-gray-200">-</td>
                <td className="px-2 lg:px-4 py-2 lg:py-3 text-center text-gray-600 text-xs lg:text-sm border-r border-gray-200">-</td>
                <td className="px-2 lg:px-4 py-2 lg:py-3 text-center text-gray-600 text-xs lg:text-sm">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (type === 'visitor') {
    return (
      <div className="w-full overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-[rgba(37,56,120,1)] text-white">
              <th className="w-1/4 px-2 lg:px-4 py-2 lg:py-3 text-center font-medium text-xs lg:text-sm border-r border-gray-300">Entrance</th>
              <th className="w-1/4 px-2 lg:px-4 py-2 lg:py-3 text-center font-medium text-xs lg:text-sm border-r border-gray-300">Visitors</th>
              <th className="w-1/4 px-2 lg:px-4 py-2 lg:py-3 text-center font-medium text-xs lg:text-sm border-r border-gray-300">Entrance</th>
              <th className="w-1/4 px-2 lg:px-4 py-2 lg:py-3 text-center font-medium text-xs lg:text-sm">Visitors</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(3)].map((_, index) => (
              <tr key={index} className={`border-b border-gray-200 ${index === 1 ? 'bg-gray-50' : ''}`}>
                <td className="px-2 lg:px-4 py-2 lg:py-3 text-center text-gray-600 text-xs lg:text-sm border-r border-gray-200">-</td>
                <td className="px-2 lg:px-4 py-2 lg:py-3 text-center text-gray-600 text-xs lg:text-sm border-r border-gray-200">-</td>
                <td className="px-2 lg:px-4 py-2 lg:py-3 text-center text-gray-600 text-xs lg:text-sm border-r border-gray-200">-</td>
                <td className="px-2 lg:px-4 py-2 lg:py-3 text-center text-gray-600 text-xs lg:text-sm">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};
