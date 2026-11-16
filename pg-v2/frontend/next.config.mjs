const nextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  turbopack: {},
  webpack: (config) => {
    config.watchOptions = { poll: 1000, aggregateTimeout: 300 };
    return config;
  },
  images: {
    loader: "custom",
    loaderFile: "./cloudinary-loader.js",
  },
};

export default nextConfig;