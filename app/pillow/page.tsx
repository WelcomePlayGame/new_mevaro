import MakePillow from '@/component/make_pillows/page-make-pillows';
import React from 'react';
import Footer from '@/component/footer/page-footer';
import HeadUpdate from '@/component/head/header_update';
import SubHead from '@/component/head/page-sub-head';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: '🛠 Виготовлення подушок - місто Київ Меваро | Безкоштовна Доставка',
  description:
    '🚚 Безкоштовна Доставка по місту Київ. Виготовлення подушок для дивану.',
  keywords: ['виготовлення подушок ', 'подушки для саду', 'замовити полушки'],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: '🛠 Виготовлення подушок - місто Київ Меваро | Безкоштовна Доставка',
    description:
      '🚚 Безкоштовна Доставка по місту Київ. Виготовлення подушок для дивану.',
    url: 'https://www.mevaro.kiev.ua/image/pillows_second.png',
    siteName:
      '🛠 Заміна пружинного блока - місто Київ Меваро | Безкоштовна Доставка',
    images: [
      {
        url: 'https://www.mevaro.kiev.ua/image/pillows_second.png',
        width: 800,
        height: 600,
      },
      {
        url: `https://www.mevaro.kiev.ua/image/pillows_second.png`,
        width: 1800,
        height: 1600,
        alt: 'виготовлення подушок',
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
const Pillow = () => {
  return (
    <section>
      <HeadUpdate />
      <SubHead />
      <MakePillow />
      <Footer />
    </section>
  );
};

export default Pillow;
