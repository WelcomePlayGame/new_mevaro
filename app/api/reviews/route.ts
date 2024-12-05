import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// Установите refresh_token в oauth2Client
oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

// Функция для обновления токена
async function getAccessToken() {
  try {
    const { token } = await oauth2Client.getAccessToken();
    return token;
  } catch (error) {
    console.error('Ошибка при обновлении токена:', error);
    throw new Error('Не удалось обновить токен');
  }
}

export async function GET(req: NextRequest) {
  try {
    // Получить обновленный accessToken
    const accessToken = await getAccessToken();

    const response = await fetch(
      'https://mybusiness.googleapis.com/v4/accounts/101682174186207073657/locations/4100839171516405367/reviews',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Логирование статуса ответа
    console.log('API Response Status:', response.status);

    if (!response.ok) {
      throw new Error('Ошибка при получении отзывов');
    }

    // Логирование полученных данных
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Ошибка при запросе:', error);
    return NextResponse.json({ error: 'Ошибка при запросе' }, { status: 500 });
  }
}
