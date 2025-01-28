import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  if (url.searchParams.has('srsltid')) {
    url.searchParams.delete('srsltid'); // Удаляем параметр
    return NextResponse.redirect(url); // Перенаправляем на чистый URL
  }

  return NextResponse.next();
}
