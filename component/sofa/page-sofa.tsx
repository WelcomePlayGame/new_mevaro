import React from 'react';
import Head from 'next/head'; // Для Next.js
import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';
import FaqSofa from '../faq/page-sofa-faq';
import ReverseTringle from '../tringle/page-reverse-triangle';
import WorkLocation from '../work_location/page-work-location';
import Reviews from '../reviews/page-reviews';

const Sofa = () => {
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Перетяжка дивана',
    description:
      'Професійна перетяжка диванів у Києві. Великий вибір матеріалів, доступні ціни, швидке виконання. Ідеальне рішення для оновлення меблів.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Компанія Перетяжки Меблів',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'вулиця Екскаваторна, 37',
        addressLocality: 'Київ',
        addressCountry: 'Україна',
      },
      telephone: '+380957162677',
      url: 'https://mevaro.kiev.ua/sofa',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Київ, Україна',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Каталог послуг',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Перетяжка прямого дивана',
          },
          price: '11500.00',
          priceCurrency: 'UAH',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ремонт наповнювачів дивана',
          },
          price: '5500.00',
          priceCurrency: 'UAH',
        },
      ],
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
        />
      </Head>
      <section className={`${classes.container_office_armchair} pt-[30px]`}>
        <h2 className={`${classes.container_office_armchair_h2}`}>
          Перетяжка дивана - Яка ціна?
        </h2>
        <div className={`${classes.container_office_armchair_des}`}>
          <Image
            src="/image/mebli/sofa.jpg"
            alt="Перетяжка диванів"
            width={600}
            height={300}
            objectFit="contain"
          />
          <div className={`${classes.content_describe}`}>
            <p>
              <strong>Перетяжка дивана</strong> – це ідеальне рішення для
              оновлення улюблених меблів, які втратили свій вигляд або комфорт.
              Ми пропонуємо професійні послуги перетяжки у Києві, що дозволяють
              зробити ваш диван як новий.
            </p>

            <ul className="list-none">
              <li>
                ✅ <strong>Великий вибір матеріалів</strong>: тканини, екошкіра,
                натуральна шкіра.
              </li>
              <li>
                ✅ <strong>Ремонт наповнювачів</strong>: заміна поролону,
                пружинних блоків.
              </li>
              <li>
                ✅ <strong>Доступні ціни</strong> та{' '}
                <strong>швидкі терміни виконання</strong>.
              </li>
            </ul>

            <p>
              Ми використовуємо лише якісні матеріали, що забезпечують
              довговічність вашого дивану та комфорт використання. Завдяки
              нашому досвіду ваш диван отримає нове життя та ідеально пасуватиме
              до вашого інтер’єру.
            </p>
          </div>
          <ReverseTringle />
          <FaqSofa />
          <Reviews />
          <WorkLocation />
        </div>
      </section>
    </>
  );
};

export default Sofa;
