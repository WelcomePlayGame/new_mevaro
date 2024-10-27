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
      style={{ backgroundImage: `url(${src})`, backgroundPosition }}
    >
      <Image src={src} alt={alt} className="page_product_img" fill />
    </figure>
  );
};

export default ZoomImage;
