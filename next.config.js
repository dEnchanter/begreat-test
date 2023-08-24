/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['lh3.googleusercontent.com','firebasestorage.googleapis.com'],
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //     config.plugins.push(new webpack.IgnorePlugin({
  //       // This regex is crafted to match:
  //       // 1. Anything inside the pages/dashboard directory
  //       // 2. The _app.js and _document.js files in the pages directory
  //       // It then uses a negative lookahead to ensure it doesn't match 
  //       // any other file directly inside the pages directory.
  //       resourceRegExp: /^\.\/pages\/((dashboard\/.*)|(?!\w+\/)(?!_app\.js|_document\.js).*)$/,
  //       contextRegExp: /pages$/,
  //     }));

  //   return config;
  // },
}

module.exports = nextConfig
