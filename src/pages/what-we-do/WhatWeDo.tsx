import MediaSwiper from '../../components/swiper/MediaSwiper';
import Modal from '../../components/Modal';
import ParagraphHeader from '../../components/ParagraphHeader';
import React from 'react';
import { useTranslation } from 'react-i18next';

type MediaData = { src: string; type: 'image' | 'video' };

const mediaData: MediaData[] = [
  { src: 'what-we-do/video-1.mp4', type: 'video' },
  { src: 'textimage.jpeg', type: 'image' },
  { src: 'textimage.jpeg', type: 'image' },
  { src: 'textimage.jpeg', type: 'image' },
  { src: 'textimage.jpeg', type: 'image' },
  { src: 'textimage.jpeg', type: 'image' },
  { src: 'textimage.jpeg', type: 'image' },
  { src: 'textimage.jpeg', type: 'image' },
  { src: 'textimage.jpeg', type: 'image' },
];

function WhatWeDo() {
  const { t } = useTranslation();
  const TITLE = t('whatWeDo.title');
  const PARAGRAPH = t('whatWeDo.subTitle');

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex justify-center lg:justify-start">
          <ParagraphHeader>{TITLE}</ParagraphHeader>
        </div>
        <h1 className="text-center text-lg md:text-3xl lg:text-start">
          {PARAGRAPH}
        </h1>
      </div>
      <div className="h-full">
        <MediaSwiper data={mediaData} />
      </div>
    </div>
  );
}

export default WhatWeDo;
