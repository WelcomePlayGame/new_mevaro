import React from 'react';
import classes from '@/component/office_armchair/page-office-armchair.module.css';
import Image from 'next/image';
import Link from 'next/link';
import FaqSofa from '../faq/page-sofa-faq';
import { Triangle } from 'three';
import ReverseTringle from '../tringle/page-reverse-triangle';
import WorkLocation from '../work_location/page-work-location';

const Sofa = () => {
  return (
    <section className={`${classes.container_office_armchair} pt-[30px]`}>
      <h2 className={`${classes.container_office_armchair_h2}`}>
        Перетяжка дивану
      </h2>
      <div className={`${classes.container_office_armchair_des}`}>
        <Image
          src="/image/mebli/sofa.jpg"
          alt="Перетяжка диванів"
          width={600}
          height={300}
          objectFit="contain"
        />
        <div className={`${classes.content_describe}`}>
          <p>
            Перетяжка дивану — це один із найбільш популярних способів
            відновлення меблів, який дозволяє не тільки оновити вигляд старого
            дивану, але й значно продовжити його термін служби. За допомогою
            перетяжки можна змінити не тільки оббивку, але й наповнювач, пружини
            або каркас, що робить меблі зручними та комфортними для подальшого
            використання.
          </p>

          <p>
            Перетяжка дивану ідеально підходить для тих, хто хоче оновити
            інтер&apos;єр без великих витрат на нові меблі. Окрім того, у вас є
            можливість вибрати тканину, яка найкраще підходить до вашого стилю
            та вимог — від класичних тканин до сучасних матеріалів з
            водовідштовхувальними та антибактеріальними властивостями.
          </p>

          <p>
            Заміна оббивки також дозволяє вибрати матеріали, які відповідають
            вашому бюджету — від доступних варіантів до преміум класу. Крім
            того, можна вибрати тканину, що легко чиститься, що дуже важливо для
            родин з дітьми або домашніми тваринами.
          </p>

          <p>
            Цей процес є екологічно чистим варіантом, оскільки дозволяє уникнути
            викиду старих меблів на сміттєзвалища. Перетяжка дивану — це також
            чудова можливість змінити стиль вашого дому або офісу, зробивши їх
            більш сучасними та комфортними.
          </p>
        </div>
        <ReverseTringle />
        <FaqSofa />
        <WorkLocation />
      </div>
    </section>
  );
};

export default Sofa;
