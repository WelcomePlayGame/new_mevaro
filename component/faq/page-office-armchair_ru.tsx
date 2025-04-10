import React from 'react';
import classes from './page-faq.module.css';

const FaqOfficeArmChair = () => {
  return (
    <section className={`${classes.container_faq}`}>
      <h3 className={`${classes.container_h3}`}>
        Ответы, которые могу Вас интересовать:
      </h3>
      <ol className={`${classes.container_ol}`}>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Что такое перетяжка офисного кресла?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Перетяжка офисного кресла — это процесс обновления кресла, который
              включает замену обивки, наполнителя или ремонт каркаса. Это
              позволяет восстановить эстетичный вид, комфорт и функциональность,
              продлив срок службы. Популярное решение для экономии и сохранения
              любимых предметов интерьера.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Какие преимущества перетяжки офисного кресла?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Перетяжка офисного кресла позволяет сэкономить деньги, так как это
              дешевле покупки нового кресла. Вы можете выбрать дизайн и ткань,
              соответствующие вашему стилю. Это экологично, так как уменьшает
              количество отходов, продлевает срок службы мебели и помогает
              сохранить любимые предметы интерьера.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Как происходит доставка офисного кресла?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Доставка офисного кресла осуществляется быстро и удобно. У нас
              бесплатная доставка/вывоз по Киеву при наличии работающего лифта.
              Мы заботимся о сохранности мебели во время транспортировки,
              поэтому гарантируем аккуратную погрузку, перевозку и выгрузку.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Есть ли у вас бесплатная консультация?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              У нас есть бесплатная консультация с образцами тканей по вашему
              адресу. Мы приедем в удобное для вас время, покажем варианты
              обивки и поможем с выбором. Это позволит вам сэкономить время и
              получить профессиональные рекомендации, не выходя из дома.
            </p>
          </details>
        </li>
      </ol>
    </section>
  );
};

export default FaqOfficeArmChair;
