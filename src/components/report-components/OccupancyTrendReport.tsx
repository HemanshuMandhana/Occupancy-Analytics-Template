import React from 'react';
import { format } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface OccupancyTrendReportProps {
  fromDate: Date | undefined;
  toDate: Date | undefined;
}

export const OccupancyTrendReport: React.FC<OccupancyTrendReportProps> = ({ fromDate, toDate }) => {
  // Sample data for the occupancy trend chart
  const chartData = [
    { time: '12:00 AM', tuesday: 48, wednesday: 40, thursday: 55, friday: 25, saturday: 3, sunday: 2, monday: 52 },
    { time: '01:00 AM', tuesday: 47, wednesday: 42, thursday: 54, friday: 24, saturday: 4, sunday: 2, monday: 51 },
    { time: '02:00 AM', tuesday: 49, wednesday: 44, thursday: 56, friday: 22, saturday: 3, sunday: 1, monday: 53 },
    { time: '03:00 AM', tuesday: 2, wednesday: 3, thursday: 2, friday: 1, saturday: 2, sunday: 1, monday: 2 },
    { time: '04:00 AM', tuesday: 3, wednesday: 4, thursday: 3, friday: 2, saturday: 3, sunday: 2, monday: 3 },
    { time: '05:00 AM', tuesday: 5, wednesday: 6, thursday: 5, friday: 3, saturday: 4, sunday: 3, monday: 4 },
    { time: '06:00 AM', tuesday: 8, wednesday: 10, thursday: 9, friday: 6, saturday: 5, sunday: 4, monday: 7 },
    { time: '07:00 AM', tuesday: 15, wednesday: 18, thursday: 12, friday: 8, saturday: 6, sunday: 5, monday: 14 },
    { time: '08:00 AM', tuesday: 25, wednesday: 35, thursday: 20, friday: 10, saturday: 8, sunday: 6, monday: 22 },
    { time: '09:00 AM', tuesday: 45, wednesday: 42, thursday: 35, friday: 12, saturday: 10, sunday: 8, monday: 40 },
    { time: '10:00 AM', tuesday: 65, wednesday: 38, thursday: 60, friday: 11, saturday: 8, sunday: 6, monday: 62 },
    { time: '11:00 AM', tuesday: 70, wednesday: 40, thursday: 75, friday: 10, saturday: 5, sunday: 4, monday: 73 },
    { time: '12:00 PM', tuesday: 62, wednesday: 55, thursday: 72, friday: 9, saturday: 3, sunday: 2, monday: 75 },
    { time: '01:00 PM', tuesday: 60, wednesday: 58, thursday: 70, friday: 8, saturday: 2, sunday: 1, monday: 78 },
    { time: '02:00 PM', tuesday: 65, wednesday: 62, thursday: 85, friday: 7, saturday: 4, sunday: 3, monday: 82 },
    { time: '03:00 PM', tuesday: 70, wednesday: 68, thursday: 88, friday: 6, saturday: 5, sunday: 4, monday: 88 },
    { time: '04:00 PM', tuesday: 68, wednesday: 70, thursday: 85, friday: 8, saturday: 6, sunday: 5, monday: 90 },
    { time: '05:00 PM', tuesday: 72, wednesday: 72, thursday: 82, friday: 10, saturday: 8, sunday: 6, monday: 85 },
    { time: '06:00 PM', tuesday: 65, wednesday: 68, thursday: 75, friday: 9, saturday: 7, sunday: 5, monday: 75 },
    { time: '07:00 PM', tuesday: 58, wednesday: 65, thursday: 70, friday: 8, saturday: 6, sunday: 4, monday: 65 },
    { time: '08:00 PM', tuesday: 45, wednesday: 58, thursday: 50, friday: 7, saturday: 5, sunday: 3, monday: 55 },
    { time: '09:00 PM', tuesday: 42, wednesday: 55, thursday: 35, friday: 6, saturday: 4, sunday: 2, monday: 50 },
    { time: '10:00 PM', tuesday: 40, wednesday: 52, thursday: 25, friday: 5, saturday: 3, sunday: 1, monday: 48 },
    { time: '11:00 PM', tuesday: 38, wednesday: 50, thursday: 22, friday: 4, saturday: 2, sunday: 1, monday: 45 }
  ];

  const handleDownload = () => {
    console.log('Downloading report...');
  };

  return (
    <>
      {/* Report Results Section */}
      <div className="flex flex-row justify-between items-center mt-[2vh] gap-[1vw] flex-shrink-0">
        <div className="flex-1 min-w-0">
          <h2 className="font-semibold text-[rgba(48,66,127,1)]" style={{ fontSize: 'clamp(24px, 1.5vw, 32.68px)' }}>
            Data Report: Occupancy Trend Report
          </h2>
          <p className="text-[#4267B1]" style={{ fontSize: 'clamp(16px, 1vw, 24px)' }}>
            Data: {fromDate ? format(fromDate, "dd/MM/yyyy") : "10/02/2025"} to {toDate ? format(toDate, "dd/MM/yyyy") : "18/02/2025"}
          </p>
        </div>
        <div className="flex-shrink-0">
          <button 
            className="hover:opacity-80 transition-opacity"
            onClick={handleDownload}
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
      
      {/* Occupancy Trend line chart */}
      <div className="flex-1 border border-gray-300 mt-[2vh] min-h-0 overflow-visible bg-white">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              tick={{ fontSize: 12 }}
              angle={0}
              textAnchor="middle"
              height={40}
              interval={1}
              tickFormatter={(value, index) => {
                // Show every 2 hours starting from 12 AM
                if (index % 2 === 0) {
                  return value.replace(':01:25', ':00');
                }
                return '';
              }}
            />
            <YAxis 
              label={{ value: 'Occupancy', angle: -90, position: 'insideLeft' }}
              domain={[0, 100]}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              labelStyle={{ color: '#333' }}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              position={{ y: -10 }}
              offset={10}
              reverseDirection={{ y: true }}
            />
            <Legend 
              verticalAlign="top"
              iconType="square"
              content={({ payload }) => (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',  // Center-align the items
                    gap: '20px',
                    paddingBottom: '10px',
                    marginTop: '5px',
                  }}
                >
                  {payload?.map((entry, index) => (
                    <div key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: 10, height: 10, backgroundColor: entry.color }} />
                      <span style={{ color: 'gray', fontSize: '14px' }}>{entry.value}</span>
                    </div>
                  ))}
                </div>
              )}
            />
            <Line 
              type="monotone" 
              dataKey="tuesday" 
              stroke="#4F46E5" 
              strokeWidth={2}
              name="18 Mar 2025 Tuesday"
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="wednesday" 
              stroke="#DC2626" 
              strokeWidth={2}
              name="19 Mar 2025 Wednesday"
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="thursday" 
              stroke="#6B7280" 
              strokeWidth={2}
              name="20 Mar 2025 Thursday"
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="friday" 
              stroke="#D97706" 
              strokeWidth={2}
              name="21 Mar 2025 Friday"
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="saturday" 
              stroke="#059669" 
              strokeWidth={2}
              name="22 Mar 2025 Saturday"
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="sunday" 
              stroke="#2563EB" 
              strokeWidth={2}
              name="23 Mar 2025 Sunday"
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="monday" 
              stroke="#BE185D" 
              strokeWidth={2}
              name="24 Mar 2025 Monday"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
