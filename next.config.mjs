/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    webpack(config) {
      config.module.rules.push({
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/fonts/',
          },
        },
      });
  
      return config;
    },
  };

export default nextConfig;
