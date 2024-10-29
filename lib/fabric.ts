'use server';
import slugify from 'slugify';
import { connectDB, getCollection, closeConnection } from '@/lib/db';
import xss from 'xss';
import { revalidatePath } from 'next/cache';

export const addFabric = async (formData: FormData, nameImages) => {
  try {
    const title = formData.get('title') as string;
    const seo_title = formData.get('seo_title') as string;
    const seo_des = formData.get('seo_des') as string;
    const content = formData.get('content') as string;
    const compound = formData.get('compound') as string;
    const resistance = formData.get('resistance') as string;
    const density = formData.get('density') as string;
    const category = formData.get('category') as string;
    const url_video = formData.get('url_video') as string;
    let isChecked = formData.get('isChecked') as string | boolean;
    const price = formData.get('price') as string;

    if (isChecked === 'true') {
      isChecked = true;
    } else {
      isChecked = false;
    }

    const slug = slugify(title, { lower: true }).replace(/[:.?!"+\s]+/g, '');
    const updateContent = xss(content);
    await connectDB();
    const fabric = getCollection('fabrics');
    await fabric.insertOne({
      title: title.trim(),
      slug: slug.trim().toLocaleLowerCase(),
      seo_title: seo_title.trim(),
      seo_content: seo_des.trim(),
      compound: compound,
      resistance: resistance,
      density: density,
      category: category,
      url_video: url_video,
      isChecked: isChecked,
      price: Number(price),
      content: updateContent,
      images: nameImages,
    });

    revalidatePath('/', 'layout');
  } catch (error) {
    throw error;
  }
};

export const getAllFabrics = async () => {
  try {
    await connectDB();
    const fabrics = getCollection('fabrics');
    revalidatePath('/', 'layout');
    return await fabrics.find({}).toArray();
  } catch (error) {
    throw error;
  }
};

export const getFabricBySlug = async (slug) => {
  try {
    await connectDB();
    const fabric = getCollection('fabrics');
    return await fabric.findOne({ slug: slug });
  } catch (error) {
    throw error;
  }
};
