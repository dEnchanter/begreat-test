const dashboardConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['lh3.googleusercontent.com','firebasestorage.googleapis.com'],
  },
  webpack: (config, { defaultLoaders }) => {
    config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
            /^\.\/$/,
            'next/dist/client/dev/noop'
        )
    );
    return config;
  }
};

module.exports = dashboardConfig;