import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ᐈ Перетяжка та Ремонт Меблів|Безкоштовна Доставка',
  description:
    '【Широкий вибір мебельної тканини для оббивки меблів】.✅Безкоштовна Консультація',
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
                  '@type': 'WebPage',
                  '@id': 'https://mevaro.kiev.ua',
                  url: 'https://mevaro.kiev.ua',
                  name: metadata.title,
                  review: {
                    '@type': 'Review',
                    url: 'https://www.google.com/search?sca_esv=4f7c836df226b895&authuser=0&hl=ru&gl=ua&output=search&q=Mevaro&ludocid=10220279674707005093&lsig=AB86z5X22yA71rdTu7odcHkLMWEd&ved=1i%3A4%2Ct%3A109124%2Ce%3A3%2Cp%3AQkdDZ-u0DP-TwPAPr5LqyQk%3A64#mpd=~4100839171516405367/customers/reviews',
                  },
                  isPartOf: { '@id': 'https://mevaro.kiev.ua/' },
                  datePublished: '2021-08-03T07:03:20+00:00',
                  dateModified: new Date().toISOString(),
                  description: metadata.description,
                  breadcrumb: { '@id': 'https://mevaro.kiev.ua/' },
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
        <Analytics />
        <link rel="canonical" href="https://mevaro.kiev.ua" />
      </head>
      <body className={inter.className}>
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
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
