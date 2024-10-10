import Image from 'next/image';
import clasees from './page-pillows.module.css';
const MakePillow = () => {
  return (
    <main id="pillow" className={`${clasees.main_pillow}`}>
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
          Пошив подушок для Меблів
        </h3>
        <hr />
        <div className={`${clasees.container_pillows_ul}`}>
          <ul>
            <li>Широкий вибір мебельної тканини</li>
            <li>Поролон різної щільності</li>
            <li>Якісні Армовані нитки</li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default MakePillow;
