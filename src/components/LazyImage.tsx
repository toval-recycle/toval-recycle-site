import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { cn } from '../utils/cn';

interface LazyImage {
  alt: string;
  src: string;
  lowSrc: string;
  className: string;
  props?: any;
}

function LazyImage({ src, lowSrc, className, alt, ...props }: LazyImage) {
  return (
    <LazyLoadImage
      alt={alt}
      className={cn(className)}
      src={src}
      placeholderSrc={lowSrc}
      {...props}
    />
  );
}

export default LazyImage;
