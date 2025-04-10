import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'ᐈПеретяжка углового дивана|Mevaro【Бесплатная Консультация】',
  description:
    '✅Перетяжка углового дивана. Цена|Киев. 【Замена войлока та поролона в диване】. Гарантия 12 месяцев. Работаем за Договором.',
  keywords: [
    'перетяжка углового дивана',
    'ремонт углового дивана',
    'оббивка углового дивана',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈПеретяжка углового дивана|Mevaro【Бесплатная Консультация】',
    description:
      '✅Перетяжка углового дивана. Цена|Киев. 【Замена войлока та поролона в диване】. Гарантия 12 месяцев. Работаем за Договором.',
    url: 'https://mevaro.kiev.ua/image/angular_sofa.jpg',
    siteName: 'ᐈПеретяжка углового дивана|Mevaro',
    images: [
      {
        url: 'https://mevaro.kiev.ua/image/angular_sofa.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://mevaro.kiev.ua/image/angular_sofa.jpg`,
        width: 1800,
        height: 1600,
        alt: 'перетяжка углового дивана',
      },
    ],
    locale: 'ru_RU',
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

  category: 'Перетяжка углового дивана',
};
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mevaro.kiev.ua/ru/angular_sofa" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
