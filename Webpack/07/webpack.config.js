const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist-nosources-source-map'),
    filename: 'main.bundle.js'
  },

  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    port: 8080
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '测试 source map - nosources-source-map',
      filename: 'index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      template: 'src/template.html' // 默认为 'src/index.ejs'
    })
  ],

  devtool: 'nosources-source-map'
};

