import React from 'react';
import Button from '../../components/Button';
import {
  PiRecycleLight,
  PiTreeEvergreenLight,
  PiHandshake,
} from 'react-icons/pi';
import { sectionsID } from '../../utils/projectData';
import ScrollLink from '../../components/ScrollLink';
import { Trans, useTranslation } from 'react-i18next';
import LazyImage from '../../components/LazyImage';

const MAINIMAGE = '/home-main-image.png';
const LOW_MAINIMAGE = '/home-main-image-low.png';

function Home() {
  const { t } = useTranslation();
  const homeFooter = [
    {
      icons: <PiTreeEvergreenLight />,
      title: t('home.footer.quote_1.title'),
      paragraph: t('home.footer.quote_1.paragraph'),
    },
    {
      icons: <PiRecycleLight />,
      title: t('home.footer.quote_2.title'),
      paragraph: t('home.footer.quote_2.paragraph'),
    },
    {
      icons: <PiHandshake />,
      title: t('home.footer.quote_3.title'),
      paragraph: t('home.footer.quote_3.paragraph'),
    },
  ];

  const TITLE = (
    <Trans i18nKey="home.title">
      <span className="text-main font-bold" />
    </Trans>
  );
  const PARAGRAPH = t('home.paragraph');
  const BUTTON_TEXT = t('home.button');

  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-evenly px-10 pt-20 text-center lg:flex-row lg:text-start">
        <div className="flex max-w-2xl flex-col gap-6 ">
          <h1 className="text-5xl font-semibold leading-[1] sm:text-6xl lg:text-[6vw] 2xl:text-8xl">
            {TITLE}
          </h1>
          <p className="text-xs leading-[1] text-[#505050] sm:text-sm lg:text-[1.3vw] lg:leading-[1.75rem] 2xl:text-xl">
            {PARAGRAPH}
          </p>
          <div className="flex justify-center lg:justify-start">
            <ScrollLink to={sectionsID.getInTouch}>
              <Button className="px-4 py-2 text-sm lg:text-[1.3vw] xl:text-lg">
                {BUTTON_TEXT}
              </Button>
            </ScrollLink>
          </div>
        </div>
        <div className="w-30rem lg:w-[72rem]">
          <LazyImage
            src={MAINIMAGE}
            lowSrc={LOW_MAINIMAGE}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex w-full justify-around bg-secondary p-4 xs:p-5">
        {homeFooter.map(({ title, icons, paragraph }, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center gap-1 md:gap-3"
            >
              <div className="text-sm xs:text-[3vw] text-main lg:text-4xl">
                {icons}
              </div>
              <div>
                <h1 className="text-[0.45rem] xs:text-[1.5vw] font-semibold text-third lg:text-lg">
                  {title}
                </h1>
                <p className="text-[0.35rem] xs:text-[1vw] text-[#717171] lg:text-base">
                  {paragraph}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
