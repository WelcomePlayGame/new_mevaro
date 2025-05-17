// app/api/chats/route.ts

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

export const GET = async () => {
  try {
    const client = await connectToDatabase();
    const db = client.db(dbName);

    const pipeline = [
      { $sort: { date: -1 } },
      {
        $group: {
          _id: '$chatId',
          chatId: { $first: '$chatId' },
          userId: { $first: '$userId' },
          userName: { $first: '$userName' },
          text: { $first: '$text' },
          avatarUrl: { $first: '$avatarUrl' },
          date: { $first: '$date' },
        },
      },
      { $sort: { date: -1 } },
    ];

    const chats = await db.collection(collectionName).aggregate(pipeline).toArray();
    return NextResponse.json(chats);
  } catch (error) {
    console.error('DB error:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
};
