'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./config/helpers');

module.exports = {
  context: __dirname,
  entry: {
    'app': './main.ts',
    'vendor': './vendor.ts',
    'polyfills': './polyfills.ts'
  },
  output: {
    // path: helpers.root('public'),
    path: __dirname + "/public",
    // publicPath: 'http://localhost:8080/',
    filename: '/public/[name].bundle.js',
    chunkFilename: '/public/[id].bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        include: __dirname
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=false'
      },
      {
        test: /\.(pug|jade)$/,
        loader: 'pug-html-loader',
        include: __dirname
      },
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader'],
        include: __dirname
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: __dirname
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'index.pug'
    }),

    new ExtractTextPlugin('/public/[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};
