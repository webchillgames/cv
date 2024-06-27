/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/https://webchillgames.github.io/cv' : '',
  assetPrefix: isProd ? '/https://webchillgames.github.io/cv/' : '',
};

export default nextConfig;