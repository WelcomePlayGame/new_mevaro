import Image from 'next/image';
import clasees from './page-pillows.module.css';
import Tringle from '../tringle/page-tringle';
import FaqPillow from '../faq/page-pillow-faq';
import WorkLocation from '../work_location/page-work-location';
import Reviews from '../reviews/page-reviews';

const MakePillow = () => {
  return (
    <section id="pillow" className={`${clasees.container_pillow}`}>
      <h2 className={`${clasees.container_pillow_h1}`}>Виготовлення Подушок</h2>
      <div className={`${clasees.main_pillow}`}>
        <div className={`${clasees.container_pillows}`}>
          <Image
            src={'/image/pillows_second.png'}
            width={600}
            height={600}
            alt="пошити подушки"
            className={`${clasees.container_pillows_img}`}
          />
        </div>
        <div className={`${clasees.pillow_container}`}>
          <h3 className={`${clasees.main_pillow_h3}`}>
            Пошив подушок під замовлення
          </h3>
          <hr />
          <div className={`${clasees.container_pillows_ul}`}>
            <ol>
              <li>Широкий вибір мебельної тканини</li>
              <li>Поролон різної щільності</li>
              <li>Якісні Армовані нитки</li>
            </ol>
          </div>
        </div>
      </div>
      <div className={`${clasees.pillow_describe}`}>
        <p>
          <strong>Подушки на замовлення</strong> – це ідеальний спосіб створити
          унікальний дизайн і комфорт для вашого дому чи офісу.
        </p>

        <ul>
          <li>
            ✅ <strong>Вибір форми та розміру</strong>: круглі, квадратні,
            прямокутні.
          </li>
          <li>
            ✅ <strong>Широкий асортимент тканин</strong> і кольорів.
          </li>
          <li>
            ✅ <strong>Наповнювач на вибір</strong>: холлофайбер,
            пінополіуретан, натуральні матеріали.
          </li>
        </ul>

        <p>
          Ми створимо подушки, які будуть відповідати вашим бажанням і
          гармонійно доповнювати інтер’єр.
        </p>
      </div>
      <Tringle />
      <FaqPillow />
      <Reviews />
      <WorkLocation />
    </section>
  );
};
export default MakePillow;
