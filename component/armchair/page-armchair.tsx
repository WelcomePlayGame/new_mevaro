import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';

import Tringle from '@/component/tringle/page-tringle';
import FaqArmChair from '../faq/page-armchair-faq';
import WorkLocation from '../work_location/page-work-location';
import Reviews from '../reviews/page-reviews';
const ArmchairPage = () => {
  return (
    <section className={`${classes.container_office_armchair} pt-[30px]`}>
      <h2 className={`${classes.container_office_armchair_h2}`}>
        Перетяжка крісла Київ
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
            <strong>Перетяжка крісла</strong> допомагає оновити його зовнішній
            вигляд, зробити більш комфортним і гармонійно вписати в сучасний
            інтер’єр.
          </p>

          <ul>
            <li>
              ✅ <strong>Ремонт м’яких частин</strong>: заміна наповнювачів та
              підлокітників.
            </li>
            <li>
              ✅ <strong>Тканини на будь-який смак</strong>: виберіть колір і
              фактуру.
            </li>
            <li>
              ✅ <strong>Професійна реставрація</strong>, яка продовжить життя
              вашого крісла.
            </li>
          </ul>

          <p>
            Ваше крісло отримає новий вигляд і знову стане улюбленим місцем для
            відпочинку.
          </p>
        </div>
      </div>
      <Tringle />
      <FaqArmChair />
      <Reviews />
      <WorkLocation />
    </section>
  );
};

export default ArmchairPage;
