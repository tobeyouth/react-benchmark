'use strict'

var path = require('path')
var webpack = require('webpack')

var config = {
  entry: {
    'public-class-fields/benchmark': './src/public-class-fields/benchmark.jsx',
    'functional/benchmark': './src/functional/benchmark.jsx'
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: '/node_modules/',
        query: {
          cacheDirectory: false,
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [
  ],
  devtool: 'source-map'
}

module.exports = config