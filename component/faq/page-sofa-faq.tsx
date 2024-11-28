import React from 'react';
import classes from './page-faq.module.css';

const FaqSofa = () => {
  return (
    <section
      className={`${classes.container_faq}`}
      itemScope
      itemType="http://schema.org/FAQPage"
    >
      <h3 className={`${classes.container_h3}`}>
        Відповіди, які можуть Вас цікавить?
      </h3>
      <ol className={`${classes.container_ol}`}>
        {/* Вопрос 1 */}
        <li
          className={`${classes.container_li}`}
          itemProp="mainEntity"
          itemScope
          itemType="http://schema.org/Question"
        >
          <details>
            <summary itemProp="name">Що таке перетяжка дивана?</summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                Перетяжка дивану — це процес оновлення м&apos;яких меблів, який
                включає заміну оббивки, наповнювача чи ремонт каркаса. Це
                дозволяє відновити естетичний вигляд, комфорт та
                функціональність меблів, продовживши їх термін служби. Популярне
                рішення для економії та збереження улюблених предметів
                інтер&apos;єру.
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
            <summary itemProp="name">Які переваги перетяжки дивана?</summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                Перетяжка дивану дозволяє заощадити кошти, адже це дешевше за
                покупку новиго дивану. Ви можете обрати дизайн і тканину, що
                відповідають вашому стилю. Це екологічно, адже зменшує кількість
                відходів, продовжує термін служби дивану та допомагає зберегти
                улюблені предмети інтер&apos;єру.
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
            <summary itemProp="name">
              Як відбувается доставка дивана по місту Київ?
            </summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                Доставка дивану відбувається швидко та зручно. У нас безкоштовна
                доставка/вивіз по Києву за умови наявності працюючого ліфта. Ми
                дбаємо про збереження дивану під час транспортування, тому
                гарантуємо акуратне завантаження, перевезення та розвантаження.
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
            <summary itemProp="name">У вас є безкоштовна консультація?</summary>
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

export default FaqSofa;
