import React from 'react';
import classes from './page-type-works.module.css';
import Image from 'next/image';
import Link from 'next/link';

const TypeWorks = () => {
  return (
    <nav
      className={`${classes.container_works}`}
      id="works"
      itemScope
      itemType="http://schema.org/ItemList"
    >
      <h4 className={`${classes.container_works_h4}`} itemProp="name">
        Які роботи виконуємо?
      </h4>
      <meta
        itemProp="itemListOrder"
        content="https://schema.org/ItemListOrderAscending"
      />
      <ol className={`${classes.container_works_ol}`}>
        <li
          className={`${classes.container_works_li}`}
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/Service"
        >
          <Link href={`/sofa`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/mebli/sofa.jpg'}
                fill
                alt="Перетяжка дивану"
                objectFit="contain"
                aria-label="Перетяжка дивану"
                itemProp="image"
              />
            </div>
            <h3 className={`${classes.container_works_h3}`} itemProp="name">
              Перетяжка дивану
            </h3>
          </Link>
          <meta itemProp="url" content="/sofa" />
          <meta
            itemProp="description"
            content="Перетяжка диванів, заміна оббивки і наповнювача."
          />
        </li>
        <li
          className={`${classes.container_works_li}`}
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/Service"
        >
          <Link href={`/angular_sofa`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/mebli/ugl_sofa.jpg'}
                fill
                alt="Перетяжка куто дивану"
                objectFit="contain"
                aria-label="Перетяжка кутового дивану"
                itemProp="image"
              />
            </div>
            <h3 className={`${classes.container_works_h3}`} itemProp="name">
              Перетяжка кутового дивану
            </h3>
          </Link>
          <meta itemProp="url" content="/angular_sofa" />
          <meta
            itemProp="description"
            content="Перетяжка кутових диванів, оновлення дизайну та комфорту."
          />
        </li>
        <li
          className={`${classes.container_works_li}`}
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/Service"
        >
          <Link href={`/lijko`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/mebli/lijko.jpg'}
                fill
                alt="Перетяжка ліжка"
                objectFit="contain"
                aria-label="Перетяжка ліжка"
                itemProp="image"
              />
            </div>
            <h3 className={`${classes.container_works_h3}`} itemProp="name">
              Перетяжка ліжка
            </h3>
          </Link>
          <meta itemProp="url" content="/lijko" />
          <meta
            itemProp="description"
            content="Оновлення тканини та конструкції ліжок."
          />
        </li>
        <li
          className={`${classes.container_works_li}`}
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/Service"
        >
          <Link href={`/paneli`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/mebli/paneli.jpg'}
                fill
                alt="Перетяжка панелей"
                objectFit="contain"
                aria-label="Перетяжка панелей"
                itemProp="image"
              />
            </div>
            <h3 className={`${classes.container_works_h3}`} itemProp="name">
              Перетяжка панелей
            </h3>
          </Link>
          <meta itemProp="url" content="/paneli" />
          <meta
            itemProp="description"
            content="Перетяжка стінових панелей різних форм та розмірів."
          />
        </li>
        <li
          className={`${classes.container_works_li}`}
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/Service"
        >
          <Link href={`/block`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/block.jpg'}
                fill
                alt="Заміна пружинного блока"
                objectFit="contain"
                aria-label="Заміна пружинного блока"
                itemProp="image"
              />
            </div>
            <h3 className={`${classes.container_works_h3}`} itemProp="name">
              Заміна пружинного блока
            </h3>
          </Link>
          <meta itemProp="url" content="/block" />
          <meta
            itemProp="description"
            content="Ремонт та заміна пружинних блоків меблів."
          />
        </li>
        <li
          className={`${classes.container_works_li}`}
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/Service"
        >
          <Link href={`/pillow`}>
            <div className={`${classes.container_works_div}`}>
              <Image
                src={'/image/pillows_second.png'}
                fill
                alt="Пошити подушки"
                objectFit="contain"
                aria-label="Пошити подушки"
                itemProp="image"
              />
            </div>
            <h3 className={`${classes.container_works_h3}`} itemProp="name">
              Пошити подушки
            </h3>
          </Link>
          <meta itemProp="url" content="/pillow" />
          <meta
            itemProp="description"
            content="Пошив декоративних та функціональних подушок."
          />
        </li>
      </ol>
    </nav>
  );
};

export default TypeWorks;
