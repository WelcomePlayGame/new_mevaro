import React from 'react';
import Head from '@/component/head/header_update';
import Footer from '@/component/footer/page-footer';
import SubHead from '@/component/head/page-sub-head';
import classes from '@/component/head/page-head.module.css';
import Sofa from '@/component/sofa/page-sofa';
import type { Metadata } from 'next';
import Script from 'next/script';
export const metadata: Metadata = {
  title: 'ᐈПеретяжка дивану місто Київ Меваро|Безкоштовна Доставка',
  description:
    '✅Перетяжка та ремонт Дивану|Безкоштовна Доставка по місту Київ.',
  keywords: ['перетяжка дивана', 'ремонт дивана Київ', 'оббивка диванна'],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈПеретяжка дивану місто Київ Меваро | Безкоштовна Доставка',
    description:
      'Перетяжка та ремонт Дивану|Безкоштовна Доставка по місту Київ.',
    url: 'https://www.mevaro.kiev.ua/image/mebli/sofa.jpg',
    siteName: 'ᐈПеретяжка Меблів місто Київ Меваро',
    images: [
      {
        url: 'https://www.mevaro.kiev.ua/image/mebli/sofa.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://www.mevaro.kiev.ua/image/mebli/sofa.jpg`,
        width: 1800,
        height: 1600,
        alt: 'перетяжка дивану',
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

  category: 'Меблі Україна',
};
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
          url: 'https://www.mevaro.kiev.ua/sofa',
          name: 'ᐈ Перетяжка та Ремонт Дивану місто Київ Меваро | Безкоштовна Доставка',
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
            {
              '@type': 'ListItem',
              position: 11,
              name: 'Виготовлення м’яких меблів',
              item: 'https://www.mevaro.kiev.ua/mebli_zakaz',
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
      ],
    }),
  }}
/>;
const SofaPage = () => {
  return (
    <section>
      <div className={`${classes.container_head_block}`}>
        <Head />
        <SubHead />
      </div>
      <Sofa />
      <Footer />
    </section>
  );
};

export default SofaPage;
