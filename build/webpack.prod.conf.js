const webpack = require('webpack')
const webpackBaseConfig = require('./webpack.base.conf.js')
const merge = require('webpack-merge')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      
    })
  ],
  stats: {
    all: false,
    timings: true,
    version: true,
    builtAt: true,
    assets: true,
    assetsSort: 'field'
  }
})