import { Inter } from 'next/font/google';
import Script from 'next/script';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'ᐈПеретяжка офисного кресла город Киев Mevaro|Бесплатная Доставка',
  description:
    '✅Перетяжка офисного кресла. Цена|Киев✓【Замена войлока та поролона в кресле】✓Гарантия 12 месяцев✓ Работаем за Договором.',
  keywords: ['перетяжка офисного кресла'],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈПеретяжка офисного кресла город Київ Mevaro|Безкоштовна Доставка',
    description:
      '✅Перетяжка офисного кресла. Цена|Киев✓【Замена войлока та поролона в кресліе】✓Гарантия 12 месяцев✓ Работаем за Договором.',
    url: 'https://mevaro.kiev.ua/image/office_armchair.webp',
    siteName: 'Перетяжка офисного кресла',
    images: [
      {
        url: 'https://mevaro.kiev.ua/image/office_armchair.webp',
        width: 800,
        height: 600,
      },
      {
        url: `https://mevaro.kiev.ua/image/office_armchair.webp`,
        width: 1800,
        height: 1600,
        alt: 'Перетяжка офисного кресла',
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

  category: 'Перетяжка офисного кресла Киев',
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
        <link
          rel="canonical"
          href="https://mevaro.kiev.ua/ru/office_armchair"
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
