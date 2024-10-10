'use client';
import dynamic from 'next/dynamic';
const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import PickerImage from '@/component/PickerImages/page-picker-image';
import React, { useState } from 'react';
import { addFabric } from '@/lib/fabric';
import SelectedCategory from '@/component/selected_category/page-selected-category';
import SendS3Bucket from '@/component/sent_s3/page-send-s3';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Image {
  fileName: string;
  file: File;
  originalName: string;
}

const AddFabric = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState('');
  const [isChecked, setChecked] = useState(false);
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
  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  const handleChecked = () => {
    setChecked(!isChecked);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('content', content);
    formData.append('category', category);
    formData.append('isChecked', isChecked.toString());
    let nameImages = [];
    if (images) {
      nameImages = await SendS3Bucket(images);
    } else {
      throw new Error('Что-то с файлом');
    }
    await addFabric(formData, nameImages);
    toast.info('Good Valdemar');
    setContent('');
    setImages(null);
    setCategory(null);
    setChecked(false);
  };

  const handleImagesChange = (newImages: Image[]) => {
    setImages(newImages);
  };

  return (
    <div>
      <h2 className="mt-[20px] text-center text-[1.5rem]">Додати Тканину</h2>
      <div className="flex justify-evenly pt-[120px]">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col lg:w-[900px] items-center  rounded-[10px] min-h-[300px]"
        >
          <div className="flex flex-col ">
            <div className="flex justify-between space-x-2">
              <input
                type="text"
                placeholder="Назва тканини"
                className="w-[250px] text-center border rounded"
                name="title"
                required
              />
              <input
                type="text"
                placeholder="seo назва"
                className="w-[250px] text-center border  rounded"
                required
                name="seo_title"
              />
              <input
                type="text"
                placeholder="seo опис"
                className="w-[250px] text-center border  rounded"
                maxLength={70}
                name="seo_des"
                required
              />
            </div>
            <div className="mt-5 flex justify-between space-x-2">
              <input
                type="text"
                placeholder="Склад тканини"
                className="w-[250px] text-center border  rounded"
                name="compound"
                required
              />
              <input
                type="text"
                placeholder="Стійкість до зносу"
                className="w-[250px] text-center border  rounded"
                name="resistance"
                required
              />
              <input
                type="text"
                placeholder="Щільність"
                className="w-[250px] text-center border  rounded"
                name="density"
                required
              />
            </div>
            <div className="flex justify-evenly mt-5 space-x-2 ">
              <div>
                <SelectedCategory onSelected={handleCategory} />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Url відео"
                  className="w-[250px] text-center border  rounded"
                  name="url_video"
                />
              </div>
              <div>
                <label htmlFor="id">Антикіготь? - </label>
                <input type="checkbox" onChange={handleChecked} name="id" />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <input
                type="text"
                placeholder="Ціна в $"
                className="w-[250px] text-center border  rounded"
                name="price"
              />
            </div>
          </div>

          <div className="mt-[20px] bg-[red] rounded">
            <button type="submit" className="text-[#fff] w-[200px] h-[40px] ">
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
        <div className="">
          <PickerImage onImagesChange={handleImagesChange} />
        </div>
      </div>
    </div>
  );
};

export default AddFabric;
