import React, { useState, ChangeEvent } from 'react';

interface Image {
  fileName: string;
  file: File;
  originalName: string;
}

interface PickerImageProps {
  onImagesChange: (images: Image[]) => void;
}

const PickerImage: React.FC<PickerImageProps> = ({ onImagesChange }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [newImages, setNewImages] = useState<
    Array<{ file: File | null; fileName: string }>
  >([{ file: null, fileName: '' }]);

  const handleAddImage = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const updatedNewImages = [...newImages];
      updatedNewImages[index].file = file;
      setNewImages(updatedNewImages);
    }
  };

  const handleAddNewInput = () => {
    setNewImages([...newImages, { file: null, fileName: '' }]);
  };

  const handleTitleChange = (index: number, title: string) => {
    const updatedNewImages = [...newImages];
    updatedNewImages[index].fileName = title;
    setNewImages(updatedNewImages);
  };

  const handleUploadImages = () => {
    const uploadedImages: Image[] = [];

    newImages.forEach(({ file, fileName }) => {
      if (file && fileName) {
        const newImage = {
          fileName,
          file,
          originalName: file.name,
        };
        uploadedImages.push(newImage);
      }
    });

    const updatedImages = [...images, ...uploadedImages];
    setImages(updatedImages);
    onImagesChange(updatedImages);
    setNewImages([{ file: null, fileName: '' }]);
  };

  return (
    <main>
      <h1>Image Picker</h1>
      <div>
        {newImages.map((newImage, index) => (
          <div key={index}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleAddImage(index, e)}
            />
            <input
              type="text"
              placeholder="Image fileName"
              value={newImage.fileName}
              onChange={(e) => handleTitleChange(index, e.target.value)}
            />
          </div>
        ))}
        <button onClick={handleAddNewInput}>+</button>
        <button onClick={handleUploadImages}>Upload Images</button>
      </div>
      <div className="flex flex-col flex-wrap w-[400px]">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={URL.createObjectURL(image.file)}
              alt={image.fileName}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'contain',
                padding: '10px',
                borderRadius: '10px',
              }}
            />
            <p>{image.fileName}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PickerImage;
