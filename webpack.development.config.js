var path = require('path');
var config = {
  entry: ['babel-polyfill', './Resources/public/js/c4g-routing.js'],
  mode: "development",
  output: {
    filename: 'c4g-routing.js',
    path: path.resolve('./Resources/public/build/')
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
        }],
        include: [
          path.resolve('.'),
          path.resolve('./Resources/public/js/components'),
          path.resolve('./../MapsBundle')
        ],
      }
    ]
  }
};

module.exports = config;