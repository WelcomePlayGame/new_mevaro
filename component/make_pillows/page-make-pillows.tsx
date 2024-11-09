import Image from 'next/image';
import clasees from './page-pillows.module.css';
const MakePillow = () => {
  return (
    <section id="pillow" className={`${clasees.container_pillow}`}>
      <h1 className={`${clasees.container_pillow_h1}`}>Виготовлення Подушок</h1>
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
    </section>
  );
};
export default MakePillow;
