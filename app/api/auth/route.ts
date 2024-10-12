// pages/api/auth.js
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  `${process.env.BASE_URL}/api/auth/callback`
);

// Метод GET для получения URL авторизации
export async function GET(req) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/business.manage'],
  });

  console.log(authUrl);
  return NextResponse.redirect(authUrl);
}

// Метод POST для обработки кода
export async function POST(req) {
  const { code } = await req.json();

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    return NextResponse.json({ accessToken: tokens.access_token });
  } catch (error) {
    console.error('Error retrieving access token', error);
    return NextResponse.json(
      { error: 'Failed to retrieve access token' },
      { status: 500 }
    );
  }
}
