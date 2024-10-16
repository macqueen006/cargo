/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  basePath: process.env.NODE_ENV === 'production' ? '/cargo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cargo/' : '',
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
