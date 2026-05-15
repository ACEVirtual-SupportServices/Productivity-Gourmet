/** @type {import('next').NextConfig} */
const nextConfig = {
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