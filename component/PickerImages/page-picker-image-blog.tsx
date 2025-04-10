'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

// Define the props type
interface ImagePickerProps {
  label: string;
  name: string;
}

const ImagePickerBlog: React.FC<ImagePickerProps> = ({ label, name }) => {
  // Define the state with type null or string
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  // Define the ref with type HTMLInputElement
  const imageInput = useRef<HTMLInputElement>(null);

  const handlePicker = () => {
    imageInput.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImage(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    } else {
      setPickedImage(null);
    }
  };

  return (
    <div className={``}>
      <label htmlFor={name}>{label}</label>
      <div className={``}>
        <div className={`relative w-[300px] h-[150px]`}>
          {!pickedImage && <p className={`text-[#fff]`}>No Image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="Selected image"
              width={300}
              height={150}
              className="rounded"
            />
          )}
        </div>
        <input
          type="file"
          name={name}
          id="image"
          accept="image/*"
          ref={imageInput}
          multiple
          onChange={handleImageChange}
          required
          style={{ display: 'none' }}
        />

        <button
          className={`bg-red-700 text-[#fff] rounded w-[150px] mt-[10px]`}
          type="button"
          onClick={handlePicker}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePickerBlog;
