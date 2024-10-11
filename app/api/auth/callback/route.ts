// app/auth/callback/route.js
import { NextResponse } from 'next/server';

export async function GET(req) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (code) {
    // Отправка кода на сервер для обмена на токен
    const response = await fetch(`${req.nextUrl.origin}/api/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Access Token:', data.accessToken);
      //
      return NextResponse.json({ message: 'Authorization successful' });
    } else {
      return NextResponse.json(
        { error: 'Failed to retrieve access token' },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ error: 'Code not found' }, { status: 400 });
}
