import { NextRequest, NextResponse } from 'next/server';
import { userByEmail, addUser } from '@/lib/email';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { email, password, name } = data;

  if (
    !email ||
    !name ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    return NextResponse.json({ message: 'Invalid input' }, { status: 422 });
  }

  const userExisting = await userByEmail(email);
  if (userExisting) {
    return NextResponse.json(
      { message: 'This email is already' },
      { status: 422 }
    );
  }

  await addUser(name, email, password);
  return NextResponse.json(
    { message: 'User created successfully' },
    { status: 201 }
  );
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
