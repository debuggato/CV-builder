const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: {
    client: path.resolve(__dirname, './src/client/index.tsx'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[name].min.js',
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    moduleExtensions: ['node_modules'],
    plugins: [new TsConfigPathsPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: ['awesome-typescript-loader'] },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
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
