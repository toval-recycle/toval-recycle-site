import React from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

function StatisticsNumbers() {
  const { t } = useTranslation();
  const statisticsNumbersData = [
    {
      icon: <img className="h-full" src="/statistics/number-icons-1.svg" />,
      number: t('aboutUs.statistics.quote_1.number'),
      title: t('aboutUs.statistics.quote_1.title'),
    },
    {
      icon: <img className="h-full" src="/statistics/number-icons-2.svg" />,
      number: t('aboutUs.statistics.quote_2.number'),
      suffix: t('aboutUs.statistics.quote_2.suffix'),
      title: t('aboutUs.statistics.quote_2.title'),
    },
    {
      icon: <img className="h-full" src="/statistics/number-icons-3.svg" />,
      number: t('aboutUs.statistics.quote_3.number'),
      title: t('aboutUs.statistics.quote_3.title'),
    },
  ];

  return (
    <div className="flex flex-wrap flex-col items-center gap-10 px-8 sm:flex-row w-full justify-around text-xl text-third">
      {statisticsNumbersData.map(({ icon, number, title, suffix }, index) => (
        <div
          className="relative w-52 md:w-auto flex flex-col gap-5"
          key={index}
        >
          <div dir="ltr">
            <div className="absolute z-0 -translate-x-1/2 -translate-y-[30%] md:-translate-y-[20%] opacity-60">
              <div className="h-16 md:h-20">{icon}</div>
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <CountUp
                suffix={suffix}
                redraw={false}
                end={number}
                duration={5}
                className="font-bold text-main text-5xl md:text-7xl"
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </div>
          </div>
          <h1 className="text-sm md:text-lg text-gray-700 font-semibold">
            {title}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default StatisticsNumbers;
