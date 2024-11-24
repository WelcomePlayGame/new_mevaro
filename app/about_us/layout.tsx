import { Inter } from 'next/font/google';
import Script from 'next/script';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'ᐈКомпанія Mevaro|Ми дбаємо про Ваші меблі',
  description:
    '✅Mevaro – це професійна компанія, яка спеціалізується на перетяжці, ремонті та оновленні меблів|вул. Екскаваторна 37',
  keywords: ['компанія Меваро', 'відгуки Mevaro', 'Mevaro меблі'],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈКомпанія Mevaro|Ми дбаємо про Ваші меблі',
    description:
      '✅Mevaro – це професійна компанія, яка спеціалізується на перетяжці, ремонті та оновленні меблів|вул. Екскаваторна 37',
    url: 'https://mevaro.kiev.ua/image/mevaro.png',
    siteName: 'ᐈПеретяжка крісла місто Київ Меваро',
    images: [
      {
        url: 'https://mevaro.kiev.ua/image/mevaro.png',
        width: 800,
        height: 600,
      },
      {
        url: `https://mevaro.kiev.ua/image/mevaro.png`,
        width: 1800,
        height: 1600,
        alt: 'перетяжка ліжка',
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
                  url: 'https://mevaro.kiev.ua/about_us',
                  name: 'ᐈКомпанія Mevaro|Ми дбаємо про Ваші меблі',
                  review: {
                    '@type': 'Review',
                    url: 'https://www.google.com/search?sca_esv=4f7c836df226b895&authuser=0&hl=ru&gl=ua&output=search&q=Mevaro&ludocid=10220279674707005093&lsig=AB86z5X22yA71rdTu7odcHkLMWEd&ved=1i%3A4%2Ct%3A109124%2Ce%3A3%2Cp%3AQkdDZ-u0DP-TwPAPr5LqyQk%3A64#mpd=~4100839171516405367/customers/reviews',
                  },
                  isPartOf: {
                    '@id': 'https://mevaro.kiev.ua/',
                  },
                  datePublished: '2021-08-03T07:03:20+00:00',
                  dateModified: new Date().toISOString(),
                  description:
                    '✅Mevaro – це професійна компанія, яка спеціалізується на перетяжці, ремонті та оновленні меблів|вул. Екскаваторна 37',
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

        <link rel="canonical" href="https://mevaro.kiev.ua/about_us" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
