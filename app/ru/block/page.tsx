import Footer from '@/component/footer/page-footer';
import HeadUpdate from '@/component/head/header_update_block_ru';
import SubHead from '@/component/head/page-sub-head';
import ReplaceBlock from '@/component/replace_block/page-raplace-block_ru';
import React from 'react';
import type { Metadata } from 'next';
import Tringle from '@/component/tringle/page-tringle';
import WorkLocation from '@/component/work_location/page-work-location_block_ru';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'ᐈЗамена пружинного блока|Mevaro【Бесплатная Доставка】',
  description:
    'Замена пружинного блока.Цена|Киев.【Замена войлока та поролона в диване】.Гарантия 12 месяцев. Работаем за Договором.',
  keywords: [
    'замена пружинного блока',
    'ремонт пружинного блока',
    'пружиний блок',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈЗамена пружинного блока-Киев|Mevaro【Бесплатная Доставка】',
    description:
      ' Замена пружинного блока.Цена|Кикв.【Замена войлока та поролона в диване】.Гарантия 12 месяцев. Работаем за Договором.',
    url: 'https://www.mevaro.kiev.ua/image/block.jpg',
    siteName:
      '🛠 Заміна пружинного блока - місто Київ Меваро | Безкоштовна Доставка',
    images: [
      {
        url: 'https://www.mevaro.kiev.ua/image/block.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://www.mevaro.kiev.ua/image/block.jpg`,
        width: 1800,
        height: 1600,
        alt: 'замена пружинного блока',
      },
    ],
    locale: 'ua_UA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `${process.env.BASE_URL}/ru/block`,
  },
  category: 'Меваро - Замена пружинного блока',
};


const Block = () => {
  return (
    <section>
      <HeadUpdate />
      <SubHead />
      <ReplaceBlock />
      <Tringle />
      <WorkLocation />
      <Footer />
    </section>
  );
};

export default Block;
