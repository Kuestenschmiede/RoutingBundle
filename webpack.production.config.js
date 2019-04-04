var path = require('path');
var config = {
  entry: './Resources/public/js/c4g-routing.js',
  mode: "production",
  output: {
    filename: 'c4g-routing.js',
    path: path.resolve('./Resources/public/build/')
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
        }],
        include: [
          path.resolve('.'),
          path.resolve('./../MapsBundle')
        ],
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};

module.exports = config;