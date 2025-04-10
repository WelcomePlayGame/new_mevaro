import React from 'react';
import classes from './page-faq.module.css';

const FaqOfficeArmChair = () => {
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
              <span>Що таке перетяжка офісного крісла?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Перетяжка офісного крісла — це процес оновлення крісла, який
              включає заміну оббивки, наповнювача чи ремонт каркаса. Це дозволяє
              відновити естетичний вигляд, комфорт та функціональність,
              продовживши їх термін служби. Популярне рішення для економії та
              збереження улюблених предметів інтер’єру.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Які переваги перетяжки офісного крісла?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Перетяжка офісного крісла дозволяє заощадити кошти, адже це
              дешевше за покупку новиго крісла. Ви можете обрати дизайн і
              тканину, що відповідають вашому стилю. Це екологічно, адже зменшує
              кількість відходів, продовжує термін служби дивану та допомагає
              зберегти улюблені предмети інтер’єру.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Як відбувается доставка офісного крісла?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Доставка офісного крісла відбувається швидко та зручно. У нас
              безкоштовна доставка/вивіз по Києву за умови наявності працюючого
              ліфта. Ми дбаємо про збереження дивану під час транспортування,
              тому гарантуємо акуратне завантаження, перевезення та
              розвантаження.
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

export default FaqOfficeArmChair;
