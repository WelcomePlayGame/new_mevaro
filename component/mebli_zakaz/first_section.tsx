'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { slideAnimation } from '@/lib/motion';
import Image from 'next/image';
import classes from './mebli.module.css';

const FirstSection = () => {
  return (
    <main className={`${classes.container_div}`}>
      <AnimatePresence>
        <div className={`${classes.container_relative}`}>
          <img
            src={'/image/sofa_1.jpg'}
            alt="bed"
            className={`${classes.image_full_width}`}
          />

          <div className={`${classes.container_h1}`}>
            <h1>М&apos;які Меблі під замовлення</h1>
            <motion.div {...slideAnimation('right')}>
              <div className={`${classes.container_blockquoter}`}>
                <blockquote>Створюй затишок своєї мрії</blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default FirstSection;
