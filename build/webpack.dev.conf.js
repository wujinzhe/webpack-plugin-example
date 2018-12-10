const webpack = require('webpack')
const webpackBaseConfig = require('./webpack.base.conf.js')
const merge = require('webpack-merge')
const str = 'love'
const wall = 'newWALL'
const webpackWall = 'webpackWall'
// process.env = {
//   'NODE_ENV': 'production'
// }
process.env.NODE_ENV = 'production'
console.log('env', process.env)
// console.log('wall', wall)
module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      // 'process.env': {
      //   'NODE_ENV': '"development"'
      // },
      wall: '(() => 111)()',
      wall1: 'love',
      wall2: '"love"',
      wall3: JSON.stringify('love'),
      wall4: { wall : 'love', str: str.toString()}
    })
  ],
  devServer: {
    port: 9090,
    stats: {
      all: false,
      timings: true,
      version: true,
      builtAt: true,
      assets: true,
      assetsSort: 'field'
    }
  }
})