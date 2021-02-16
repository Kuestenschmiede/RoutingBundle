const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require("webpack");
var path = require('path');
var config = {
  entry: ['babel-polyfill', './Resources/public/js/c4g-routing.js'],
  mode: "production",
  output: {
    filename: 'c4g-routing.js',
    path: path.resolve('./Resources/public/build/'),
    chunkFilename: '[name].bundle.js',
    publicPath: "bundles/con4gisrouting/build/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules(?!\/ol)/,
        use: [{
          loader: "babel-loader",
        }],
        include: [
          path.resolve('.'),
          path.resolve('./Resources/public/js/'),
          path.resolve('./Resources/public/js/*'),
          path.resolve('./../MapsBundle/Resources/public/js'),
          path.resolve('./../MapsBundle/Resources/public/js/*'),
        ],
      }
    ]
  },
  optimization: {
    minimize: true,
    namedModules: true,
    namedChunks: true,
    removeAvailableModules: true,
    flagIncludedChunks: true,
    occurrenceOrder: false,
    usedExports: true,
    concatenateModules: true,
    sideEffects: false
  }
};

module.exports = config;