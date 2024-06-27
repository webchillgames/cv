/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/cv' : '',
  assetPrefix: isProd ? '/cv/' : '',
};

export default nextConfig;