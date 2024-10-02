/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? 'https://macqueen006.github.io/cargo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://macqueen006.github.io/cargo/' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: {
              plugins: [{ removeViewBox: false }],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
