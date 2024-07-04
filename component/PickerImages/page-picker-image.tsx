import React, { useState, ChangeEvent } from 'react';

interface Image {
  title: string;
  image: string | ArrayBuffer | null;
}

interface PickerImageProps {
  onImagesChange: (images: Image[]) => void;
}

const PickerImage: React.FC<PickerImageProps> = ({ onImagesChange }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [newImages, setNewImages] = useState<
    Array<{ file: File | null; title: string }>
  >([{ file: null, title: '' }]);

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
    setNewImages([...newImages, { file: null, title: '' }]);
  };

  const handleTitleChange = (index: number, title: string) => {
    const updatedNewImages = [...newImages];
    updatedNewImages[index].title = title;
    setNewImages(updatedNewImages);
  };

  const handleUploadImages = () => {
    const uploadedImages: Image[] = [];

    newImages.forEach(({ file, title }) => {
      if (file && title) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newImage = { title, image: e.target?.result };
          uploadedImages.push(newImage);

          if (uploadedImages.length === newImages.length) {
            const updatedImages = [...images, ...uploadedImages];
            setImages(updatedImages);
            onImagesChange(updatedImages); // Callback with the new images
            setNewImages([{ file: null, title: '' }]); // Reset the inputs
          }
        };
        reader.readAsDataURL(file);
      }
    });
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
              placeholder="Image Title"
              value={newImage.title}
              onChange={(e) => handleTitleChange(index, e.target.value)}
            />
          </div>
        ))}
        <button onClick={handleAddNewInput}>+</button>
        <button onClick={handleUploadImages}>Upload Images</button>
      </div>
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.image as string}
              alt={image.title}
              style={{ width: '100px', height: '100px' }}
            />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PickerImage;
