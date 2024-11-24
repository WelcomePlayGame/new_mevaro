import classes from './page-about-us.module.css';
const Aboout = () => {
  return (
    <section>
      <div className={`${classes.container_about}`}>
        <h2 className={`${classes.container_about_h2}`}>
          Про нас: <span>Компанія Mevaro – перетяжка та ремонт меблів</span>
        </h2>
        <p>
          Mevaro – це професійна компанія, яка спеціалізується на перетяжці,
          ремонті та оновленні меблів. Ми допомагаємо нашим клієнтам подарувати
          нове життя старим меблям, зберігаючи їхній комфорт та стиль.
        </p>
        <h3 className={`${classes.container_about_h3}`}>
          Чому обирають Mevaro?
        </h3>
        <ul className={`${classes.container_about_ol}`}>
          <li>
            <strong>Індивідуальний підхід:</strong> Ми враховуємо всі побажання
            клієнтів та допомагаємо обрати найкращий дизайн і матеріали.
          </li>
          <li>
            <strong>Швидкість та якість:</strong> Гарантуємо оперативне
            виконання робіт із дотриманням найвищих стандартів.
          </li>
          <li>
            <strong>Доступні ціни:</strong> Пропонуємо оптимальне співвідношення
            ціни та якості.
          </li>
        </ul>
        <p>Довірте свої меблі Mevaro, і ми зробимо їх як новими!</p>
        <h3 className={`${classes.container_about_h3}`}>
          Контакти для замовлення:
        </h3>
        <p>
          📞 Телефон: <a href="tel:+380957162677">0957162677</a>
        </p>
        <p>📍 Адреса: вул. Екскаваторна 37</p>
        <p>
          🌐 Вебсайт:{' '}
          <a
            href="https://mevaro.kiev.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://mevaro.kiev.ua
          </a>
        </p>
        <p>
          <strong>
            Дозвольте нам вдихнути нове життя у ваші улюблені меблі!
          </strong>
        </p>
      </div>
    </section>
  );
};
export default Aboout;
