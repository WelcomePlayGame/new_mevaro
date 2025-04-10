import Image from 'next/image';
import React from 'react';
import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Tringle from '@/component/tringle/page-tringle';
import FaqAngularSofa from '../faq/page-angular-sofa-faq';
import WorkLocation from '../work_location/page-work-location';
import Reviews from '../reviews/page-reviews';
const AngularSofa = () => {
  return (
    <section className={`${classes.container_office_armchair} pt-[30px]`}>
      <h2 className={`${classes.container_office_armchair_h2}`}>
        Перетяжка кутового дивану
      </h2>
      <div className={`${classes.container_office_armchair_des}`}>
        <Image
          src="/image/angular_sofa.jpg"
          alt="Перетяжка кутового дивану"
          width={600}
          height={300}
        />
        <div className={`${classes.content_describe}`}>
          <p>
            <strong>Перетяжка кутового дивану</strong> – це чудовий спосіб
            оновити ваші меблі, зробити їх більш стильними та комфортними. Ми
            пропонуємо послуги високоякісної перетяжки у Києві з використанням
            найкращих матеріалів та професійного обладнання.
          </p>

          <ul>
            <li>
              ✅ <strong>Широкий вибір тканин</strong> – від класичних до
              сучасних текстур.
            </li>
            <li>
              ✅ <strong>Замінюємо наповнювачі</strong> для додаткового
              комфорту.
            </li>
            <li>
              ✅ <strong>Відновлення конструкцій</strong> та ремонтування
              пошкоджень.
            </li>
          </ul>

          <p>
            Замовляючи у нас, ви отримуєте <em>професійний підхід</em>,
            <em>доступні ціни</em> та <em>безкоштовну доставку</em> в межах
            Києва. Ми допоможемо перетворити ваш кутовий диван на новий витвір
            мистецтва, який ідеально впишеться у ваш інтер’єр.
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

export default AngularSofa;
