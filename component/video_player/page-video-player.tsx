'use client';
import { useState } from 'react';
import PlaySVG from '../svg/page-play';

export default function VideoPlayer({ embed_url }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative mt-[15px] flex flex-col items-center w-full h-full">
      {!isPlaying && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center cursor-pointer"
          style={{
            backgroundImage: `url('/image/mevaro.png')`,
            width: '300px',
            height: '200px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          onClick={handlePlay}
        >
          <button className="bg-white px-4 py-2 rounded-full text-black font-bold">
            <PlaySVG />
          </button>
        </div>
      )}
      {isPlaying && (
        <iframe
          width="100%"
          height="100%"
          src={embed_url}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
}
