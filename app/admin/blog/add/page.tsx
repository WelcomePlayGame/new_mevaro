'use client';
import dynamic from 'next/dynamic';
const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImagePickerBlog from '@/component/PickerImages/page-picker-image-blog';
import { addBlog as add } from '@/lib/blog';

const AddBlog = () => {
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
    await add(formData);
    toast.info('Good Valdemar');
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <div>
      <h2 className="mt-[20px] text-center text-[1.5rem]">Додати Публікацію</h2>
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
          </div>

          <div className="mt-[20px] bg-[red] rounded">
            <button type="submit" className="text-[#fff] w-[200px] h-[40px] ">
              Зберегти
            </button>
          </div>
          <div className="">
            <ImagePickerBlog label="Add image" name="image" />
          </div>
          <QuillEditor
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full max-w-[900px] mt-10 bg-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
