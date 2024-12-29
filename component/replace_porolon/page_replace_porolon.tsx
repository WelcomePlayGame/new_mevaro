import React from 'react';
import classes from './replace_porolon.module.css';
import Image from 'next/image';
import Tringle from '../tringle/page-tringle';
import WorkLocation from '../work_location/page-work-location';
import Reviews from '../reviews/page-reviews';
import FaqPorolon from '../faq/page-porolon-faq';

const ReplacePorolon = () => {
  return (
    <section className={`${classes.container_porolon}`}>
      <h2 className={`${classes.container_porolon_h1}`}>Заміна поролона</h2>
      <div className={`${classes.container_porolon_top}`}>
        <div className={`${classes.container_porolon_wrap_image}`}>
          <Image
            src={'/image/porolon.webp'}
            fill
            alt="Заміна поролона"
            className={`${classes.container_porolon_img}`}
          />
        </div>
        <h3 className={`${classes.container_porolon_h3}`}>
          Щільність поролона
        </h3>
        <p className={`${classes.container_porolon_describe}`}>
          (вартість залежить від товщини поролона та щільності)
        </p>
        <div className={`${classes.container_porolon_bottom}`}>
          <div className={`${classes.container_type_porolon}`}>
            <span className={`${classes.container_type_porolon_span}`}>
              Поролон 25кг/м.куб
            </span>
          </div>
          <div className={`${classes.container_type_porolon}`}>
            <span className={`${classes.container_type_porolon_span}`}>
              Поролон 28кг/м.куб
            </span>
          </div>
          <div className={`${classes.container_type_porolon}`}>
            <span className={`${classes.container_type_porolon_span}`}>
              Поролон 35кг/м.куб
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div className={`${classes.container_porolon_second_des}`}>
        <p>
          <strong>Заміна поролону</strong> – це важливий етап відновлення м’яких
          меблів, який забезпечує комфорт і довговічність. Якщо ваші дивани,
          крісла або стільці втратили форму, стали менш зручними чи надто
          жорсткими, ми допоможемо вирішити цю проблему.
        </p>

        <ul>
          <li>
            ✅ Використання <strong>високоякісного поролону</strong>, який не
            просідає та має тривалий термін служби.
          </li>
          <li>
            ✅ <strong>Індивідуальний підбір</strong> щільності та товщини
            матеріалу для ваших меблів.
          </li>
          <li>
            ✅ Робота з будь-якими типами меблів: диванами, кріслами, стільцями,
            ліжками тощо.
          </li>
        </ul>

        <p>
          Заміна поролону поверне вашим меблям комфорт та функціональність, а
          також дозволить продовжити термін їхньої експлуатації.
        </p>
      </div>
      <Tringle />
      <FaqPorolon />
      <Reviews />
      <WorkLocation />
    </section>
  );
};

export default ReplacePorolon;
