import React from 'react';
import classes from './page-faq.module.css';

const FaqPorolon = () => {
  return (
    <section
      className={`${classes.container_faq}`}
      itemScope
      itemType="http://schema.org/FAQPage"
    >
      <h2 className={`${classes.container_h3}`}>
        Питання та відповіді по заміні поролона
      </h2>
      <ol className={`${classes.container_ol}`}>
        {/* Вопрос 1 */}
        <li
          className={`${classes.container_li}`}
          itemProp="mainEntity"
          itemScope
          itemType="http://schema.org/Question"
        >
          <details>
            <summary>
              <span itemProp="name">Що таке заміна поролона?</span>
            </summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                Заміна поролона — це процес оновлення внутрішнього наповнювача
                м’яких меблів. Старий поролон, який втратив свої властивості,
                замінюється на новий, що дозволяє відновити комфорт, форму та
                довговічність меблів. Це важливий етап у реставрації для
                забезпечення якісного використання.
              </span>
            </p>
          </details>
        </li>

        {/* Вопрос 2 */}
        <li
          className={`${classes.container_li}`}
          itemProp="mainEntity"
          itemScope
          itemType="http://schema.org/Question"
        >
          <details>
            <summary>
              <span itemProp="name">Які переваги заміни поролона?</span>
            </summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                Заміна поролона дозволяє значно покращити комфорт вашого мебля,
                подовжити термін його служби, а також забезпечити краще
                збереження форми. Новий поролон може мати більшу щільність, що
                зробить сидіння чи спинку стійкішими до зношення.
              </span>
            </p>
          </details>
        </li>

        {/* Вопрос 3 */}
        <li
          className={`${classes.container_li}`}
          itemProp="mainEntity"
          itemScope
          itemType="http://schema.org/Question"
        >
          <details>
            <summary>
              <span itemProp="name">
                Як відбувается доставка м&apos;яких меблів?
              </span>
            </summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                Доставка м&apos;яких меблів відбувається швидко та зручно. У нас
                безкоштовна доставка/вивіз по Києву за умови наявності
                працюючого ліфта. Ми дбаємо про збереження меблів під час
                транспортування, тому гарантуємо акуратне завантаження,
                перевезення та розвантаження.
              </span>
            </p>
          </details>
        </li>

        {/* Вопрос 4 */}
        <li
          className={`${classes.container_li}`}
          itemProp="mainEntity"
          itemScope
          itemType="http://schema.org/Question"
        >
          <details>
            <summary>
              <span itemProp="name">У вас є безкоштовна консультація?</span>
            </summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                У нас є безкоштовна консультація зі зразками тканини за Вашою
                адресою. Ми приїдемо у зручний для Вас час, покажемо варіанти
                оббивки та допоможемо з вибором. Це дозволяє Вам зекономити час
                і отримати професійні рекомендації, не виходячи з дому.
              </span>
            </p>
          </details>
        </li>
      </ol>
    </section>
  );
};

export default FaqPorolon;
