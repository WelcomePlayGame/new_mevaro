'use server';
import slugify from 'slugify';
import { connectDB, getCollection, closeConnection } from '@/lib/db';
import xss from 'xss';
import { revalidatePath } from 'next/cache';
import { S3, S3ClientConfig } from '@aws-sdk/client-s3';

const s3 = new S3({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
} as S3ClientConfig);
export const getAllBlogs = async () => {
  try {
    await connectDB();
    const blogs = getCollection('blogs');
    revalidatePath('/', 'layout');
    return await blogs.find({}).toArray();
  } catch (error) {
    throw error;
  }
  await closeConnection();
};
export const addBlog = async (formData: FormData) => {
  const title = formData.get('title') as string;
  const seo_title = formData.get('seo_title') as string;
  const seo_des = formData.get('seo_des') as string;
  const content = formData.get('content') as string;
  const image = formData.get('image') as File;
  const updateContent = xss(content);
  if (!(image instanceof File)) {
    throw new Error('Image must be an uploaded file');
  }
  try {
    await connectDB();
    const extension = image.name.split('.').pop();
    console.log(image.name);
    const slug = slugify(title, { lower: true }).replace(/[:.?!"+\s]+/g, '');
    const fileName = `${slug}.${extension}`;
    const bufferImage = await image.arrayBuffer();

    await s3.putObject({
      Bucket: 'mevaro',
      Key: fileName,
      Body: Buffer.from(bufferImage),
      ContentType: image.type,
    });
    const blogs = getCollection('blogs');
    await blogs.insertOne({
      title: title,
      slug: slug,
      seo_title: seo_title,
      seo_des: seo_des,
      content: updateContent,
      image: fileName,
    });
    revalidatePath('/', 'layout');
    return {
      message: 'Good',
    };
  } catch (error) {
    throw error;
  }
  await closeConnection();
};
export const updateBlog = async (formData: FormData, slug: string) => {
  const title = formData.get('title') as string;
  const seo_title = formData.get('seo_title') as string;
  const seo_des = formData.get('seo_des') as string;
  const content = formData.get('content') as string;
  const image = formData.get('image') as File;

  const updateContent = xss(content);

  if (!(image instanceof File) && image !== null) {
    throw new Error('Image must be an uploaded file or null if not updated');
  }

  try {
    await connectDB();

    // Получаем старые данные блога по slug
    const blogs = getCollection('blogs');
    const existingBlog = await blogs.findOne({ slug });

    if (!existingBlog) {
      throw new Error('Blog not found');
    }

    // Генерируем новый slug, если загружается новое изображение
    const newSlug = slugify(title, { lower: true }).replace(
      /[:.?!"+\\s]+/g,
      ''
    );

    // Если изображение загружено, обрабатываем его
    let fileName;
    if (image) {
      const extension = image.name.split('.').pop();
      fileName = `${newSlug}.${extension}`;
      const bufferImage = await image.arrayBuffer();

      // Загрузка нового изображения на S3
      await s3.putObject({
        Bucket: 'mevaro',
        Key: fileName,
        Body: Buffer.from(bufferImage),
        ContentType: image.type,
      });

      // Удаляем старое изображение с S3
      console.log(existingBlog.image);
      if (existingBlog.image) {
        await s3.deleteObject({
          Bucket: 'mevaro',
          Key: existingBlog.image,
        });
      }
    } else {
      // Если новое изображение не загружено, используем старое
      fileName = existingBlog.image;
    }

    // Обновляем блог
    await blogs.updateOne(
      { slug },
      {
        $set: {
          title,
          slug: slug,
          seo_title,
          seo_des,
          content: updateContent,
          image: fileName,
        },
      }
    );

    revalidatePath('/', 'layout');

    return {
      message: 'Blog updated successfully',
    };
  } catch (error) {
    throw error;
  } finally {
    await closeConnection();
  }
};
export const getBlogBySlug = async (slug) => {
  try {
    await connectDB();
    const blog = getCollection('blogs');
    return await blog.findOne({ slug: slug });
  } catch (error) {
    throw error;
  }
  await closeConnection();
};
