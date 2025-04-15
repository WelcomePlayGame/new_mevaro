import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'ᐈМеблі під замовлення|Mevaro【Безкоштовна Доставка】',
  description:
    '✅Меблі під замовлення.Ціна|Київ✓【Заміна механізмів та ремонт ліжка】✓Гарантія 12 місяців✓ Працюємо за Договором.',
  keywords: [
    'м’яких меблів під замовлення',
    'м’яких меблів під замовлення Україна',
    'м’яких меблів під замовлення Київ',
  ],
  creator: 'Mevaro',
  publisher: 'Mevaro',
  openGraph: {
    title:
      'ᐈ Виготовлення м’яких меблів під замовлення у Києві | Ексклюзивний дизайн',
    description:
      'Замовляйте виготовлення м’яких меблів за індивідуальним дизайном у Києві ⭐ Висока якість, широкий вибір тканин та матеріалів ✅ Ідеально для вашого інтер’єру!',
    url: 'https://www.mevaro.kiev.ua/image/mebli/ugl_sofa.jpg',
    siteName:
      'ᐈ Виготовлення м’яких меблів під замовлення у Києві | Ексклюзивний дизайн',
    images: [
      {
        url: 'https://www.mevaro.kiev.ua/image/mebli/ugl_sofa.jpg',
        width: 800,
        height: 600,
      },
      {
        url: `https://www.mevaro.kiev.ua/image/mebli/ugl_sofa.jpg`,
        width: 1800,
        height: 1600,
        alt: 'заміна пружинного блока',
      },
    ],
    locale: 'ua_UA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: 'ᐈ Виготовлення м’яких меблів під замовлення у Києві',
};
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mevaro.kiev.ua/mebli_zakaz" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
