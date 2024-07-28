'use server';
import slugify from 'slugify';
import { connectDB, getCollection, closeConnection } from '@/lib/db';
import xss from 'xss';
import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({
  region: 'eu-central-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

interface Image {
  fileName: string;
  file: File;
  originalName: string;
}

export const addFabric = async (formData: FormData) => {
  try {
    const title = formData.get('title') as string;
    const seo_title = formData.get('seo_title') as string;
    const seo_des = formData.get('seo_des') as string;
    const content = formData.get('content') as string;
    const JSONImages = formData.get('images') as string;
    const images = JSON.parse(JSONImages) as Image[];
    const updateImages: string[] = [];

    const slug = slugify(title, { lower: true }).replace(/[:.?!"+\s]+/g, '');
    const updateContent = xss(content);

    const uploadPromises = images.map(async (img) => {
      const extension = img.originalName.split('.').pop();
      const fileName = `${slugify(img.fileName, { lower: true })}.${extension}`;

      // Конвертируем файл в буфер
      const bufferImage = await img.file.arrayBuffer();

      const params = {
        Bucket: 'next-file-news-ua',
        Key: fileName,
        Body: Buffer.from(bufferImage),
        ContentType: `image/${extension}`,
      };
      await s3.putObject(params);
      updateImages.push(fileName);
    });

    await Promise.all(uploadPromises);

    await connectDB();
    const fabric = getCollection('fabrics');
    await fabric.insertOne({
      title: title.trim(),
      slug: slug.trim(),
      seo_title: seo_title.trim(),
      seo_content: seo_des.trim(),
      content: updateContent,
      images: updateImages,
    });

    await closeConnection();
  } catch (error) {
    await closeConnection();
    throw error;
  }
};
