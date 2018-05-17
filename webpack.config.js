const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  devtool: debug ? 'inline-sourcemap' : false,
  entry: {
    main: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'main.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
