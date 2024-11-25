import classes from './karta_map.module.css';
import KartaBlogs from './page-karta_blogs';
import KartaFabrics from './page-karta_fabrics';

const Karta_MapPage = () => {
  return (
    <section className={`${classes.container_karta_map}`}>
      <h2 className={`${classes.wrap_karta_map_div_h2}`}>Карта сайту Mevaro</h2>
      <section className={`${classes.wrap_karta_map}`}>
        <div className={`${classes.wrap_karta_map_div}`}>
          <h3 className={`${classes.wrap_karta_map_div_h3}`}>
            <a href="https://mevaro.kiev.ua/">Перетяжка меблів</a>
          </h3>
          <ol className={`${classes.wrap_karta_map_div_ol}`}>
            <li>
              <a href="https://mevaro.kiev.ua/sofa">Перетяжка дивана</a>
            </li>
            <li>
              <a href="https://mevaro.kiev.ua/angular_sofa">
                Перетяжка кутового дивану
              </a>
            </li>
            <li>
              <a href="https://mevaro.kiev.ua/lijko">Перетяжка ліжка</a>
            </li>
            <li>
              <a href="https://mevaro.kiev.ua/armchair">Перетяжка крісла</a>
            </li>
            <li>
              <a href="https://mevaro.kiev.ua/office_armchair">
                Перетяжка офісного крісла
              </a>
            </li>
            <li>
              <a href="https://mevaro.kiev.ua/chair">Перетяжка стільців</a>
            </li>
          </ol>
        </div>
        <div className={`${classes.wrap_karta_map_div}`}>
          <h3 className={`${classes.wrap_karta_map_div_h3}`}>
            <a href="https://mevaro.kiev.ua/mebli_zakaz">Виготовлення меблів</a>
          </h3>
          <ol className={`${classes.wrap_karta_map_div_ol}`}>
            <li>
              <a href="https://mevaro.kiev.ua/sofa">Виготовлення дивана</a>
            </li>
            <li>
              <a href="https://mevaro.kiev.ua/angular_sofa">
                Виготовлення кутового дивану
              </a>
            </li>
            <li>
              <a href="https://mevaro.kiev.ua/lijko">Виготовлення ліжка</a>
            </li>
            <li>
              <a href="https://mevaro.kiev.ua/armchair">Виготовлення крісла</a>
            </li>

            <li>
              <a href="https://mevaro.kiev.ua/pillow">Виготовлення подушок</a>
            </li>
            <li>
              <a href="https://mevaro.kiev.ua/paneli">
                Виготовлення стінових панелей
              </a>
            </li>
          </ol>
        </div>
        <div className={`${classes.wrap_karta_map_div}`}>
          <h3 className={`${classes.wrap_karta_map_div_h3}`}>
            <a href="https://mevaro.kiev.ua">Ремонт меблів</a>
          </h3>
          <ol className={`${classes.wrap_karta_map_div_ol}`}>
            <li>
              <a href="https://mevaro.kiev.ua/block">Заміна пружинного блока</a>
            </li>
            <li>
              <a href="https://mevaro.kiev.ua/porolon">Заміна поролона</a>
            </li>
          </ol>
        </div>
        <div className={`${classes.wrap_karta_map_div}`}>
          <h3 className={`${classes.wrap_karta_map_div_h3}`}>
            <a href="https://mevaro.kiev.ua/fabrics">Каталог тканин</a>
          </h3>
          <KartaFabrics />
        </div>
        <div className={`${classes.wrap_karta_map_div}`}>
          <h3 className={`${classes.wrap_karta_map_div_h3}`}>
            <a href="https://mevaro.kiev.ua/blogs">Корисна інформація</a>
          </h3>
          <KartaBlogs />
        </div>
      </section>
    </section>
  );
};
export default Karta_MapPage;
