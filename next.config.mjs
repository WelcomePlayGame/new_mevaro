/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mevaro.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.facebook.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    URL_AWS: process.env.URL_AWS,
    DOLLAR_RATE: process.env.DOLLAR_RATE,
    POSHTA_KEY: process.env.POSHTA_KEY,
  },
  async redirects() {
    return [
      {
        source: '/categories/:slug*',
        destination: '/fabrics',
        permanent: true,
      },
      {
        source: '/#pruj',
        destination: '/block',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.mevaro.kiev.ua' }],
        destination: 'https://mevaro.kiev.ua/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
