import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  '/api/auth/callback'
);

// Метод GET для получения URL авторизации
export async function GET(req) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/business.manage'],
  });

  // Перенаправляем пользователя на страницу авторизации
  return NextResponse.redirect(authUrl);
}

// Метод POST для обработки кода и получения данных
export async function POST(req) {
  const { code } = await req.json();

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

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
      throw new Error(
        `Failed to fetch accounts: ${accountResponse.statusText}`
      );
    }

    const accountsData = await accountResponse.json();
    if (!accountsData.accounts || accountsData.accounts.length === 0) {
      throw new Error('No accounts found');
    }

    const accountId = accountsData.accounts[0].name.split('/').pop();

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
      throw new Error(
        `Failed to fetch locations: ${locationResponse.statusText}`
      );
    }

    const locationsData = await locationResponse.json();
    if (!locationsData.locations || locationsData.locations.length === 0) {
      throw new Error('No locations found');
    }

    const locationId = locationsData.locations[0].name.split('/').pop(); // Получаем locationId

    // Возвращаем токен, accountId и locationId обратно клиенту
    return NextResponse.json({
      accessToken: tokens.access_token,
      accountId,
      locationId,
    });
  } catch (error) {
    console.error(
      'Error retrieving access token or fetching accounts/locations',
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
