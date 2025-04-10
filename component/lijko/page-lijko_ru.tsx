import React from 'react';
import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';
import FaqLijko from '../faq/page-lijko-faq_ru';
import Tringle from '@/component/tringle/page-tringle';
import WorkLocation from '../work_location/page-work-location_ru';

const Lijko = () => {
  return (
    <section className={`${classes.container_office_armchair} pt-[30px]`}>
      <h1>Перетяжка кровати Киев</h1>
      <div className={`${classes.container_office_armchair_des}`}>
        <Image
          src="/image/mebli/lijko.jpg"
          alt="Перетяжка кроватей"
          width={600}
          height={300}
        />
        <div className={`${classes.content_describe}`}>
          <p>
            <strong>Перетяжка кровати</strong> – это возможность обновить вашу
            мебель без необходимости покупать новую. Мы предоставляем
            профессиональные услуги перетяжки, которые вернут вашей кровати
            стильный вид и комфорт.
          </p>

          <ul>
            <li>
              ✅ <strong>Большой выбор тканей</strong> для создания желаемого
              дизайна.
            </li>
            <li>
              ✅ <strong>Ремонт основы и наполнителей</strong> для удобного сна.
            </li>
            <li>
              ✅ <strong>Индивидуальный подход</strong> к каждому заказу.
            </li>
          </ul>

          <p>
            Мы гарантируем качественное выполнение работ, которое подарит вашей
            кровати новую жизнь.
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
