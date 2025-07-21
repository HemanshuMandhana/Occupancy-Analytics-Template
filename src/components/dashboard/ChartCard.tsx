import React from 'react';
import { BarChart } from '@mui/x-charts';

interface ChartCardProps {
  title: string;
  className?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, className = '' }) => {
  const chartData = [
    { month: 'Jan', occupied: 35, vacant: 25 },
    { month: 'Feb', occupied: 20, vacant: 15 },
    { month: 'Mar', occupied: 55, vacant: 10 },
    { month: 'Apr', occupied: 32, vacant: 20 },
    { month: 'May', occupied: 15, vacant: 8 },
  ];

  const xLabels = chartData.map((d) => d.month);
  const occupiedData = chartData.map((d) => d.occupied);
  const vacantData = chartData.map((d) => d.vacant);

  const series = [
    {
      type: 'bar' as const,
      data: occupiedData,
      stack: 'total',
      label: 'Occupied',
      color: 'rgba(66,103,177,1)',
      barStyle: {
        rx: 6,
      },
    },
    {
      type: 'bar' as const,
      data: vacantData,
      stack: 'total',
      label: 'Vacant',
      color: 'rgba(189,203,253,0.5)',
      barStyle: {
        rx: 6,
      },
    },
  ];

  return (
    <article
      className={`bg-[#f6f7ff] border border-gray-200 rounded-xl p-[1.85vh] shadow-sm h-[36.02vh] flex flex-col ${className}`}
    >
      {/* Header */}
      <div className="flex items-start gap-[1.85vh] mb-[1.85vh]">
        <div className="w-[5.93vh] h-[5.93vh] bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
          <img
            src="/lovable-uploads/0d596334-15b7-41e8-b632-2f9024e60962.png"
            alt="Chart icon"
            className="w-[5.93vh] h-[5.93vh]"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-[rgba(46,75,181,1)] text-[2.22vh] font-semibold mb-[0.37vh]">
            {title}
          </h2>
        </div>
      </div>

      {/* Card Body */}
      <div className="border border-gray-200 rounded-lg flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 w-full h-full overflow-hidden relative">
          <BarChart
            xAxis={[
              {
                id: 'months',
                data: xLabels,
                scaleType: 'band',
                tickLabelStyle: {
                  fontSize: 12,
                  fill: '#374151',
                },
              },
            ]}
            yAxis={[
              {
                max: 80,
                tickMinStep: 20,
                tickLabelStyle: {
                  fontSize: 11,
                  fill: '#6B7280',
                },
              },
            ]}
            series={series}
            margin={{ top: 10, bottom: 0, left: -10, right: 10 }}
            height={undefined}
            width={undefined}
            sx={{
              width: '100%',
              height: '100%',
              maxHeight: '100%',
              maxWidth: '100%',
              '.MuiChartsAxis-line': {
                stroke: 'transparent',
              },
              '.MuiChartsAxis-tick': {
                stroke: 'transparent',
              },
              '.MuiChartsBar-root': {
                rx: 6, // Rounded corners for bars
              }
            }}
          />
        </div>
      </div>
    </article>
  );
};
