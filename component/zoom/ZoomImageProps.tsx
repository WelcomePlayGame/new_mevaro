import React, { useState } from 'react';

interface ZoomImageProps {
  src: string;
  alt: string;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt }) => {
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const [backgroundSize, setBackgroundSize] = useState('100%');

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleMouseEnter = () => {
    setBackgroundSize('200%'); // Увеличиваем при наведении
  };

  const handleMouseLeave = () => {
    setBackgroundSize('100%'); // Возвращаем к 100% при уходе курсора
  };

  return (
    <figure
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition,
        backgroundSize, // Управляем увеличением динамически
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
