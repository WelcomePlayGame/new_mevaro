import React from 'react';
import classes from './page-faq.module.css';

const FaqPage = () => {
  return (
    <section
      className={`${classes.container_faq}`}
      itemScope
      itemType="http://schema.org/FAQPage"
    >
      <h2 className={`${classes.container_h3}`}>
        Питання та відповіді по перетяжці
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
              <span itemProp="name">Що таке перетяжка меблів?</span>
            </summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                Перетяжка меблів — це процес оновлення м&apos;яких меблів, який
                включає заміну оббивки, наповнювача чи ремонт каркаса. Це
                дозволяє відновити естетичний вигляд, комфорт та
                функціональність меблів, продовживши їх термін служби. Популярне
                рішення для економії та збереження улюблених предметів
                інтер’єру.
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
              <span itemProp="name">Які переваги перетяжки меблів?</span>
            </summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                Перетяжка меблів дозволяє заощадити кошти, адже це дешевше за
                покупку нових меблів. Ви можете обрати дизайн і тканину, що
                відповідають вашому стилю. Це екологічно, адже зменшує кількість
                відходів, продовжує термін служби меблів та допомагає зберегти
                улюблені предмети інтер’єру.
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

export default FaqPage;
