/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['lh3.googleusercontent.com','firebasestorage.googleapis.com'],
  },
  webpack: (config, { defaultLoaders }) => {
    config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
            /^\.\/dashboard$/,
            'next/dist/client/dev/noop'
        )
    );
    return config;
  }
}

module.exports = nextConfig
