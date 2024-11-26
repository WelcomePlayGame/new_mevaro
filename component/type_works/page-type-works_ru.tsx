import React from 'react';
import classes from './page-type-works.module.css';
import Image from 'next/image';
import Link from 'next/link';
const TypeWorks = () => {
  return (
    <nav className={`${classes.container_works}`} id="works">
      <h4 className={`${classes.container_works_h4}`}>
        Какие работы мы выполняем?
      </h4>
      <ol className={`${classes.container_works_ol}`}>
        <li className={`${classes.container_works_li}`}>
          <Link href={`/ru/sofa`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/mebli/sofa.jpg'}
                fill
                alt="Перетяжка дивана"
                objectFit="contain"
                aria-label="Перетяжка дивана"
              />
            </div>

            <h3 className={`${classes.container_works_h3}`}>
              Перетяжка дивана
            </h3>
          </Link>
        </li>
        <li className={`${classes.container_works_li}`}>
          <Link href={`/ru/angular_sofa`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/mebli/ugl_sofa.jpg'}
                fill
                alt="Перетяжка углового дивана"
                objectFit="contain"
                aria-label="Перетяжка углового дивана"
              />
            </div>

            <h3 className={`${classes.container_works_h3}`}>
              Перетяжка углового дивана
            </h3>
          </Link>
        </li>
        <li className={`${classes.container_works_li}`}>
          <Link href={'/ru/lijko'}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/mebli/lijko.jpg'}
                fill
                alt="Перетяжка ліжка"
                objectFit="contain"
                aria-label="Перетяжка кровати"
              />
            </div>

            <h3 className={`${classes.container_works_h3}`}>
              Перетяжка кровати
            </h3>
          </Link>
        </li>
        <li className={`${classes.container_works_li}`}>
          <Link href={`/ru/paneli`}>
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
          <Link href={`/ru/block`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/block.jpg'}
                fill
                alt="Замена пружинного блока"
                objectFit="contain"
                aria-label="Замена пружинного блока"
              />
            </div>
            <h3 className={`${classes.container_works_h3}`}>
              Замена пружинного блока
            </h3>
          </Link>
        </li>
        <li className={`${classes.container_works_li}`}>
          <Link href={`/ru/pillow`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/pillows_second.png'}
                fill
                alt="Пошить подушки"
                objectFit="contain"
                aria-label="Пошить подушки"
              />
            </div>
            <h3 className={`${classes.container_works_h3}`}>Пошить подушки</h3>
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default TypeWorks;
