import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  `${process.env.BASE_UR}/api/auth/callback`
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
    // Extract the authorization code from the request body
    const { code } = await req.json();

    // Retrieve access tokens using the provided authorization code
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Log the received tokens for debugging purposes
    console.log('Received tokens:', tokens);

    // Fetch the list of accounts associated with the authenticated user
    const accountResponse = await fetch(
      'https://mybusinessbusinessinformation.googleapis.com/v1/accounts',
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      }
    );

    // Check for successful response
    if (!accountResponse.ok) {
      const errorResponse = await accountResponse.text();
      console.error('Failed to fetch accounts:', errorResponse);
      throw new Error(
        `Failed to fetch accounts: ${accountResponse.statusText}`
      );
    }

    const accountsData = await accountResponse.json();

    // Check if accounts are available
    if (!accountsData.accounts || accountsData.accounts.length === 0) {
      throw new Error('No accounts found');
    }

    const accountId = accountsData.accounts[0].name.split('/').pop();
    console.log('Fetched account ID:', accountId);

    // Fetch locations for the retrieved account
    const locationResponse = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/accounts/${accountId}/locations`,
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      }
    );

    // Check for successful response
    if (!locationResponse.ok) {
      const errorResponse = await locationResponse.text();
      console.error('Failed to fetch locations:', errorResponse);
      throw new Error(
        `Failed to fetch locations: ${locationResponse.statusText}`
      );
    }

    const locationsData = await locationResponse.json();

    // Check if locations are available
    if (!locationsData.locations || locationsData.locations.length === 0) {
      throw new Error('No locations found');
    }

    const locationId = locationsData.locations[0].name.split('/').pop();
    console.log('Fetched location ID:', locationId);

    // Return the access token, account ID, and location ID to the client
    return NextResponse.json({
      accessToken: tokens.access_token,
      accountId,
      locationId,
    });
  } catch (error) {
    // Log any errors encountered during the process
    console.error(
      'Error retrieving access token or fetching accounts/locations:',
      error
    );

    // Return a JSON response with the error message and status code 500
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
