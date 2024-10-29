import { connectDB, getCollection, closeConnection } from '@/lib/db';

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
  } finally {
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
  } finally {
    await closeConnection();
  }
};
