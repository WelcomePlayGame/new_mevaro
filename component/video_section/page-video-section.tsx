import React from 'react';
import classes from './page-video-section.module.css';

const VideoSection = () => {
  return (
    <div className={`${classes.container_video_section}`}>
      <video autoPlay muted loop className={`${classes.background_video}`}>
        <source src="/video/mevaro.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoSection;
