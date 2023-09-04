import React from 'react';
import LazyImage from '../../components/LazyImage';

interface AboutCardProps {
  title: string;
  iconPath: { original: string; low: string };
  paragraph: string;
}

function AboutCard({
  title,
  iconPath: { original, low },
  paragraph,
}: AboutCardProps) {
  return (
    <div className="flex h-auto flex-col gap-5 border-main text-center md:text-start border rounded-xl p-8  items-center">
      <LazyImage
        alt="about-image"
        src={original}
        lowSrc={low}
        className=" aspect-square object-contain h-52 lg:h-72"
      />
      <h1 className="text-2xl font-semibold text-third">{title}</h1>
      <p className="text-sm text-gray-500">{paragraph}</p>
    </div>
  );
}

export default AboutCard;
