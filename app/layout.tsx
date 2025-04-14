import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FMT447"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5FMT447');`}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CLY6EQ97JG"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-CLY6EQ97JG');`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '398949992559159');fbq('track', 'PageView');`}
        </Script>

        <Analytics />
      </head>
      <body className={inter.className}>
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=398949992559159&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
