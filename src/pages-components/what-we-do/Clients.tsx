import React from 'react';
import { useTranslation } from 'react-i18next';
import ParagraphHeader from '../../components/ParagraphHeader';
import InfinitySwiper from '../../components/swiper/InfinitySwiper';

const clientLogoSrc = [
  './customers/agan.png',
  './customers/ale.png',
  './customers/avgol.png',
  './customers/clalit.png',
  './customers/DF_omer.png',
  './customers/dolav.png',
  './customers/engel.png',
  './customers/hen.png',
  './customers/intel.png',
  './customers/kafrit.png',
  './customers/log.png',
  './customers/teva.png',
  './customers/yafora.png',
  './customers/yotvata.png',
];

function Clients() {
  const { t } = useTranslation();
  const TITLE = t('whatWeDo.client.title');
  const clientsLogoData = clientLogoSrc.map((src) => (
    <img
      src={src}
      loading="lazy"
      className="aspect-video object-contain"
      alt="logo"
    />
  ));

  return (
    <div className="text-4xl flex flex-col gap-10">
      <ParagraphHeader>{TITLE}</ParagraphHeader>
      <InfinitySwiper data={clientsLogoData} className="h-20 md:h-24 lg:h-32" />
    </div>
  );
}

export default Clients;
