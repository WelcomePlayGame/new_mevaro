'use client';
import React, { useState } from 'react';
import classes from './header_update.module.css';
import Image from 'next/image';
import Link from 'next/link';

const HeadUpdate = () => {
  const [isHamburger, setHamburger] = useState(false);
  const toggle = () => {
    setHamburger(!isHamburger);
  };
  return (
    <section className={`${classes.container_head}`}>
      <nav aria-label=" Компанія Меваро" className={`${classes.nav_menu}`}>
        <ol className={`${classes.nav_menu_ol}`}>
          <li className={`${classes.container_li}`}>
            <div className={`${classes.container_div_image}`}>
              <Image
                src={'/logo/logo.png'}
                alt="Компания Меваро"
                fill
                objectFit="contain"
              />
            </div>
            <h1 className={`${classes.container_h1}`}>
              <strong>Перетяжка кровати</strong>{' '}
            </h1>
          </li>
          <ol className={`${classes.container_desctop_ol}`}>
            <Link href={`/fabrics`}>
              <li className={`${classes.container_desctop_li}`}>
                каталог тканей
              </li>
            </Link>
            <Link href={`/blogs`}>
              <li className={`${classes.container_desctop_li}`}>блог</li>
            </Link>
            <Link href={`/#map`}>
              <li className={`${classes.container_desctop_li}`}>
                мы находимся
              </li>
            </Link>
            <Link href={`/#works`}>
              <li className={`${classes.container_desctop_li}`}>наши услуги</li>
            </Link>
            <li className={`${classes.container_desctop_li}`}>
              <a
                href="tel:+380957162677"
                className={`${classes.container_desctop_li_tel}`}
                title="Зателефонувати - 09 71 62 677 Роман"
              >
                095 71 62 677
              </a>
            </li>
          </ol>
          <li>
            <div
              className={`${classes.hamburger} ${
                isHamburger ? classes.hamburger_active : ''
              }`}
              onClick={toggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ol
              className={
                isHamburger
                  ? `${classes.hamburger_menu_active}`
                  : `${classes.hamburger_menu}`
              }
              aria-label="Мобільне меню для сайта компанії Mevaro"
            >
              <li className={`${classes.container_fabrics}`}>
                <Link href={`/fabrics`} aria-label="Каталог меблевих тканин">
                  Каталог тканей
                </Link>
              </li>
              <li>
                <Link href={`/ru/sofa`} aria-label="Перетяжка дивану">
                  Перетяжка дивана
                </Link>
              </li>
              <li>
                <Link
                  href={`/ru/angular_sofa`}
                  aria-label="Перетяжка кутового дивану"
                >
                  Перетяжка углового дивана
                </Link>
              </li>
              <li>
                <Link href={`/ru/lijko`} aria-label="Перетяжка ліжка">
                  Перетяжка кровати
                </Link>
              </li>
              <li>
                <Link
                  href={`/ru/office_armchair`}
                  aria-label="Перетяжка Офісного крісла"
                >
                  Перетяжка офисного кресла
                </Link>
              </li>
              <li>
                <Link href={`/ru/armchair`} aria-label="Перетяжка крісла">
                  Перетяжка кресла
                </Link>
              </li>
              <li className={`${classes.container_container_liner}`}></li>
            </ol>
          </li>
        </ol>
      </nav>
    </section>
  );
};

export default HeadUpdate;
