const path = require('path');
const { merge } = require('webpack-merge');

const commonConfiguration = require('./webpack.common');

module.exports = merge(commonConfiguration, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
});
