'use client';
import clasess from './page-head.module.css';
import TelegramSVG from '../svg/page-telegram';
import ViberSVG from '../svg/page-viber';
import { motion, AnimatePresence } from 'framer-motion';
import { slideAnimation } from '@/lib/motion';
const SubHead = () => {
  return (
    <main className={`${clasess.head_sub}`}>
      <AnimatePresence>
        <div className={`${clasess.container_logo_h1}`}>
          <motion.header
            className={`${clasess.container_logo}`}
            {...slideAnimation('left')}
          >
            <img src={'/logo/logo.png'} alt="Mevaro" />
          </motion.header>

          <motion.div {...slideAnimation('down')}>
            <h1>Перетяжка меблів Київ</h1>
          </motion.div>
        </div>
        <motion.div
          className={`${clasess.container_logo_h1}`}
          {...slideAnimation('right')}
        >
          <span>Телефонуйте:</span>
          <a
            href="tel:+380957162677?utm_source=website&utm_medium=link&utm_campaign=contact"
            data-gtm="phone-call"
          >
            📱 095 71 62 677
          </a>
        </motion.div>
        <motion.div
          className={`${clasess.container_app}`}
          {...slideAnimation('right')}
        >
          <a
            href="https://t.me/romaniv21?utm_source=website&utm_medium=button&utm_campaign=contact"
            data-gtm="telegram"
          >
            <TelegramSVG />
          </a>
          <a
            href="viber://chat?number=%2B380957162677&utm_source=website&utm_medium=button&utm_campaign=contact"
            data-gtm="viber"
          >
            <ViberSVG />
          </a>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};
export default SubHead;
