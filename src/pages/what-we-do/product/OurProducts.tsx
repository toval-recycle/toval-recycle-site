import React from 'react';
import { useTranslation } from 'react-i18next';
import ParagraphHeader from '../../../components/ParagraphHeader';
import ProductSection from './productSection';

const ProductsArray = [
  {
    imagePath: '/about-us/about-us-image.png',
    title: 'We strive to protect nature for future generations.',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisseullamcorper enim vel fringilla scelerisque. Morbi fermentum, metuseget aliquet laoreet, dolor arcu congue mauris, eleifend fermentumligula ligula sit amet ex. Vivamus feugiat est mi, id vestibulum augue',
  },
  {
    imagePath: '/about-us/about-us-image.png',
    title: 'We strive to protect nature for future generations.',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisseullamcorper enim vel fringilla scelerisque. Morbi fermentum, metuseget aliquet laoreet, dolor arcu congue mauris, eleifend fermentumligula ligula sit amet ex. Vivamus feugiat est mi, id vestibulum augue',
  },
  {
    imagePath: '/about-us/about-us-image.png',
    title: 'We strive to protect nature for future generations.',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisseullamcorper enim vel fringilla scelerisque. Morbi fermentum, metuseget aliquet laoreet, dolor arcu congue mauris, eleifend fermentumligula ligula sit amet ex. Vivamus feugiat est mi, id vestibulum augue',
  },
];

function OurProducts() {
  const { t } = useTranslation();
  const TITLE = t('whatWeDo.product.title');
  const SUBTITLE = t('whatWeDo.product.subTitle');
  const ProductsArray = [
    {
      imagePath: {
        original: '/what-we-do/plastic-granules.jpg',
        low: '/what-we-do/plastic-granules-low.jpg',
      },
      title: t('whatWeDo.product.products.quote_1.title'),
      paragraph: t('whatWeDo.product.products.quote_1.paragraph'),
    },
    {
      imagePath: {
        original: '/what-we-do/plastic-granules-for-blowing.png',
        low: '/what-we-do/plastic-granules-for-blowing-low.jpg',
      },
      title: t('whatWeDo.product.products.quote_2.title'),
      paragraph: t('whatWeDo.product.products.quote_2.paragraph'),
    },
    {
      imagePath: {
        original: '/what-we-do/plastic-granules-nylon-sheets.jpeg',
        low: '/what-we-do/plastic-granules-nylon-sheets-low.jpeg',
      },
      title: t('whatWeDo.product.products.quote_3.title'),
      paragraph: t('whatWeDo.product.products.quote_3.paragraph'),
    },
  ];

  return (
    <div>
      <div className="flex w-full mb-20 flex-col justify-center text-center ">
        <div className="flex w-full justify-center">
          <ParagraphHeader>{TITLE}</ParagraphHeader>
        </div>
        <div className="mt-4 flex flex-col gap-5">
          <h2 className="text-4xl font-semibold">{SUBTITLE}</h2>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        {ProductsArray.map(({ imagePath, title, paragraph }, index) => {
          const directionReverse = Boolean(index % 2);
          return (
            <ProductSection
              key={index}
              title={title}
              paragraph={paragraph}
              imagePath={imagePath}
              reverse={directionReverse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OurProducts;
