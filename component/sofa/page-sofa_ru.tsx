import React from 'react';
import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';
import FaqSofa from '../faq/page-sofa-faq_ru';
import ReverseTringle from '../tringle/page-reverse-triangle';
import WorkLocation from '../work_location/page-work-location_ru';

const Sofa = () => {
  return (
    <section className={`${classes.container_office_armchair} pt-[30px]`}>
      <h2 className={`${classes.container_office_armchair_h2}`}>
        Перетяжка дивана Киев
      </h2>
      <div className={`${classes.container_office_armchair_des}`}>
        <Image
          src="/image/mebli/sofa.jpg"
          alt="перетяжка дивана"
          width={600}
          height={300}
          objectFit="contain"
        />
        <div className={`${classes.content_describe}`}>
          <p>
            <strong>Перетяжка дивана</strong> — это идеальное решение для
            обновления любимой мебели, которая потеряла свой внешний вид или
            комфорт. Мы предлагаем профессиональные услуги перетяжки в Киеве,
            позволяющие сделать ваш диван как новый.
          </p>

          <ul>
            <li>
              ✅ <strong>Большой выбор материалов</strong>: ткани, экокожа,
              натуральная кожа.
            </li>
            <li>
              ✅ <strong>Ремонт наполнителей</strong>: замена поролона,
              пружинных блоков.
            </li>
            <li>
              ✅ <strong>Доступные цены</strong> и{' '}
              <strong>быстрые сроки выполнения</strong>.
            </li>
          </ul>

          <p>
            Мы используем только качественные материалы, которые обеспечивают
            долговечность вашего дивана и комфорт использования. Благодаря
            нашему опыту, ваш диван обретёт новую жизнь и идеально впишется в
            ваш интерьер.
          </p>
        </div>

        <ReverseTringle />
        <FaqSofa />
        <WorkLocation />
      </div>
    </section>
  );
};

export default Sofa;
