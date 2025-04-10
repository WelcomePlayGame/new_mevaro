import React from 'react';
import classes from './page-faq.module.css';

const FaqChair = () => {
  return (
    <section className={`${classes.container_faq}`}>
      <h3 className={`${classes.container_h3}`}>Вопросы и Ответы!</h3>
      <ol className={`${classes.container_ol}`}>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Что такое перетяжка стульев?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Перетяжка стульев — это процесс обновления стульев, который
              включает замену обивки, наполнителя или ремонт каркаса. Это
              позволяет восстановить эстетичный вид, комфорт и функциональность,
              продлевая срок их службы. Популярное решение для экономии и
              сохранения любимых предметов интерьера.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Какие преимущества перетяжки стульев?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Перетяжка стульев позволяет сэкономить деньги, так как это
              дешевле, чем покупка новых стульев. Вы можете выбрать дизайн и
              ткань, которые соответствуют вашему стилю. Это экологично, так как
              уменьшает количество отходов, продлевает срок службы мебели и
              помогает сохранить любимые предметы интерьера.
            </p>
          </details>
        </li>
        <li className={`${classes.container_li}`}>
          <details>
            <summary>
              <span>Как осуществляется доставка стульев?</span>
            </summary>
            <p className={`${classes.container_p}`}>
              Доставка стульев осуществляется быстро и удобно. У нас бесплатная
              доставка/вывоз по Киеву при условии наличия работающего лифта. Мы
              заботимся о сохранности мебели во время транспортировки, поэтому
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

export default FaqChair;
