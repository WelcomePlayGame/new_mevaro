import React from 'react';
import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';
import Tringle from '../tringle/page-tringle';
import FaqChair from '../faq/page-chair-faq';
import WorkLocation from '../work_location/page-work-location';
import Reviews from '../reviews/page-reviews';

const Chair = () => {
  return (
    <section className={`${classes.container_office_armchair}`}>
      <h2 className={`${classes.container_office_armchair_h2}`}>
        Перетяжка стільців Київ
      </h2>
      <div className={`${classes.container_office_armchair_des}`}>
        <Image
          src="/image/chair.jpg"
          alt="Перетяжка стільчика"
          width={600}
          height={300}
        />
        <div>
          <p>
            <strong>Перетяжка стільчиків</strong> – це швидкий і доступний
            спосіб повернути вашим стільцям зручність та естетичний вигляд. Наша
            команда пропонує якісні послуги, які продовжать життя ваших меблів.
          </p>

          <ul>
            <li>
              ✅ <strong>Заміну оббивки</strong> на нову, стильну та зносостійку
              тканину.
            </li>
            <li>
              ✅ <strong>Ремонт сидіння</strong> і спинки для максимального
              комфорту.
            </li>
            <li>
              ✅ <strong>Індивідуальний підхід</strong> до кожного замовлення.
            </li>
          </ul>

          <p>
            Ми працюємо з різними стилями меблів і гарантуємо відмінний
            результат для кожного стільця.
          </p>
        </div>
      </div>
      <Tringle />
      <FaqChair />
      <Reviews />
      <WorkLocation />
    </section>
  );
};

export default Chair;
