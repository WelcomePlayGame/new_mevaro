export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/order'],
      },
      {
        userAgent: 'Yahoo',
        disallow: ['/'],
      },
      {
        userAgent: 'MJ12bot',
        disallow: ['/'],
      },
      {
        userAgent: 'Mediapartners-Google',
        disallow: ['/'],
      },
      {
        userAgent: 'AhrefsBot',
        disallow: ['/'],
      },
      {
        userAgent: 'Yandex',
        disallow: ['/'],
      },
    ],
    sitemap: 'https://mevaro.kiev.ua/sitemap.xml',
  };
}
