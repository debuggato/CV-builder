const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const client = {
  entry: path.resolve(__dirname, './src/client/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[name].min.js',
  },
  devtool: 'source-map',
  devServer: {
    port: '3000',
    proxy: [
      {
        context: ['/'],
        target: 'http://localhost:4000',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    moduleExtensions: ['node_modules'],
    plugins: [new TsConfigPathsPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};

module.exports = client;
