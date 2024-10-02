/** @type {import('next').NextConfig} */


const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/cargo' : '';
const assetPrefix = isProduction ? '/cargo/' : '';

const nextConfig = {
  basePath,
  assetPrefix,
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
