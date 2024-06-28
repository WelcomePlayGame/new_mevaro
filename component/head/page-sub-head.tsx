import Image from 'next/image';
import clasess from './page-head.module.css';
import TelegramSVG from '../svg/page-telegram';
import ViberSVG from '../svg/page-viber';

const SubHead = () => {
  return (
    <main className={`${clasess.head_sub}`}>
      <div className={`${clasess.container_logo_h1}`}>
        <div className={`${clasess.container_logo}`}>
          <img src={'/logo/logo.png'} alt="Mevaro" />
        </div>
        <div>
          <h1>Перетяжка меблів Київ</h1>
        </div>
      </div>
      <div className={`${clasess.container_logo_h1}`}>
        <span>Телефонуйте:</span>
        <a href="tel:+380957162677?utm_source=website&utm_medium=link&utm_campaign=contact">
          📱{` `}095 71 62 677
        </a>
      </div>
      <div className={`${clasess.container_app}`}>
        <a href="https://t.me/romaniv21?utm_source=website&utm_medium=button&utm_campaign=contact">
          <TelegramSVG />
        </a>
        <a href="viber://chat?number=%2B380957162677&utm_source=website&utm_medium=button&utm_campaign=contact">
          <ViberSVG />
        </a>
      </div>
    </main>
  );
};
export default SubHead;
