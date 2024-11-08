import React from 'react';
import classes from './page-video-section.module.css';

const VideoSection = () => {
  return (
    <div className={`${classes.container_video_section}`}>
      <video
        poster="/image/mevaro.png"
        autoPlay
        muted
        loop
        className={`${classes.background_video}`}
      >
        <source src="/video/mevaro.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoSection;
