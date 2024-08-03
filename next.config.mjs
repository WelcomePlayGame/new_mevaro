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
    ],
  },
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    URL_AWS: process.env.URL_AWS,
    DOLLAR_RATE: process.env.DOLLAR_RATE,
    POSHTA_KEY: process.env.POSHTA_KEY,
  },
};

export default nextConfig;
