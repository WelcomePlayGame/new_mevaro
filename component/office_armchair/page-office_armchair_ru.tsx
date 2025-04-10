import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';
import Tringle from '../tringle/page-tringle';
import WorkLocation from '../work_location/page-work-location_ru';
import FaqOfficeArmChair from '../faq/page-office-armchair_ru';
import Reviews from '../reviews/page-reviews';

const OfficeArmChair = () => {
  return (
    <section className={`${classes.container_office_armchair}`}>
      <h2 className={`${classes.container_office_armchair_h2}`}>
        Перетяжка офисного кресла Киев
      </h2>
      <div className={`${classes.container_office_armchair_des}`}>
        <Image
          src="/image/office_armchair.webp"
          alt="Перетяжка офісного крісла"
          width={600}
          height={300}
        />
        <div>
          <p>
            <strong>Перетяжка офисного кресла</strong> – это лучший способ
            восстановить комфорт и стиль мебели, которая используется ежедневно.
          </p>

          <ul>
            <li>
              ✅ <strong>Замена обивки</strong> на современные износостойкие
              материалы.
            </li>
            <li>
              ✅ <strong>Ремонт сиденья</strong>, спинки и подлокотников.
            </li>
            <li>
              ✅ <strong>Быстрое выполнение</strong> для вашего комфорта.
            </li>
          </ul>

          <p>
            Мы гарантируем высокий уровень качества, чтобы ваше офисное кресло
            выглядело как новое.
          </p>
        </div>
      </div>
      <Tringle />
      <FaqOfficeArmChair />
      <WorkLocation />
      <Reviews />
    </section>
  );
};
export default OfficeArmChair;
