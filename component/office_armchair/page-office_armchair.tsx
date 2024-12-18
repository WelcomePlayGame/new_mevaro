import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';
import Tringle from '../tringle/page-tringle';
import WorkLocation from '../work_location/page-work-location';
import FaqOfficeArmChair from '../faq/page-office-armchair';
import Reviews from '../reviews/page-reviews';

const OfficeArmChair = () => {
  return (
    <section className={`${classes.container_office_armchair}`}>
      <h2 className={`${classes.container_office_armchair_h2}`}>
        Перетяжка офісного крісла Київ
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
            <strong>Перетяжка офісного крісла</strong> – це найкращий спосіб
            відновити комфорт і стиль меблів, які використовуються щоденно.
          </p>

          <ul>
            <li>
              ✅ <strong>Заміна оббивки</strong> на сучасні зносостійкі
              матеріали.
            </li>
            <li>
              ✅ <strong>Ремонт сидіння</strong>, спинки та підлокітників.
            </li>
            <li>
              ✅ <strong>Швидке виконання</strong> для вашого комфорту.
            </li>
          </ul>

          <p>
            Ми гарантуємо високий рівень якості, щоб ваше офісне крісло
            виглядало як нове.
          </p>
        </div>
      </div>
      <Tringle />
      <FaqOfficeArmChair />
      <Reviews />
      <WorkLocation />
    </section>
  );
};
export default OfficeArmChair;
