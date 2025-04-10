import { Inter } from 'next/font/google';
import Script from 'next/script';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'ᐈПеретяжка дивана цена - Киев|Mevaro【Бесплатная Консультация】',
  description: '【Перетяжка дивану от Меваро】.✅Бесплатная Доставка',
  keywords: [
    'перетяжка дивана',
    'перетяжка дивана ціна',
    'перетяжка дивана Київ',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈПеретяжка дивана цена - Киев|Mevaro【Бесплатная Консультация】',
    description: '【Перетяжка дивану от Меваро】.✅Бесплатная Доставка',
    url: 'https://mevaro.kiev.ua/image/mebli/sofa.jpg',
    siteName: 'ᐈПеретяжка дивана місто Київ | Меваро',
    images: [
      {
        url: 'https://mevaro.kiev.ua/image/mebli/sofa.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://mevaro.kiev.ua/image/mebli/sofa.jpg`,
        width: 1800,
        height: 1600,
        alt: 'перетяжка дивана',
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

  category: 'Перетяжка дивана Київ',
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
                  '@type': 'LocalBusiness',
                  '@id': 'https://mevaro.kiev.ua',
                  name: 'Mevaro',
                  url: 'https://mevaro.kiev.ua',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Київ',
                    addressCountry: 'UA',
                  },
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '5',
                    reviewCount: '5',
                  },
                  review: [
                    {
                      '@type': 'Review',
                      reviewBody:
                        'Робота сподобалася: якісно, професійно, відповідно до зазначеного терміну - рекомендую.',
                      reviewRating: {
                        '@type': 'Rating',
                        ratingValue: '5',
                        bestRating: '5',
                      },
                      author: {
                        '@type': 'Person',
                        name: 'Любов Петрович',
                      },
                      datePublished: '2024-11-24',
                    },
                    {
                      '@type': 'Review',
                      reviewBody:
                        "Із великим задоволенням залишаю відгук про відмінну роботу майстрів Меваро🙌🏻 ✨ з мого старого і від початку не дуже доброго дивану вони зробили чудо! - новий, дуже гарний і зручний для відпочинку. Я мега задоволена! Фактично за пів ціни я отримала новий диван 👌🏻 повністю замінили наповнювач, підігнали всі нюанси по каркасу і замінили оббивку - він просто красень зараз 🤩 дуже кваліфіковані, чемні, професійні. Радять, пропонують великий вибір тканин. Вирішила, більш ніяких купівель меблів)) Дякую ще раз! За нагоди обов'язково буду звертатись 💙💛",

                      reviewRating: {
                        '@type': 'Rating',
                        ratingValue: '5',
                        bestRating: '5',
                      },
                      author: {
                        '@type': 'Person',
                        name: 'Ольга Ильчук',
                      },
                      datePublished: '2024-11-23',
                    },
                  ],
                  description: metadata.description,
                  image: metadata.openGraph.images[0]?.url,
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
                      item: 'https://mevaro.kiev.ua/ru/porolon',
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
                      item: 'https://mevaro.kiev.ua/ru/lijko',
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
                      name: 'Изготовление мебели под заказ',
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

        <link rel="canonical" href="https://mevaro.kiev.ua/sofa" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
