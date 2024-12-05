import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const oauth2Client = new google.auth.OAuth2('', '', process.env.REDIRECT_URI);

export async function GET(req: NextRequest) {
  try {
    // Получаем параметр 'code' из строки запроса
    const code = req.nextUrl.searchParams.get('code');

    if (!code) {
      return NextResponse.json({ error: 'Code is required' }, { status: 400 });
    }

    // Получаем токен
    const response = await oauth2Client.getToken(code);
    const { access_token, refresh_token, expiry_date } = response.tokens;

    oauth2Client.setCredentials(response.tokens);

    // Отправляем токен на фронт
    return NextResponse.json({
      access_token,
      refresh_token,
      expires_in: expiry_date,
    });
  } catch (error) {
    console.error('Error during token exchange:', error);
    return NextResponse.json(
      { error: 'Failed to exchange token' },
      { status: 500 }
    );
  }
}
