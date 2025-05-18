'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Head from 'next/head'; // Импортируем Head для добавления метаинформации
import classes from './header_update.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ViberSVG from '../svg/page-viber';
import TelegramSVG from '../svg/page-telegram';

const HeadUpdate = () => {
  const [isHamburger, setHamburger] = useState(false);
  const pathname = usePathname();

  // Заголовки для маршрутов
  const routeTitles = {
    '/': 'Перетяжка меблів',
    '/fabrics': 'Каталог тканин',
    '/blogs': 'Наш блог',
    '/sofa': 'Перетяжка дивану',
    '/angular_sofa': 'Перетяжка кутового дивану',
    '/lijko': 'Перетяжка ліжка',
    '/office_armchair': 'Перетяжка офісного крісла',
    '/armchair': 'Перетяжка крісла',
    '/remont_mebeli': 'Ремонт Меблів',
    '/chair': 'Перетяжка Стільців',
    '/block': 'Заміна Блока',
    '/porolon': 'Заміна Поролона',
    '/pillow': 'Виготовлення подушок',
    '/ru/angular_sofa': 'Перетяжка углового дивана',
    '/ru/chair': 'Перетяжка стульев',
  };

  const currentTitle = routeTitles[pathname] || 'Компанія Меваро';

  const toggle = () => {
    setHamburger(!isHamburger);
  };

  return (
    <>
      <Head>
        <title>{currentTitle}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Компанія Mevaro',
              image: 'https://mevaro.kiev.ua/logo/logo.png',
              address: {
                '@type': 'PostalAddress',
                streetAddress: `${process.env.NEXT_PUBLIC_STREET_UA}`,
                addressLocality: 'Київ',
                addressCountry: 'UA',
                postalCode: '02000',
              },
              telephone: '+380957162677',
              url: 'https://mevaro.kiev.ua',
            }),
          }}
        />
      </Head>
      <section className={`${classes.container_head}`}>
        <nav aria-label="Компанія Меваро" className={`${classes.nav_menu}`}>
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
                <strong>{currentTitle}</strong>
              </h1>
            </li>
            <ol className={`${classes.container_desctop_ol}`}>
              <li className={`${classes.container_desctop_li}`}>
                <Link href={`/fabrics`}>
                  {pathname.includes('ru')
                    ? 'каталог тканей'
                    : 'каталог тканин'}
                </Link>
              </li>

              <li className={`${classes.container_desctop_li}`}>
                <Link href={`/blogs`}>блог</Link>
              </li>

              <li className={`${classes.container_desctop_li}`}>
                {' '}
                <Link href={`/#reviews`}>
                  {pathname.includes('ru') ? 'Отзывы' : 'Відгуки'}
                </Link>
              </li>

              <li className={`${classes.container_desctop_li}`}>
                <Link href={`/#works`}>
                  {pathname.includes('ru') ? 'Наши Услуги' : 'Наші послуги'}
                </Link>
              </li>

              <li className={`${classes.container_desctop_li}`}>
                <a
                  href="tel:+380957162677"
                  className={`${classes.container_desctop_li_tel}`}
                  title="Зателефонувати - 09 71 62 677 Роман"
                  rel='nofollow'
                >
                  095 71 62 677
                </a>
              </li>
              <li className={`${classes.container_desctop_li} flex-col`}>
                <a
                rel='nofollow'
                  className={`${classes.container_desctop_li_adress}`}
                  suppressHydrationWarning
                >
                  {process.env.NEXT_PUBLIC_STREET_UA}
                </a>
                <hr className="p-[7px]" />
                <span
                  className={`${classes.container_desctop_li_adress_messenger}`}
                >
                  <ViberSVG />
                  <TelegramSVG />
                </span>
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
                    {pathname.includes('ru')
                      ? 'каталог тканей'
                      : 'каталог тканин'}
                  </Link>
                </li>
                <li>
                  <Link href={`/blogs`} aria-label="blogs">
                    Блог
                  </Link>
                </li>
                <li>
                  <Link href={`/ru/#reviews`} aria-label="Reviews">
                    {pathname.includes('ru') ? 'Отзывы' : 'Відгуки'}
                  </Link>
                </li>
                <li>
                  <Link href={`/ru/#works`} aria-label="Service">
                    {pathname.includes('ru') ? 'Наши Услуги' : 'Наші послуги'}
                  </Link>
                </li>

                <li className={`${classes.container_container_liner}`}></li>
              </ol>
            </li>
          </ol>
        </nav>
      </section>
    </>
  );
};

export default HeadUpdate;
