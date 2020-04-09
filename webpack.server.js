const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, './src/server/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  target: 'node',
  devtool: 'source-map',
  devServer: {
    port: '5000',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
};
