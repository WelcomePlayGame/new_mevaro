import React from 'react';
import classes from './page-faq.module.css';
const FaqPage = () => {
  return (
    <section className={`${classes.container_faq}`}>
      <h3 className={`${classes.container_h3}`}>
        Питання та відповіді по перетяжці
      </h3>
      <ol className={`${classes.container_ol}`}>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>що таке перетяжка меблів?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Перетяжка меблів — це процес оновлення м&apos;яких меблів, який
              включає заміну оббивки, наповнювача чи ремонт каркаса. Це дозволяє
              відновити естетичний вигляд, комфорт та функціональність меблів,
              продовживши їх термін служби. Популярне рішення для економії та
              збереження улюблених предметів інтер’єру.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>які переваги перетяжки меблів?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Перетяжка меблів дозволяє заощадити кошти, адже це дешевше за
              покупку нових меблів. Ви можете обрати дизайн і тканину, що
              відповідають вашому стилю. Це екологічно, адже зменшує кількість
              відходів, продовжує термін служби меблів та допомагає зберегти
              улюблені предмети інтер’єру.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>як відбувается доставка м&apos;яких меблів?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Доставка м&apos;яких меблів відбувається швидко та зручно. У нас
              безкоштовна доставка/вивіз по Києву за умови наявності працюючого
              ліфта. Ми дбаємо про збереження меблів під час транспортування,
              тому гарантуємо акуратне завантаження, перевезення та
              розвантаження.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>у вас є безкоштовна консультація?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              У нас є безкоштовна консультація зі зразками тканини за Вашою
              адресою. Ми приїдемо у зручний для Вас час, покажемо варіанти
              оббивки та допоможемо з вибором. Це дозволяє Вам зекономити час і
              отримати професійні рекомендації, не виходячи з дому.
            </p>
          </details>
        </li>
      </ol>
    </section>
  );
};

export default FaqPage;
