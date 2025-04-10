'use server';
import { connectDB, getCollection, closeConnection } from '@/lib/db';
import { hashPassword as generate } from './hashpassword';
export const addEmail = async (formData: FormData) => {
  try {
    const email = formData.get('email') as string;
    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!isValidEmail(email)) {
      throw new Error('Invalid email format');
    }

    await connectDB();
    const emails = getCollection('emails');
    await emails.insertOne({
      email: email.trim(),
    });
  } catch (error) {
    console.error('Error inserting email:', error);
    await closeConnection();
  }
};
export const checkedEmail = async (email: string) => {
  try {
    await connectDB();
    const emails = getCollection('emails');

    const existingEmail = await emails.findOne({ email: email.trim() });
    return existingEmail ? true : false;
  } catch (error) {
    console.error('Error checking email:', error);
    return false;
  }
};

export const userByEmail = async (email: string) => {
  const users = getCollection('users');
  const existingUser = await users.findOne({ email: email.trim() });
  return existingUser;
};
export const addUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const hashedPassword = await generate(password);
    await connectDB();
    const users = getCollection('users');
    await users.insertOne({
      email: email.trim(),
      name: name,
      password: hashedPassword,
    });
  } catch (error) {
    return error;
  }
};
