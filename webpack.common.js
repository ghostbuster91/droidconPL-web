var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./config/helpers.js');

module.exports = {
  entry: {
    'polyfills': './polyfills.ts',
    'vendor': './vendor.ts',
    'app': './main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
    modulesDirectories: ["node_modules", "bower_components"]
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
        loader: 'html-loader'
      },
      {
        test: /\.(pug|jade)$/,
        loader: 'pug-html-loader',
        include: __dirname
      },
      {
        test: /\.css$/,
        exclude: helpers.root('app'),
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      // {
      //   test: /\.css$/,
      //   include: helpers.root('public'),
      //   loader: 'raw'
      // },
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader'],
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
    })
  ]
};
