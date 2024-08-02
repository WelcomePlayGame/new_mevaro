'use server';
import { connectDB, getCollection, closeConnection } from '@/lib/db';

export const addOrder = async (formData: FormData) => {
  let client;
  try {
    client = await connectDB();
    const title = formData.get('title') as string;
    const colorName = formData.get('colorName') as string;
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const poshta = formData.get('poshta') as string;
    const count = formData.get('count') as string;
    const sum = formData.get('sum') as string;

    const fabric = getCollection('orders');
    await fabric.insertOne({
      title: title.trim(),
      colorName: colorName.trim(),
      name: name.trim(),
      phone: phone.trim(),
      poshta: poshta.trim(),
      count: count.trim(),
      sum: sum.trim(),
    });
  } catch (error) {
    throw error;
  } finally {
    if (client) {
      await closeConnection();
    }
  }
};
