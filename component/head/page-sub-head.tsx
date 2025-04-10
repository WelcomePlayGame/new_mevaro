'use client';
import classes from './page-head.module.css';
import TelegramSVG from '../svg/page-telegram';
import ViberSVG from '../svg/page-viber';
import MobileSVG from '../svg/page-mobile';
import { useEffect } from 'react';

const SubHead = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Mevaro',
      image: 'https://mevaro.kiev.ua/logo/logo.png',
      telephone: '+380957162677',
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${process.env.STREET_UA}`,
        addressLocality: 'Київ',
        addressCountry: 'UA',
      },
      url: 'https://mevaro.kiev.ua',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '50.447157',
        longitude: '30.3970086',
      },
      openingHours: 'Mo-Fr 09:00-20:00',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+380957162677',
        contactType: 'customer service',
      },
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className={`${classes.container_head_sub}`}>
      <div className="flex flex-col items-center">
        <h3>
          <a
            href="tel:+380957162677"
            title="Зателефонувати - 09 71 62 677 Роман"
            className={`${classes.container_mob_tel}`}
            data-gtm="phone-call"
            aria-labelledby="telephone-icon"
          >
            095 71 62 677
          </a>
        </h3>
        <span
          className={`${classes.container_head_sub_location} ${classes.container_mob_tel}`}
        >
          {process.env.STREET_UA}
        </span>
      </div>
      <div className={`${classes.head_sub}`}>
        <TelegramSVG />
        <ViberSVG />
        <MobileSVG />
      </div>
    </section>
  );
};

export default SubHead;
