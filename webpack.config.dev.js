const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Autoprefixer = require('autoprefixer');


module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/build`,
    filename: 'index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8848,
    open: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'lizi',
      template: './src/index.html',
      favicon: './src/assets/favicon.ico',
    }),
  ],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'react'],
                plugins: ['transform-runtime', 'transform-class-properties'],
              },
            },
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'imgs/',
              },
            },
          },
          {
            test: /\.(le|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [Autoprefixer],
                },
              },
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
                },
              },
            ],
          },
        ],
      },
    ],
  },
};
