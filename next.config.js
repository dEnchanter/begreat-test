/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['lh3.googleusercontent.com','firebasestorage.googleapis.com'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.plugins.push(new webpack.IgnorePlugin({
        // Ignore all pages except dashboard/index.js
        resourceRegExp: /^\.\/pages\/(?!dashboard\/index\.js$)/,
      }));

    return config;
  },
}

module.exports = nextConfig
