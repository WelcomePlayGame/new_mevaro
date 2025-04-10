import Image from 'next/image';
import React from 'react';
import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Tringle from '@/component/tringle/page-tringle';
import FaqAngularSofa from '../faq/page-angular-sofa-faq_ru';
import WorkLocation from '../work_location/page-work-location_ru';
import Reviews from '../reviews/page-reviews';
const AngularSofaRU = () => {
  return (
    <section className={`${classes.container_office_armchair} pt-[30px]`}>
      <h2 className={`${classes.container_office_armchair_h2}`}>
        Перетяжка углового дивана Киев
      </h2>
      <div className={`${classes.container_office_armchair_des}`}>
        <Image
          src="/image/angular_sofa.jpg"
          alt="Перетяжка углового дивана"
          width={600}
          height={300}
        />
        <div className={`${classes.content_describe}`}>
          <p>
            <strong>Перетяжка углового дивана</strong> – это отличный способ
            обновить вашу мебель, сделать её более стильной и комфортной. Мы
            предлагаем услуги высококачественной перетяжки в Киеве с
            использованием лучших материалов и профессионального оборудования.
          </p>

          <ul>
            <li>
              ✅ <strong>Широкий выбор тканей</strong> – от классических до
              современных текстур.
            </li>
            <li>
              ✅ <strong>Замена наполнителей</strong> для дополнительного
              комфорта.
            </li>
            <li>
              ✅ <strong>Восстановление конструкций</strong> и ремонт
              повреждений.
            </li>
          </ul>

          <p>
            Заказывая у нас, вы получаете <em>профессиональный подход</em>,
            <em>доступные цены</em> и <em>бесплатную доставку</em> в пределах
            Киева. Мы поможем превратить ваш угловой диван в новый шедевр,
            который идеально впишется в ваш интерьер.
          </p>
        </div>
      </div>
      <Tringle />
      <FaqAngularSofa />
      <Reviews />
      <WorkLocation />
    </section>
  );
};

export default AngularSofaRU;
