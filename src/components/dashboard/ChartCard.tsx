import React from 'react';

interface ChartCardProps {
  title: string;
  className?: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, className = '' }) => {
  return (
    <article className={`bg-[rgba(247,248,255,1)] border flex min-w-60 min-h-[389px] gap-10 overflow-hidden flex-wrap grow shrink w-[398px] my-auto pt-[19px] pb-px px-[26px] rounded-xl border-[rgba(37,57,120,1)] border-solid max-md:max-w-full max-md:px-5 ${className}`}>
      <div className="rotate-[3.141592653589793rad] bg-[rgba(224,227,253,1)] flex w-[85px] shrink-0 h-[86px] gap-2.5 rounded-[677px]" />
      <h2 className="min-w-60 text-3xl text-[rgba(46,75,181,1)] font-semibold grow shrink w-[264px]">
        {title}
      </h2>
      <div className="border flex min-w-60 items-stretch gap-[29px] overflow-hidden grow shrink w-[403px] px-4 py-[19px] rounded-[11px] border-[rgba(229,231,231,1)] border-solid">
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
            src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/2ad0f229b3fee3e9ef2111b71bb4da3ba6c08d59?placeholderIfAbsent=true"
            className="aspect-[333.33] object-contain w-full mt-[38px]"
            alt="Chart visualization"
          />
          <div className="self-center flex w-[306px] max-w-full gap-5 justify-between mt-[5px]">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((month, index) => (
              <div key={month} className={`flex flex-col items-stretch ${index === 0 ? 'mt-[22px]' : index === 1 ? 'mt-[75px] max-md:mt-10' : index === 2 ? 'mt-2.5' : index === 3 ? 'self-stretch' : 'mt-[109px] max-md:mt-10'}`}>
                {index === 3 && (
                  <div className="flex flex-col relative aspect-[1.143] w-full text-[10px] text-[rgba(233,233,233,1)] font-medium pt-1.5 pb-[13px] px-[9px]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a25c42157ec74145af9ce40a105adb84/9824c9a7add4001476de340f1a88e7d1ae5f0480?placeholderIfAbsent=true"
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
    </article>
  );
};
