import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/material';

interface ComparisonChartCardProps {
  title: string;
  chartType: 'occupancy' | 'visitor';
}

export const ComparisonChartCard: React.FC<ComparisonChartCardProps> = ({
  title,
  chartType
}) => {
  const chartData = [
    { month: 'Jan', current: 60, last: 45 },
    { month: 'Feb', current: 20, last: 32 },
    { month: 'Mar', current: 60, last: 38 },
    { month: 'Apr', current: 35, last: 40 },
    { month: 'May', current: 15, last: 52 }
  ];

  const legendText = chartType === 'occupancy' 
    ? { current: 'Current Week', last: 'Last week' }
    : { current: 'Visitor Current Week', last: 'Visitor Last week' };

  // Prepare data for MUI BarChart
  const xAxisData = chartData.map(item => item.month);
  const currentWeekData = chartData.map(item => item.current);
  const lastWeekData = chartData.map(item => item.last);

  const renderChart = () => {
    return (
      <div className="w-full h-full min-h-0 flex flex-col">
        {/* Chart Area with responsive padding */}
        <div className="border border-gray-200 rounded-lg w-full h-full min-h-0 flex flex-col overflow-hidden">
             
          {/* MUI Bar Chart - Full container with proper containment */}
          <div className="flex-1 w-full min-h-0 overflow-hidden relative">
            <BarChart
              series={[
                {
                  data: currentWeekData,
                  label: legendText.current,
                  id: 'currentWeek',
                  color: 'rgba(66,103,177,1)',
                },
                {
                  data: lastWeekData,
                  label: legendText.last,
                  id: 'lastWeek',
                  color: 'rgba(189,203,253,0.5)',
                },
              ]}
              xAxis={[{
                data: xAxisData,
                scaleType: 'band',
                categoryGapRatio: 0.2,
                barGapRatio: 0.1,
              }]}
              yAxis={[{
                min: 0,
                max: 80,
                tickNumber: 5,
              }]}
              margin={{
                left: 0,
                right: 10,
                top: 0,
                bottom: 0,
              }}
              sx={{
                width: '100%',
                height: '100%',
                maxWidth: '100%',
                maxHeight: '100%',
                overflow: 'hidden',
                '& .MuiChartsAxis-root': {
                  '& .MuiChartsAxis-tick': {
                    stroke: '#6B7280',
                    strokeWidth: 1,
                  },
                  '& .MuiChartsAxis-tickLabel': {
                    fill: '#6B7280',
                    fontSize: { xs: '0.75rem', sm: '0.875rem', lg: 'min(0.656vw,1.166vh)' },
                  },
                  '& .MuiChartsAxis-line': {
                    stroke: '#E5E7EB',
                    strokeWidth: 1,
                  },
                },
                '& .MuiChartsTooltip-root': {
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                },
                '& .MuiBarElement-root': {
                  '&:hover': {
                    opacity: 0.8,
                  },
                },
                '& .MuiChartsLegend-root': {
                  '& .MuiChartsLegend-series': {
                    fontSize: { xs: '0.75rem', sm: '0.875rem', lg: 'min(0.8vw,1.4vh)' },
                  },
                },
              }}
              slotProps={{
                tooltip: {
                  trigger: 'item',
                },
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  // Function to render title with special formatting for lower cards
  const renderTitle = () => {
    if (title === "Zone Occupancy Day Last week Comparison") {
      return (
        <div className="flex items-start justify-between h-auto lg:h-[6.574vh]">
          <div className="flex-1 min-w-0">
            <div className="text-[rgba(46,75,181,1)] font-semibold leading-none text-lg sm:text-xl lg:text-[min(1.702vw,3.026vh)] mb-1 lg:h-[3.611vh]">
              Zone Occupancy Day
            </div>
            <div className="text-[rgba(46,75,181,1)] leading-none text-base sm:text-lg lg:text-[min(1.458vw,2.593vh)] lg:h-[2.963vh]">
              Last week Comparison
            </div>
          </div>
          
          {/* Download button for chart cards */}
          <div className="flex-shrink-0 ml-[1vw] sm:ml-[1vw] lg:ml-[0.5vw]">
            <img
              src="/images/Primary Download Button.svg"
              alt="Download button"
              className="w-[12vw] sm:w-[10vw] lg:w-[7vw] h-auto lg:h-[5.185vh] hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-start justify-between h-auto lg:h-[6.574vh]">
          <h2 className="text-[rgba(46,75,181,1)] font-semibold leading-none text-lg sm:text-xl lg:text-[min(1.702vw,3.026vh)] flex-1 min-w-0 lg:h-[3.611vh]">
            {title}
          </h2>
          
          {/* Invisible spacer to match the height of the subtitle in the other card */}
          <div className="lg:h-[2.963vh]"></div>
          
          {/* Download button for chart cards */}
          <div className="flex-shrink-0 ml-[1vw] sm:ml-[1vw] lg:ml-[0.5vw]">
            <img
              src="/images/Primary Download Button.svg"
              alt="Download button"
              className="w-[12vw] sm:w-[10vw] lg:w-[7vw] h-auto lg:h-[5.185vh] hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full h-full">
      <article className="border border-gray-200 shadow-sm bg-[#F7F8FF] w-full h-full relative px-[3vw] sm:px-[2.5vw] lg:px-[1.354vw] py-[3vh] sm:py-[3vh] lg:py-[2.5vh] flex flex-col">
        {/* Header - Fixed height to ensure alignment */}
        <div className="relative flex-shrink-0">
          <div className="flex-1">
            {renderTitle()}
          </div>
        </div>
        
        {/* Spacing - 31px below title/subtitle */}
        <div style={{ height: '31px' }} className="flex-shrink-0"></div>
        
        {/* Chart Content - Takes remaining space and goes to bottom */}
        <div className="flex-1 min-h-0 overflow-hidden">
          {renderChart()}
        </div>
      </article>
    </div>
  );
};