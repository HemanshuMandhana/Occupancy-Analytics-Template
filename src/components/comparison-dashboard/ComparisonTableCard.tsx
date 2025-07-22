import React from 'react';

interface ComparisonTableCardProps {
  title: string;
  subtitle?: string;
  value?: string;
  tableType: 'occupancy' | 'visitor';
}

export const ComparisonTableCard: React.FC<ComparisonTableCardProps> = ({
  title,
  subtitle,
  value,
  tableType
}) => {
  const generateTableData = (count: number) => {
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      zone: `Zone ${index + 1}`,
      last: Math.floor(Math.random() * 100),
      current: Math.floor(Math.random() * 100),
      entrance: `Entrance ${String.fromCharCode(65 + index)}`
    }));
  };

  const tableData = generateTableData(10);

  const renderTables = () => {
    if (tableType === 'occupancy') {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.2vw] lg:gap-[0.68vw] w-full h-full">
          {/* Left Table */}
          <div className="w-full min-h-[12vh] lg:h-full overflow-hidden border border-gray-200 flex flex-col">
            <table className="w-full">
              <thead className="flex-shrink-0">
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">ZONE</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Zone</th>
                </tr>
              </thead>
            </table>
            <div className="flex-1 overflow-y-auto scrollbar-hide max-h-[16vh] sm:max-h-[16vh] lg:max-h-full">
              <table className="w-full">
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">{item.zone}</td>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">{item.last}</td>
                      <td className="w-1/3 text-gray-600 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">{item.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Table */}
          <div className="w-full min-h-[12vh] lg:h-full overflow-hidden border border-gray-200 flex flex-col">
            <table className="w-full">
              <thead className="flex-shrink-0">
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">ZONE</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Zone</th>
                </tr>
              </thead>
            </table>
            <div className="flex-1 overflow-y-auto scrollbar-hide max-h-[16vh] sm:max-h-[16vh] lg:max-h-full">
              <table className="w-full">
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">{item.zone}</td>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">{item.last}</td>
                      <td className="w-1/3 text-gray-600 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">{item.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (tableType === 'visitor') {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.2vw] lg:gap-[0.68vw] w-full h-full">
          {/* Left Table */}
          <div className="w-full min-h-[12vh] lg:h-full overflow-hidden border border-gray-200 flex flex-col">
            <table className="w-full">
              <thead className="flex-shrink-0">
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Entrance</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Current</th>
                </tr>
              </thead>
            </table>
            <div className="flex-1 overflow-y-auto scrollbar-hide max-h-[16vh] sm:max-h-[16vh] lg:max-h-full">
              <table className="w-full">
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">{item.entrance}</td>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">{item.last}</td>
                      <td className="w-1/3 text-gray-600 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">{item.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Table */}
          <div className="w-full min-h-[12vh] lg:h-full overflow-hidden border border-gray-200 flex flex-col">
            <table className="w-full">
              <thead className="flex-shrink-0">
                <tr className="bg-[rgba(37,56,120,1)] text-white">
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Entrance</th>
                  <th className="w-1/3 text-center font-medium border-r border-gray-300 text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Last</th>
                  <th className="w-1/3 text-center font-medium text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">Current</th>
                </tr>
              </thead>
            </table>
            <div className="flex-1 overflow-y-auto scrollbar-hide max-h-[16vh] sm:max-h-[16vh] lg:max-h-full">
              <table className="w-full">
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index} className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-[#DADEFB5C]' : 'bg-[#FFFFFF00]'}`}>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">{item.entrance}</td>
                      <td className="w-1/3 text-gray-600 border-r border-gray-200 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">{item.last}</td>
                      <td className="w-1/3 text-gray-600 text-center text-xs sm:text-sm lg:text-[min(0.707vw,1.257vh)] py-[0.5vh]">{item.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full h-full">
      {/* Add invisible scrollbar styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <article className="border border-gray-200 shadow-sm bg-[#F7F8FF] w-full h-full relative px-[3vw] sm:px-[2vw] lg:px-[1.152vw] pt-[3vh] sm:pt-[3vh] lg:pt-[2.5vh] pb-[2vh]">
        {/* Header */}
        <div className="relative">
          <div className="flex-1">
            <h2 className="text-[rgba(46,75,181,1)] font-semibold leading-none text-lg sm:text-xl lg:text-[min(1.702vw,3.026vh)] h-auto lg:h-[3.611vh]">
              {title}
            </h2>
            {subtitle && value && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[1vw] sm:gap-[1vw] lg:gap-[0.625vw] h-auto sm:h-auto lg:h-[4.259vh] mt-[1vh] sm:mt-[1.5vh] lg:mt-[1.007vh]">
                <span className="text-gray-500 text-sm sm:text-base lg:text-[min(0.993vw,1.765vh)]">{subtitle}</span>
                <div className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded px-[2vw] sm:px-[1.5vw] lg:px-[0.625vw] py-[1vh] sm:py-[1vh] lg:py-[0.37vh] flex items-center justify-center w-[15vw] sm:w-[12vw] lg:w-[6.235vw] h-[5vh] sm:h-[5vh] lg:h-[4.259vh]">
                  <span className="text-[rgba(33,63,172,1)] font-bold text-lg sm:text-xl lg:text-[min(1.702vw,3.026vh)]">{value}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Content with appropriate spacing */}
        <div className="mt-[3vh]">
          <div className="w-full h-auto lg:h-[20vh]">
            {renderTables()}
          </div>
        </div>
      </article>
    </div>
  );
};