/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  trailingSlash: true,
  experimental: {
    esmExternals: false,
  },
  // Optimize for better performance
  swcMinify: true,
  // Enable React strict mode
  reactStrictMode: true,
  // Optimize fonts
  optimizeFonts: true,
  // Compress pages
  compress: true,
  // Enable modern builds
  modern: true,
};

module.exports = nextConfig;