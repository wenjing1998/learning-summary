const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist-HMR'),
    filename: 'main.bundle.js'
  },

  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    port: 8080,
    // hot: true,
    // 只使用 HMR，不会 fallback 到 live reloading（不会回退到使用自动刷新）
    // hotOnly: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '测试 HMR',
      filename: 'index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      template: 'src/template.html' // 默认为 'src/index.ejs'
    }),
    // new HotModuleReplacementPlugin()
  ]
};

