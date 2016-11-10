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
        include: helpers.root('..')
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
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader'],
        include: helpers.root('..')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=assets/images/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: helpers.root('assets/images'),
        exclude: [helpers.root('assets/images/partners'), helpers.root('assets/images/sponsors') ]
      },
      {
        test: /\.(jpe?g|png)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=assets/photos/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: helpers.root('assets/photos'),
        exclude: helpers.root('assets/photos/speakers')
      },
      {
        test: /\.(jpe?g|png)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=assets/photos/speakers/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: helpers.root('assets/photos/speakers')
      },
      {
        test: /\.(jpe?g|png)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=assets/images/partners/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: helpers.root('assets/images/partners')
      },
      {
        test: /\.(jpe?g|png)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=assets/images/sponsors/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: helpers.root('assets/images/sponsors')
      },
      // { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=assets/fonts/[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]' },
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
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
