/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,        // check for changes every 1s
      aggregateTimeout: 300,
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash often serves from this subdomain
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // Unsplash often serves from this subdomain
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Pre-configuring for your Stage 6 setup
      },
    ],
  },
};

export default nextConfig;