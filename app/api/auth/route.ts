import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'http://localhost:3000/api/auth/callback'
);

// Метод GET для получения URL авторизации
export async function GET(req) {
  try {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/business.manage'],
    });

    // Перенаправляем пользователя на страницу авторизации
    return NextResponse.redirect(authUrl);
  } catch (error) {
    console.error('Error generating auth URL:', error);
    return NextResponse.json(
      { error: 'Failed to generate authorization URL' },
      { status: 500 }
    );
  }
}

// Метод POST для обработки кода и получения данных
export async function POST(req) {
  try {
    const { code } = await req.json();

    // Получаем токены доступа
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Логируем токены для отладки
    console.log('Received tokens:', tokens);

    // Запрос для получения списка аккаунтов
    const accountResponse = await fetch(
      'https://mybusinessbusinessinformation.googleapis.com/v1/accounts',
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      }
    );

    if (!accountResponse.ok) {
      const errorResponse = await accountResponse.text(); // Получаем тело ответа для диагностики
      console.error('Failed to fetch accounts:', errorResponse);
      throw new Error(
        `Failed to fetch accounts: ${accountResponse.statusText}`
      );
    }

    const accountsData = await accountResponse.json();
    if (!accountsData.accounts || accountsData.accounts.length === 0) {
      throw new Error('No accounts found');
    }

    const accountId = accountsData.accounts[0].name.split('/').pop();
    console.log('Fetched account ID:', accountId);

    // Запрос для получения локаций
    const locationResponse = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/accounts/${accountId}/locations`,
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      }
    );

    if (!locationResponse.ok) {
      const errorResponse = await locationResponse.text(); // Получаем тело ответа для диагностики
      console.error('Failed to fetch locations:', errorResponse);
      throw new Error(
        `Failed to fetch locations: ${locationResponse.statusText}`
      );
    }

    const locationsData = await locationResponse.json();
    if (!locationsData.locations || locationsData.locations.length === 0) {
      throw new Error('No locations found');
    }

    const locationId = locationsData.locations[0].name.split('/').pop(); // Получаем locationId
    console.log('Fetched location ID:', locationId);

    // Возвращаем токен, accountId и locationId обратно клиенту
    return NextResponse.json({
      accessToken: tokens.access_token,
      accountId,
      locationId,
    });
  } catch (error) {
    console.error(
      'Error retrieving access token or fetching accounts/locations:',
      error
    );
    return NextResponse.json(
      {
        error:
          error.message ||
          'Failed to retrieve access token or fetch accounts/locations',
      },
      { status: 500 }
    );
  }
}
