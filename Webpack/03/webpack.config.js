const path = require('path');


module.exports = {
  // Webpack 直接打包 css 资源文件
  entry: './src/main.md',

  output: {
    // path: path.resolve(__dirname, 'dist-cssLoader'),
    // path: path.resolve(__dirname, 'dist-cssLoader-and-styleLoader'),
    // path: path.resolve(__dirname, 'dist-markdownLoader-and-marked'),
    path: path.resolve(__dirname, 'dist-markdownLoader-and-marked-and-htmlLoader'),
    filename: 'Webpack-03-src-main.bundle.js'
  },

  mode: 'none',

  module: {
    // 资源模块加载规则配置
    rules: [
      {
        test: /\.css$/, // 以 .css 结尾的文件路径，//为正则表达式，$为结尾，\转译.字符
        // use: 'css-loader'
        use: ['style-loader', 'css-loader'] // 从后往前执行
      },
      {
        test: /\.md$/,
        // use: './markdown-loader.js' // 模块名称/模块文件路径
        use: ['html-loader', './markdown-loader.js']
      }
    ]
  }
};
