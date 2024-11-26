import Footer from '@/component/footer/page-footer';
import HeadUpdate from '@/component/head/header_update_block_ru';
import SubHead from '@/component/head/page-sub-head';
import ReplaceBlock from '@/component/replace_block/page-raplace-block_ru';
import React from 'react';
import type { Metadata } from 'next';
import Tringle from '@/component/tringle/page-tringle';
import WorkLocation from '@/component/work_location/page-work-location_block_ru';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'ᐈЗамена пружинного блока-Киев|Mevaro【Бесплатная Доставка】',
  description:
    '✅ Замена пружинного блока.Цена|Киев.【Замена войлока та поролона в диване】.Гарантия 12 месяцев. Работаем за Договором.',
  keywords: [
    'замена пружинного блока',
    'ремонт пружинного блока',
    'пружиний блок',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title: 'ᐈЗамена пружинного блока-Киев|Mevaro【Бесплатная Доставка】',
    description:
      '✅ Замена пружинного блока.Цена|Кикв.【Замена войлока та поролона в диване】.Гарантия 12 месяцев. Работаем за Договором.',
    url: 'https://www.mevaro.kiev.ua/image/block.jpg',
    siteName:
      '🛠 Заміна пружинного блока - місто Київ Меваро | Безкоштовна Доставка',
    images: [
      {
        url: 'https://www.mevaro.kiev.ua/image/block.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://www.mevaro.kiev.ua/image/block.jpg`,
        width: 1800,
        height: 1600,
        alt: 'замена пружинного блока',
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
  alternates: {
    canonical: `${process.env.BASE_URL}/ru/block`,
  },
  category: 'Меваро - Замена пружинного блока',
};
const breadcrumbItems = [
  {
    position: 1,
    name: 'Перетяжка мебели',
    item: 'https://mevaro.kiev.ua/ru',
  },
  {
    position: 2,
    name: 'Замена пружинного блока',
    item: 'https://mevaro.kiev.ua/ru/block',
  },
  {
    position: 3,
    name: 'Замена поролона',
    item: 'https://mevaro.kiev.ua/ru/porolon',
  },
  {
    position: 4,
    name: 'Перетяжка дивана',
    item: 'https://mevaro.kiev.ua/ru/sofa',
  },
  {
    position: 5,
    name: 'Перетяжка углового дивана',
    item: 'https://mevaro.kiev.ua/ru/angular_sofa',
  },
  {
    position: 6,
    name: 'Перетяжка кровати',
    item: 'https://mevaro.kiev.ua/ru/lijko',
  },
  {
    position: 7,
    name: 'Перетяжка кресла',
    item: 'https://mevaro.kiev.ua/ru/armchair',
  },
  {
    position: 8,
    name: 'Перетяжка офисного кресла',
    item: 'https://mevaro.kiev.ua/ru/office_armchair',
  },
  {
    position: 9,
    name: 'Подушки под заказ',
    item: 'https://mevaro.kiev.ua/ru/pillow',
  },
  {
    position: 10,
    name: 'Стеновые панели под заказ',
    item: 'https://mevaro.kiev.ua/ru/paneli',
  },
];
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
/>;
const Block = () => {
  return (
    <section>
      <HeadUpdate />
      <SubHead />
      <ReplaceBlock />
      <Tringle />
      <WorkLocation />
      <Footer />
    </section>
  );
};

export default Block;
