import React, { useState } from 'react';

interface ZoomImageProps {
  src: string;
  alt: string;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt }) => {
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
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
        backgroundSize: '200%', // Увеличение
        backgroundRepeat: 'no-repeat',
        width: '600px',
        height: '300px',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ visibility: 'hidden', width: '100%', height: '100%' }}
      />
    </figure>
  );
};

export default ZoomImage;
