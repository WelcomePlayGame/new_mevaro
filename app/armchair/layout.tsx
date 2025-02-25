import { Inter } from 'next/font/google';
import Script from 'next/script';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'ᐈПеретяжка крісла ціна|Mevaro【Безкоштовна Консультація】',
  description:
    '✅Перетяжка крісла. Ціна|Київ. 【Заміна войлока та поролона в кріслі】. Гарантія 12 місяців. Працюємо за Договором.',
  keywords: ['перетяжка крісла', 'ремонт крісла Київ', 'оббивка крісла'],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈПеретяжка крісла місто Київ Меваро | Безкоштовна Доставка',
    description:
      '✅Безкоштовна Консультація по місту Київ|Широкий вибір тканин',
    url: 'https://mevaro.kiev.ua/image/armchair.jpg',
    siteName: 'ᐈПеретяжка крісла ціна|Mevaro【Безкоштовна Консультація】',
    images: [
      {
        url: 'https://mevaro.kiev.ua/image/armchair.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://mevaro.kiev.ua/image/armchair.jpg`,
        width: 1800,
        height: 1600,
        alt: 'перетяжка крісла',
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

  category: 'Перетяжка крісла Київ',
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
        <link rel="canonical" href="https://mevaro.kiev.ua/armchair" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
