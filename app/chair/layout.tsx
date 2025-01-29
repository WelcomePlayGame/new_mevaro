import { Inter } from 'next/font/google';
import Script from 'next/script';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'ᐈПеретяжка стільців Mevaro|Безкоштовна Доставка',
  description:
    'Перетяжка Перетяжка стільців. Ціна|Київ.【Заміна войлока та поролона в стільцях】.Гарантія 12 місяців. Працюємо за Договором.',
  keywords: [
    'перетяжка стільців',
    'ремонт стільчиків Київ',
    'оббивка стільчиків',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈПеретяжка стільчиків місто Київ Меваро | Безкоштовна Доставка',
    description:
      '✅Безкоштовна Консультація по місту Київ|Широкий вибір тканин',
    url: 'https://mevaro.kiev.ua/image/chair.jpg',
    siteName: 'ᐈПеретяжка стільчиків місто Київ Меваро',
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
        alt: 'перетяжка стільчиків',
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

  category: 'Перетяжка офісного крісла Київ',
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
                  url: 'https://mevaro.kiev.ua/chair',
                  name: 'ᐈ Перетяжка та Ремонт стільчиків місто Київ Меваро | Безкоштовна Доставка',
                  isPartOf: {
                    '@id': 'https://mevaro.kiev.ua/',
                  },
                  datePublished: '2021-08-03T07:03:20+00:00',
                  dateModified: new Date().toISOString(),
                  description:
                    '✅Безкоштовна Консультація по місту Київ|Широкий вибір тканин',
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
                      name: 'Перетяжка меблів',
                      item: 'https://mevaro.kiev.ua/',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'Заміна пружинного блока',
                      item: 'https://mevaro.kiev.ua/block',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Заміна поролона',
                      item: 'https://mevaro.kiev.ua/porolon',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'Перетяжка дивану',
                      item: 'https://mevaro.kiev.ua/sofa',
                    },
                    {
                      '@type': 'ListItem',
                      position: 5,
                      name: 'Перетяжка кутовго дивану',
                      item: 'https://mevaro.kiev.ua/angular_sofa',
                    },
                    {
                      '@type': 'ListItem',
                      position: 6,
                      name: 'Перетяжка ліжка',
                      item: 'https://mevaro.kiev.ua/lijko',
                    },
                    {
                      '@type': 'ListItem',
                      position: 7,
                      name: 'Перетяжка ліжка',
                      item: 'https://mevaro.kiev.ua/armchair',
                    },
                    {
                      '@type': 'ListItem',
                      position: 8,
                      name: 'Перетяжка ліжка',
                      item: 'https://mevaro.kiev.ua/office_armchair',
                    },
                    {
                      '@type': 'ListItem',
                      position: 9,
                      name: 'Подушки на замовлення',
                      item: 'https://mevaro.kiev.ua/pillow',
                    },
                    {
                      '@type': 'ListItem',
                      position: 10,
                      name: 'Стінові панелі на замовлення',
                      item: 'https://mevaro.kiev.ua/paneli',
                    },
                    {
                      '@type': 'ListItem',
                      position: 11,
                      name: 'Виготовлення м’яких меблів',
                      item: 'https://mevaro.kiev.ua/mebli_zakaz',
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

        <link rel="canonical" href="https://mevaro.kiev.ua/chair" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
