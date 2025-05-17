import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const dbName = 'news';
const collectionName = 'telegram_messages';

let cachedClient: MongoClient | null = null;

const connectToDatabase = async () => {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const chatId = searchParams.get('chatId');

  if (!chatId) {
    return NextResponse.json({ error: 'chatId is required' }, { status: 400 });
  }

  try {
    const client = await connectToDatabase();
    const db = client.db(dbName);

    const messages = await db
      .collection(collectionName)
      .find({ chatId })
      .sort({ date: 1 }) // за бажанням — сортувати за часом
      .toArray();

    return NextResponse.json(messages);
  } catch (error) {
    console.error('DB error:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
};
