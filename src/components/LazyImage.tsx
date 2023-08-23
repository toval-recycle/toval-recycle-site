import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { cn } from '../utils/cn';

interface LazyImage {
  src: string;
  lowSrc: string;
  className: string;
  props?: any;
}

function LazyImage({ src, lowSrc, className, ...props }: LazyImage) {
  return (
    <LazyLoadImage
      className={cn(className)}
      width="100%"
      height="100%"
      src={src}
      placeholderSrc={lowSrc}
      {...props}
    />
  );
}

export default LazyImage;
