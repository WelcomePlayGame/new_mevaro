import React from 'react';
import classes from './page-faq.module.css';

const FaqLijko = () => {
  return (
    <section className={`${classes.container_faq}`}>
      <h3 className={`${classes.container_h3}`}>
        {' '}
        Відповіди, які можуть Вас цікавить?
      </h3>
      <ol className={`${classes.container_ol}`}>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Що таке перетяжка ліжка?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Перетяжка ліжка — це процес оновлення ліжка, який включає заміну
              оббивки, наповнювача чи ремонт каркаса. Це дозволяє відновити
              естетичний вигляд, комфорт та функціональність, продовживши їх
              термін служби. Популярне рішення для економії та збереження
              улюблених предметів інтер’єру.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Які переваги перетяжки ліжка?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Перетяжка ліжка дозволяє заощадити кошти, адже це дешевше за
              покупку новиго ліжка. Ви можете обрати дизайн і тканину, що
              відповідають вашому стилю. Це екологічно, адже зменшує кількість
              відходів, продовжує термін служби дивану та допомагає зберегти
              улюблені предмети інтер’єру.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Як відбувается доставка ліжка?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Доставка ліжка відбувається швидко та зручно. У нас безкоштовна
              доставка/вивіз по Києву за умови наявності працюючого ліфта. Ми
              дбаємо про збереження дивану під час транспортування, тому
              гарантуємо акуратне завантаження, перевезення та розвантаження.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>У вас є безкоштовна консультація?</span>
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

export default FaqLijko;
