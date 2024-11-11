import Footer from '@/component/footer/page-footer';
import HeadUpdate from '@/component/head/header_update';
import SubHead from '@/component/head/page-sub-head';
import ReplacePorolon from '@/component/replace_porolon/page_replace_porolon';
import React from 'react';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: '🛠 Заміна поролону- місто Київ Меваро | Безкоштовна Доставка',
  description:
    '🚚 Безкоштовна Доставка по місту Київ. Заміна  поролону в дивані.',
  keywords: ['заміна поролону', 'купити поролон', 'поролон'],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: '🛠 Заміна поролону - місто Київ Меваро | Безкоштовна Доставка',
    description:
      '🚚 Безкоштовна Доставка по місту Київ. Заміна поролону в дивані.',
    url: 'https://www.mevaro.kiev.ua/image/porolon.webp',
    siteName: '🛠 Заміна поролону - місто Київ Меваро | Безкоштовна Доставка',
    images: [
      {
        url: 'https://www.mevaro.kiev.ua/image/porolon.webp',
        width: 800,
        height: 600,
      },
      {
        url: `https://www.mevaro.kiev.ua/image/porolon.webp`,
        width: 1800,
        height: 1600,
        alt: 'заміна порлону',
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
const Porolon = () => {
  return (
    <section>
      <HeadUpdate />
      <SubHead />
      <ReplacePorolon />
      <Footer />
    </section>
  );
};

export default Porolon;
