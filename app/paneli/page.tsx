import Footer from '@/component/footer/page-footer';
import HeadUpdate from '@/component/head/header_update';
import SubHead from '@/component/head/page-sub-head';
import PagePaneli from '@/component/paneli/page-paneli';
import React from 'react';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title:
    '🛠 Виготовлення та перетяжка стінових панелей - Mevaro|Безкоштовна Доставка',
  description:
    '🚚 Безкоштовна доставка по місту Київ. Виготовлення м’яких стінових панелей на замовлення – стильний дизайн, якість та комфорт у кожній деталі.',
  keywords: [
    'стінові панелі',
    'заміна стінових панелей',
    'виготовлення стіноих панелей',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title:
      '🛠 Виготовлення та перетяжка стінових панелей  - місто Київ Меваро | Безкоштовна Доставка',
    description:
      '🚚 Безкоштовна Доставка по місту Київ. Виготовлення стінових панелей ',
    url: 'https://www.mevaro.kiev.ua/image/mebli/paneli.jpg',
    siteName:
      '🛠 Виготовлення та перетяжка стінових панелей  - місто Київ Меваро | Безкоштовна Доставка',
    images: [
      {
        url: 'https://www.mevaro.kiev.ua/image/mebli/paneli.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://www.mevaro.kiev.ua/image/mebli/paneli.jpg`,
        width: 1800,
        height: 1600,
        alt: 'Виготовлення стінових панелей ',
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
const Paneli = () => {
  return (
    <section>
      <HeadUpdate />
      <SubHead />
      <PagePaneli />
      <Footer />
    </section>
  );
};

export default Paneli;
