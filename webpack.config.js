'use strict'
const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'app/index.html'),
  filename: 'index.html',
  inject: 'body'
})
var extractCSS = new ExtractTextPlugin('styles.css')

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {}
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    extractCSS
  ]
}
