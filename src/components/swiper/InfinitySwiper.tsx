import { Autoplay } from "swiper";
import { Swiper as SwiperComp, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import "swiper/css";
import "./InfinitySwiper.css";
import { cn } from "../../utils/cn";

interface SwiperProps extends SwiperOptions {
  className?: string;
  data: any[];
}
const SlidePerView = 8;

function duplicateArrayUntilLength(array: any[], desiredLength: number) {
  const newArray = [...array];

  while (newArray.length <= 2 * desiredLength) {
    newArray.push(...array);
  }

  return newArray;
}

export default function InfinitySwiper({
  className = "",
  data = [],
}: SwiperProps) {
  const arrayToDisplay = duplicateArrayUntilLength(data, SlidePerView);

  return (
    <SwiperComp
      dir="ltr"
      slidesPerView={2}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1536: {
          slidesPerView: 5,
        },
        2500: {
          slidesPerView: SlidePerView,
        },
      }}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
        waitForTransition: true,
      }}
      allowTouchMove={false}
      speed={3000}
      modules={[Autoplay]}
      watchSlidesProgress={true}
      className={cn("infinity-swiper", className)}
    >
      {arrayToDisplay.map((element, index) => (
        <SwiperSlide key={index}>
          {element}
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
      ))}
    </SwiperComp>
  );
}
