'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./config/helpers');

module.exports = {
  devtool: "eval",
  entry: {
    'app': './main',
    'vendor': './vendor',
    'polyfills': './polyfills'
  },
  output: {
    path: helpers.root('public'),
    publicPath: 'http://localhost:8080',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader'],
        include: __dirname
      },
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        include: __dirname
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
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

    new ExtractTextPlugin('stylesheets/[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};
