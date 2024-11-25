import Script from 'next/script';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ᐈ Карта сайта Mevaro',
  description:
    '【Якщо Ви загубились - Ви можете знайти розділ, який Вас цікавить на цій сторінці.】',
  keywords: ['перетяжка меблів', 'ремонт меблів Київ', 'оббивка меблів'],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈ Перетяжка та Ремонт Меблів|Безкоштовна Доставка',
    description:
      '【Широкий вибір мебельної тканини для оббивки меблів】.✅Безкоштовна Консультація',
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
        alt: 'перетяжка меблів',
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
                  '@type': 'BreadcrumbList',
                  '@id': 'https://mevaro.kiev.ua/breadcrumbs',
                  itemListElement: breadcrumbItems.map((item) => ({
                    '@type': 'ListItem',
                    position: item.position,
                    name: item.name,
                    item: item.item,
                  })),
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

        <Script
          src="//web.webpushs.com/js/push/b6b24f64ee44d77c8800a47d8c4e1484_1.js"
          async
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5FMT447');`}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CLY6EQ97JG"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-CLY6EQ97JG');`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '398949992559159');fbq('track', 'PageView');`}
        </Script>
        <Script async src="https://static.elfsight.com/platform/platform.js" />

        <link rel="canonical" href="https://mevaro.kiev.ua/karta_map" />
      </head>
      <body>{children}</body>
    </html>
  );
}
