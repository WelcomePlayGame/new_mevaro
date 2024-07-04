import { NextRequest, NextResponse } from 'next/server';
import { addFabric } from '@/lib/fabric';
export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const { title, slug, seo_title, seo_content, content, group_img } = data;
  await addFabric(title, slug, seo_title, seo_content, content, group_img);
  return NextResponse.json({ message: 'Fabric created' }, { status: 201 });
};
export const GET = async () => {
  return NextResponse.json({ status: 200 });
};
