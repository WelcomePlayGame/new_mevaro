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
                alt="Компанія Меваро"
                fill
                objectFit="contain"
              />
            </div>
            <h1 className={`${classes.container_h1}`}>
              <strong>Меблі на замовлення</strong>{' '}
            </h1>
          </li>
          <ol className={`${classes.container_desctop_ol}`}>
            <Link href={`/fabrics`}>
              <li className={`${classes.container_desctop_li}`}>
                каталог тканин
              </li>
            </Link>
            <Link href={`/blogs`}>
              <li className={`${classes.container_desctop_li}`}>блог</li>
            </Link>
            <Link href={`/#map`}>
              <li className={`${classes.container_desctop_li}`}>
                ми знаходимось
              </li>
            </Link>
            <Link href={`/#works`}>
              <li className={`${classes.container_desctop_li}`}>
                наші послуги
              </li>
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
                  Каталог тканин
                </Link>
              </li>
              <li>
                <Link href={`/sofa`} aria-label="Перетяжка дивану">
                  Перетяжка дивану
                </Link>
              </li>
              <li>
                <Link
                  href={`/angular_sofa`}
                  aria-label="Перетяжка кутового дивану"
                >
                  Перетяжка кутового дивану
                </Link>
              </li>
              <li>
                <Link href={`/lijko`} aria-label="Перетяжка ліжка">
                  Перетяжка ліжка
                </Link>
              </li>
              <li>
                <Link
                  href={`/office_armchair`}
                  aria-label="Перетяжка Офісного крісла"
                >
                  Перетяжка Офісного крісла
                </Link>
              </li>
              <li>
                <Link href={`/armchair`} aria-label="Перетяжка крісла">
                  Перетяжка крісла
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
