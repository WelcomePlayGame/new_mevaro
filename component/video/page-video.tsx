'use client';

import classes from '../head/page-head.module.css';
const VideoHead = () => {
  return (
    <main className={`${classes.video_block}`}>
      <video width={'100%'} autoPlay muted controls>
        <source src="/video/mevaro.mp4" type="video/mp4" />
      </video>
    </main>
  );
};

export default VideoHead;
