import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';

import Tringle from '@/component/tringle/page-tringle';
import FaqArmChair from '../faq/page-armchair-faq_ru';
import WorkLocation from '../work_location/page-work-location_ru';
const ArmchairPage = () => {
  return (
    <section className={`${classes.container_office_armchair} pt-[30px]`}>
      <h2 className={`${classes.container_office_armchair_h2}`}>
        Перетяжка кресла Киев
      </h2>
      <div className={`${classes.container_office_armchair_des}`}>
        <Image
          src="/image/armchair.jpg"
          alt="Перетяжка крісел"
          width={600}
          height={300}
        />
        <div>
          <p>
            <strong>Перетяжка кресла</strong> помогает обновить его внешний вид,
            сделать более комфортным и гармонично вписать в современный
            интерьер.
          </p>

          <ul>
            <li>
              ✅ <strong>Ремонт мягких частей</strong>: замена наполнителей и
              подлокотников.
            </li>
            <li>
              ✅ <strong>Ткани на любой вкус</strong>: выберите цвет и фактуру.
            </li>
            <li>
              ✅ <strong>Профессиональная реставрация</strong>, которая продлит
              жизнь вашего кресла.
            </li>
          </ul>

          <p>
            Ваше кресло обретет новый вид и снова станет любимым местом для
            отдыха.
          </p>
        </div>
      </div>
      <Tringle />
      <FaqArmChair />
      <WorkLocation />
    </section>
  );
};

export default ArmchairPage;
