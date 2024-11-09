import Footer from '@/component/footer/page-footer';
import HeadUpdate from '@/component/head/header_update _blog';
import SubHead from '@/component/head/page-sub-head';
import ReplaceBlock from '@/component/replace_block/page-raplace-block';
import React from 'react';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: '🛠 Заміна пружинного блока - місто Київ Меваро | Безкоштовна Доставка',
  description:
    '🚚 Безкоштовна Доставка по місту Київ. Заміна пружинного блока та поролона в дивані.',
  keywords: [
    'заміна пружинного блока',
    'ремонт пружинного блока',
    'пружиний блок',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title:
      '🛠 Заміна пружинного блока - місто Київ Меваро | Безкоштовна Доставка',
    description:
      '🚚 Безкоштовна Доставка по місту Київ. Заміна пружинного блока та поролона в дивані.',
    url: 'https://www.mevaro.kiev.ua/image/armchair.jpg',
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
        alt: 'заміна пружинного блока',
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

  category: 'Меваро - Перетяжка меблів',
};
const Block = () => {
  return (
    <section>
      <HeadUpdate />
      <SubHead />
      <ReplaceBlock />
      <Footer />
    </section>
  );
};

export default Block;
