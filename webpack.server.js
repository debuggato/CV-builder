const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const server = {
  entry: path.resolve(__dirname, './src/server/index.js'),
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'source-map',
  node: {
    __dirname: false,
    __filename: false,
  },
  devServer: {
    port: 5000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-es2015'],
            plugins: ['transform-class-properties'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],
};

module.exports = server;
