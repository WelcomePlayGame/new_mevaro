import React from 'react';
import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';
import FaqLijko from '../faq/page-lijko-faq';
import Tringle from '@/component/tringle/page-tringle';
import WorkLocation from '../work_location/page-work-location';
const Lijko = () => {
  return (
    <section className={`${classes.container_office_armchair} pt-[30px]`}>
      <h1>Перетяжка ліжка</h1>
      <div className={`${classes.container_office_armchair_des}`}>
        <Image
          src="/image/mebli/lijko.jpg"
          alt="Перетяжка ліжок"
          width={600}
          height={300}
        />
        <div className={`${classes.content_describe}`}>
          <p>
            <strong>Перетяжка ліжка</strong> – це можливість оновити ваші меблі
            без необхідності купувати нові. Ми надаємо професійні послуги
            перетяжки, які повернуть вашому ліжку стильний вигляд і комфорт.
          </p>

          <ul>
            <li>
              ✅ <strong>Великий вибір тканин</strong> для створення бажаного
              дизайну.
            </li>
            <li>
              ✅ <strong>Ремонт основи та наповнювачів</strong> для зручного
              сну.
            </li>
            <li>
              ✅ <strong>Індивідуальний підхід</strong> до кожного замовлення.
            </li>
          </ul>

          <p>
            Ми гарантуємо якісне виконання робіт, яке подарує вашому ліжку нове
            життя.
          </p>
          <p>
            <a href="/contact" title="Замовити перетяжку ліжка">
              Зв’яжіться з нами
            </a>
            вже сьогодні, щоб замовити послугу!
          </p>
        </div>
      </div>
      <Tringle />
      <FaqLijko />
      <WorkLocation />
    </section>
  );
};

export default Lijko;
