var path = require('path');
var config = {
  entry: './Resources/public/js/c4g-routing.js',
  mode: "development",
  output: {
    filename: 'c4g-routing.js',
    path: path.resolve('./Resources/public/build/')
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "echo-loader",
        }, {
          loader: "babel-loader",
        }],
        include: [
          path.resolve('.'),
          path.resolve('./../MapsBundle')
        ],
      }
    ]
  }
};

module.exports = config;