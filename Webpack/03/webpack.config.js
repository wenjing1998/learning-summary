const path = require('path');


module.exports = {
  // Webpack 直接打包非 js 资源文件
  // entry: './src/main.css',
  // entry: './src/main.js',
  entry: './src/main.md',

  output: {
    // path: path.resolve(__dirname, 'dist-noLoader'),
    // path: path.resolve(__dirname, 'dist-cssLoader'),
    // path: path.resolve(__dirname, 'dist-cssLoader-and-styleLoader'),
    // path: path.resolve(__dirname, 'dist-entry-js'),
    // path: path.resolve(__dirname, 'dist-markdownLoader-by-official'),
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
        // use: {
        //   loader: path.resolve('markdown-loader.js'),
        //   options: {
        //     /* ... */
        //   },
        // },
        use: ['html-loader', './markdown-loader.js']
      }
    ]
  },

  // 通过 webpack-dev-server 的这些配置，能够以多种方式改变其行为。
  // 利用 gzips 压缩 public/ 目录当中的所有内容并提供一个本地服务(serve)：
  // 默认是 public 文件夹下，此处没有 public，修改成 /。
  devServer: {
    static: {
      // directory: path.join(__dirname, 'public'),
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    port: 8080
  }
};
