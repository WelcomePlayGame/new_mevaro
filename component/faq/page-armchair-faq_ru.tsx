import React from 'react';
import classes from './page-faq.module.css';

const FaqArmChair = () => {
  return (
    <section className={`${classes.container_faq}`}>
      <h3 className={`${classes.container_h3}`}>
        Ответы, которые могу Вас интересовать:
      </h3>
      <ol className={`${classes.container_ol}`}>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Что такое перетяжка кресла?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Перетяжка кресла — это процесс обновления мебели, который включает
              замену обивки, наполнителя или ремонт каркаса. Это позволяет
              восстановить эстетический вид, комфорт и функциональность, продлив
              срок их службы. Популярное решение для экономии и сохранения
              любимых предметов интерьера.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Какие преимущества перетяжки кресла?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Перетяжка кресла позволяет сэкономить средства, так как это
              дешевле, чем покупка нового кресла. Вы можете выбрать дизайн и
              ткань, которые соответствуют вашему стилю. Это экологично, так как
              уменьшает количество отходов, продлевает срок службы кресла и
              помогает сохранить любимые предметы интерьера.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Как осуществляется доставка кресла?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Доставка кресла осуществляется быстро и удобно. У нас бесплатная
              доставка/вывоз по Киеву при наличии работающего лифта. Мы
              заботимся о сохранности кресла во время транспортировки, поэтому
              гарантируем аккуратную погрузку, перевозку и разгрузку.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>У вас есть бесплатная консультация?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              У нас есть бесплатная консультация с образцами ткани по вашему
              адресу. Мы приедем в удобное для вас время, покажем варианты
              обивки и поможем с выбором. Это позволяет вам сэкономить время и
              получить профессиональные рекомендации, не выходя из дома.
            </p>
          </details>
        </li>
      </ol>
    </section>
  );
};

export default FaqArmChair;
