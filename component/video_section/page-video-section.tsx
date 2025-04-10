import React from 'react';
import classes from './page-video-section.module.css';

const VideoSection = () => {
  return (
    <div
      itemScope
      itemType="http://schema.org/VideoObject"
      className={classes.container_video_section}
    >
      <meta itemProp="name" content="Демонстрація відео компанії Mevaro" />
      <meta itemProp="uploadDate" content="2024-11-27" />
      <meta itemProp="url" content="https://mevaro.kiev.ua" />
      <meta itemProp="thumbnailUrl" content="/image/mevaro.png" />
      <meta
        itemProp="contentUrl"
        content="https://mevaro.kiev.ua/video/mevaro.mp4"
      />
      <meta
        itemProp="description"
        content="Демонстрація відео компанії Mevaro"
      />
      <meta itemProp="duration" content="PT35S" />{' '}
      <video
        poster="/image/mevaro.png"
        autoPlay
        muted
        loop
        className={classes.background_video}
        aria-label="Демонстрація відео компанії Mevaro"
      >
        <source src="/video/mevaro.mp4" type="video/mp4" />
        Ваш браузер не поддерживает элемент <code>video</code>.
      </video>
    </div>
  );
};

export default VideoSection;
