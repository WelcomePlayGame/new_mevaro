import { Inter } from 'next/font/google';
import Script from 'next/script';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: `ᐈ【Перетяжка стульев】Mevaro|Бесплатная Доставка`,
  description:
    '✅Перетяжка стульев. Цена|Киев✓【Замена поролона и ремонт стульев】✓Гарантия 12 месяцев✓Работаем за Договором',
  keywords: ['перетяжка стульев', 'ремонт стульев Киев', 'оббивка стульев'],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: `ᐈ【Перетяжка стульев Киев】Mevaro|Бесплатная Доставка`,
    description:
      '✅Перетяжка стульев. Цена|Киев✓【Замена поролона и ремонт стульев】✓Гарантия 12 месяцев✓Работаем за Договором.',
    url: 'https://mevaro.kiev.ua/image/chair.jpg',
    siteName: 'ᐈПеретяжка стульев город Киев',
    images: [
      {
        url: 'https://mevaro.kiev.ua/image/chair.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://mevaro.kiev.ua/image/chair.jpg`,
        width: 1800,
        height: 1600,
        alt: 'перетяжка стульев',
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

  category: 'Перетяжка кровати Киев',
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
        <Script
          id="json-ld-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebPage',
                  '@id': 'https://mevaro.kiev.ua',
                  url: 'https://mevaro.kiev.ua/ru/chair',
                  name: `ᐈ【Перетяжка стульев Киев】Mevaro|Бесплатная Доставка`,
                  isPartOf: {
                    '@id': 'https://mevaro.kiev.ua/',
                  },
                  datePublished: '2021-08-03T07:03:20+00:00',
                  dateModified: new Date().toISOString(),
                  description:
                    '✅Перетяжка стульев. Цена|Киев✓【Замена поролона и ремонт стульев】✓Гарантия 12 месяцев✓Работаем за Договором',
                  breadcrumb: {
                    '@id': 'https://mevaro.kiev.ua/',
                  },
                  inLanguage: 'uk',
                  potentialAction: [
                    {
                      '@type': 'ReadAction',
                      target: ['https://mevaro.kiev.ua/'],
                    },
                  ],
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://mevaro.kiev.ua/',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Перетяжка мебели',
                      item: 'https://mevaro.kiev.ua/ru',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'Замена пружинного блока',
                      item: 'https://mevaro.kiev.ua/ru/block',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Замена поролона',
                      item: 'https://mevaro.kiev.uaru//porolon',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'Перетяжка дивана',
                      item: 'https://mevaro.kiev.ua/ru/sofa',
                    },
                    {
                      '@type': 'ListItem',
                      position: 5,
                      name: 'Перетяжка углового дивана',
                      item: 'https://mevaro.kiev.ua/ru/angular_sofa',
                    },
                    {
                      '@type': 'ListItem',
                      position: 6,
                      name: 'Перетяжка кровати',
                      item: 'https://mevaro.kiev.ua/rulijko',
                    },
                    {
                      '@type': 'ListItem',
                      position: 7,
                      name: 'Перетяжка кресла',
                      item: 'https://mevaro.kiev.ua/ru/armchair',
                    },
                    {
                      '@type': 'ListItem',
                      position: 8,
                      name: 'Перетяжка офисного кресла',
                      item: 'https://mevaro.kiev.ua/ru/office_armchair',
                    },
                    {
                      '@type': 'ListItem',
                      position: 9,
                      name: 'Подушки под заказ',
                      item: 'https://mevaro.kiev.ua/ru/pillow',
                    },
                    {
                      '@type': 'ListItem',
                      position: 10,
                      name: 'Стеновые панели под заказ',
                      item: 'https://mevaro.kiev.ua/ru/paneli',
                    },
                    {
                      '@type': 'ListItem',
                      position: 11,
                      name: 'Изготовление мягкой мебели',
                      item: 'https://mevaro.kiev.ua/ru/mebli_zakaz',
                    },
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://mevaro.kiev.ua/#website',
                  url: 'https://mevaro.kiev.ua/',
                  name: 'Mevaro',
                  inLanguage: 'uk',
                  potentialAction: [
                    {
                      '@type': 'SearchAction',
                      target: {
                        '@type': 'EntryPoint',
                        urlTemplate:
                          'https://mevaro.kiev.ua/?s={search_term_string}',
                      },
                      'query-input': {
                        '@type': 'PropertyValueSpecification',
                        valueRequired: true,
                        valueName: 'search_term_string',
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />

        <link rel="canonical" href="https://mevaro.kiev.ua/ru/chair" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
