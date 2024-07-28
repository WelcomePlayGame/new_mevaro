'use server';
import slugify from 'slugify';
import { connectDB, getCollection, closeConnection } from '@/lib/db';
import xss from 'xss';
import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({
  region: 'us-east-1',
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
    const images: Image[] = [];

    formData.forEach((value, key) => {
      const match = key.match(/images\[(\d+)]\[(\w+)]/);
      if (match) {
        const index = parseInt(match[1], 10);
        const property = match[2];

        if (!images[index]) {
          images[index] = {} as Image;
        }

        if (property === 'file') {
          images[index][property] = value as File;
        } else {
          images[index][property] = value as string;
        }
      }
    });

    const updateImages: string[] = [];

    const slug = slugify(title, { lower: true }).replace(/[:.?!"+\s]+/g, '');
    const updateContent = xss(content);

    const uploadPromises = images.map(async (img) => {
      const extension = img.originalName.split('.').pop();
      const fileName = `${slugify(img.fileName, { lower: true })}.${extension}`;

      if (img.file instanceof File) {
        const bufferImage = await img.file.arrayBuffer();
        const params = {
          Bucket: 'mevaro',
          Key: fileName,
          Body: Buffer.from(bufferImage),
          ContentType: `image/${extension}`,
        };
        await s3.putObject(params);
        updateImages.push(fileName);
      } else {
        console.error('img.file is not a File');
      }
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

export const getAllFabrics = async () => {
  try {
    await connectDB();
    const fabrics = getCollection('fabrics');
    return await fabrics.find({}).toArray();
  } catch (error) {
    throw error;
  }
  await closeConnection();
};

export const getFabricBySlug = async (slug) => {
  try {
    await connectDB();
    const fabric = getCollection('fabrics');
    return await fabric.findOne({ slug: slug });
  } catch (error) {
    throw error;
  }
  await closeConnection();
};
