import Script from 'next/script';

import { ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ᐈПеретяжка мебели|Mevaro【Бесплатная Доставка】',
  description:
    '⚡Перетяжка мебели в Киеве✓ Доступные цены |【Широкий выбор качественных тканей】✓ Гарантия 12 месяцев✓ Работаем официально по договору.',
  keywords: [
    'перетяжка мебели',
    'перетяжка мебели киев',
    'перетяжка мебели недорого',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈПеретяжка мебели|Mevaro【Бесплатная Доставка',
    description:
      '⚡Перетяжка мебели в Киеве✓ Доступные цены |【Широкий выбор качественных тканей】✓ Гарантия 12 месяцев✓ Работаем официально по договору.',
    url: 'https://mevaro.kiev.ua/image/peretyajka_600_600.jpg',
    siteName: 'Перетяжка мебели|Mevaro',
    images: [
      {
        url: 'https://mevaro.kiev.ua/image/peretyajka_600_600.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://mevaro.kiev.ua/image/peretyajka_600_600.jpg',
        width: 1800,
        height: 1600,
        alt: 'Перетяжка мебели|Mevaro ',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },

  category: 'Перетяжка мебели Киев',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
