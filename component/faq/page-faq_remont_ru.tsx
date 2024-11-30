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
        Вопросы и ответы по ремонту мебели
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
              <span itemProp="name">Что такое ремонт мебели?</span>
            </summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                Ремонт мебели — это процесс обновления мягкой мебели, который
                включает ремонт каркаса, наполнителя или ремонт механизмов. Это
                позволяет восстановить эстетичный вид, комфорт и
                функциональность мебели, продлив её срок службы. Популярное
                решение для экономии и сохранения любимых предметов интерьера.
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
              <span itemProp="name">Какие преимущества ремонта мебели?</span>
            </summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                Ремонт мебели позволяет сэкономить деньги, ведь это дешевле, чем
                покупка новой мебели. Вы можете выбрать дизайн и ткань, которые
                соответствуют вашему стилю. Это экологично, так как уменьшает
                количество отходов, продлевает срок службы мебели и помогает
                сохранить любимые предметы интерьера.
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
                Как осуществляется доставка мягкой мебели?
              </span>
            </summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                Доставка мягкой мебели осуществляется быстро и удобно. У нас
                бесплатная доставка/вывоз по Киеву при наличии работающего
                лифта. Мы заботимся о сохранности мебели во время
                транспортировки, поэтому гарантируем аккуратную погрузку,
                перевозку и разгрузку.
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
              <span itemProp="name">У вас есть бесплатная консультация?</span>
            </summary>
            <p
              className={`${classes.container_p}`}
              itemProp="acceptedAnswer"
              itemScope
              itemType="http://schema.org/Answer"
            >
              <span itemProp="text">
                У нас есть бесплатная консультация с образцами ткани по вашему
                адресу. Мы приедем в удобное для вас время, покажем варианты
                обивки и поможем с выбором. Это позволяет вам сэкономить время и
                получить профессиональные рекомендации, не выходя из дома.
              </span>
            </p>
          </details>
        </li>
      </ol>
    </section>
  );
};

export default FaqPage;
