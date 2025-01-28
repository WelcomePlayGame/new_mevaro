import React from 'react';
import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';
import Tringle from '../tringle/page-tringle';
import FaqChair from '../faq/page-chair-faq_ru';
import WorkLocation from '../work_location/page-work-location_ru';
import Reviews from '../reviews/page-reviews';

const Chair = () => {
  return (
    <section className={`${classes.container_office_armchair}`}>
      <h2 className={`${classes.container_office_armchair_h2}`}>
        Перетяжка стульев Киев
      </h2>
      <div className={`${classes.container_office_armchair_des}`}>
        <Image
          src="/image/chair.jpg"
          alt="Перетяжка стула"
          width={600}
          height={300}
        />
        <div>
          <p>
            <strong>Перетяжка стульев</strong> – это быстрый и доступный способ
            вернуть вашим стульям удобство и эстетичный вид. Наша команда
            предлагает качественные услуги, которые продлят жизнь вашей мебели.
          </p>

          <ul>
            <li>
              ✅ <strong>Замена обивки</strong> на новую, стильную и
              износостойкую ткань.
            </li>
            <li>
              ✅ <strong>Ремонт сиденья</strong> и спинки для максимального
              комфорта.
            </li>
            <li>
              ✅ <strong>Индивидуальный подход</strong> к каждому заказу.
            </li>
          </ul>

          <p>
            Мы работаем с разными стилями мебели и гарантируем отличный
            результат для каждого стула.
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
