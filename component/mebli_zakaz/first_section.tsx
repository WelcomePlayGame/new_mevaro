'use client';

import Image from 'next/image';
import classes from './mebli.module.css';

const FirstSection = () => {
  return (
    <section className={`${classes.container_div}`}>
      <div className={`${classes.container_relative}`}>
        <Image
          src={'/image/sofa_1.jpg'}
          alt="bed"
          fill
          className={`${classes.image_full_width}`}
        />

        <div className={`${classes.container_h1}`}>
          <div className={`${classes.container_blockquoter}`}>
            <blockquote>
              <ol className={`${classes.container_blockquoter_ol}`}>
                <li>Індивідуальний дизайн</li>
                <li>Вибір матеріалів</li>
                <li>Унікальність</li>
                <li>Гнучкість у виборі ціни</li>
                <li>Підтримка локального виробника</li>
              </ol>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
