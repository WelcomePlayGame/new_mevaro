import { NextRequest, NextResponse } from 'next/server';
import { addFabric } from '@/lib/fabric';

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  await addFabric(data);
  return NextResponse.json({ message: 'Fabric created' }, { status: 201 });
};

export const GET = async () => {
  return NextResponse.json({ status: 200 });
};
