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
        loader: 'pug-html-loader'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('app'),
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      // {
      //   test: /\.css$/,
      //   include: helpers.root('app'),
      //   loader: 'raw'
      // },
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader'],
        include: __dirname
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=assets/images/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.woff$/,
        loader: 'url',
        query: {
          name: 'assets/fonts/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.ttf$|\.eot$/,
        loader: 'file',
        query: {
          name: 'assets/fonts/[hash].[ext]'
        }
      },
      {
        test: /\.json/,
        loader: "json"
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
