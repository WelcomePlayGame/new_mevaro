/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mevaro.s3.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    URL_AWS: process.env.URL_AWS,
    DOLLAR_RATE: process.env.DOLLAR_RATE,
  },
};

export default nextConfig;
