const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [{
      test: /\.jsx/,
      loaders: ['babel-loader'],
    }, {
      test: /\.css/,
      loader: ['css-loader'],
    }],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
