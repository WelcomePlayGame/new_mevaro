import { NextRequest, NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';
import mongoose from 'mongoose';
import { Message } from '@/lib/models/message';

const bot = new TelegramBot(process.env.BOT_TOKEN as string);

const connectMongo = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectMongo();
    const { chatId, text } = await req.json();

    if (!chatId || !text) {
      return NextResponse.json({ error: 'chatId and text are required' }, { status: 400 });
    }

    // 🔹 Відправити в Telegram
    await bot.sendMessage(chatId, text);

    // 🔸 Зберегти в Mongo як "відповідь бота"
    const saved = await Message.create({
      chatId,
      userId: 0,
      userName: '',
      admin_name: 'Mevaro_bot',
      text: '',
      reply: text,
      avatarUrl: '',
      date: new Date(),
    });

    return NextResponse.json({ success: true, message: saved });
  } catch (error) {
    console.error('Send message error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
};
