const webpack = require('./webpack.config');
const path = require('path');

module.exports = {
  ...webpack,
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
  }
}
