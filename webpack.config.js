'use strict'

var path = require('path')
var webpack = require('webpack')

var config = {
  entry: {
    'pure-component/benchmark': './src/pure-component/benchmark.jsx',
    'functional/benchmark': './src/functional/benchmark.js'
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