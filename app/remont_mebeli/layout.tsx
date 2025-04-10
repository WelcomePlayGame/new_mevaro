import type { Metadata } from 'next';
import Script from 'next/script';
export const metadata: Metadata = {
  title: 'ᐈРемонт меблів|Mevaro【Безкоштовна Доставка】',
  description:
    '⭐Ремонт меблів.Ціна|Київ✓【Широкий вибір тканин】✓Гарантія 12 місяців✓Працюємо за Договором',
  keywords: [
    'перетяжка меблів',
    'перетяжка меблів Київ',
    'перетяжка меблів ціна',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈРемонт меблів|Mevaro【Безкоштовна Доставка】',
    description:
      '⭐Ремонт меблів.Ціна|Київ✓【Широкий вибір тканин】✓Гарантія 12 місяців✓Працюємо за Договором',
    url: 'https://mevaro.kiev.ua/image/peretyajka.web',
    siteName: '🛠 Перетяжка Меблів місто Київ Меваро',
    images: [
      {
        url: 'https://mevaro.kiev.ua/image/peretyajka.webp',
        width: 800,
        height: 600,
      },
      {
        url: 'https://mevaro.kiev.ua/image/peretyajka.web',
        width: 1800,
        height: 1600,
        alt: 'ремонт меблів',
      },
    ],
    locale: 'ua_UA',
    type: 'website',
  },

  category: 'Перетяжка меблів Київ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { position: 1, name: 'Перетяжка меблів', item: 'https://mevaro.kiev.ua/' },
    {
      position: 2,
      name: 'Заміна пружинного блока',
      item: 'https://mevaro.kiev.ua/block',
    },
    {
      position: 3,
      name: 'Заміна поролона',
      item: 'https://mevaro.kiev.ua/porolon',
    },
    {
      position: 4,
      name: 'Перетяжка дивану',
      item: 'https://mevaro.kiev.ua/sofa',
    },
    {
      position: 5,
      name: 'Перетяжка кутовго дивану',
      item: 'https://mevaro.kiev.ua/angular_sofa',
    },
    {
      position: 6,
      name: 'Перетяжка ліжка',
      item: 'https://mevaro.kiev.ua/lijko',
    },
    {
      position: 7,
      name: 'Перетяжка крісла',
      item: 'https://mevaro.kiev.ua/armchair',
    },
    {
      position: 8,
      name: 'Перетяжка офісного крісла',
      item: 'https://mevaro.kiev.ua/office_armchair',
    },
    {
      position: 9,
      name: 'Подушки на замовлення',
      item: 'https://mevaro.kiev.ua/pillow',
    },
    {
      position: 10,
      name: 'Стінові панелі на замовлення',
      item: 'https://mevaro.kiev.ua/paneli',
    },
  ];

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
                  '@type': 'WebSite',
                  '@id': 'https://mevaro.kiev.ua/#website',
                  url: 'https://mevaro.kiev.ua/',
                  name: 'Mevaro',
                  inLanguage: 'uk',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://mevaro.kiev.ua/?s={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
              ],
            }),
          }}
        />
        <link rel="canonical" href="https://mevaro.kiev.ua/remont_mebeli" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FMT447"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=398949992559159&ev=PageView&noscript=1"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
