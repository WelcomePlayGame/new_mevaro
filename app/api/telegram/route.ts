import { NextResponse } from 'next/server';
import bot from '@/lib/telegram_bot';

export async function POST(req: Request) {
  const body = await req.json();
  console.log('Received update:', JSON.stringify(body, null, 2));

  try {
    await bot.handleUpdate(body);
    console.log('Update processed successfully');
    return NextResponse.json({ message: 'ok' });
  } catch (error) {
    console.error('Error processing Telegram update:', error);
    return NextResponse.json(
      { error: 'Failed to process update' },
      { status: 500 }
    );
  }
}

// Add this to handle GET requests, which can be useful for debugging
export async function GET() {
  return NextResponse.json({ message: 'Telegram bot webhook is active' });
}
