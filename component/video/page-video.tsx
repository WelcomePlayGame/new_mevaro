'use client';
import React, { useEffect, useRef } from 'react';
import classes from '../head/page-head.module.css';
const VideoHead = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleUnmute = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch((error) => {
          console.error('Error attempting to play video:', error);
        });
      }
    };

    document.addEventListener('click', handleUnmute);

    return () => {
      document.removeEventListener('click', handleUnmute);
    };
  }, []);

  return (
    <main className={`${classes.video_block}`}>
      <video width={'100%'} autoPlay muted ref={videoRef}>
        <source src="/video/mevaro.mp4" type="video/mp4" />
      </video>
    </main>
  );
};

export default VideoHead;
