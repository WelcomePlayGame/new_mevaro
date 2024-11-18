import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title:
    'ᐈ Перетяжка та Ремонт Меблів місто Київ Меваро | Безкоштовна Доставка',
  description:
    '✅ Безкоштовна Доставка по місту Київ. Широкий вибір мебельної тканини для оббивки меблів.✅',
  keywords: ['перетяжка меблів', 'ремонт меблів Київ', 'оббивка меблів'],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: '🛠 Перетяжка Меблів місто Київ Меваро | Безкоштовна Доставка',
    description:
      '🚚 Безкоштовна Доставка по місту Київ. Широкий вибір мебельної тканини для оббивки меблів.',
    url: 'https://www.mevaro.kiev.ua/image/peretyajka.jpg',
    siteName: '🛠 Перетяжка Меблів місто Київ Меваро',
    images: [
      {
        url: 'https://www.mevaro.kiev.ua/image/peretyajka.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://www.mevaro.kiev.ua/image/peretyajka.jpg`,
        width: 1800,
        height: 1600,
        alt: 'перетяжка меблів',
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

  category: 'Перетяжка меблів Київ',
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
                  '@id': 'https://www.mevaro.kiev.ua',
                  url: 'https://www.mevaro.kiev.ua',
                  name: 'ᐈ Перетяжка та Ремонт Меблів місто Київ Меваро | Безкоштовна Доставка',
                  isPartOf: {
                    '@id': 'https://www.mevaro.kiev.ua/',
                  },
                  datePublished: '2021-08-03T07:03:20+00:00',
                  dateModified: new Date().toISOString(),
                  description:
                    '✅ Безкоштовна Доставка по місту Київ. Широкий вибір мебельної тканини для оббивки меблів.✅',
                  breadcrumb: {
                    '@id': 'https://www.mevaro.kiev.ua/',
                  },
                  inLanguage: 'uk',
                  potentialAction: [
                    {
                      '@type': 'ReadAction',
                      target: ['https://www.mevaro.kiev.ua/'],
                    },
                  ],
                },
                {
                  '@type': 'BreadcrumbList',
                  '@id': 'https://www.mevaro.kiev.ua/',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Перетяжка меблів',
                      item: 'https://www.mevaro.kiev.ua/',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'Заміна пружинного блока',
                      item: 'https://www.mevaro.kiev.ua/block',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'Заміна поролона',
                      item: 'https://www.mevaro.kiev.ua/porolon',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'Перетяжка дивану',
                      item: 'https://www.mevaro.kiev.ua/sofa',
                    },
                    {
                      '@type': 'ListItem',
                      position: 5,
                      name: 'Перетяжка кутовго дивану',
                      item: 'https://www.mevaro.kiev.ua/angular_sofa',
                    },
                    {
                      '@type': 'ListItem',
                      position: 6,
                      name: 'Перетяжка ліжка',
                      item: 'https://www.mevaro.kiev.ua/lijko',
                    },
                    {
                      '@type': 'ListItem',
                      position: 7,
                      name: 'Перетяжка ліжка',
                      item: 'https://www.mevaro.kiev.ua/armchair',
                    },
                    {
                      '@type': 'ListItem',
                      position: 8,
                      name: 'Перетяжка ліжка',
                      item: 'https://www.mevaro.kiev.ua/office_armchair',
                    },
                    {
                      '@type': 'ListItem',
                      position: 9,
                      name: 'Подушки на замовлення',
                      item: 'https://www.mevaro.kiev.ua/pillow',
                    },
                    {
                      '@type': 'ListItem',
                      position: 10,
                      name: 'Стінові панелі на замовлення',
                      item: 'https://www.mevaro.kiev.ua/paneli',
                    },
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.mevaro.kiev.ua/#website',
                  url: 'https://www.mevaro.kiev.ua/',
                  name: 'Mevaro',
                  inLanguage: 'uk',
                  potentialAction: [
                    {
                      '@type': 'SearchAction',
                      target: {
                        '@type': 'EntryPoint',
                        urlTemplate:
                          'https://www.mevaro.kiev.ua/?s={search_term_string}',
                      },
                      'query-input': {
                        '@type': 'PropertyValueSpecification',
                        valueRequired: true,
                        valueName: 'search_term_string',
                      },
                    },
                  ],
                },
                // {
                //   '@type': 'AggregateRating',
                //   '@id': 'https://www.mevaro.kiev.ua#aggregateRating',
                //   itemReviewed: {
                //     '@type': 'Service',
                //     name: 'Перетяжка меблів',
                //   },
                //   ratingValue: '4.8',
                //   reviewCount: '54',
                //   bestRating: '5',
                //   worstRating: '1',
                // },
                // {
                //   '@type': 'Review',
                //   author: {
                //     '@type': 'Person',
                //     name: 'Іван Петренко',
                //   },
                //   reviewBody:
                //     'Швидко та якісно перетягнули диван. Результат перевершив очікування!',
                //   reviewRating: {
                //     '@type': 'Rating',
                //     ratingValue: '5',
                //     bestRating: '5',
                //   },
                //   datePublished: '2024-10-20',
                // },
                // {
                //   '@type': 'Review',
                //   author: {
                //     '@type': 'Person',
                //     name: 'Олена Коваленко',
                //   },
                //   reviewBody: 'Чудовий сервіс і доступні ціни. Рекомендую!',
                //   reviewRating: {
                //     '@type': 'Rating',
                //     ratingValue: '4.5',
                //     bestRating: '5',
                //   },
                //   datePublished: '2024-11-10',
                // },
              ],
            }),
          }}
        />

        <Script
          src="//web.webpushs.com/js/push/b6b24f64ee44d77c8800a47d8c4e1484_1.js"
          async
        ></Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5FMT447');`}
        </Script>

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CLY6EQ97JG"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CLY6EQ97JG');`}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '398949992559159');
          fbq('track', 'PageView');`}
        </Script>
        {/* End Meta Pixel Code */}
        <Script
          async
          src="https://static.elfsight.com/platform/platform.js"
        ></Script>
        <Analytics />
      </head>

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FMT447"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=398949992559159&ev=PageView&noscript=1"
          />
        </noscript>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
