import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './ex_global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '🛠 Перетяжка Меблів місто Київ Меваро | Безкоштовна Доставка',
  description:
    '🚚 Безкоштовна Доставка по місту Київ. Широкий вибір мебельної тканини для оббивки меблів.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
