import React from 'react';
import { useTranslation } from 'react-i18next';
import ParagraphHeader from '../../components/ParagraphHeader';
import InfinitySwiper from '../../components/swiper/InfinitySwiper';

const clientsLogoData = [
  <img
    src="./customers/agan.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/ale.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/avgol.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/clalit.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/DF_omer.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/dolav.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/engel.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/hen.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/intel.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/kafrit.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/log.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/teva.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/yafora.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
  <img
    src="./customers/yotvata.png"
    loading="lazy"
    className="aspect-video object-contain"
  />,
];

function Clients() {
  const { t } = useTranslation();
  const TITLE = t('whatWeDo.client.title');
  return (
    <div className="text-4xl flex flex-col gap-10">
      <ParagraphHeader>{TITLE}</ParagraphHeader>
      <InfinitySwiper data={clientsLogoData} className="h-20 md:h-24 lg:h-32" />
    </div>
  );
}

export default Clients;
