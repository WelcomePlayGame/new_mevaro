import { NextResponse } from 'next/server';
import bot from '../../../lib/telegram_bot';

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);

  try {
    // Process the update
    await bot.handleUpdate(body);
    return NextResponse.json({ message: 'ok' });
  } catch (error) {
    console.error('Error processing Telegram update:', error);
    return NextResponse.json(
      { error: 'Failed to process update' },
      { status: 500 }
    );
  }
}
