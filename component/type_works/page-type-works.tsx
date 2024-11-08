import React from 'react';
import classes from './page-type-works.module.css';
import Image from 'next/image';
import Link from 'next/link';
const TypeWorks = () => {
  return (
    <nav className={`${classes.container_works}`} id="works">
      <h4 className={`${classes.container_works_h4}`}>Які роботи виконуємо?</h4>
      <ol className={`${classes.container_works_ol}`}>
        <li className={`${classes.container_works_li}`}>
          <Link href={`/sofa`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/mebli/sofa.jpg'}
                fill
                alt="Перетяжка дивану"
                objectFit="contain"
                aria-label="Перетяжка дивану"
              />
            </div>

            <h3 className={`${classes.container_works_h3}`}>
              Перетяжка дивану
            </h3>
          </Link>
        </li>
        <li className={`${classes.container_works_li}`}>
          <Link href={`/angular_sofa`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/mebli/ugl_sofa.jpg'}
                fill
                alt="Перетяжка куто дивану"
                objectFit="contain"
                aria-label="Перетяжка кутового дивану"
              />
            </div>

            <h3 className={`${classes.container_works_h3}`}>
              Перетяжка кутового дивану
            </h3>
          </Link>
        </li>
        <li className={`${classes.container_works_li}`}>
          <Link href={'/lijko'}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/mebli/lijko.jpg'}
                fill
                alt="Перетяжка ліжка"
                objectFit="contain"
                aria-label="Перетяжка ліжка"
              />
            </div>

            <h3 className={`${classes.container_works_h3}`}>Перетяжка ліжка</h3>
          </Link>
        </li>
        <li className={`${classes.container_works_li}`}>
          <Link href={`/paneli`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/mebli/paneli.jpg'}
                fill
                alt="Перетяжка панелей"
                objectFit="contain"
                aria-label="Перетяжка панелей"
              />
            </div>
            <h3 className={`${classes.container_works_h3}`}>
              Перетяжка панелей
            </h3>
          </Link>
        </li>
        <li className={`${classes.container_works_li}`}>
          <Link href={`/block`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/block.jpg'}
                fill
                alt="Заміна пружинного блока"
                objectFit="contain"
                aria-label="Заміна пружинного блока"
              />
            </div>
            <h3 className={`${classes.container_works_h3}`}>
              Заміна пружинного блока
            </h3>
          </Link>
        </li>
        <li className={`${classes.container_works_li}`}>
          <Link href={`/pillow`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/pillows_second.png'}
                fill
                alt="Пошити подушки"
                objectFit="contain"
                aria-label="Пошити подушки"
              />
            </div>
            <h3 className={`${classes.container_works_h3}`}>Пошити подушки</h3>
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default TypeWorks;
