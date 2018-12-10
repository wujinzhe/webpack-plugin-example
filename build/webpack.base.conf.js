const HtmlWebpackPlugin = require('html-webpack-plugin')
process.env.NODE_ENV = 'development'
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `index.html`
    })
  ]
}