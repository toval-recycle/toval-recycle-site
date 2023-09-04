import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './MediaSwiper.css';

import { Grid, Navigation, Pagination, SwiperOptions } from 'swiper';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Modal from '../Modal';
import { cn } from '../../utils/cn';

interface ImageSwiperProps extends SwiperOptions {
  className?: string;
  data: { src: string; type: 'image' | 'video' }[];
}

export default function ImageSwiper({
  className,
  data,
  ...props
}: ImageSwiperProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({
    src: '',
    isVideo: false,
  });

  const handleModalOpen = (mediaSrc: string, isVideo: boolean) => {
    setSelectedMedia({ src: mediaSrc, isVideo });
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedMedia({ src: '', isVideo: false });
    setModalOpen(false);
  };

  return (
    <>
      <Modal open={modalOpen} handleClose={handleModalClose}>
        {selectedMedia.isVideo ? (
          <video
            className="aspect-video object-contain bg-black w-[90%] max-w-[1500px]"
            autoPlay
            controls
            src={selectedMedia.src}
          />
        ) : (
          <img
            alt="Media"
            src={selectedMedia.src}
            className="aspect-video object-contain bg-black w-[90%] max-w-[1500px]"
          />
        )}
      </Modal>
      <Swiper
        dir="ltr"
        slidesPerView={1}
        grid={{
          rows: 1,
          fill: 'row',
        }}
        spaceBetween={10}
        breakpoints={{
          768: {
            slidesPerView: 2,
            grid: { rows: 1, fill: 'row' },
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 2, fill: 'row' },
          },
          1536: {
            slidesPerView: 4,
            grid: { rows: 2, fill: 'row' },
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Navigation]}
        className={cn('image-swiper', className)}
        {...props}
      >
        {data.map(({ src, type }, index) => {
          const isVideo = type === 'video';
          return (
            <SwiperSlide key={index}>
              {isVideo ? (
                <div
                  className="relative aspect-video"
                  onClick={() => handleModalOpen(src, isVideo)}
                >
                  <video src={src} />
                  <div className="cursor-pointer text-7xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-full">
                    <PlayCircleOutlineIcon fontSize="inherit" />
                  </div>
                </div>
              ) : (
                <img
                  alt="image"
                  src={src}
                  loading="lazy"
                  onClick={() => handleModalOpen(src, isVideo)}
                />
              )}
              <div className="swiper-lazy-preloader"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
