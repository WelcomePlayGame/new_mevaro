import { NextResponse } from 'next/server';
import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  'http://localhost:3000/api/auth/callback'
);

export async function GET(req) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/business.manage'],
  });

  return NextResponse.redirect(authUrl);
}

export async function POST(req) {
  const { code } = await req.json();

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const accountResponse = await fetch(
      'https://mybusinessbusinessinformation.googleapis.com/v1/accounts',
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      }
    );

    const accountsData = await accountResponse.json();
    const accountId = accountsData.accounts[0].name.split('/').pop();

    // Получаем локации для этого аккаунта
    const locationResponse = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/accounts/${accountId}/locations`,
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      }
    );

    const locationsData = await locationResponse.json();
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
      { error: 'Failed to retrieve access token or fetch accounts/locations' },
      { status: 500 }
    );
  }
}
