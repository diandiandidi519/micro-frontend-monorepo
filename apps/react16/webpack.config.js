const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const packageName = require('./package.json').name;

module.exports = {
  entry: { path: ['regenerator-runtime/runtime', './index.js'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react16.js',
    umdNamedDefine: true,
    publicPath: 'http://localhost:9003',
    library: `${packageName}`,
    jsonpFunction: `webpackJsonp_${packageName}`,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js(|x)$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(cs|scs)s$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            // options: {
            //   module: true,
            // },
          },
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: false,
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9003,
    historyApiFallback: true,
    hot: true,
  },
};
