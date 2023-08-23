import React from 'react';
import ParagraphHeader from '../../components/ParagraphHeader';
import AboutCard from './AboutCard';
import { useTranslation } from 'react-i18next';

function AboutCards() {
  const { t } = useTranslation();
  const AboutCardsData = [
    {
      iconPath: {
        original: '/about-us/about-us-1.svg',
        low: '/about-us/about-us-1-low.png',
      },
      title: t('aboutUs.cards.card_1.title'),
      paragraph: t('aboutUs.cards.card_1.paragraph'),
    },
    {
      iconPath: {
        original: '/about-us/about-us-2.svg',
        low: '/about-us/about-us-2-low.png',
      },
      title: t('aboutUs.cards.card_2.title'),
      paragraph: t('aboutUs.cards.card_2.paragraph'),
    },
    {
      iconPath: {
        original: '/about-us/about-us-3.svg',
        low: '/about-us/about-us-3-low.png',
      },
      title: t('aboutUs.cards.card_3.title'),
      paragraph: t('aboutUs.cards.card_3.paragraph'),
    },
    {
      iconPath: {
        original: '/about-us/about-us-4.svg',
        low: '/about-us/about-us-4-low.png',
      },
      title: t('aboutUs.cards.card_4.title'),
      paragraph: t('aboutUs.cards.card_4.paragraph'),
    },
  ];
  const TITLE = t('aboutUs.title');
  const SUBTITLE = t('aboutUs.subTitle');

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex max-w-xl flex-col justify-center text-center ">
        <div className="flex w-full justify-center">
          <ParagraphHeader>{TITLE}</ParagraphHeader>
        </div>
        <div className="mt-4 flex flex-col gap-5">
          <h2 className="text-4xl font-semibold">{SUBTITLE}</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {AboutCardsData.map(({ title, paragraph, iconPath }, index) => {
          return (
            <AboutCard
              key={index}
              title={title}
              paragraph={paragraph}
              iconPath={iconPath}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AboutCards;
