'use client';
import PickerImage from '@/component/PickerImages/page-picker-image';
import React, { useState } from 'react';
interface Image {
  title: string;
  image: string | ArrayBuffer | null;
}
function AddFabric() {
  const [images, setImages] = useState<Image[]>([]);
  return (
    <div>
      <PickerImage onImagesChange={() => setImages(images)} />
    </div>
  );
}

export default AddFabric;
