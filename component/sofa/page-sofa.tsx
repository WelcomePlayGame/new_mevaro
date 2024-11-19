import React from 'react';
import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';
import Link from 'next/link';
import FaqSofa from '../faq/page-sofa-faq';
import { Triangle } from 'three';
import ReverseTringle from '../tringle/page-reverse-triangle';
import WorkLocation from '../work_location/page-work-location';

const Sofa = () => {
  return (
    <section className={`${classes.container_office_armchair} pt-[30px]`}>
      <h2 className={`${classes.container_office_armchair_h2}`}>
        Перетяжка дивану
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
            <strong>Перетяжка дивану</strong> – це ідеальне рішення для
            оновлення улюблених меблів, які втратили свій вигляд або комфорт. Ми
            пропонуємо професійні послуги перетяжки у Києві, що дозволяють
            зробити ваш диван як новий.
          </p>

          <ul>
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
            довговічність вашого дивану та комфорт використання. Завдяки нашому
            досвіду ваш диван отримає нове життя та ідеально пасуватиме до
            вашого інтер’єру.
          </p>
          <p>
            <a href="/contact" title="Замовити перетяжку дивану">
              Зв’яжіться з нами
            </a>
            , щоб отримати безкоштовну консультацію та замовити послугу!
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
