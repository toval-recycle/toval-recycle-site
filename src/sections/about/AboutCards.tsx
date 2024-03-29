import React from 'react';
import ParagraphHeader from '../../components/ParagraphHeader';
import AboutCard from './AboutCard';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { siteBreakPoints } from '../../utils/projectData';

function AboutCards() {
  const { t } = useTranslation();
  const isXlScreen = useMediaQuery({
    minWidth: siteBreakPoints.xl,
  });
  const isSmScreen = useMediaQuery({ minWidth: siteBreakPoints.sm });

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
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center gap-10"
    >
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
          let animationDelay = 0;
          if (isXlScreen) {
            animationDelay = index / 4;
          } else if (isSmScreen) {
            animationDelay = (index % 2) / 6;
          }

          return (
            <motion.div
              key={index}
              className="flex"
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1.2, delay: animationDelay }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <AboutCard
                title={title}
                paragraph={paragraph}
                iconPath={iconPath}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default AboutCards;
