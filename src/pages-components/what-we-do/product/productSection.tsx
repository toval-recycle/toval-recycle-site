import React from 'react';
import LazyImage from '../../../components/LazyImage';
import { cn } from '../../../utils/cn';

interface ProductSectionProps {
  title: string;
  imagePath: { original: string; low: string };
  paragraph: string;
  reverse?: boolean;
}

function ProductSection({
  title,
  imagePath: { original, low },
  paragraph,
  reverse = false,
}: ProductSectionProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-between gap-10 lg:flex-row ',
        { 'lg:flex-row-reverse': reverse }
      )}
    >
      <div className="w-[50vw] max-w-xl lg:w-[80vw]  object-cover">
        <LazyImage
          src={original}
          lowSrc={low}
          className="aspect-square rounded-3xl"
        />
      </div>

      <div className="mt-4 flex max-w-2xl flex-col gap-5 text-center lg:text-start">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default ProductSection;
