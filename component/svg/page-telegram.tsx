import React from 'react';
import classes from '../head/page-head.module.css';

function TelegramSVG() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    telephone: '+380957162677',
    contactType: 'customer service',
    areaServed: 'UA',
    availableLanguage: 'Ukrainian',
    url: 'https://t.me/romaniv21?utm_source=website&utm_medium=button&utm_campaign=contact',
    name: 'Telegram Contact',
  };

  return (
    <>
      <span className={`${classes.svg_size}`}>
        <a
          href="https://t.me/romaniv21?utm_source=website&utm_medium=button&utm_campaign=contact"
          data-gtm="telegram"
          title="Переслати фото в Телеграм"
          aria-label="Переслати фото в Телеграм"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36px"
            height="36px"
            viewBox="0 0 32 32"
            style={{ fill: 'hsla(49, 85%, 74%, 0.9)' }}
            role="img"
            aria-labelledby="telegram-icon"
          >
            <path d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z" />
          </svg>
        </a>
      </span>

      {/* Добавление Schema.org разметки с использованием dangerouslySetInnerHTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}

export default TelegramSVG;
