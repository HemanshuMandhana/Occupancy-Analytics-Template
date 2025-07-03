
import React from 'react';

export const VisitorCard: React.FC = () => {
  return (
    <article 
      className="border border-gray-200 rounded-xl shadow-sm bg-[#f6f7ff] flex flex-col"
      style={{
        height: '100%',
        padding: '2vh 1.5vw'
      }}
    >
      <div 
        className="flex items-start flex-shrink-0"
        style={{ 
          gap: '1.5vw',
          marginBottom: '2vh'
        }}
      >
        <div 
          className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            width: '4vw',
            height: '4vw',
            minWidth: '50px',
            minHeight: '50px',
            maxWidth: '70px',
            maxHeight: '70px'
          }}
        >
          <img 
            src="/lovable-uploads/c2137da9-89d7-4a16-b4c7-1371e400e7b7.png" 
            alt="Visitor icon" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h2 
            className="text-[rgba(46,75,181,1)] font-semibold"
            style={{ 
              fontSize: '1.8vw',
              lineHeight: '1.2',
              minFontSize: '18px',
              maxFontSize: '28px',
              marginBottom: '1vh'
            }}
          >
            Total Visitor Count
          </h2>
          <div 
            className="flex items-center"
            style={{ gap: '1vw' }}
          >
            <span 
              className="text-gray-500"
              style={{ 
                fontSize: '1.2vw',
                minFontSize: '14px',
                maxFontSize: '18px'
              }}
            >
              Total Count
            </span>
            <div 
              className="bg-[rgba(189,203,253,0.3)] border border-[rgba(39,60,134,1)] rounded"
              style={{ 
                padding: '0.5vh 1vw'
              }}
            >
              <span 
                className="text-[rgba(33,63,172,1)] font-bold"
                style={{ 
                  fontSize: '1.5vw',
                  minFontSize: '16px',
                  maxFontSize: '24px'
                }}
              >
                693
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table with proportional sizing */}
      <div className="w-full overflow-hidden rounded-lg border border-gray-200 flex-1">
        <table className="w-full table-fixed h-full">
          <thead>
            <tr className="bg-[rgba(37,56,120,1)] text-white">
              <th 
                className="w-1/4 text-center font-medium border-r border-gray-300"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '1vw',
                  minFontSize: '12px',
                  maxFontSize: '16px'
                }}
              >
                Entrance
              </th>
              <th 
                className="w-1/4 text-center font-medium border-r border-gray-300"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '1vw',
                  minFontSize: '12px',
                  maxFontSize: '16px'
                }}
              >
                Visitors
              </th>
              <th 
                className="w-1/4 text-center font-medium border-r border-gray-300"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '1vw',
                  minFontSize: '12px',
                  maxFontSize: '16px'
                }}
              >
                Entrance
              </th>
              <th 
                className="w-1/4 text-center font-medium"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '1vw',
                  minFontSize: '12px',
                  maxFontSize: '16px'
                }}
              >
                Visitors
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td 
                className="text-center text-gray-600 border-r border-gray-200"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '0.9vw',
                  minFontSize: '11px',
                  maxFontSize: '14px'
                }}
              >
                -
              </td>
              <td 
                className="text-center text-gray-600 border-r border-gray-200"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '0.9vw',
                  minFontSize: '11px',
                  maxFontSize: '14px'
                }}
              >
                -
              </td>
              <td 
                className="text-center text-gray-600 border-r border-gray-200"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '0.9vw',
                  minFontSize: '11px',
                  maxFontSize: '14px'
                }}
              >
                -
              </td>
              <td 
                className="text-center text-gray-600"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '0.9vw',
                  minFontSize: '11px',
                  maxFontSize: '14px'
                }}
              >
                -
              </td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td 
                className="text-center text-gray-600 border-r border-gray-200"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '0.9vw',
                  minFontSize: '11px',
                  maxFontSize: '14px'
                }}
              >
                -
              </td>
              <td 
                className="text-center text-gray-600 border-r border-gray-200"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '0.9vw',
                  minFontSize: '11px',
                  maxFontSize: '14px'
                }}
              >
                -
              </td>
              <td 
                className="text-center text-gray-600 border-r border-gray-200"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '0.9vw',
                  minFontSize: '11px',
                  maxFontSize: '14px'
                }}
              >
                -
              </td>
              <td 
                className="text-center text-gray-600"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '0.9vw',
                  minFontSize: '11px',
                  maxFontSize: '14px'
                }}
              >
                -
              </td>
            </tr>
            <tr>
              <td 
                className="text-center text-gray-600 border-r border-gray-200"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '0.9vw',
                  minFontSize: '11px',
                  maxFontSize: '14px'
                }}
              >
                -
              </td>
              <td 
                className="text-center text-gray-600 border-r border-gray-200"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '0.9vw',
                  minFontSize: '11px',
                  maxFontSize: '14px'
                }}
              >
                -
              </td>
              <td 
                className="text-center text-gray-600 border-r border-gray-200"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '0.9vw',
                  minFontSize: '11px',
                  maxFontSize: '14px'
                }}
              >
                -
              </td>
              <td 
                className="text-center text-gray-600"
                style={{ 
                  padding: '1vh 0.5vw',
                  fontSize: '0.9vw',
                  minFontSize: '11px',
                  maxFontSize: '14px'
                }}
              >
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};
