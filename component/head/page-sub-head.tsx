'use client';
import clasess from './page-head.module.css';
import TelegramSVG from '../svg/page-telegram';
import ViberSVG from '../svg/page-viber';
import MobileSVG from '../svg/page-mobile';

const SubHead = () => {
  return (
    <section className={`${clasess.container_head_sub}`}>
      <h3>
        <a
          href="tel:+380957162677"
          title="Зателефонувати - 09 71 62 677 Роман"
          className={`${clasess.container_mob_tel}`}
          data-gtm="phone-call"
        >
          095 71 62 677
        </a>
      </h3>
      <div className={`${clasess.head_sub}`}>
        <TelegramSVG />
        <ViberSVG />
        <MobileSVG />
      </div>
    </section>
  );
};

export default SubHead;
