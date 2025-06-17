import React from 'react';
import { Header } from '../components/dashboard/Header';
import { Sidebar } from '../components/dashboard/Sidebar';
import { OccupancyCard } from '../components/dashboard/OccupancyCard';
import { VisitorCard } from '../components/dashboard/VisitorCard';
import { ChartCard } from '../components/dashboard/ChartCard';
import { HeatMapCard } from '../components/dashboard/HeatMapCard';
import { DateControls } from '../components/dashboard/DateControls';
import { DownloadButton } from '../components/dashboard/DownloadButton';

const Index: React.FC = () => {
  return (
    <div className="bg-white relative flex flex-col overflow-hidden min-h-screen">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/ff90ab59117214d8de00b316a1fcbf6b05e0921c?placeholderIfAbsent=true"
        className="aspect-[2.1] object-contain w-[2262px] z-0 max-w-full"
        alt="Background"
      />
      
      <Header />
      <Sidebar />
      <DownloadButton />
      <DateControls />
      
      <main className="absolute z-0 flex w-[1559px] max-w-full flex-col items-center justify-center right-8 bottom-[50px]" role="main">
        <section className="flex w-full items-center gap-[35px] flex-wrap max-md:max-w-full" aria-label="Primary dashboard metrics">
          <OccupancyCard />
          <VisitorCard />
          <ChartCard title="Zone Occupancy Day" />
        </section>
        
        <section className="flex w-full items-center gap-[35px] flex-wrap mt-[41px] max-md:max-w-full max-md:mt-10" aria-label="Secondary dashboard visualizations">
          <HeatMapCard 
            title="Visitors by Zone" 
            subtitle="Heat Map" 
            imageUrl="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/1723715243527142b497157a3804e60b44a74ed5?placeholderIfAbsent=true" 
            showDropdown={true}
          />
          <HeatMapCard 
            title="Visitors by Zone" 
            subtitle="Heat Map" 
            imageUrl="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/970f6635900e4a9f806bcb4025cddd419ccee06b?placeholderIfAbsent=true" 
          />
          <article className="bg-[rgba(247,248,255,1)] border relative min-w-60 min-h-[389px] overflow-hidden grow shrink w-[398px] my-auto pt-[19px] pb-0.5 px-[26px] rounded-xl border-[rgba(37,57,120,1)] border-solid max-md:max-w-full max-md:px-5">
            <div className="z-0 flex w-full items-center gap-10 text-[28px] text-[rgba(46,75,181,1)] font-semibold max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/6a15dfc1acfec599c63800bc341baec4f6888819?placeholderIfAbsent=true"
                className="aspect-[0.99] object-contain w-[85px] self-stretch shrink-0 my-auto rounded-[677px]"
                alt="Zone occupancy icon"
              />
              <h2 className="self-stretch my-auto">
                Zone Pick Occupancy <br />
                Day
              </h2>
            </div>
            <div className="border z-0 flex w-full items-stretch gap-[29px] overflow-hidden pl-[15px] pr-10 py-[19px] rounded-[11px] border-[rgba(229,231,231,1)] border-solid max-md:max-w-full max-md:pr-5">
              <div className="flex flex-col items-stretch text-[11px] text-black font-medium mt-12 max-md:hidden max-md:mt-10">
                <div>80</div>
                <div className="mt-[29px]">60</div>
                <div className="mt-[29px]">40</div>
                <div className="mt-[26px]">20</div>
                <div className="mt-[29px]">0</div>
              </div>
              <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit">
                <div className="flex w-[143px] max-w-full gap-2 text-[11px] text-[rgba(153,153,153,1)] font-semibold whitespace-nowrap max-md:mr-[9px]">
                  <div className="flex items-center gap-[7px] flex-1">
                    <div className="rounded bg-[rgba(66,103,177,1)] self-stretch flex w-[15px] shrink-0 h-[15px] my-auto" />
                    <span className="self-stretch my-auto">Occupied</span>
                  </div>
                  <div className="flex items-center gap-[7px] flex-1">
                    <div className="rounded bg-[rgba(247,248,255,1)] self-stretch flex w-[15px] shrink-0 h-[15px] my-auto border-black" />
                    <span className="self-stretch my-auto">Vacant</span>
                  </div>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/902be517edf9de5b3e1146f82c456bc12c32a018?placeholderIfAbsent=true"
                  className="aspect-[166.67] object-contain w-full mt-[38px]"
                  alt="Zone pick occupancy chart"
                />
                <div className="self-center flex w-[306px] max-w-full gap-5 justify-between mt-1">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((month, index) => (
                    <div key={month} className={`flex flex-col items-stretch ${index === 0 ? 'mt-[22px]' : index === 1 ? 'mt-[75px] max-md:mt-10' : index === 2 ? 'mt-2.5' : index === 3 ? 'self-stretch' : 'mt-[109px] max-md:mt-10'}`}>
                      {index === 3 && (
                        <div className="flex flex-col relative aspect-[1.143] w-full text-[10px] text-[rgba(233,233,233,1)] font-medium pt-1.5 pb-[13px] px-[9px]">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/48e2bd5d5b32c65ccc2b4cac4ac618e3ae8caca6?placeholderIfAbsent=true"
                            className="absolute h-full w-full object-cover inset-0"
                            alt="Chart tooltip background"
                          />
                          <div className="relative flex items-center gap-[5px]">
                            <div className="bg-[rgba(66,103,177,1)] self-stretch flex w-[7px] shrink-0 h-[7px] my-auto rounded-sm" />
                            <span className="self-stretch my-auto">55</span>
                          </div>
                          <div className="relative flex items-center gap-[5px] mt-2">
                            <div className="bg-[rgba(247,248,255,1)] self-stretch flex w-2 shrink-0 h-2 my-auto rounded-sm" />
                            <span className="self-stretch my-auto">32</span>
                          </div>
                        </div>
                      )}
                      <div className={`bg-[rgba(221,226,255,1)] ${index === 0 ? 'pt-[63px]' : index === 1 ? 'pt-[41px]' : index === 2 ? 'pt-[21px]' : index === 3 ? 'pt-[34px] max-md:ml-1.5 max-md:mr-2' : 'pt-5'} rounded-[9px]`}>
                        <div className={`bg-[rgba(37,56,120,1)] ${index === 0 ? 'flex shrink-0 h-[73px]' : index === 1 ? 'z-10 flex w-[42px] shrink-0 h-[42px]' : index === 2 ? 'flex shrink-0 h-[127px]' : index === 3 ? 'z-10 flex shrink-0 h-[72px]' : 'z-10 flex shrink-0 h-[31px]'} rounded-[0px_0px_9px_9px]`} />
                      </div>
                      <div className={`text-black text-[11px] font-semibold self-center ${index === 1 || index === 3 ? 'mt-[15px]' : index === 4 ? 'mt-[13px]' : 'mt-3.5'}`}>
                        {month}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute z-0 flex min-h-[66px] w-[280px] max-w-full justify-center items-stretch right-[39px] top-[39px]" />
          </article>
        </section>
      </main>
    </div>
  );
};

export default Index;
