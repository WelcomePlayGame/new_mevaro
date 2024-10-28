export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: 'https://www.mevaro.kiev.ua/sitemap.xml',
  };
}
