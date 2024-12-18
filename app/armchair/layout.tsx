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
    siteName: 'ᐈПеретяжка крісла місто Київ Меваро',
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

        <link rel="canonical" href="https://mevaro.kiev.ua/armchair" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
