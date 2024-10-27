import Image from 'next/image';
import React, { useState } from 'react';

interface ZoomImageProps {
  src: string;
  alt: string;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt }) => {
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = (
      e.target as HTMLElement
    ).getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <figure
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition,
        backgroundSize: '200%',
        backgroundRepeat: 'no-repeat',
        width: '300px',
        height: '150px',
      }}
    >
      <Image src={src} alt={alt} fill />
    </figure>
  );
};

export default ZoomImage;
