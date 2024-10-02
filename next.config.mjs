/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : '/',
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
