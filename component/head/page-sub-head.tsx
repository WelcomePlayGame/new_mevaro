'use client';
import clasess from './page-head.module.css';
import TelegramSVG from '../svg/page-telegram';
import ViberSVG from '../svg/page-viber';
import MobileSVG from '../svg/page-mobile';

const SubHead = () => {
  return (
    <section className={`${clasess.head_sub}`}>
      <TelegramSVG />
      <ViberSVG />
      <MobileSVG />
    </section>
  );
};

export default SubHead;
