'use client';
import dynamic from 'next/dynamic';
const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import PickerImage from '@/component/PickerImages/page-picker-image';
import React, { useState } from 'react';
interface Image {
  title: string;
  image: string | ArrayBuffer | null;
}
const addFabricToServer = async (formData: FormData) => {
  const res = await fetch('/api/fabric/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    throw new Error('Failed to create comment');
  }

  return res.json();
};
function AddFabric() {
  const [images, setImages] = useState<Image[]>([]);
  const [content, setContent] = useState<string>('');
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      ['clean'],
      ['table'],
    ],
  };

  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'align',
    'color',
    'code-block',
  ];

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('content', content);
    formData.append('images', JSON.stringify(images));
    await addFabricToServer(formData);
  };

  return (
    <div>
      <h2 className="mt-[20px] text-center text-[1.5rem]">Додати Тканину</h2>
      <div className="flex justify-evenly pt-[120px]">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col lg:w-[900px] items-center  rounded-[10px] min-h-[300px]"
        >
          <div className="flex justify-between space-x-2">
            <input
              type="text"
              placeholder="Назва тканини"
              className="w-[250px] text-center border rounded"
              required
            />
            <input
              type="text"
              placeholder="seo назва"
              className="w-[250px] text-center border  rounded"
              required
            />
            <input
              type="text"
              placeholder="seo опис"
              className="w-[250px] text-center border  rounded"
              maxLength={70}
              minLength={50}
              required
            />
          </div>

          <div className="mt-[20px] bg-[red] rounded">
            <button type="submit" className="text-[#fff] w-[200px] ">
              Зберегти
            </button>
          </div>
          <QuillEditor
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full max-w-[900px] mt-10 bg-white"
          />
        </form>
        <PickerImage onImagesChange={() => setImages(images)} />
      </div>
    </div>
  );
}

export default AddFabric;
