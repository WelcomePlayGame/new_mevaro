'use client';
import clasess from './page-head.module.css';
import TelegramSVG from '../svg/page-telegram';
import ViberSVG from '../svg/page-viber';
import { motion, AnimatePresence } from 'framer-motion';
import { slideAnimation } from '@/lib/motion';
import DeliverySVG from '../svg/pgae-delivery';

const HeadBlog = () => {
  return (
    <main className={`${clasess.head_sub}`}>
      <AnimatePresence>
        <div className={`${clasess.container_logo_h1}`} key="logo-h1">
          <motion.div
            className={`${clasess.container_logo}`}
            {...slideAnimation('left')}
          >
            <img src={'/logo/logo.png'} alt="Mevaro" />
          </motion.div>

          <motion.div {...slideAnimation('down')}>
            <h1>Меблеві Новини</h1>
          </motion.div>
        </div>
        <motion.div
          className={`${clasess.container_logo_h1}`}
          {...slideAnimation('right')}
          key="phone-number"
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
          key="app-links"
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

export default HeadBlog;
