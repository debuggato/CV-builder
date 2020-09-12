const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

//const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    entry: path.resolve(__dirname, './src/client/index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { minimize: true },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          presets: ['@babel/preset-typescript', '@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin

    //new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'Production',
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsConfigPathsPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })],
  },
};
